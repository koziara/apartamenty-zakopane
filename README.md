# Apartamenty Dolina Strążyska

Website implemented in React and Typescript.
## Languages

Polish (default), English, Slovak, Hungarian, Czech, German, Ukrainian, Lithuanian, Latvian and Arabic. Texts live in `src/i18n/locales/`; language-neutral data (photos, prices, bed counts, review scores) stays in `src/lists/*.json`. Arabic uses right-to-left layout.

To add a language:

1. Add translated messages as `src/i18n/locales/<code>.json` or a directory like `en/`.
2. Add native name, short code, Intl locale and direction in `src/i18n/languageConfig.json`.
3. Register the messages and date-fns calendar locale in `src/i18n/languages.ts`.

The switcher, routes, calendar, date/number formats, plural forms, page metadata, static HTML and sitemap pick it up automatically. Polish routes have no prefix; other languages use `/<code>/`. TypeScript fails the build if a translation is missing a key. Plural texts use Intl categories (`other` is required); don't name a section key `other`.

The eight supplied JSON translations omit the full terms and privacy policy. `withDocuments` uses the existing English document bodies until translated versions are provided, while preserving the supplied translated document labels.

SEO titles and descriptions live in each locale's `meta` section. `meta.apartments` maps apartment IDs to dedicated titles and descriptions, independently of the visible apartment copy. The nine supplied page metadata sets per language are preserved in full and used for search, Open Graph and Twitter tags. `npm run build` pre-renders these tags along with canonical and hreflang links into the static HTML.
