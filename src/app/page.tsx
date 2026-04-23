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

          <div className="mt-10 grid min-w-0 items-start gap-8 md:grid-cols-[1.25fr_0.75fr] md:gap-6 lg:mt-14 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-2xl bg-white sm:aspect-[16/11] sm:max-w-none md:mx-0 md:aspect-[980/558]">
              <Image
                src={HOME_CONSULTING_VISUAL}
                alt="KBBA presenter visual"
                fill
                className="object-contain object-bottom sm:object-right-bottom"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="flex min-w-0 flex-col gap-4 text-left md:items-end md:text-right">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-rose-100/80 bg-white/95 shadow-[0_22px_45px_-32px_rgba(190,24,93,0.45)] sm:aspect-[16/11] md:aspect-[980/558]">
                <Image
                  src={HOME_CONSULTING_CERT_IMAGE}
                  alt="Hospital coordinator certificates"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-pretty text-base leading-relaxed text-zinc-900 sm:text-lg">
                &ldquo;Become a certified beauty consultant with strong earning potential — and earn your
                Korean hospital coordinator credentials with us.&rdquo;
              </p>
              <a
                href="https://line.me/R/ti/p/@756xidmw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full flex-wrap items-center justify-center gap-2 rounded-full border-2 border-black bg-[#e200d8] px-4 py-3 text-center text-sm font-bold text-white shadow-[0_4px_0_#000,0_14px_24px_-16px_rgba(226,0,216,0.85)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_5px_0_#000,0_20px_30px_-16px_rgba(226,0,216,0.95)] sm:w-auto sm:flex-nowrap sm:px-5 sm:text-base md:ml-auto"
              >
                <span className="max-w-[20rem] text-pretty sm:max-w-none">
                  Ask if this programme is right for you
                </span>
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-lg leading-none text-[#e200d8]">
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
        className="border-t border-rose-100/70 bg-gradient-to-b from-rose-50/55 via-[#fff8fb] to-rose-50/55 pb-12 sm:pb-16"
        role="region"
        aria-label="Registration and consultation"
      >
        <HomeRegisterProcessSection />
        <HomeConsultRegisterSection />
      </div>

      <section
        id="faq"
        className="border-t border-rose-100/70 bg-gradient-to-b from-rose-50/40 via-white to-white py-14 sm:py-20"
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
