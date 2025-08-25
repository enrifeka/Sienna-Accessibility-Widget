export const LANGUAGES: ILanguage[] = [
  { code: "sq", label: "Shqip (Albanian)" },
  { code: "en", label: "English (English)" },
  { code: "de", label: "Deutsch (German)" },
  { code: "el", label: "Ελληνικά (Greek)" },
  { code: "es", label: "Español (Spanish)" },
  { code: "fr", label: "Français (French)" },
  { code: "it", label: "Italiano (Italian)" },
  { code: "tr", label: "Türkçe (Turkish)" }
];

const locales = LANGUAGES.map(lang => lang.code);
export interface ILanguage {
  code: string;
  label: string;
}

export const LANGUAGE_DICTIONARY: Record<string, ILanguage> = {};

// @ts-ignore
export async function loadLanguages() {
  for (const locale of locales) {
    // @ts-ignore
    LANGUAGE_DICTIONARY[locale] = (await import(`../locales/${locale}.json`)).default;
  }
}
