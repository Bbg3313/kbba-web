import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { SubpageHero } from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "OUR COURSE",
  description:
    "KBBA — compliant Korean plastic surgery agency training, Korea study tours, and surgeon skills programmes.",
};

const whatWeDeliverCards = [
  {
    step: "01",
    body: "Comprehensive education in plastic surgery business operations and market strategies.",
  },
  {
    step: "02",
    body: "Post-training support for setup, compliance, and practical business launch.",
  },
  {
    step: "03",
    body: "Expansion into broader beauty business opportunities in the Korean market.",
  },
  {
    step: "04",
    body: "Surgeon-focused technique programmes led by experienced Korean specialists.",
  },
] as const;

const businessSupportItems = [
  {
    emoji: "🪪",
    title: "Compliant licensing",
    desc: "Legal permits and licensing pathways that match how Korea-facing agencies actually operate.",
  },
  {
    emoji: "🧭",
    title: "Business advisory",
    desc: "Strategic guidance on launching, scaling, and coordinating beauty and surgery-related ventures.",
  },
  {
    emoji: "✨",
    title: "Data & promotions",
    desc: "Campaign ideas, performance signals, and promotional support so your pipeline stays visible.",
  },
  {
    emoji: "🛟",
    title: "Operations support",
    desc: "A specialist team behind you for day-to-day questions, handoffs, and practical problem-solving.",
  },
  {
    emoji: "🏥",
    title: "Partner hospitals",
    desc: "Access and continuity across Korean partner clinics so introductions feel credible and consistent.",
  },
  {
    emoji: "📋",
    title: "Documentation",
    desc: "Contracts, forms, and paperwork organised so compliance and client care do not stall.",
  },
  {
    emoji: "🚐",
    title: "Transfers & mobility",
    desc: "Coordinated pick-ups, drops, and movement logistics for clients while they are in Korea.",
  },
  {
    emoji: "💬",
    title: "Interpreter care",
    desc: "Interpreter coverage and client-care touchpoints so language never blocks trust or safety.",
  },
] as const;

const endorsedBy = [
  "International License Institute",
  "Long Life Education Institute, South Korea",
  "Curriculum aligned with South Korea Ministry of Health standards",
  "Blue Bridge Global Co., Ltd. (legally registered foreign patient attraction business in Korea, official collaboration with Gangnam Medical Tour Center)",
] as const;

const certificatesAgency = [
  "Certificate — Korean plastic surgery consultant programme",
  "Hospital coordinator certificate",
  "Hospital coordinator licence ID (may be used when applying for hospital-level roles in Korea)",
] as const;

const endorsedSurgeon = [
  "BIO Plastic Surgery Hospital",
  "Curriculum aligned with South Korea Ministry of Health standards",
  "Blue Bridge Global Co., Ltd. (legally registered foreign patient attraction business in Korea, official collaboration with Gangnam Medical Tour Center)",
] as const;

const certificateSurgeon = [
  "Certificate — Korean plastic surgery techniques training",
] as const;

function CourseBlock({
  id,
  titleMain,
  titleSubtitle,
  endorsed,
  certificates,
}: {
  id: string;
  titleMain: string;
  titleSubtitle: string;
  endorsed: readonly string[];
  certificates: readonly string[];
}) {
  return (
    <article
      id={id}
      className="scroll-mt-28 min-w-0 rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-lg shadow-rose-100/30 sm:p-8"
    >
      <h2 className="font-display text-pretty text-lg font-semibold leading-snug text-rose-950 sm:text-xl md:text-2xl">
        {titleMain}
      </h2>
      <p className="mt-1 text-pretty text-sm font-medium text-pink-700">{titleSubtitle}</p>
      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-rose-800">
        Endorsed by
      </h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-rose-900/85 [&_li]:text-pretty">
        {endorsed.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-rose-800">
        Certificates after completion
      </h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-rose-900/85 [&_li]:text-pretty">
        {certificates.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <p className="mt-6">
        <Link
          href="/#consult-register"
          className="inline-flex rounded-full bg-gradient-to-r from-rose-600 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-rose-300/40 transition hover:from-rose-500 hover:to-pink-500"
        >
          Details &amp; register
        </Link>
      </p>
    </article>
  );
}

export default function OurCoursePage() {
  return (
    <SiteShell>
      <SubpageHero
        eyebrow="OUR COURSE"
        title="KBBA programmes"
        subtitle="Beauty-business training in partnership with South Korea's lifelong learning institutes and international licensing bodies."
      />

      <section className="border-b border-rose-100/60 bg-white/90 py-10 sm:py-14">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-600">KBBA</p>
              <h2 className="font-display mt-1 text-pretty text-2xl font-semibold text-rose-950">Our Course</h2>
              <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-rose-900/80 sm:text-base">
                KBBA partners with the International License Institute to offer hospital coordinator certification
                pathways so graduates can apply the knowledge to medical-service careers — including agency work,
                consulting, and hospital or aesthetic clinic roles.
              </p>
            </div>
            <Link
              href="/#consult-register"
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-rose-200 bg-white px-5 py-2.5 text-sm font-semibold text-rose-800 transition hover:border-rose-300 sm:w-fit"
            >
              Register online →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-rose-100/60 bg-gradient-to-b from-rose-50/40 to-white py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-pink-600">What we do</p>
          <h2 className="font-display mt-2 text-center text-pretty text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
            What We Deliver
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-pretty text-sm leading-relaxed text-rose-900/75 sm:text-base">
            Four focused outcomes designed for teams building Korea-connected beauty and surgery businesses.
          </p>

          <ol className="mt-10 grid list-none grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {whatWeDeliverCards.map((item) => (
              <li
                key={item.step}
                className="group flex min-h-[190px] flex-col rounded-2xl border border-rose-100/90 bg-white/95 p-4 shadow-md shadow-rose-100/25 transition hover:-translate-y-0.5 hover:border-pink-200/80 hover:shadow-lg hover:shadow-rose-100/35 sm:min-h-[230px] sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl italic leading-none text-rose-900/90 sm:text-4xl">{item.step}</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-rose-200/80 to-transparent" aria-hidden />
                </div>
                <p className="mt-3 text-pretty text-[0.82rem] font-semibold leading-relaxed text-rose-900/85 sm:mt-5 sm:text-base">
                  {item.body}
                </p>
                <div
                  className="mt-auto pt-3 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-pink-600/85 sm:pt-4 sm:text-xs sm:tracking-[0.22em]"
                  aria-hidden
                >
                  KBBA
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-rose-100/70 bg-gradient-to-br from-rose-950 via-fuchsia-950 to-rose-900 py-14 text-center text-white sm:py-20">
        <div className="mx-auto min-w-0 max-w-3xl px-4">
          <p className="text-pretty text-sm font-medium uppercase tracking-[0.2em] text-rose-200">
            More than 10 years of
          </p>
          <h2 className="font-display mt-2 text-pretty text-3xl font-semibold sm:text-4xl">
            COMBINED EXPERIENCE
          </h2>
          <p className="mt-4 text-pretty text-rose-100/90">We have the know-how you need.</p>
        </div>
      </section>

      <section className="space-y-12 bg-gradient-to-b from-white to-rose-50/30 py-12 sm:space-y-16 sm:py-20">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <CourseBlock
            id="course-legal"
            titleMain="Compliant Korean plastic surgery agency programme"
            titleSubtitle="Korea Plastic Surgery Agency and Consultant Program"
            endorsed={endorsedBy}
            certificates={certificatesAgency}
          />
        </div>
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <CourseBlock
            id="course-trip"
            titleMain="Agency programme — compliant track with Korea study tour"
            titleSubtitle="Intensive Korea Plastic Surgery Agency and Consultant Program"
            endorsed={endorsedBy}
            certificates={certificatesAgency}
          />
        </div>
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <CourseBlock
            id="course-surgeon"
            titleMain="Surgeon skills training with Korean specialists"
            titleSubtitle="Korea Special Plastic Surgery Techniques Program For Doctor"
            endorsed={endorsedSurgeon}
            certificates={certificateSurgeon}
          />
        </div>
      </section>

      <section
        id="business-support"
        aria-labelledby="business-support-heading"
        className="border-t border-rose-100/60 bg-gradient-to-b from-rose-50/45 via-white to-white"
      >
        <div className="mx-auto min-w-0 max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2
            id="business-support-heading"
            className="font-display text-pretty text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl"
          >
            Business support
          </h2>
          <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-rose-900/80 sm:text-base">
            KBBA is not only a training institute—we stay with you after graduation so you can open for business
            with less upfront capital. Specialists help across licensing, advisory, campaigns, hospital ties,
            paperwork, transfers in Korea, and interpreter-led client care.
          </p>
          <ul className="mt-10 grid min-w-0 list-none grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {businessSupportItems.map((item) => (
              <li
                key={item.title}
                className="flex min-h-0 min-w-0 flex-col rounded-2xl border border-rose-100/90 bg-white/95 p-4 shadow-md shadow-rose-100/20 transition hover:border-pink-200/70 hover:shadow-lg hover:shadow-rose-100/30 sm:p-5"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 text-xl shadow-inner shadow-white/80 sm:h-12 sm:w-12 sm:text-2xl"
                  aria-hidden
                >
                  {item.emoji}
                </span>
                <h3 className="mt-3 font-display text-pretty text-[0.95rem] font-semibold leading-snug text-rose-950 sm:mt-4 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-2 text-pretty text-[0.72rem] leading-relaxed text-rose-900/72 sm:text-sm">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
