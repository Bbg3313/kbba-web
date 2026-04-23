import Image from "next/image";
import Link from "next/link";
import { HOME_HERO_IMAGE, WIX_HERO_IMAGE } from "@/data/site-assets";
import { SITE_LINE_URL } from "@/data/site-links";

type HeroSectionProps = {
  heroImageSrc?: string;
  heroImageAlt?: string;
};

const HERO_TITLE_LINES = [
  "Build a career as a",
  "Korean plastic surgery",
  "agency & hospital coordinator",
] as const;

export function HeroSection({
  heroImageSrc = HOME_HERO_IMAGE || WIX_HERO_IMAGE || "/images/hero/hero.svg",
  heroImageAlt = "KBBA presenter at K-Beauty Business Academy desk with clinic screens",
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50/80 to-fuchsia-50/70"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-rose-200/35 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto min-w-0 max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid min-w-0 gap-6 rounded-[2rem] border border-white/70 bg-white/55 p-3 shadow-[0_30px_80px_-40px_rgba(190,24,93,0.45)] backdrop-blur-sm lg:grid-cols-[1.05fr_1fr] lg:items-stretch lg:gap-0 lg:p-5">
          <div className="min-w-0 rounded-[1.5rem] bg-gradient-to-br from-white/85 to-rose-50/75 p-5 sm:p-8 lg:p-10">
            <p className="inline-flex max-w-full text-pretty rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-600">
              Beauty Business Academy
            </p>

            <h1 className="font-display mt-5 text-pretty text-[clamp(1.55rem,5.2vw,2.8rem)] font-semibold leading-[1.15] tracking-tight text-rose-950 sm:text-4xl lg:text-[2.8rem]">
              {HERO_TITLE_LINES[0]}
              <br />
              {HERO_TITLE_LINES[1]}
              <br />
              {HERO_TITLE_LINES[2]}
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-rose-900/70 sm:text-base">
              Korea Beauty Business Academy — a structured path to grow your beauty business
              as a professional agency and Korean hospital coordinator.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={SITE_LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-rose-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-300/40 transition hover:brightness-110 sm:px-7"
              >
                Ask on LINE
              </a>
              <Link
                href="/our-course"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-rose-200 bg-white px-6 py-3 text-sm font-semibold text-rose-800 transition hover:border-rose-300 hover:bg-rose-50/40 sm:px-7"
              >
                View courses
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex w-full min-w-0 max-w-[min(100%,26rem)] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-rose-100/50 via-pink-50/40 to-rose-50/60 aspect-square min-h-[220px] sm:max-w-md lg:mx-0 lg:ml-4 lg:max-w-none lg:aspect-auto lg:h-full lg:min-h-[320px]">
            <HeroImage src={heroImageSrc} alt={heroImageAlt} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-200/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 1024px) 100vw, 55vw"
      className="object-contain object-center"
      priority
    />
  );
}
