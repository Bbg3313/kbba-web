import Image from "next/image";
import { MainSectionEyebrow } from "@/components/MainSectionEyebrow";
import { wixTopStripImages } from "@/data/wix-strip";

const featuredPartners = [
  {
    short: "BBG",
    name: "Blue Bridge Global",
    role: "Korea business bridge",
    imageSrc: wixTopStripImages[0]?.imageSrc,
  },
  {
    short: "S.K.I",
    name: "Surgery Korea Info",
    role: "Thailand market partner",
    imageSrc: wixTopStripImages[1]?.imageSrc,
  },
  {
    short: "ILI",
    name: "International License Institute",
    role: "Certification partner",
    imageSrc: wixTopStripImages[2]?.imageSrc,
  },
  {
    short: "LEI",
    name: "Long Life Education Institute",
    role: "Lifelong learning partner",
    imageSrc: wixTopStripImages[3]?.imageSrc,
  },
  {
    short: "KRIVET",
    name: "KRIVET",
    role: "Curriculum reference",
    imageSrc: wixTopStripImages[4]?.imageSrc,
  },
] as const;

const featuredPartnerLoop = [...featuredPartners, ...featuredPartners];

export function OfficialPartnerBanner() {
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
          <MainSectionEyebrow label="Official Partner" align="center" className="mx-auto" />
          <h2
            id="official-partner-heading"
            className="font-display mt-3 text-balance text-xl font-semibold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-rose-900 via-fuchsia-800 to-rose-800 sm:text-3xl"
          >
            KBBA is backed by core education and business partners across Korea and Thailand
          </h2>
          <p className="mx-auto mt-4 max-w-3xl min-w-0 text-pretty text-sm leading-relaxed text-rose-900/75 sm:text-base">
            This is the core network behind KBBA: the companies that support operations and the institutes that
            strengthen certification, curriculum quality, and long-term credibility.
          </p>
        </div>

        <div className="mt-6 rounded-[1.7rem] border border-white/70 bg-white/75 p-2 shadow-[0_30px_80px_-40px_rgba(190,24,93,0.28)] backdrop-blur-sm sm:mt-10 sm:rounded-[2rem] sm:p-4">
          <div className="overflow-hidden rounded-[1.35rem] sm:rounded-[1.6rem]">
            <div className="flex w-max animate-marquee items-stretch gap-2 px-1 pr-3 [--marquee-duration:20s] sm:gap-4 sm:pr-5 sm:[--marquee-duration:32s]">
              {featuredPartnerLoop.map((partner, index) => (
                <article
                  key={`${partner.short}-${index}`}
                  className="group flex min-h-[11.75rem] w-[10.5rem] shrink-0 flex-col rounded-[1.15rem] border border-rose-100/90 bg-gradient-to-b from-white via-white to-rose-50/35 p-3.5 shadow-sm shadow-rose-100/30 transition duration-300 hover:-translate-y-0.5 hover:border-pink-200/80 hover:shadow-md sm:min-h-[16.25rem] sm:w-[15.5rem] sm:rounded-[1.5rem] sm:p-5"
                >
                  <div className="flex items-start">
                    <div className="flex h-12 min-w-0 w-full items-center rounded-xl border border-rose-100/80 bg-white px-2.5 shadow-sm sm:h-24 sm:rounded-2xl sm:px-4">
                      <div className="relative h-7 w-full sm:h-14">
                        <Image
                          src={partner.imageSrc}
                          alt={partner.name}
                          fill
                          className="object-contain object-center"
                          sizes="(max-width: 640px) 140px, 248px"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-pink-600/90 sm:mt-5 sm:text-[0.65rem] sm:tracking-[0.26em]">
                    {partner.short}
                  </p>
                  <h3 className="mt-1.5 min-h-[2.4rem] text-pretty text-xs font-semibold leading-snug text-rose-950 sm:mt-2 sm:min-h-[3.25rem] sm:text-[0.95rem]">
                    {partner.name}
                  </h3>
                  <p className="mt-2 hidden text-pretty text-[0.68rem] font-medium uppercase tracking-[0.13em] text-rose-700/80 sm:mt-3 sm:block sm:text-xs sm:tracking-[0.16em]">
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
