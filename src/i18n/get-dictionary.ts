import type { Locale } from "@/i18n/routing";

const dictionaries = {
  en: () => import("@/i18n/dictionaries/en").then((mod) => mod.en),
  th: () => import("@/i18n/dictionaries/th").then((mod) => mod.th),
} as const;

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
