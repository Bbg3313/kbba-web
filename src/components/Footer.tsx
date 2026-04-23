import Image from "next/image";
import Link from "next/link";
import { BRAND_LOGO_SRC } from "@/data/brand";
import {
  SITE_ADDRESS_SEOUL_FOOTER,
  SITE_EMAIL_DISPLAY,
} from "@/data/site-contact";
import { SITE_FACEBOOK_URL, SITE_LINE_URL } from "@/data/site-links";

export function Footer() {
  const brandSrc = BRAND_LOGO_SRC;

  return (
    <footer
      id="contact"
      className="border-t border-rose-200/40 bg-gradient-to-b from-rose-950 via-fuchsia-950 to-rose-950 text-rose-100/90"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-3 lg:px-8">
        <div>
          <Link
            href="/"
            className="mb-4 inline-block rounded-lg ring-rose-400/0 transition hover:ring-2 hover:ring-rose-300/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-200"
            aria-label="KBBA — หน้าแรก"
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
          <p className="text-sm leading-relaxed text-rose-200/75">
            Korea Beauty Business Academy — สถาบันที่รวมเครือข่ายโรงพยาบาลและคลินิกเกาหลี
            พร้อมหลักสูตรการตลาดออนไลน์สำหรับธุรกิจความงาม
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-rose-50">
            เมนูหลัก
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
              <Link href="/start-now" className="text-rose-100/85 transition hover:text-white">
                START NOW
              </Link>
            </li>
            <li>
              <Link href="/#partners" className="text-rose-100/85 transition hover:text-white">
                พันธมิตร (หน้าแรก)
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="text-rose-100/85 transition hover:text-white">
                คำถามที่พบบ่อย
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-rose-50">
            ติดต่อ
          </h3>
          <p className="mt-4 text-sm text-rose-200/75">
            <a href={`mailto:${SITE_EMAIL_DISPLAY}`} className="hover:text-white">
              {SITE_EMAIL_DISPLAY}
            </a>
            <br />
            <span className="mt-2 block text-rose-300/80">{SITE_ADDRESS_SEOUL_FOOTER}</span>
          </p>
          <p className="mt-3 text-sm text-rose-200/75">
            ทีมงานพร้อมให้คำปรึกษาเรื่องคอร์สและการเชื่อมโยงโรงพยาบาลในเกาหลี
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={SITE_LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#06C755] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              แชทผ่าน LINE
            </a>
            <a
              href={SITE_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              <svg
                className="h-5 w-5 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook — KBBA
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-rose-300/70">
        © {new Date().getFullYear()} Korea Beauty Business Academy (KBBA). สงวนลิขสิทธิ์
      </div>
    </footer>
  );
}
