"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "WHO WE ARE", href: "/who-we-are" },
  {
    label: "OUR COURSE",
    href: "/our-course",
    children: [
      {
        label: "Compliant Korean plastic surgery agency course",
        href: "/our-course#course-legal",
      },
      {
        label: "Agency course with study tour in Korea",
        href: "/our-course#course-trip",
      },
      {
        label: "Skills training with Korean surgeons",
        href: "/our-course#course-surgeon",
      },
    ],
  },
  { label: "REVIEW", href: "/review" },
  { label: "START NOW", href: "/#consult-register" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const brandSrc = "/images/logos/kbba-header.svg";

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
            className="h-11 w-auto max-w-[220px] object-contain object-left sm:h-16 sm:max-w-[280px] lg:h-20 lg:max-w-[360px]"
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 lg:flex" aria-label="Main">
          {navItems.map((item) =>
            "children" in item ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-0.5 rounded-lg px-2.5 py-2 text-sm font-medium text-rose-900/90 transition hover:bg-rose-50"
                >
                  {item.label}
                  <span className="text-xs text-rose-400" aria-hidden>
                    ▾
                  </span>
                </Link>
                {openDropdown === item.label && (
                  <div className="absolute left-0 top-full z-30 min-w-[280px] max-w-[min(100vw-2rem,22rem)] rounded-xl border border-rose-100 bg-white/98 py-2 shadow-lg shadow-rose-100/40 backdrop-blur-md">
                    {item.children.map((c) => (
                      <Link
                        key={c.href + c.label}
                        href={c.href}
                        className="block px-4 py-2 text-pretty text-sm leading-snug text-rose-900/85 hover:bg-rose-50/80"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-2.5 py-2 text-sm font-medium text-rose-900/90 transition hover:bg-rose-50"
              >
                {item.label}
              </Link>
            ),
          )}
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

      {open && (
        <div
          id="mobile-menu"
          className="max-h-[min(70vh,calc(100dvh-4.5rem))] min-w-0 overflow-y-auto overscroll-contain border-t border-rose-100 bg-rose-50/40 px-4 py-4 lg:hidden"
        >
          <div className="flex min-w-0 flex-col gap-1">
            {navItems.map((item) =>
              "children" in item ? (
                <details key={item.label} className="rounded-lg border border-rose-100 bg-white/90">
                  <summary className="cursor-pointer list-none px-3 py-3 text-sm font-medium text-rose-900 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-2">
                      <span className="min-w-0 text-pretty">{item.label}</span>
                      <span className="shrink-0 text-xs text-rose-500">▾</span>
                    </span>
                  </summary>
                  <div className="border-t border-rose-100 bg-rose-50/50 px-2 py-2">
                    <Link
                      href={item.href}
                      className="mb-1 block rounded-md px-3 py-2 text-sm font-semibold text-pink-700"
                      onClick={() => setOpen(false)}
                    >
                      All courses overview
                    </Link>
                    {item.children.map((c) => (
                      <Link
                        key={c.href + c.label}
                        href={c.href}
                        className="block rounded-md px-3 py-2 text-pretty text-sm leading-snug text-rose-900/85"
                        onClick={() => setOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-pretty text-sm font-medium text-rose-900 hover:bg-rose-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
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
