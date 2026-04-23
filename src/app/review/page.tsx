import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { SubpageHero } from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "REVIEW",
  description: "KBBA reviews and services — after-sales support and clinic partnerships.",
};

const services = [
  {
    title: "SET UP Agency Business",
    body: "Foundational training and advisory so you can operate a compliant agency right after KBBA — without extra capital.",
  },
  {
    title: "Promotion & Service",
    body: "KBBA works with 60+ partner hospitals: monthly marketing support and interpreter teams while clients are in Korea.",
  },
  {
    title: "After Service",
    body: "KBBA partners with 2+ clinic brands (expanding) for after-sales care — suture removal, splints, or swelling treatments.",
  },
] as const;

export default function ReviewPage() {
  return (
    <SiteShell>
      <SubpageHero
        eyebrow="REVIEW"
        title="Reviews & services"
        subtitle="Voices from participants and clinic partners — how KBBA supports you after training."
      />

      <section className="border-b border-rose-100/60 bg-white/90 py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <figure className="min-w-0 rounded-2xl border border-rose-100/90 bg-gradient-to-br from-rose-50/60 to-white p-4 shadow-md sm:p-8">
            <figcaption className="text-pretty text-sm font-semibold text-pink-700">
              Arm Arinee — founder, Look at me by Arinee agency
            </figcaption>
            <blockquote className="mt-4 text-base leading-relaxed text-rose-900/85">
              <h3 className="mb-3 font-display text-lg font-semibold text-rose-950">
                Starting from a love of aesthetics
              </h3>
              I already cared about beauty and surgery, and wanted people around me to experience positive change
              through professional hospitals and skilled doctors — that became the starting point for a side career
              in Korean plastic surgery agency work.
            </blockquote>
          </figure>
        </div>
      </section>

      <section className="bg-gradient-to-b from-rose-50/40 to-white py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-600">Our Service</p>
          <h2 className="font-display mt-2 text-pretty text-2xl font-semibold text-rose-950 sm:text-3xl">
            KBBA supports you end to end
          </h2>
          <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-rose-900/80 sm:text-base">
            From fundamentals to ongoing operations without extra capital, plus interpreters so you can sell,
            market, and serve smoothly before, during, and after the trip — with Thai partner clinics when clients
            return home.
          </p>
          <div className="mt-10 grid min-w-0 gap-6 md:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="min-w-0 rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-sm"
              >
                <h3 className="font-display text-pretty text-lg font-semibold text-rose-950">{s.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-rose-900/75">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rose-100/60 py-12 sm:py-16">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="min-w-0 rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-md">
            <h2 className="font-display text-pretty text-xl font-semibold text-rose-950">Hi&apos; Seoul Clinic</h2>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-rose-900/80">
              After caring for clients returning from Korea, we saw outcomes and smiles — and partnered with May at
              S.K.I. Sending VIP clients to Korea is easier when they know aftercare at home covers swelling,
              scars, and confidence.
            </p>
            <p className="mt-4 text-sm font-medium text-pink-700">Visit the clinic</p>
          </article>
          <article className="min-w-0 rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-md">
            <h2 className="font-display text-pretty text-xl font-semibold text-rose-950">Mabel Clinic</h2>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-rose-900/80">
              Dr. Nut has served VIP dermatology clients for over 10 years and follows Korean techniques. Clients
              often return for bruising, redness, and scars — we spoke with May at S.K.I. and partnered formally.
              KBBA can produce quality agencies and consultants so everyone stays safer and better informed.
            </p>
            <p className="mt-4 text-sm font-medium text-pink-700">Visit the clinic</p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
