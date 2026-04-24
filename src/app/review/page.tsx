import type { Metadata } from "next";
import Image from "next/image";
import { buildPageMetadata } from "@/i18n/metadata";
import { getRequestDictionary } from "@/i18n/server";
import { SiteShell } from "@/components/SiteShell";
import { SubpageHero } from "@/components/SubpageHero";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, dictionary } = await getRequestDictionary();
  return buildPageMetadata({
    locale,
    title: dictionary.review.meta.title,
    description: dictionary.review.meta.description,
    pathname: "/review",
  });
}

const participantReviewImages = [
  "/images/reviews/arm-arinee.png",
  "/images/reviews/margaret-langer.png",
  "/images/reviews/miew-kiranapat.png",
  "/images/reviews/kim-phakin.png",
  "/images/reviews/pop-supaporn.png",
  "/images/reviews/pim-thatsanan.png",
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

export default async function ReviewPage() {
  const { dictionary } = await getRequestDictionary();
  const participantReviews = dictionary.review.participantReviews.map((review, index) => ({
    ...review,
    imageSrc: participantReviewImages[index] ?? participantReviewImages[0],
  }));

  return (
    <SiteShell>
      <SubpageHero
        eyebrow={dictionary.review.hero.eyebrow}
        title={dictionary.review.hero.title}
        subtitle={dictionary.review.hero.subtitle}
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
                      &ldquo;
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">
                        {dictionary.review.participantReviewLabel}
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-600">{dictionary.review.services.eyebrow}</p>
          <h2 className="font-display mt-2 text-pretty text-2xl font-semibold text-rose-950 sm:text-3xl">
            {dictionary.review.services.title}
          </h2>
          <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-rose-900/80 sm:text-base">
            {dictionary.review.services.description}
          </p>
          <div className="mt-10 grid min-w-0 gap-6 md:grid-cols-3">
            {dictionary.review.services.items.map((s) => (
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
                alt={dictionary.review.clinicPartners[0].imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">{dictionary.review.clinicPartnerLabel}</p>
              <h2 className="font-display mt-2 text-pretty text-xl font-semibold text-rose-950">{dictionary.review.clinicPartners[0].name}</h2>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-rose-900/80">
                {dictionary.review.clinicPartners[0].body}
              </p>
              <p className="mt-4 text-sm font-medium text-pink-700">{dictionary.review.visitClinic}</p>
            </div>
          </article>
          <article className="min-w-0 overflow-hidden rounded-2xl border border-rose-100/90 bg-white/95 shadow-md">
            <div className="relative h-72 w-full overflow-hidden border-b border-rose-100/80 bg-rose-50/40 sm:h-80">
              <Image
                src="/images/reviews/mabel-clinic.png"
                alt={dictionary.review.clinicPartners[1].imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">{dictionary.review.clinicPartnerLabel}</p>
              <h2 className="font-display mt-2 text-pretty text-xl font-semibold text-rose-950">{dictionary.review.clinicPartners[1].name}</h2>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-rose-900/80">
                {dictionary.review.clinicPartners[1].body}
              </p>
              <p className="mt-4 text-sm font-medium text-pink-700">{dictionary.review.visitClinic}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-rose-100/60 bg-gradient-to-b from-rose-50/35 to-white py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-600">{dictionary.review.gallery.eyebrow}</p>
          <h2 className="font-display mt-2 text-pretty text-2xl font-semibold text-rose-950 sm:text-3xl">
            {dictionary.review.gallery.title}
          </h2>
          <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-rose-900/78 sm:text-base">
            {dictionary.review.gallery.description}
          </p>

          <div className="mt-10 grid min-w-0 grid-cols-2 gap-3 sm:gap-4 md:grid-cols-12">
            {reviewGalleryItems.map((item, index) => (
              <figure
                key={item.src}
                className={`min-w-0 overflow-hidden rounded-2xl border border-rose-100/90 bg-white/95 shadow-md shadow-rose-100/25 ${item.className}`}
              >
                <div className={`relative w-full overflow-hidden bg-rose-50/40 ${item.aspectClassName}`}>
                  <Image
                    src={item.src}
                    alt={dictionary.review.gallery.items[index]?.alt ?? item.alt}
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
