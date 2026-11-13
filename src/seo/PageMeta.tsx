import { useEffect } from 'react';
import { Lang, languages, useI18n } from '../i18n';

export const SITE_URL = 'https://www.apartamentydolinastrazyska.pl';
const DEFAULT_IMAGE = '/img/og-image.jpg';

type Props = {
  title: string;
  description: string;
  path: string;             // language-neutral path, e.g. "/Kontakt"; "/" for the home page
  image?: string;
  jsonLd?: object;
  noindex?: boolean;
};

// search results cut descriptions at about 160 characters
export const shorten = (text: string, max = 160) =>
  text.length <= max ? text : text.slice(0, max - 3).replace(/\s+\S*$/, '') + '…';

const urlFor = (lang: Lang, path: string) => {
  const prefix = lang === 'pl' ? '' : `/${lang}`;
  return SITE_URL + (path === '/' ? `${prefix}/` : prefix + path);
};

const upsert = (tag: 'meta' | 'link', match: Record<string, string>, attrs: Record<string, string>) => {
  const selector = tag + Object.entries(match).map(([k, v]) => `[${k}="${v}"]`).join('');
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(tag);
    document.head.appendChild(el);
  }
  Object.entries({ ...match, ...attrs }).forEach(([k, v]) => el!.setAttribute(k, v));
};

// writes the page's <title>, description, canonical, hreflang, Open Graph/Twitter tags and JSON-LD into <head>
const PageMeta = ({ title, description, path, image = DEFAULT_IMAGE, jsonLd, noindex }: Props) => {
  const { lang, intl } = useI18n();
  const jsonLdText = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    const url = urlFor(lang, path);
    const imageUrl = image.startsWith('http') ? image : SITE_URL + image;
    document.title = title;
    upsert('meta', { name: 'description' }, { content: description });
    upsert('meta', { name: 'robots' }, { content: noindex ? 'noindex, follow' : 'index, follow' });
    upsert('link', { rel: 'canonical' }, { href: url });

    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    (Object.keys(languages) as Lang[]).forEach(code => {
      upsert('link', { rel: 'alternate', hreflang: code }, { href: urlFor(code, path) });
    });
    upsert('link', { rel: 'alternate', hreflang: 'x-default' }, { href: urlFor('pl', path) });

    upsert('meta', { property: 'og:title' }, { content: title });
    upsert('meta', { property: 'og:description' }, { content: description });
    upsert('meta', { property: 'og:url' }, { content: url });
    upsert('meta', { property: 'og:type' }, { content: 'website' });
    upsert('meta', { property: 'og:site_name' }, { content: 'Apartamenty Dolina Strążyska' });
    upsert('meta', { property: 'og:locale' }, { content: intl.replace('-', '_') });
    upsert('meta', { property: 'og:image' }, { content: imageUrl });
    upsert('meta', { name: 'twitter:card' }, { content: 'summary_large_image' });
    upsert('meta', { name: 'twitter:title' }, { content: title });
    upsert('meta', { name: 'twitter:description' }, { content: description });
    upsert('meta', { name: 'twitter:image' }, { content: imageUrl });

    document.head.querySelector('script[data-seo="json-ld"]')?.remove();
    if (jsonLdText) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seo = 'json-ld';
      script.textContent = jsonLdText;
      document.head.appendChild(script);
    }
  }, [lang, intl, title, description, path, image, jsonLdText, noindex]);

  return null;
};

export default PageMeta;
