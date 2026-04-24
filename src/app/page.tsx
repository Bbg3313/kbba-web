import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildPageMetadata } from "@/i18n/metadata";
import { getRequestDictionary } from "@/i18n/server";
import { localizeHref } from "@/i18n/routing";
import { HeroSection } from "@/components/HeroSection";
import { HospitalGrid } from "@/components/HospitalGrid";
import { MainSectionEyebrow } from "@/components/MainSectionEyebrow";
import { OfficialPartnerBanner } from "@/components/OfficialPartnerBanner";
import { SiteShell } from "@/components/SiteShell";
import { TestimonialVideos } from "@/components/TestimonialVideos";
import { HomeAcademyIntroBlock } from "@/components/HomeAcademyIntroBlock";
import { HomeConsultRegisterSection } from "@/components/HomeConsultRegisterSection";
import { HomeRegisterProcessSection } from "@/components/HomeRegisterProcessSection";

const HOME_CONSULTING_VISUAL = "/images/sections/home-consulting-presenter-v2.png";
const HOME_CONSULTING_CERT_IMAGE =
  "https://static.wixstatic.com/media/e22438_8c13c8af9e8e40e58a1f61b99735956f~mv2.png";
const courseImages = [
  "/images/reviews/gallery/doctor-lobby.png",
  "/images/reviews/gallery/note-group.png",
  "/images/reviews/gallery/bio-surgeons.png",
] as const;

export async function generateMetadata(): Promise<Metadata> {
  const { locale, dictionary } = await getRequestDictionary();
  return buildPageMetadata({
    locale,
    title: dictionary.home.meta.title,
    description: dictionary.home.meta.description,
    pathname: "/",
  });
}

export default async function Home() {
  const { locale, dictionary } = await getRequestDictionary();
  const motivationCards = dictionary.home.motivations.cards;
  const faqs = dictionary.home.faq.items;

  return (
    <SiteShell>
      <HeroSection locale={locale} copy={dictionary.home.hero} />
      <section className="border-b border-rose-100/60 bg-gradient-to-b from-rose-50/40 via-white to-white py-8 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <MainSectionEyebrow label={dictionary.home.motivations.eyebrow} align="center" />
            <h2 className="font-display mt-2 text-pretty text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
              {dictionary.home.motivations.title}
            </h2>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-rose-900/75 sm:mt-4 sm:text-base">
              {dictionary.home.motivations.description}
            </p>
          </div>

          <div className="mt-7 grid items-stretch gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-3">
            {motivationCards.map((card) => (
              <article
                key={card.title}
                className="flex min-w-0 h-full flex-col rounded-[1.4rem] border border-rose-100/90 bg-white/95 p-4 shadow-md shadow-rose-100/25 sm:rounded-[1.75rem] sm:p-6"
              >
                <div className="flex justify-center">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100 text-[1.45rem] shadow-sm shadow-rose-100/50 sm:h-16 sm:w-16 sm:text-[1.7rem]">
                    <span aria-hidden>{card.emoji}</span>
                  </div>
                </div>
                <h3 className="font-display mt-3 min-h-[2.4rem] text-center text-pretty text-lg font-semibold leading-snug text-rose-950 sm:mt-5 sm:min-h-[3.5rem] sm:text-xl">
                  {card.title}
                </h3>
                <ul className="mt-3 space-y-2 text-[0.82rem] leading-relaxed text-rose-900/82 sm:mt-5 sm:space-y-3 sm:text-sm">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-pretty sm:gap-3">
                      <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-pink-500" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <OfficialPartnerBanner copy={dictionary.home.officialPartners} />
      <HospitalGrid copy={dictionary.home.hospitalGrid} />

      <TestimonialVideos copy={dictionary.home.testimonials} />

      <section className="relative overflow-x-clip border-b border-rose-100/70 bg-white py-8 sm:py-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-rose-100/40 blur-3xl" />
          <div className="absolute -right-20 bottom-6 h-64 w-64 rounded-full bg-fuchsia-100/35 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl min-w-0 pb-8 sm:pb-16">
            <MainSectionEyebrow label={dictionary.home.academyIntro.eyebrow} />
            <h2 className="font-display text-pretty text-xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
              {dictionary.home.academyIntro.title}
            </h2>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-rose-900/70 sm:text-base">
              {dictionary.home.academyIntro.subtitle}
            </p>
          </header>

          <HomeAcademyIntroBlock copy={dictionary.home.academyIntro} />

          <div className="mt-10 grid min-w-0 items-start gap-y-8 rounded-2xl border border-rose-100/50 bg-white/40 px-3 py-6 shadow-sm shadow-rose-100/20 sm:gap-y-12 sm:px-6 sm:py-10 md:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] md:items-stretch md:gap-x-8 md:gap-y-0 md:px-7 md:py-11 lg:mt-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] lg:gap-x-10 lg:px-8 lg:py-12">
            <div className="relative isolate hidden w-full max-w-none justify-self-stretch overflow-visible md:block">
              <div className="relative aspect-[16/11] min-h-[220px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50 via-white to-pink-50/80 p-1 shadow-md shadow-rose-100/50 ring-1 ring-rose-100/80 sm:aspect-[16/11] sm:min-h-[300px] sm:p-5 md:aspect-[980/558] md:min-h-[380px] md:p-6 lg:min-h-[440px] lg:p-7 xl:min-h-[500px]">
                <Image
                  src={HOME_CONSULTING_VISUAL}
                  alt={dictionary.home.academyIntro.consultVisualAlt}
                  fill
                  className="object-contain object-center origin-bottom scale-[1.15] sm:object-[3%_100%] sm:scale-[1.08] md:object-[0%_100%] md:scale-[1.1] lg:scale-[1.12]"
                  sizes="(max-width: 768px) 100vw, 52vw"
                  priority
                />
              </div>
            </div>
            <div className="flex min-h-0 min-w-0 flex-col justify-start gap-5 text-left sm:gap-8 md:h-full md:max-w-none md:justify-center md:py-1 lg:py-2">
              <p className="order-1 text-pretty text-sm leading-relaxed text-rose-900/70 sm:text-base sm:leading-[1.7] md:order-none">
                {dictionary.home.academyIntro.consultText}
              </p>
              <div className="order-2 relative w-full overflow-hidden rounded-2xl border border-rose-100/80 bg-white/95 shadow-[0_22px_45px_-32px_rgba(190,24,93,0.45)] md:order-none">
                <div className="relative mx-auto aspect-[16/10] w-full max-w-none min-h-[11rem] sm:max-w-2xl sm:min-h-[11rem] md:min-h-[13rem] lg:min-h-[15rem]">
                  <Image
                    src={HOME_CONSULTING_CERT_IMAGE}
                    alt={dictionary.home.academyIntro.consultCertificateAlt}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, 46vw"
                  />
                </div>
              </div>
              <a
                href="https://line.me/R/ti/p/@756xidmw"
                target="_blank"
                rel="noopener noreferrer"
                className="order-3 inline-flex min-h-11 w-fit max-w-full items-center justify-center self-center rounded-full bg-gradient-to-r from-rose-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-300/40 transition hover:brightness-110 sm:px-7 md:order-none md:self-center"
              >
                {dictionary.home.academyIntro.consultCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="courses"
        className="border-t border-rose-100/60 bg-gradient-to-b from-rose-50/40 via-white to-white py-14 sm:py-20"
      >
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <MainSectionEyebrow label={dictionary.home.courses.eyebrow} />
          <h2 className="font-display text-pretty text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
            {dictionary.home.courses.title}
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-sm text-rose-900/70 sm:text-base">
            {dictionary.home.courses.description}
          </p>
          <div className="mt-10 grid min-w-0 gap-6 md:grid-cols-3">
            {dictionary.home.courses.items.map((c, index) => (
              <article
                key={c.name}
                className="flex min-w-0 flex-col rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-md shadow-rose-100/25"
              >
                <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-rose-100/80 bg-rose-50/40">
                  <Image
                    src={courseImages[index] ?? courseImages[0]}
                    alt={c.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-display text-pretty text-base font-semibold leading-snug text-rose-950 sm:text-lg">
                  {c.name}
                </h3>
                <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-rose-900/70">{c.note}</p>
                <p className="mt-4 text-xl font-semibold text-rose-950">{c.price}</p>
                <p className="mt-5">
                  <Link
                    href={localizeHref(locale, "/our-course")}
                    className="text-sm font-semibold text-pink-700 hover:underline"
                  >
                    {dictionary.home.courses.courseDetails}
                  </Link>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div
        className="border-t border-rose-100/70 bg-gradient-to-b from-rose-50/55 via-[#fff8fb] to-rose-50/55 pb-0"
        role="region"
        aria-label={dictionary.home.faq.regionAriaLabel}
      >
        <HomeRegisterProcessSection copy={dictionary.shared.registerSteps} />
        <HomeConsultRegisterSection
          locale={locale}
          copy={dictionary.shared.consultForm}
          socialLabels={dictionary.shell.socialLabels}
        />
      </div>

      <section
        id="faq"
        className="border-t border-rose-100/70 bg-gradient-to-b from-rose-50/55 via-rose-50/35 to-white pb-0 pt-12 sm:pt-16"
      >
        <div className="mx-auto min-w-0 max-w-3xl px-4 sm:px-6 lg:px-8">
          <MainSectionEyebrow label={dictionary.home.faq.eyebrow} align="center" className="mx-auto" />
          <h2 className="text-center text-balance font-display text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
            {dictionary.home.faq.title}
          </h2>
          <div className="mt-10 min-w-0 space-y-4">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="group min-w-0 rounded-2xl border border-rose-100/90 bg-white/90 px-4 py-3 shadow-sm shadow-rose-100/25 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-2 text-left text-sm font-semibold text-rose-950 sm:items-center sm:gap-3 [&::-webkit-details-marker]:hidden">
                  <span className="flex min-w-0 flex-1 gap-2 sm:gap-3">
                    <span className="shrink-0 text-pink-600">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-pretty">{f.q}</span>
                  </span>
                  <span className="mt-0.5 shrink-0 text-rose-300 transition group-open:rotate-180 sm:mt-0">▾</span>
                </summary>
                <p className="mt-3 border-t border-rose-100/80 pt-3 text-pretty text-sm leading-relaxed text-rose-900/75">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
