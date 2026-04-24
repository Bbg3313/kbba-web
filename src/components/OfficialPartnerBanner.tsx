import Image from "next/image";
import { MainSectionEyebrow } from "@/components/MainSectionEyebrow";
import { wixTopStripImages } from "@/data/wix-strip";
import type { Dictionary } from "@/i18n/dictionaries/en";

const featuredPartnerImages = [
  {
    imageSrc: wixTopStripImages[0]?.imageSrc,
    logoClassName: "scale-[0.68]",
  },
  {
    imageSrc: wixTopStripImages[1]?.imageSrc,
    logoClassName: "",
  },
  {
    imageSrc: wixTopStripImages[2]?.imageSrc,
    logoClassName: "",
  },
  {
    imageSrc: wixTopStripImages[3]?.imageSrc,
    logoClassName: "",
  },
  {
    imageSrc: wixTopStripImages[4]?.imageSrc,
    logoClassName: "",
  },
] as const;

type OfficialPartnerBannerProps = {
  copy: Dictionary["home"]["officialPartners"];
};

export function OfficialPartnerBanner({ copy }: OfficialPartnerBannerProps) {
  const featuredPartners = copy.partners.map((partner, index) => ({
    ...partner,
    imageSrc: featuredPartnerImages[index]?.imageSrc,
    logoClassName: featuredPartnerImages[index]?.logoClassName ?? "",
  }));
  const featuredPartnerLoop = [...featuredPartners, ...featuredPartners];

  return (
    <section
      id="official"
      aria-labelledby="official-partner-heading"
      className="relative overflow-hidden border-b border-rose-100/60 bg-gradient-to-b from-pink-50/95 via-rose-50/92 to-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-48 w-[min(100%,52rem)] -translate-x-1/2 rounded-full bg-rose-200/35 blur-[100px]" />
        <div className="absolute -left-20 bottom-10 h-44 w-44 rounded-full bg-pink-100/50 blur-3xl" />
        <div className="absolute -right-16 top-12 h-40 w-40 rounded-full bg-rose-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto min-w-0 max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pb-14 sm:pt-10 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <MainSectionEyebrow label={copy.eyebrow} align="center" className="mx-auto" />
          <h2
            id="official-partner-heading"
            className="font-display mt-3 text-balance text-xl font-semibold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-rose-900 via-fuchsia-800 to-rose-800 sm:text-3xl"
          >
            {copy.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl min-w-0 text-pretty text-sm leading-relaxed text-rose-900/75 sm:text-base">
            {copy.description}
          </p>
        </div>

        <div className="mt-6 rounded-[1.7rem] border border-white/70 bg-white/75 p-2 shadow-[0_30px_80px_-40px_rgba(190,24,93,0.28)] backdrop-blur-sm sm:mt-10 sm:rounded-[2rem] sm:p-4">
          <div className="overflow-hidden rounded-[1.35rem] sm:rounded-[1.6rem]">
            <div className="flex w-max animate-marquee items-stretch gap-3 px-1 pr-4 [--marquee-duration:20s] sm:gap-4 sm:pr-5 sm:[--marquee-duration:30s]">
              {featuredPartnerLoop.map((partner, index) => (
                <article
                  key={`${partner.short}-${index}`}
                  className="group flex min-h-[12.5rem] w-[12.5rem] shrink-0 flex-col rounded-[1.15rem] border border-rose-100/90 bg-gradient-to-b from-white via-white to-rose-50/35 p-4 shadow-sm shadow-rose-100/30 transition duration-300 hover:-translate-y-0.5 hover:border-pink-200/80 hover:shadow-md sm:min-h-[15.5rem] sm:w-[15.75rem] sm:rounded-[1.5rem] sm:p-5"
                >
                  <div className="flex items-start">
                    <div className="flex h-16 min-w-0 w-full items-center justify-center sm:h-20">
                      <div className={`relative h-14 w-full sm:h-16 ${partner.logoClassName}`.trim()}>
                        <Image
                          src={partner.imageSrc}
                          alt={partner.name}
                          fill
                          className="object-contain object-center"
                          sizes="(max-width: 640px) 150px, (max-width: 1024px) 208px, 208px"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="mt-2.5 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-pink-600/90 sm:mt-4 sm:text-[0.65rem] sm:tracking-[0.26em]">
                    {partner.short}
                  </p>
                  <h3 className="mt-1.5 min-h-[2.65rem] text-pretty text-sm font-semibold leading-snug text-rose-950 sm:mt-2 sm:min-h-[3.25rem] sm:text-[0.95rem]">
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-pretty text-[0.68rem] font-medium uppercase tracking-[0.13em] text-rose-700/80 sm:mt-3 sm:text-xs sm:tracking-[0.16em]">
                    {partner.role}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
