import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";
import { fr } from "./fr";
import { ru } from "./ru";
import { ar } from "./ar";
import { Locale } from "./types";

export const locales: { [key: string]: Locale } = {
  en,
  es,
  pt,
  fr,
  ru,
  ar,
};

export type LanguageCode = keyof typeof locales;

export const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
];

export const getLocale = (code: string): Locale => {
  return locales[code] || locales.en;
};

export * from "./types";
