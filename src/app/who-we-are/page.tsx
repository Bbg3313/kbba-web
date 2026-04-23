import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { SubpageHero } from "@/components/SubpageHero";
import { hospitalPartners } from "@/data/hospitals";
import officialPartners from "@/data/official-partners.json";

export const metadata: Metadata = {
  title: "WHO WE ARE",
  description:
    "KBBA — training and business support for Korea-connected beauty businesses. Partners: S.K.I, BBG, institutes and hospitals.",
};

const koreaPartnersPreview = officialPartners.hospitalsKorea.slice(0, 18);

const pillars = [
  {
    title: "Korean plastic surgery agency business",
    desc: "Structure and support to launch and scale a professional agency.",
    imageSrc:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&h=520&q=82",
    imageAlt:
      "Two professionals shaking hands in a bright office, representing trusted partnerships for Korea-facing agency business",
  },
  {
    title: "Beauty & aesthetics business",
    desc: "Connect services and networks between Thailand and Korea.",
    imageSrc:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&h=520&q=82",
    imageAlt:
      "Beauty products and cosmetics flat lay, representing aesthetics and beauty industry business",
  },
  {
    title: "Surgeon skills training",
    desc: "Technique programmes with top hospitals in South Korea.",
    imageSrc:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&h=520&q=82",
    imageAlt:
      "Sterile surgical environment and clinical focus, representing hands-on surgeon skills training",
  },
] as const;

const instructors = [
  {
    name: "May Kanyanat Sutpa",
    nameKo: "메이 카냐누트 수트파",
    role: "Founder & CEO, Surgery Korea Info (S.K.I)",
    body: "Executive with Surgery Korea Info (S.K.I), a Korea-focused plastic surgery information and agency business. She brings 10+ years of professional experience across the Korean plastic surgery market—bridging client expectations, hospital protocols, and compliant agency operations.",
    course: "Practical Korean plastic surgery consulting programme",
    tag: "@SKI.May",
    imageSrc: "/images/faculty/may-kanyanat-sutpa.png",
    imageAlt: "May Kanyanat Sutpa — Surgery Korea Info",
    portraitClassName: "object-cover object-[50%_28%]",
  },
  {
    name: "Prof. Lee Eun-young",
    nameKo: "이은영 교수",
    role: "Hospital coordinator specialist",
    body: "Professor specialising in hospital operations and coordinator practice, aligned with the International License Institute and Korea’s lifelong learning pathways—grounding KBBA’s coordinator track in documentation, etiquette, and real ward realities.",
    course: "Hospital coordinator programme",
    tag: "Lee Eun-young",
    imageSrc: "/images/faculty/lee-eun-young.png",
    imageAlt: "Professor Lee Eun-young",
    portraitClassName: "object-contain object-center",
  },
  {
    name: "Sun Sathapon Wisakasat",
    nameKo: "선 사타폰 위사카사트",
    role: "Founder & CEO, online digital marketing",
    body: "Online marketing specialist for beauty and clinic brands: finding the right audiences, building content that carries a consultative tone, and engineering follow-up so campaigns actually close—without vanity metrics that waste ad spend.",
    course: "Digital marketing programme",
    tag: "Son Digital Marketing",
    imageSrc: "/images/faculty/sun-sathapon-wisakasat.png",
    imageAlt: "Sun Sathapon Wisakasat",
    portraitClassName: "object-contain object-[52%_45%]",
  },
  {
    name: "Dr. Cho In-chang",
    nameKo: "조인창 외과의",
    role: "President, BIO Plastic Surgery",
    body: "Plastic surgeon with 20+ years in practice. BIO Plastic Surgery has delivered structured surgical education for more than a decade—including delicate aesthetic work recognised at the highest public level, alongside technique programmes for practising surgeons.",
    course: "Surgical technique training for doctors",
    tag: "Cho In-chang",
    imageSrc: "/images/faculty/cho-in-chang.png",
    imageAlt: "Dr. Cho In-chang — BIO Plastic Surgery",
    portraitClassName: "object-cover object-[50%_42%]",
  },
] as const;

export default function WhoWeArePage() {
  return (
    <SiteShell>
      <SubpageHero
        eyebrow="KBBA — KOREA BEAUTY BUSINESS ACADEMY"
        title="WHO WE ARE"
        subtitle="Training and business support for Thailand–Korea beauty and surgery ventures—with S.K.I, BBG in Korea, and a network of institutes and hospitals."
      />

      <div className="border-b border-rose-100/60 bg-white/90">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-3 px-4 py-7 sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-8 lg:px-8">
          <div className="rounded-xl border border-rose-100/90 bg-rose-50/40 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-pink-700">Focus</p>
            <p className="mt-1 text-pretty text-sm text-rose-900/85">Thailand–Korea beauty business and compliant agency operations.</p>
          </div>
          <div className="rounded-xl border border-rose-100/90 bg-rose-50/40 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-pink-700">Partners</p>
            <p className="mt-1 text-pretty text-sm text-rose-900/85">
              Surgery Korea Info (S.K.I), Blue Bridge Global (BBG), institutes and hospitals.
            </p>
          </div>
          <div className="rounded-xl border border-rose-100/90 bg-rose-50/40 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-pink-700">What you get</p>
            <p className="mt-1 text-pretty text-sm text-rose-900/85">
              Programmes from foundations to advanced tracks, plus launch and scale-up support.
            </p>
          </div>
        </div>
      </div>

      <section className="border-y border-rose-100/60 bg-white/90 py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-pretty text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
            Partnerships
          </h2>
          <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-rose-900/75 sm:text-base">
            KBBA works officially with hospitals and clinics in the network plus Korean accreditation bodies so
            curricula and business support meet international expectations.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-rose-100/90 bg-white py-5 shadow-sm sm:py-6">
            <div className="flex w-max animate-marquee items-center gap-8 px-4 pr-10 sm:gap-10 sm:px-6 sm:pr-12">
              {[...hospitalPartners, ...hospitalPartners].map((h, i) => (
                <div
                  key={`${h.id}-who-${i}`}
                  className="flex h-20 w-36 shrink-0 items-center justify-center sm:h-24 sm:w-44"
                >
                  <Image
                    src={h.imageSrc}
                    alt="Partner logo"
                    width={220}
                    height={110}
                    className="max-h-full w-auto object-contain"
                    sizes="(max-width: 640px) 144px, 176px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="what-we-deliver"
        aria-labelledby="what-we-deliver-heading"
        className="border-y border-rose-100/60 bg-gradient-to-b from-rose-50/55 via-white to-white py-12 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-pink-600">
            Korea Beauty Business Academy
          </p>
          <h2
            id="what-we-deliver-heading"
            className="font-display mt-2 text-center text-pretty text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl"
          >
            Korea Beauty Business Academy
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-pretty text-sm leading-relaxed text-rose-900/75 sm:text-base">
            Three practical directions inside the KBBA ecosystem for teams building Korea-connected beauty and
            surgery businesses.
          </p>

          <div className="mt-10 grid min-w-0 gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="min-w-0 rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-md shadow-rose-100/25"
              >
                <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl border border-rose-100/80 bg-rose-50/50 sm:h-32 sm:aspect-auto">
                  <Image
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-lg font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-pretty text-lg font-semibold text-rose-950">{p.title}</h3>
                <p className="mt-2 text-pretty text-sm text-rose-900/75">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="expert-faculty"
        aria-labelledby="expert-faculty-heading"
        className="border-t border-rose-100/60"
      >
        <div className="mx-auto max-w-6xl px-4 pb-4 pt-14 text-center sm:px-6 sm:pt-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-pink-600">Expert speakers</p>
          <h2
            id="expert-faculty-heading"
            className="font-display mt-2 text-pretty text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl lg:text-[2rem]"
          >
            Meet our faculty
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-rose-900/75 sm:text-base">
            Practitioners and educators who anchor KBBA programmes—from Korea-facing agency craft and coordinator
            pathways to digital growth and advanced surgical technique.
          </p>
        </div>

        {instructors.map((person, index) => {
          const imageOnLeft = index % 2 === 0;
          const stripeBg = index % 2 === 1;
          return (
            <div
              key={person.name}
              className={`border-y border-rose-100/40 ${stripeBg ? "bg-zinc-50/90" : "bg-white"}`}
            >
              <div
                className={`mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-14 md:flex-row md:items-center lg:gap-16 lg:px-8 lg:py-16 ${
                  imageOnLeft ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="relative shrink-0">
                  <div className="relative h-44 w-44 overflow-hidden rounded-full bg-[#d9dce5] sm:h-52 sm:w-52">
                    <Image
                      src={person.imageSrc}
                      alt={person.imageAlt}
                      fill
                      className={person.portraitClassName}
                      sizes="(max-width: 768px) 176px, 208px"
                      priority={index < 2}
                    />
                  </div>
                </div>

                <div
                  className={`min-w-0 flex-1 text-center md:max-w-xl md:text-left ${imageOnLeft ? "lg:pl-4" : "lg:pr-4"}`}
                >
                  <h3 className="font-display text-pretty text-xl font-semibold text-rose-950 sm:text-2xl lg:text-[1.65rem]">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-pretty text-sm text-rose-800/85">{person.nameKo}</p>
                  <p className="mt-3 text-pretty text-sm font-semibold text-pink-700 sm:text-base">{person.role}</p>
                  <p className="mt-4 text-pretty text-sm leading-[1.75] text-rose-900/80 sm:text-[0.95rem]">
                    {person.body}
                  </p>
                  <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-rose-100/90 pt-5 text-xs font-medium text-rose-800/90 sm:justify-start sm:gap-x-3 sm:text-sm">
                    <span className="text-pretty text-rose-900/85">{person.course}</span>
                    <span className="text-rose-300" aria-hidden>
                      <span className="sm:hidden">·</span>
                      <span className="hidden sm:inline">||</span>
                    </span>
                    <span className="text-pretty font-semibold text-pink-700">{person.tag}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section
        id="official-partners"
        className="border-t border-rose-100/70 bg-gradient-to-b from-white to-rose-50/30 py-12 sm:py-20"
      >
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-pink-600">Official partners</p>
          <h2 className="font-display mt-2 text-pretty text-2xl font-semibold text-rose-950 sm:text-3xl">
            Official partners
          </h2>
          <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-rose-900/75 sm:text-base">
            A curated snapshot of our trusted network across institutes, clinics, and partner companies.
          </p>

          <div className="mt-10 grid min-w-0 gap-5 lg:grid-cols-12">
            <div className="min-w-0 rounded-2xl border border-rose-100/90 bg-white/95 p-5 shadow-md shadow-rose-100/20 lg:col-span-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-pretty text-lg font-semibold text-rose-950">
                  <span className="mr-2" aria-hidden>
                    🏛️
                  </span>
                  Institutes
                </h3>
                <span className="rounded-full bg-rose-100 px-2.5 py-1 text-xs font-semibold text-rose-800">
                  {officialPartners.institutes.length}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {officialPartners.institutes.map((line) => (
                  <li
                    key={line}
                    className="rounded-xl border border-rose-100/80 bg-rose-50/55 px-3 py-2 text-sm text-rose-900/85"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0 rounded-2xl border border-rose-100/90 bg-white/95 p-5 shadow-md shadow-rose-100/20 lg:col-span-8">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-pretty text-lg font-semibold text-rose-950">
                  <span className="mr-2" aria-hidden>
                    🇰🇷
                  </span>
                  Hospitals & Clinics in Korea
                </h3>
                <span className="rounded-full bg-pink-100 px-2.5 py-1 text-xs font-semibold text-pink-800">
                  {officialPartners.hospitalsKorea.length}
                </span>
              </div>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {koreaPartnersPreview.map((line) => (
                  <li
                    key={line}
                    className="rounded-xl border border-rose-100/80 bg-white px-3 py-2 text-sm text-rose-900/85 shadow-sm shadow-rose-100/20"
                  >
                    {line}
                  </li>
                ))}
              </ul>
              {officialPartners.hospitalsKorea.length > koreaPartnersPreview.length ? (
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-pink-700/90">
                  + {officialPartners.hospitalsKorea.length - koreaPartnersPreview.length} more Korea partners in our
                  network
                </p>
              ) : null}
            </div>

            <div className="min-w-0 rounded-2xl border border-rose-100/90 bg-white/95 p-5 shadow-md shadow-rose-100/20 lg:col-span-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-pretty text-lg font-semibold text-rose-950">
                  <span className="mr-2" aria-hidden>
                    🏥
                  </span>
                  Hospitals & Clinics in Thailand
                </h3>
                <span className="rounded-full bg-rose-100 px-2.5 py-1 text-xs font-semibold text-rose-800">
                  {officialPartners.hospitalsThailand.length}
                </span>
              </div>
              <ol className="mt-4 list-none space-y-2 text-sm text-rose-900/85">
                {officialPartners.hospitalsThailand.map((line) => (
                  <li key={line} className="rounded-xl border border-rose-100/80 bg-rose-50/55 px-3 py-2">
                    {line}
                  </li>
                ))}
              </ol>
            </div>

            <div className="min-w-0 rounded-2xl border border-rose-100/90 bg-white/95 p-5 shadow-md shadow-rose-100/20 lg:col-span-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-pretty text-lg font-semibold text-rose-950">
                  <span className="mr-2" aria-hidden>
                    🤝
                  </span>
                  Companies
                </h3>
                <span className="rounded-full bg-rose-100 px-2.5 py-1 text-xs font-semibold text-rose-800">
                  {officialPartners.companies.length}
                </span>
              </div>
              <ol className="mt-4 list-none space-y-2 text-sm text-rose-900/85">
                {officialPartners.companies.map((line) => (
                  <li key={line} className="rounded-xl border border-rose-100/80 bg-rose-50/55 px-3 py-2">
                    {line}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
