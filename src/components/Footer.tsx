import Image from "next/image";
import Link from "next/link";
import { BRAND_LOGO_SRC } from "@/data/brand";
import {
  SITE_ADDRESS_SEOUL_FOOTER,
  SITE_EMAIL_DISPLAY,
  SITE_LEGAL_BUSINESS_NAME,
} from "@/data/site-contact";
import { SocialBrandIconRow } from "@/components/SocialBrandIconRow";

export function Footer() {
  const brandSrc = BRAND_LOGO_SRC;

  return (
    <footer
      id="contact"
      className="border-t border-rose-200/40 bg-gradient-to-b from-rose-950 via-fuchsia-950 to-rose-950 text-rose-100/90"
    >
      <div className="mx-auto grid min-w-0 max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-3 lg:px-8">
        <div className="min-w-0">
          <Link
            href="/"
            className="mb-4 inline-block rounded-lg ring-rose-400/0 transition hover:ring-2 hover:ring-rose-300/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-200"
            aria-label="KBBA — Home"
          >
            <Image
              src={brandSrc}
              alt="Korea Beauty Business Academy (KBBA)"
              width={200}
              height={48}
              className="h-11 w-auto max-w-[200px] object-contain object-left sm:h-12"
              priority
            />
          </Link>
          <p className="text-pretty text-sm leading-relaxed text-rose-200/75">
            Korea Beauty Business Academy — training and partner network connecting Korean
            hospitals and clinics with beauty businesses, plus practical online marketing programmes.
          </p>
        </div>
        <div className="min-w-0">
          <h3 className="text-pretty text-sm font-semibold uppercase tracking-wide text-rose-50">
            Main menu
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="text-rose-100/85 transition hover:text-white">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/who-we-are" className="text-rose-100/85 transition hover:text-white">
                WHO WE ARE
              </Link>
            </li>
            <li>
              <Link href="/our-course" className="text-rose-100/85 transition hover:text-white">
                OUR COURSE
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-rose-100/85 transition hover:text-white">
                BLOG &amp; NEWS
              </Link>
            </li>
            <li>
              <Link href="/review" className="text-rose-100/85 transition hover:text-white">
                REVIEW
              </Link>
            </li>
            <li>
              <Link href="/#consult-register" className="text-rose-100/85 transition hover:text-white">
                START NOW
              </Link>
            </li>
            <li>
              <Link href="/#partners" className="text-rose-100/85 transition hover:text-white">
                Partners (home)
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="text-rose-100/85 transition hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="min-w-0">
          <h3 className="text-pretty text-sm font-semibold uppercase tracking-wide text-rose-50">
            Contact
          </h3>
          <p className="mt-4 text-sm text-rose-200/75">
            <a href={`mailto:${SITE_EMAIL_DISPLAY}`} className="hover:text-white">
              {SITE_EMAIL_DISPLAY}
            </a>
            <br />
            <span className="mt-2 block break-words text-rose-300/80">{SITE_ADDRESS_SEOUL_FOOTER}</span>
          </p>
          <p className="mt-3 text-sm text-rose-200/75">
            Our team can help with course options and hospital connections in Korea.
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-rose-200/90">
            Social
          </p>
          <SocialBrandIconRow className="mt-2" />
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-rose-300/70">
        <p>© {new Date().getFullYear()} Korea Beauty Business Academy (KBBA). All rights reserved.</p>
        <p className="mt-2 text-pretty text-[0.7rem] font-medium tracking-wide text-rose-200/80 sm:text-xs">
          {SITE_LEGAL_BUSINESS_NAME}
        </p>
      </div>
    </footer>
  );
}
