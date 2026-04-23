import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { SubpageHero } from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "OUR COURSE",
  description:
    "KBBA — compliant Korean plastic surgery agency training, Korea study tours, and surgeon skills programmes.",
};

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
            </div>
            <Link
              href="/#consult-register"
              className="inline-flex w-fit items-center rounded-full border-2 border-rose-200 bg-white px-5 py-2.5 text-sm font-semibold text-rose-800 transition hover:border-rose-300"
            >
              Register online →
            </Link>
          </div>
        </div>
      </section>

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
                <div className="relative mb-5 h-28 w-full overflow-hidden rounded-xl border border-rose-100/80 bg-rose-50/50 sm:h-32">
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

      <section className="border-y border-rose-100/60 bg-white py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-pretty text-xl font-semibold text-rose-950 sm:text-2xl">
            International License Institute
          </h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-rose-900/80 sm:text-base">
            KBBA partners with the International License Institute to offer hospital coordinator
            certification pathways so graduates can apply the knowledge to medical-service careers —
            including agency work, consulting, and hospital or aesthetic clinic roles.
          </p>
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
          <ul className="mt-10 grid min-w-0 list-none gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {businessSupportItems.map((item) => (
              <li
                key={item.title}
                className="flex min-h-0 min-w-0 flex-col rounded-2xl border border-rose-100/90 bg-white/95 p-5 shadow-md shadow-rose-100/20 transition hover:border-pink-200/70 hover:shadow-lg hover:shadow-rose-100/30"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 text-2xl shadow-inner shadow-white/80"
                  aria-hidden
                >
                  {item.emoji}
                </span>
                <h3 className="mt-4 font-display text-pretty text-base font-semibold text-rose-950">{item.title}</h3>
                <p className="mt-2 text-pretty text-xs leading-relaxed text-rose-900/72 sm:text-sm">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
