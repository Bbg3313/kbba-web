import { headers } from "next/headers";
import { getDictionary } from "@/i18n/get-dictionary";
import { defaultLocale, isLocale, localeHeaderName } from "@/i18n/routing";

export async function getRequestLocale() {
  const requestHeaders = await headers();
  const headerLocale = requestHeaders.get(localeHeaderName);
  return isLocale(headerLocale) ? headerLocale : defaultLocale;
}

export async function getRequestDictionary() {
  const locale = await getRequestLocale();
  const dictionary = await getDictionary(locale);
  return { locale, dictionary };
}
