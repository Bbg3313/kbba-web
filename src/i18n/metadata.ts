import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { localizeHref } from "@/i18n/routing";

type PageMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  pathname: string;
};

export function buildPageMetadata({
  locale,
  title,
  description,
  pathname,
}: PageMetadataInput): Metadata {
  const canonical = localizeHref(locale, pathname);
  const englishHref = localizeHref("en", pathname);
  const thaiHref = localizeHref("th", pathname);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: englishHref,
        th: thaiHref,
      },
    },
    openGraph: {
      title,
      description,
      locale: locale === "th" ? "th_TH" : "en_US",
      alternateLocale: locale === "th" ? ["en_US"] : ["th_TH"],
      url: canonical,
    },
    twitter: {
      title,
      description,
    },
  };
}
