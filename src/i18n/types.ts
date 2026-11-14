import type pl from './locales/pl';

// Per-category plural forms (Intl.PluralRules); "other" is required and used as the fallback
export type PluralMessage = Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };

export type ApartmentText = {
  title: string;
  size: string;
  description: string;
  floor?: string;
  highlight?: string;
  equipment: { living: string[]; kitchen: string[]; bathroom: string[]; misc: string[] };
};

type Widen<T> = T extends string ? string
  : T extends { other: string } ? PluralMessage
  : T extends readonly (infer U)[] ? Widen<U>[]
  : { [K in keyof T]: Widen<T[K]> };

// Polish is the master: every other language must have exactly the same shape
export type Messages = Widen<typeof pl>;

type Join<K extends string, P> = P extends string ? `${K}.${P}` : never;

// "section.key" paths that resolve to a plain string
export type MessagePath<T = Messages> = {
  [K in keyof T & string]: T[K] extends string ? K
    : T[K] extends { other: string } | readonly unknown[] ? never
    : Join<K, MessagePath<T[K]>>;
}[keyof T & string];

// "section.key" paths that resolve to plural forms
export type PluralPath<T = Messages> = {
  [K in keyof T & string]: T[K] extends { other: string } ? K
    : T[K] extends string | readonly unknown[] ? never
    : Join<K, PluralPath<T[K]>>;
}[keyof T & string];
