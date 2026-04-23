import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { SubpageHero } from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "OUR COURSE",
  description:
    "KBBA — compliant Korean plastic surgery agency training, Korea study tours, and surgeon skills programmes.",
};

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

      <section className="bg-gradient-to-b from-rose-50/35 to-white py-10 sm:py-14">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-pretty text-sm leading-relaxed text-rose-900/80 sm:text-base">
            KBBA is a beauty-business training centre officially working with South Korea&apos;s lifelong
            learning institutes and international licensing bodies to deliver legally aligned Korean
            plastic surgery agency programmes. After graduation, our team helps you launch without
            extra capital overhead. Surgeon-level technique training is delivered with BIO Plastic Surgery
            Hospital.
          </p>
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
    </SiteShell>
  );
}
