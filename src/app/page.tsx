import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { HospitalGrid } from "@/components/HospitalGrid";
import { OfficialPartnerBanner } from "@/components/OfficialPartnerBanner";
import { SiteShell } from "@/components/SiteShell";
import { TestimonialVideos } from "@/components/TestimonialVideos";
import { WixTopStrip } from "@/components/WixTopStrip";
import { HomeAcademyIntroBlock } from "@/components/HomeAcademyIntroBlock";
import { HomeConsultRegisterSection } from "@/components/HomeConsultRegisterSection";
import { HomeRegisterProcessSection } from "@/components/HomeRegisterProcessSection";

const courses = [
  {
    name: "Compliant Korean plastic surgery agency programme",
    note: "For people starting an agency, working as a consultant, or in hospital / clinic plastic surgery roles.",
    price: "THB 59,000",
  },
  {
    name: "Agency programme with a study tour in Korea",
    note: "For those who want an agency or consulting career plus hands-on observation experience at Korean hospitals.",
    price: "THB 99,000",
  },
  {
    name: "Skills training with Korean plastic surgeons",
    note: "For surgeons who want to sharpen techniques and learn approaches used by leading Korean specialists.",
    price: "THB 159,000",
  },
] as const;

const motivationCards = [
  {
    step: "01",
    title: "Tired of the same routine",
    points: [
      "Your main job feels repetitive and no longer helps you grow.",
      "You want to use your ideas and creativity in a more meaningful way.",
      "You want to keep learning, meeting new people, and building a more flexible career path.",
    ],
  },
  {
    step: "02",
    title: "Ready to build something of your own",
    points: [
      "You want work that feels personal and valuable.",
      "You want to become a business owner, not only a worker inside someone else’s system.",
      "You want to guide others and grow your own presence online and offline.",
    ],
  },
  {
    step: "03",
    title: "Aiming for financial freedom",
    points: [
      "You want to increase your income and create stronger long-term stability.",
      "You want more freedom to care for yourself and your family.",
      "You want a business path that can support travel, lifestyle goals, and personal independence.",
    ],
  },
] as const;

const faqs = [
  {
    q: "What does KBBA offer clinics outside Korea?",
    a: "KBBA is a training hub and Thailand–Korea beauty business network: foundational courses, hospital partner introductions, and ongoing business support after graduation.",
  },
  {
    q: "How is KBBA different from a typical agency?",
    a: "Programmes are aligned with accredited institutes and Korean partners, with documentation support, interpreters, and client-care playbooks so you can launch without extra capital overhead.",
  },
  {
    q: "What benefits do graduates receive?",
    a: "Practical know-how, access to partner hospitals in the network, and continued support across operations, promotions, transfers, and interpreter teams.",
  },
  {
    q: "How long until we see results?",
    a: "It depends on your business plan and execution. Most teams spend the first phase on foundations and systems, then scale revenue and service capacity.",
  },
  {
    q: "Why is Korean plastic surgery agency work in demand?",
    a: "Market trends show sustained demand for Korean surgery services — a strong opportunity for operators who want to build a professional agency.",
  },
  {
    q: "Why invest in agency training?",
    a: "Agency work is specialised: service quality, coordination, and compliance all matter. Training reduces costly mistakes and improves long-term success.",
  },
  {
    q: "Why partner with KBBA specifically?",
    a: "KBBA combines accredited curricula, hospital partner access, and post-training systems so beginners can operate with structure and grow faster.",
  },
  {
    q: "How does KBBA work with Mabel Clinic after surgery?",
    a: "Partner clinics in Thailand help with follow-up, guidance, and continuity of care so clients feel supported when they return home.",
  },
  {
    q: "How does KBBA work with Hi' Seoul Clinic?",
    a: "KBBA coordinates with Thai partner clinics to cover aftercare when travellers return from Korea — smoother handoffs and greater confidence.",
  },
] as const;

const HOME_CONSULTING_VISUAL = "/images/sections/home-consulting-presenter-v2.png";
const HOME_CONSULTING_CERT_IMAGE =
  "https://static.wixstatic.com/media/e22438_8c13c8af9e8e40e58a1f61b99735956f~mv2.png";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <section className="border-b border-rose-100/60 bg-gradient-to-b from-rose-50/40 via-white to-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-pink-600">Why people start</p>
            <h2 className="font-display mt-2 text-pretty text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
              Does this sound like you?
            </h2>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-rose-900/75 sm:text-base">
              Many people come to KBBA not only for training, but because they are ready for a more independent,
              more meaningful, and more flexible future.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {motivationCards.map((card) => (
              <article
                key={card.step}
                className="flex min-w-0 flex-col rounded-[1.75rem] border border-rose-100/90 bg-white/95 p-6 shadow-md shadow-rose-100/25"
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-5xl font-semibold leading-none text-pink-600">{card.step}</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-pink-200 to-transparent" aria-hidden />
                </div>
                <h3 className="font-display mt-5 text-pretty text-xl font-semibold text-rose-950">{card.title}</h3>
                <ul className="mt-5 space-y-3 pl-5 text-sm leading-relaxed text-rose-900/82 marker:text-pink-500">
                  {card.points.map((point) => (
                    <li key={point} className="text-pretty">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <OfficialPartnerBanner />
      <WixTopStrip />
      <HospitalGrid />

      <TestimonialVideos />

      <section className="relative overflow-x-clip border-b border-rose-100/70 bg-white py-8 sm:py-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-rose-100/40 blur-3xl" />
          <div className="absolute -right-20 bottom-6 h-64 w-64 rounded-full bg-fuchsia-100/35 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl min-w-0 pb-8 sm:pb-16">
            <h2 className="font-display text-pretty text-xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
              KOREA BEAUTY BUSINESS ACADEMY
            </h2>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-rose-900/70 sm:text-base">
              Korea-focused beauty business training institute
            </p>
          </header>

          <HomeAcademyIntroBlock />

          <div className="mt-10 grid min-w-0 items-start gap-y-10 rounded-2xl border border-rose-100/50 bg-white/40 px-4 py-8 shadow-sm shadow-rose-100/20 sm:gap-y-12 sm:px-6 sm:py-10 md:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] md:items-stretch md:gap-x-8 md:gap-y-0 md:px-7 md:py-11 lg:mt-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] lg:gap-x-10 lg:px-8 lg:py-12">
            <div className="relative isolate w-full max-w-none justify-self-stretch overflow-visible">
              <div className="relative aspect-[4/5] min-h-[240px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50 via-white to-pink-50/80 p-3 shadow-md shadow-rose-100/50 ring-1 ring-rose-100/80 sm:aspect-[16/11] sm:min-h-[300px] sm:p-5 md:aspect-[980/558] md:min-h-[380px] md:p-6 lg:min-h-[440px] lg:p-7 xl:min-h-[500px]">
                <Image
                  src={HOME_CONSULTING_VISUAL}
                  alt="KBBA presenter visual"
                  fill
                  className="object-contain object-[6%_100%] origin-bottom scale-[1.06] sm:object-[3%_100%] sm:scale-[1.08] md:object-[0%_100%] md:scale-[1.1] lg:scale-[1.12]"
                  sizes="(max-width: 768px) 100vw, 52vw"
                  priority
                />
              </div>
            </div>
            <div className="flex min-h-0 min-w-0 flex-col justify-start gap-7 text-left sm:gap-8 md:h-full md:max-w-none md:justify-center md:py-1 lg:py-2">
              <p className="text-pretty text-base font-medium leading-relaxed text-zinc-900 sm:text-lg lg:text-xl">
                Become a certified beauty consultant with strong earning potential — and earn your Korean
                hospital coordinator credentials with us.
              </p>
              <div className="relative w-full overflow-hidden rounded-2xl border border-rose-100/80 bg-white/95 shadow-[0_22px_45px_-32px_rgba(190,24,93,0.45)]">
                <div className="relative mx-auto aspect-[16/10] w-full max-w-2xl min-h-[9rem] sm:min-h-[11rem] md:min-h-[13rem] lg:min-h-[15rem]">
                  <Image
                    src={HOME_CONSULTING_CERT_IMAGE}
                    alt="Hospital coordinator certificates"
                    fill
                    className="object-contain object-center p-2 sm:p-3"
                    sizes="(max-width: 768px) 100vw, 46vw"
                  />
                </div>
              </div>
              <a
                href="https://line.me/R/ti/p/@756xidmw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit max-w-full items-center gap-2 rounded-lg border-2 border-black bg-[#e200d8] px-3 py-2 text-left text-xs font-bold leading-tight text-white shadow-[0_2px_0_#000,0_8px_16px_-12px_rgba(226,0,216,0.85)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_3px_0_#000,0_12px_20px_-12px_rgba(226,0,216,0.95)] sm:rounded-xl sm:px-3.5 sm:py-2 sm:text-sm md:self-center"
              >
                <span className="text-pretty">Ask on LINE — fit for you?</span>
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-sm leading-none text-[#e200d8] sm:h-6 sm:w-6 sm:text-base">
                  ›
                </span>
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
          <h2 className="font-display text-pretty text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
            Our Course
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-sm text-rose-900/70 sm:text-base">
            Programme summaries aligned with KBBA&apos;s official Our Course offering.
          </p>
          <div className="mt-10 grid min-w-0 gap-6 md:grid-cols-3">
            {courses.map((c) => (
              <article
                key={c.name}
                className="flex min-w-0 flex-col rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-md shadow-rose-100/25"
              >
                <h3 className="font-display text-pretty text-base font-semibold leading-snug text-rose-950 sm:text-lg">
                  {c.name}
                </h3>
                <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-rose-900/70">{c.note}</p>
                <p className="mt-4 text-xl font-semibold text-rose-950">{c.price}</p>
                <p className="mt-5">
                  <Link href="/our-course" className="text-sm font-semibold text-pink-700 hover:underline">
                    Course details
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
        aria-label="Registration and consultation"
      >
        <HomeRegisterProcessSection />
        <HomeConsultRegisterSection />
      </div>

      <section
        id="faq"
        className="border-t border-rose-100/70 bg-gradient-to-b from-rose-50/55 via-rose-50/35 to-white pb-14 pt-6 sm:pb-20 sm:pt-8"
      >
        <div className="mx-auto min-w-0 max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-balance font-display text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
            FAQ
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
