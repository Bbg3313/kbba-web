import type { Metadata } from "next";
import Image from "next/image";
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

const participantReviews = [
  {
    name: "Arm Arinee",
    role: "Owner",
    business: "Look at me by Arinee",
    imageSrc: "/images/reviews/arm-arinee.png",
    imageAlt: "Arm Arinee from Look at me by Arinee",
    body:
      "A long-standing interest in beauty and cosmetic surgery led me to start a Korean surgery agency side business. I wanted to guide people around me toward trusted hospitals, skilled doctors, and better results.",
  },
  {
    name: "Margaret Langer",
    role: "Owner",
    business: "Mar Pa Suay",
    imageSrc: "/images/reviews/margaret-langer.png",
    imageAlt: "Margaret Langer from Mar Pa Suay",
    body:
      "My work as a model and business owner connected me with many people and frequent beauty reviews in Thailand and Korea. KBBA taught me the legal, structured way to run a Korean surgery agency and made client care much smoother.",
  },
  {
    name: "Miew Kiranapat",
    role: "Owner",
    business: "Queen Management",
    imageSrc: "/images/reviews/miew-kiranapat.png",
    imageAlt: "Miew Kiranapat from Queen Management",
    body:
      "Many people around me wanted trusted advice about self-care and surgery in Korea, and my long relationship with May at S.K.I gave me confidence to step in. With the KBBA system in place, the work is smoother and I can recommend it to anyone who wants to become a serious Korean surgery consultant.",
  },
  {
    name: "Kim Phakin",
    role: "Owner",
    business: "Kim S.K.I",
    imageSrc: "/images/reviews/kim-phakin.png",
    imageAlt: "Kim Phakin from Kim S.K.I",
    body:
      "Because I travel to Korea often and care about self-management, people regularly asked me about beauty care and surgery there. Support from S.K.I and the KBBA system now lets me send clients confidently while still managing my other businesses in Thailand.",
  },
  {
    name: "Pop Supaporn",
    role: "Owner",
    business: "Pop S.K.I",
    imageSrc: "/images/reviews/pop-supaporn.png",
    imageAlt: "Pop Supaporn from Pop S.K.I",
    body:
      "After my first surgery in Korea with May at S.K.I, people kept noticing the change and asking for advice, which led me into consulting. Working with S.K.I and the KBBA system has made client planning and care both enjoyable and professional.",
  },
  {
    name: "Pim Thatsanan",
    role: "Owner",
    business: "Beauty Atelier",
    imageSrc: "/images/reviews/pim-thatsanan.png",
    imageAlt: "Pim Thatsanan from Beauty Atelier",
    body:
      "I believe beauty should be shaped to each individual in the way that suits them best. Working with leading Korean hospitals and top surgeons lets me help clients pursue that ideal with more confidence.",
  },
] as const;

const reviewGalleryItems = [
  {
    src: "/images/reviews/gallery/note-group.png",
    alt: "Group photo at Note Plastic Surgery",
    className: "col-span-1 md:col-span-4",
    aspectClassName: "aspect-[4/5]",
  },
  {
    src: "/images/reviews/gallery/note-visit-1.png",
    alt: "Visit to Note Plastic Surgery",
    className: "col-span-1 md:col-span-4",
    aspectClassName: "aspect-[4/5]",
  },
  {
    src: "/images/reviews/gallery/note-visit-2.png",
    alt: "Partner visit at Note Plastic Surgery",
    className: "col-span-1 md:col-span-4",
    aspectClassName: "aspect-[4/5]",
  },
  {
    src: "/images/reviews/gallery/doctor-lobby.png",
    alt: "Partner meeting in clinic lobby",
    className: "col-span-1 md:col-span-4",
    aspectClassName: "aspect-[4/5]",
  },
  {
    src: "/images/reviews/gallery/bio-surgeons.png",
    alt: "Meeting with BIO Plastic Surgery medical team",
    className: "col-span-1 md:col-span-4",
    aspectClassName: "aspect-[4/5]",
  },
  {
    src: "/images/reviews/gallery/consultation-room.png",
    alt: "Consultation room visit with medical team",
    className: "col-span-1 md:col-span-4",
    aspectClassName: "aspect-[4/5]",
  },
  {
    src: "/images/reviews/gallery/certificate-banobagi.png",
    alt: "Certification milestone with Banobagi",
    className: "col-span-2 md:col-span-6",
    aspectClassName: "aspect-[4/3]",
  },
  {
    src: "/images/reviews/gallery/certificate.png",
    alt: "KBBA certification documents",
    className: "col-span-2 md:col-span-6",
    aspectClassName: "aspect-[4/3]",
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
          <div className="space-y-6">
            {participantReviews.map((review) => (
              <article
                key={review.name}
                className="flex min-w-0 flex-col items-start gap-4 overflow-hidden rounded-[1.75rem] border border-rose-100/90 bg-gradient-to-br from-rose-50/70 via-white to-white p-4 shadow-[0_24px_70px_-36px_rgba(190,24,93,0.28)] sm:flex-row sm:gap-6 sm:p-6 lg:gap-8 lg:p-8"
              >
                <div className="relative aspect-[4/5] w-full max-w-[16rem] shrink-0 self-center overflow-hidden rounded-2xl border border-rose-100/90 bg-[#ececf4] shadow-sm sm:h-56 sm:w-44 sm:max-w-none sm:self-auto lg:h-64 lg:w-52">
                  <Image
                    src={review.imageSrc}
                    alt={review.imageAlt}
                    width={694}
                    height={1000}
                    className="h-full w-full object-cover object-center"
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 176px, 208px"
                  />
                </div>

                <figure className="min-w-0 w-full">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-600 text-xl text-white shadow-sm">
                      "
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">
                        Participant Review
                      </p>
                      <figcaption className="mt-1 font-display text-pretty text-xl font-semibold text-rose-950 sm:text-2xl">
                        {review.name}
                      </figcaption>
                    </div>
                  </div>

                  <p className="mt-3 text-pretty text-sm font-medium text-rose-800/85 sm:text-base">
                    {review.role}, <span className="font-semibold text-pink-700">{review.business}</span>
                  </p>

                  <blockquote className="mt-5 text-pretty text-sm leading-relaxed text-rose-900/82 sm:text-base sm:leading-[1.85]">
                    {review.body}
                  </blockquote>
                </figure>
              </article>
            ))}
          </div>
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
          <article className="min-w-0 overflow-hidden rounded-2xl border border-rose-100/90 bg-white/95 shadow-md">
            <div className="relative h-72 w-full overflow-hidden border-b border-rose-100/80 bg-rose-50/40 sm:h-80">
              <Image
                src="/images/reviews/hi-seoul-clinic.png"
                alt="Hi' Seoul Clinic storefront with partners standing outside"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">Clinic Partner</p>
              <h2 className="font-display mt-2 text-pretty text-xl font-semibold text-rose-950">Hi&apos; Seoul Clinic</h2>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-rose-900/80">
                After caring for clients returning from Korea, we saw outcomes and smiles and chose to partner with
                May at S.K.I. Sending VIP clients to Korea becomes much easier when they know aftercare at home can
                support swelling, scars, and confidence.
              </p>
              <p className="mt-4 text-sm font-medium text-pink-700">Visit the clinic</p>
            </div>
          </article>
          <article className="min-w-0 overflow-hidden rounded-2xl border border-rose-100/90 bg-white/95 shadow-md">
            <div className="relative h-72 w-full overflow-hidden border-b border-rose-100/80 bg-rose-50/40 sm:h-80">
              <Image
                src="/images/reviews/mabel-clinic.png"
                alt="Mabel Clinic reception area"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">Clinic Partner</p>
              <h2 className="font-display mt-2 text-pretty text-xl font-semibold text-rose-950">Mabel Clinic</h2>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-rose-900/80">
                Dr. Nut has served VIP dermatology clients for over 10 years and follows Korean techniques. Clients
                often return with concerns like bruising, redness, and scars, which led us to speak with May at
                S.K.I. and form a formal partnership. KBBA helps produce better-informed, higher-quality agencies and
                consultants so clients can feel safer throughout the process.
              </p>
              <p className="mt-4 text-sm font-medium text-pink-700">Visit the clinic</p>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-rose-100/60 bg-gradient-to-b from-rose-50/35 to-white py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-600">Review Gallery</p>
          <h2 className="font-display mt-2 text-pretty text-2xl font-semibold text-rose-950 sm:text-3xl">
            Moments from training and partner visits
          </h2>
          <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-rose-900/78 sm:text-base">
            A visual snapshot of certification, clinic visits, partner meetings, and real working moments across the
            KBBA network.
          </p>

          <div className="mt-10 grid min-w-0 grid-cols-2 gap-3 sm:gap-4 md:grid-cols-12">
            {reviewGalleryItems.map((item) => (
              <figure
                key={item.src}
                className={`min-w-0 overflow-hidden rounded-2xl border border-rose-100/90 bg-white/95 shadow-md shadow-rose-100/25 ${item.className}`}
              >
                <div className={`relative w-full overflow-hidden bg-rose-50/40 ${item.aspectClassName}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-center transition duration-300 hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
