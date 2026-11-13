# Apartamenty Dolina Strążyska

Website implemented in React and Typescript.
## Languages

Polish (default) and English. Texts live in `src/i18n/locales/<code>/`; language-neutral data (photos, prices, bed counts, review scores) stays in `src/lists/*.json`.

To add a language, e.g. German:

1. Copy `src/i18n/locales/en/` to `src/i18n/locales/de/` and translate the values.
2. In `src/i18n/languages.ts` import it and add one line (`de: { name, short, intl, dateLocale, messages }`).

The switcher, the calendar, date/number formats, plural forms and the page `<title>`/meta tags pick it up automatically. TypeScript fails the build if a translation is missing a key. Plural texts use `{ one, few, many, other }` (`other` is required); don't name a section key `other`.
