"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "WHO WE ARE", href: "/who-we-are" },
  { label: "OUR COURSE", href: "/our-course" },
  { label: "REVIEW", href: "/review" },
  { label: "START NOW", href: "/#consult-register" },
] as const;

const mobileQuickNavItems = [
  { label: "HOME", shortLabel: "Home", emoji: "🏠", href: "/" },
  { label: "WHO WE ARE", shortLabel: "Who", emoji: "👥", href: "/who-we-are" },
  { label: "OUR COURSE", shortLabel: "Course", emoji: "🎓", href: "/our-course" },
  { label: "REVIEW", shortLabel: "Review", emoji: "💬", href: "/review" },
  { label: "START NOW", shortLabel: "Start", emoji: "🚀", href: "/#consult-register" },
] as const;

export function Navbar() {
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

  const activeLabel = useMemo(() => {
    if (pathname === "/start-now" || (pathname === "/" && hash === "#consult-register")) {
      return "START NOW";
    }

    if (pathname === "/who-we-are") {
      return "WHO WE ARE";
    }

    if (pathname === "/our-course") {
      return "OUR COURSE";
    }

    if (pathname === "/review") {
      return "REVIEW";
    }

    if (pathname === "/") {
      return "HOME";
    }

    return null;
  }, [hash, pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-rose-100/90 bg-white/80 shadow-sm shadow-rose-100/20 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl min-w-0 items-center justify-between gap-2 px-3 py-2.5 sm:gap-4 sm:px-6 sm:py-3 lg:px-8">
        <Link href="/" className="flex min-w-0 shrink items-center gap-2">
          <Image
            src={brandSrc}
            alt="Korea Beauty Business Academy"
            width={340}
            height={150}
            priority
            className="h-10 w-auto max-w-[180px] object-contain object-left sm:h-16 sm:max-w-[280px] lg:h-20 lg:max-w-[360px]"
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-lg px-2.5 py-2 text-sm font-medium transition ${
                activeLabel === item.label
                  ? "bg-rose-100 text-pink-700"
                  : "text-rose-900/90 hover:bg-rose-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="ml-2 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-rose-300/40 transition hover:from-rose-500 hover:to-pink-500"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center rounded-lg border border-rose-200 bg-white/80 p-2 text-rose-900 touch-manipulation lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
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

      <div className="border-t border-rose-100/80 bg-white/85 px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur lg:hidden">
        <nav className="mx-auto grid max-w-6xl min-w-0 grid-cols-5 gap-1" aria-label="Mobile quick navigation">
          {mobileQuickNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex min-w-0 flex-col items-center justify-center rounded-2xl px-1 py-2 text-center transition ${
                activeLabel === item.label
                  ? "bg-rose-100 text-pink-700 shadow-sm shadow-rose-100/60"
                  : "text-rose-900/85 hover:bg-rose-50"
              }`}
              onClick={() => setOpen(false)}
            >
              <span className="text-sm leading-none" aria-hidden>
                {item.emoji}
              </span>
              <span className="mt-1 truncate text-[0.62rem] font-semibold uppercase tracking-[0.12em]">
                {item.shortLabel}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="max-h-[min(70vh,calc(100dvh-4.5rem))] min-w-0 overflow-y-auto overscroll-contain border-t border-rose-100 bg-rose-50/40 px-4 py-4 lg:hidden"
        >
          <div className="flex min-w-0 flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-lg px-3 py-3 text-pretty text-sm font-medium transition ${
                  activeLabel === item.label
                    ? "bg-rose-100 text-pink-700"
                    : "text-rose-900 hover:bg-rose-50"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="mt-2 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-rose-300/30"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
