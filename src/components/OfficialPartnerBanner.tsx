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

      <div className="relative mx-auto min-w-0 max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pb-14 lg:px-8">
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

        <div className="mt-8 rounded-[2rem] border border-white/70 bg-white/75 p-3 shadow-[0_30px_80px_-40px_rgba(190,24,93,0.28)] backdrop-blur-sm sm:mt-10 sm:p-4">
          <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {featuredPartners.map((partner) => (
              <article
                key={partner.short}
                className="group flex min-w-0 min-h-[15.5rem] flex-col rounded-[1.5rem] border border-rose-100/90 bg-gradient-to-b from-white via-white to-rose-50/35 p-5 shadow-sm shadow-rose-100/30 transition duration-300 hover:-translate-y-0.5 hover:border-pink-200/80 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-14 min-w-0 flex-1 items-center rounded-2xl border border-rose-100/80 bg-white px-3 shadow-sm">
                    <div className="relative h-8 w-full">
                      <Image
                        src={partner.imageSrc}
                        alt={partner.name}
                        fill
                        className="object-contain object-left"
                        sizes="160px"
                      />
                    </div>
                  </div>
                  <span className="rounded-full bg-rose-50 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-pink-700">
                    Core
                  </span>
                </div>
                <p className="mt-5 text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-pink-600/90">
                  {partner.short}
                </p>
                <h3 className="mt-2 min-h-[3.25rem] text-pretty text-sm font-semibold leading-snug text-rose-950 sm:text-[0.95rem]">
                  {partner.name}
                </h3>
                <p className="mt-3 text-pretty text-xs font-medium uppercase tracking-[0.16em] text-rose-700/80">
                  {partner.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
