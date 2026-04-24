export const locales = ["en", "th"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeHeaderName = "x-kbba-locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function stripLocaleFromPathname(pathname: string) {
  const parts = pathname.split("/");
  const maybeLocale = parts[1];

  if (!isLocale(maybeLocale)) {
    return pathname || "/";
  }

  const rest = pathname.slice(maybeLocale.length + 1) || "/";
  return rest.startsWith("/") ? rest : `/${rest}`;
}

export function localizeHref(locale: Locale, href: string) {
  if (/^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  if (href.startsWith("/#")) {
    return `/${locale}${href.slice(1)}`;
  }

  if (href.startsWith("#")) {
    return `/${locale}${href}`;
  }

  const bareHref = stripLocaleFromPathname(href);
  return bareHref === "/" ? `/${locale}` : `/${locale}${bareHref}`;
}

export function switchLocalePath(pathname: string, locale: Locale, hash = "") {
  const barePath = stripLocaleFromPathname(pathname);
  const localized = barePath === "/" ? `/${locale}` : `/${locale}${barePath}`;
  return `${localized}${hash}`;
}
