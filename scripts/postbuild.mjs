// Runs after `react-scripts build`: pre-renders every route to static HTML and writes sitemap.xml
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir, copyFile, readdir } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import { dirname, extname, join } from 'node:path';
import puppeteer from 'puppeteer';

const SITE = 'https://www.apartamentydolinastrazyska.pl';
const BUILD = new URL('../build/', import.meta.url).pathname;
const apartments = JSON.parse(await readFile(new URL('../src/lists/apartmentList.json', import.meta.url), 'utf8'));

const pages = ['/', '/Rezerwacje', '/Kontakt', ...apartments.map(a => `/Apartament/${a.apartmentId}`)];
const routes = [...pages, ...pages.map(p => (p === '/' ? '/en/' : `/en${p}`))];

const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.pdf': 'application/pdf' };

// the hero preload must request the same hashed file the CSS uses, or the browser downloads it twice
const hero = (await readdir(join(BUILD, 'static/media'))).find(f => /^house\..+\.webp$/.test(f));
if (hero) await writeFile(join(BUILD, 'index.html'), (await readFile(join(BUILD, 'index.html'), 'utf8')).replace('/img/house.webp', `/static/media/${hero}`));

// the app shell doubles as the 404 page (see public/.htaccess)
await copyFile(join(BUILD, 'index.html'), join(BUILD, '404.html'));
const shell = join(BUILD, '404.html');

// local static server with SPA fallback, only used while snapshotting
const server = createServer(async (req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  let file = join(BUILD, pathname);
  if (!file.startsWith(BUILD) || !existsSync(file) || statSync(file).isDirectory()) file = shell;
  res.setHeader('content-type', types[extname(file)] ?? 'application/octet-stream');
  res.end(await readFile(file));
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;

const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
const fileFor = route => {
  if (route.endsWith('/')) return join(BUILD, route, 'index.html');
  return join(BUILD, `${route}.html`);
};

try {
  for (const route of routes) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    // reduced motion keeps the final review scores and visible cards in the snapshot
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    await page.setRequestInterception(true);
    // third-party scripts (booking widget, fonts) are not part of the snapshot
    page.on('request', req => (req.url().startsWith(origin) ? req.continue() : req.abort()));
    await page.goto(origin + route, { waitUntil: 'networkidle0' });
    await page.waitForSelector('#root > *');
    const html = '<!DOCTYPE html>' + await page.evaluate(() => document.documentElement.outerHTML);
    await mkdir(dirname(fileFor(route)), { recursive: true });
    await writeFile(fileFor(route), html);
    await page.close();
    console.log('pre-rendered', route);
  }
} finally {
  await browser.close();
  server.close();
}

const today = new Date().toISOString().slice(0, 10);
const loc = (lang, page) => SITE + (lang === 'pl' ? '' : '/en') + (page === '/' ? '/' : page);
const alt = page => ['pl', 'en'].map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${loc(l, page)}"/>`)
  .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${loc('pl', page)}"/>`).join('\n');
const urls = pages.flatMap(page => ['pl', 'en'].map(lang =>
  `  <url>\n    <loc>${loc(lang, page)}</loc>\n    <lastmod>${today}</lastmod>\n${alt(page)}\n  </url>`));
await writeFile(join(BUILD, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`);
console.log('sitemap.xml written');
