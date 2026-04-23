import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { SubpageHero } from "@/components/SubpageHero";
import { hospitalPartners } from "@/data/hospitals";
import officialPartners from "@/data/official-partners.json";
import { wixTopStripImages } from "@/data/wix-strip";

export const metadata: Metadata = {
  title: "WHO WE ARE",
  description:
    "Korea Beauty Business Academy — training and partnerships with S.K.I, BBG, and leading Korean institutions.",
};

const pillars = [
  {
    title: "Korean plastic surgery agency business",
    desc: "Structure and support to launch and scale a professional agency.",
    imageSrc: wixTopStripImages[1]?.imageSrc ?? hospitalPartners[2]?.imageSrc,
  },
  {
    title: "Beauty & aesthetics business",
    desc: "Connect services and networks between Thailand and Korea.",
    imageSrc: wixTopStripImages[0]?.imageSrc ?? hospitalPartners[0]?.imageSrc,
  },
  {
    title: "Surgeon skills training",
    desc: "Technique programmes with top hospitals in South Korea.",
    imageSrc: wixTopStripImages[2]?.imageSrc ?? hospitalPartners[8]?.imageSrc,
  },
] as const;

const supportPills = [
  "Compliant licensing",
  "Partner hospitals",
  "Business advisory",
  "Documentation",
  "Data & promotions",
  "Transfers",
  "Operations support",
  "Interpreter care",
] as const;

const whatWeDo = [
  {
    n: "01",
    title:
      "Training hub for knowledge and skills in Korea-connected plastic surgery and beauty businesses.",
  },
  {
    n: "02",
    title:
      "Post-training business support for Korea-connected plastic surgery and beauty ventures.",
  },
  {
    n: "03",
    title: "A platform to expand into other beauty and surgery-related businesses.",
  },
  {
    n: "04",
    title:
      "Korean plastic surgery skills courses delivered by specialist surgeons for practising doctors.",
  },
] as const;

const instructors = [
  {
    name: "May Kanyanat Sutpa",
    role: "Surgery Korea Info Founder & CEO",
    body: "Leads Surgery Korea Info (S.K.I), a Korean plastic surgery agency with 10+ years of industry experience.",
    course: "Practical Korean plastic surgery consulting programme",
    tag: "@SKI.May",
    imageSrc: hospitalPartners[17]?.imageSrc,
  },
  {
    name: "Prof. Lee Eun-young",
    role: "Hospital Coordinator Specialist",
    body: "Professor specialising in hospital coordination from the International License Institute and South Korea's lifelong learning institutes.",
    course: "Hospital coordinator programme",
    tag: "LEE EUN-YOUNG",
    imageSrc: hospitalPartners[14]?.imageSrc,
  },
  {
    name: "Sun Sathapon Wisakasat",
    role: "Online Digital Marketing Founder & CEO",
    body: "Expert in online marketing: audience research, content, and conversion for beauty brands.",
    course: "Digital marketing programme",
    tag: "Son Digital Marketing",
    imageSrc: hospitalPartners[16]?.imageSrc,
  },
  {
    name: "Dr. Cho In-chang",
    role: "BIO Plastic Surgery President",
    body: "Plastic surgeon with 20+ years of experience; BIO Hospital has delivered surgeon training programmes for over a decade.",
    course: "Surgical technique training for doctors",
    tag: "CHO IN-CHANG",
    imageSrc: hospitalPartners[24]?.imageSrc,
  },
] as const;

function SectionCard({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto min-w-0 max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <h2 className="font-display text-pretty text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 min-w-0 space-y-4 text-sm leading-relaxed text-rose-900/80 sm:text-base [&_p]:text-pretty">
        {children}
      </div>
    </section>
  );
}

export default function WhoWeArePage() {
  return (
    <SiteShell>
      <SubpageHero
        eyebrow="KBBA — KOREA BEAUTY BUSINESS ACADEMY"
        title="WHO WE ARE"
        subtitle="Training and resources for Korea beauty businesses — in partnership with Surgery Korea Info (S.K.I), Blue Bridge Global (BBG) in South Korea, and leading institutes and hospitals."
      />

      <div className="border-b border-rose-100/60 bg-white/80">
        <div className="mx-auto min-w-0 max-w-6xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-pretty text-sm leading-relaxed text-rose-900/80 sm:text-base">
            We specialise in Thailand–Korea beauty businesses across the region. From first steps in compliant
            agency work to advanced programmes, KBBA provides training plus launch and scale-up support so teams can
            reach their goals faster.
          </p>
        </div>
      </div>

      <section className="border-b border-rose-100/60 bg-gradient-to-b from-rose-50/40 to-white py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-pretty text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
            Korea Beauty Business Academy
          </h2>
          <div className="mt-10 grid min-w-0 gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="min-w-0 rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-md shadow-rose-100/25"
              >
                <div className="relative mb-5 h-24 w-full overflow-hidden rounded-xl border border-rose-100/80 bg-white">
                  <Image
                    src={p.imageSrc}
                    alt={p.title}
                    fill
                    className="object-contain p-2"
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

      <SectionCard title="Business support">
        <p>
          KBBA is more than a classroom: we support your business after graduation so you can start without extra
          capital, with specialists helping across operations.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {supportPills.map((t) => (
            <li
              key={t}
              className="max-w-full text-pretty rounded-full border border-rose-200/80 bg-rose-50/80 px-3 py-1.5 text-xs font-medium text-rose-900 sm:text-sm"
            >
              {t}
            </li>
          ))}
        </ul>
      </SectionCard>

      <section className="border-y border-rose-100/60 bg-white/90 py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-pretty text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
            Partnerships
          </h2>
          <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-rose-900/75 sm:text-base">
            KBBA works officially with hospitals and clinics in the network plus Korean accreditation bodies so
            curricula and business support meet international expectations.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-rose-100/90 bg-white py-4 shadow-sm">
            <div className="flex w-max animate-marquee items-center gap-6 px-4 pr-10">
              {[...hospitalPartners, ...hospitalPartners].map((h, i) => (
                <div
                  key={`${h.id}-who-${i}`}
                  className="flex h-16 w-28 shrink-0 items-center justify-center"
                >
                  <Image
                    src={h.imageSrc}
                    alt="Partner logo"
                    width={140}
                    height={80}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-rose-50/35 to-white py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-600">What We Do</p>
          <h2 className="font-display mt-2 text-pretty text-2xl font-semibold text-rose-950 sm:text-3xl">
            What we deliver
          </h2>
          <ol className="mt-10 grid min-w-0 gap-6 sm:grid-cols-2">
            {whatWeDo.map((w) => (
              <li
                key={w.n}
                className="flex min-w-0 gap-4 rounded-2xl border border-rose-100/90 bg-white/95 p-5 shadow-sm"
              >
                <span className="shrink-0 font-display text-3xl font-semibold text-pink-600">{w.n}</span>
                <p className="min-w-0 text-pretty text-sm font-medium leading-relaxed text-rose-900 sm:text-base">
                  {w.title}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-rose-100/60 py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid min-w-0 gap-6 rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-md shadow-rose-100/25 md:grid-cols-[minmax(0,220px),1fr]">
            <div className="relative mx-auto h-56 w-full max-w-[11rem] shrink-0 overflow-hidden rounded-xl border border-rose-100/80 bg-white md:mx-0 md:w-44">
              <Image
                src={instructors[0].imageSrc}
                alt={instructors[0].name}
                fill
                className="object-contain p-2"
                sizes="220px"
              />
            </div>
            <div className="min-w-0">
              <h2 className="font-display text-pretty text-xl font-semibold text-rose-950 sm:text-2xl">
                {instructors[0].name}
              </h2>
              <p className="mt-1 text-pretty text-sm font-medium text-pink-700">{instructors[0].role}</p>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-rose-900/80">{instructors[0].body}</p>
              <p className="mt-3 text-pretty text-sm text-rose-800">
                <span className="font-semibold">Course: </span>
                {instructors[0].course}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-rose-500">
                {instructors[0].tag}
              </p>
            </div>
          </div>

          <h2 className="font-display text-pretty text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
            Expert faculty
          </h2>
          <div className="mt-10 grid min-w-0 gap-6 md:grid-cols-3">
            {instructors.slice(1).map((p) => (
              <article
                key={p.name}
                className="min-w-0 rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-md shadow-rose-100/20"
              >
                <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl border border-rose-100/80 bg-white">
                  <Image
                    src={p.imageSrc}
                    alt={p.name}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <h3 className="font-display text-pretty text-lg font-semibold text-rose-950">{p.name}</h3>
                <p className="mt-1 text-pretty text-sm font-medium text-pink-700">{p.role}</p>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-rose-900/75">{p.body}</p>
                <p className="mt-4 text-pretty text-sm text-rose-800">
                  <span className="font-semibold">Course: </span>
                  {p.course}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-rose-500">{p.tag}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rose-100/70 bg-gradient-to-b from-rose-50/40 to-white py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-pretty text-2xl font-semibold text-rose-950 sm:text-3xl">Gallery</h2>
          <div className="mt-8 grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {hospitalPartners.slice(0, 12).map((h) => (
              <div
                key={`who-gallery-${h.id}`}
                className="relative h-28 overflow-hidden rounded-xl border border-rose-100/80 bg-white sm:h-32"
              >
                <Image
                  src={h.imageSrc}
                  alt="KBBA gallery"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 45vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="official-partners"
        className="border-t border-rose-100/70 bg-gradient-to-b from-white to-rose-50/30 py-12 sm:py-20"
      >
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-pink-600">Official Partner</p>
          <h2 className="font-display mt-2 text-pretty text-2xl font-semibold text-rose-950 sm:text-3xl">
            Official partners
          </h2>

          <div className="mt-10 min-w-0 space-y-10">
            <div className="min-w-0">
              <h3 className="text-pretty text-lg font-semibold text-rose-900">Institute</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-pretty text-sm text-rose-900/85 sm:text-base">
                {officialPartners.institutes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ol>
            </div>
            <div className="min-w-0">
              <h3 className="text-pretty text-lg font-semibold text-rose-900">Hospital and Clinic in Korea</h3>
              <ol className="mt-4 max-h-[24rem] list-decimal space-y-2 overflow-y-auto overflow-x-hidden pr-2 text-pretty text-sm text-rose-900/85 sm:text-base">
                {officialPartners.hospitalsKorea.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ol>
            </div>
            <div className="min-w-0">
              <h3 className="text-pretty text-lg font-semibold text-rose-900">Hospital and Clinic in Thailand</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-pretty text-sm text-rose-900/85 sm:text-base">
                {officialPartners.hospitalsThailand.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ol>
            </div>
            <div className="min-w-0">
              <h3 className="text-pretty text-lg font-semibold text-rose-900">Company</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-pretty text-sm text-rose-900/85 sm:text-base">
                {officialPartners.companies.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
