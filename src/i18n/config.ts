import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ar from "./locales/ar.json";
import fr from "./locales/fr.json";

export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English", nativeLabel: "English", dir: "ltr" as const },
  { code: "ar", label: "Arabic", nativeLabel: "العربية", dir: "rtl" as const },
  { code: "fr", label: "French", nativeLabel: "Français", dir: "ltr" as const },
] as const;

export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number]["code"];

export const STORAGE_KEY = "atlas-lang";

/** Text direction for a given language. */
export function directionFor(code: string): "ltr" | "rtl" {
  return SUPPORTED_LANGUAGES.find((l) => l.code === code)?.dir ?? "ltr";
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      fr: { translation: fr },
    },
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGUAGES.map((l) => l.code),
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: STORAGE_KEY,
      caches: ["localStorage"],
    },
  });

/** Apply <html lang> and <html dir> for the active language. */
export function applyDocumentDirection(code: string) {
  const dir = directionFor(code);
  document.documentElement.setAttribute("lang", code);
  document.documentElement.setAttribute("dir", dir);
}

// Keep the document direction in sync with the active language.
i18n.on("languageChanged", applyDocumentDirection);
applyDocumentDirection(i18n.language || "en");

export default i18n;
