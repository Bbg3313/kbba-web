"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { localizeHref, stripLocaleFromPathname, switchLocalePath, type Locale } from "@/i18n/routing";
import { useEffect, useMemo, useState } from "react";

type NavbarProps = {
  locale: Locale;
  copy: Dictionary["shell"]["navbar"];
};

export function Navbar({ locale, copy }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const brandSrc = "/images/logos/kbba-header.svg";
  const pathname = usePathname();

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [hash, pathname]);

  const activeHref = useMemo(() => {
    const barePathname = stripLocaleFromPathname(pathname);

    if (barePathname === "/") {
      return "/";
    }

    const matchedItem = copy.items.find((item) => {
      const itemPath = item.href.split("#")[0] || "/";
      return itemPath === barePathname;
    });

    return matchedItem?.href ?? null;
  }, [copy.items, hash, pathname]);

  const englishHref = useMemo(
    () => switchLocalePath(pathname, "en", hash),
    [hash, pathname],
  );
  const thaiHref = useMemo(
    () => switchLocalePath(pathname, "th", hash),
    [hash, pathname],
  );

  return (
    <header className="sticky top-0 z-50 border-b border-rose-100/90 bg-white/80 shadow-sm shadow-rose-100/20 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl min-w-0 items-center gap-2 px-3 py-2.5 sm:gap-4 sm:px-6 sm:py-3 lg:px-8">
        <Link href={localizeHref(locale, "/")} className="flex min-w-0 shrink-0 items-center gap-2">
          <Image
            src={brandSrc}
            alt={copy.brandAlt}
            width={340}
            height={150}
            priority
            className="h-10 w-auto max-w-[180px] object-contain object-left sm:h-16 sm:max-w-[280px] lg:h-20 lg:max-w-[360px]"
          />
        </Link>

        <nav
          className="flex min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto px-1 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label={copy.mobileQuickNavigationAria}
        >
          {copy.mobileQuickItems.map((item) => (
            <Link
              key={item.label}
              href={localizeHref(locale, item.href)}
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base leading-none transition ${
                activeHref === item.href
                  ? "bg-rose-100 text-pink-700 shadow-sm shadow-rose-100/60"
                  : "text-rose-900/85 hover:bg-rose-50"
              }`}
              onClick={() => setOpen(false)}
              aria-label={item.label}
              title={item.label}
            >
              <span aria-hidden>{item.emoji}</span>
            </Link>
          ))}
        </nav>

        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 lg:flex" aria-label={copy.mainNavigationAria}>
          {copy.items.map((item) => (
            <Link
              key={item.label}
              href={localizeHref(locale, item.href)}
              className={`rounded-lg px-2.5 py-2 text-sm font-medium transition ${
                activeHref === item.href
                  ? "bg-rose-100 text-pink-700"
                  : "text-rose-900/90 hover:bg-rose-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div
            className="ml-2 inline-flex items-center gap-1 rounded-full border border-rose-200/80 bg-white/90 p-1"
            aria-label={copy.languageSwitcherLabel}
          >
            <Link
              href={englishHref}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                locale === "en" ? "bg-rose-100 text-pink-700" : "text-rose-900/80 hover:bg-rose-50"
              }`}
            >
              {copy.englishLabel}
            </Link>
            <Link
              href={thaiHref}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                locale === "th" ? "bg-rose-100 text-pink-700" : "text-rose-900/80 hover:bg-rose-50"
              }`}
            >
              {copy.thaiLabel}
            </Link>
          </div>
          <a
            href="#contact"
            className="ml-2 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-rose-300/40 transition hover:from-rose-500 hover:to-pink-500"
          >
            {copy.contact}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center rounded-lg border border-rose-200 bg-white/80 p-2 text-rose-900 touch-manipulation lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{copy.openMenuLabel}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
            {open ? (
              <path
                fill="currentColor"
                d="M6.4 19L5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4 6.4 19z"
              />
            ) : (
              <path
                fill="currentColor"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="max-h-[min(70vh,calc(100dvh-4.5rem))] min-w-0 overflow-y-auto overscroll-contain border-t border-rose-100 bg-rose-50/40 px-4 py-4 lg:hidden"
        >
          <div className="flex min-w-0 flex-col gap-1">
            <div className="mb-2 inline-flex items-center gap-1 rounded-full border border-rose-200/80 bg-white/90 p-1">
              <Link
                href={englishHref}
                className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                  locale === "en" ? "bg-rose-100 text-pink-700" : "text-rose-900/80 hover:bg-rose-50"
                }`}
                onClick={() => setOpen(false)}
              >
                {copy.englishLabel}
              </Link>
              <Link
                href={thaiHref}
                className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                  locale === "th" ? "bg-rose-100 text-pink-700" : "text-rose-900/80 hover:bg-rose-50"
                }`}
                onClick={() => setOpen(false)}
              >
                {copy.thaiLabel}
              </Link>
            </div>
            {copy.items.map((item) => (
              <Link
                key={item.label}
                href={localizeHref(locale, item.href)}
                className={`rounded-lg px-3 py-3 text-pretty text-sm font-medium transition ${
                  activeHref === item.href
                    ? "bg-rose-100 text-pink-700"
                    : "text-rose-900 hover:bg-rose-50"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-rose-300/30"
              onClick={() => setOpen(false)}
            >
              {copy.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
