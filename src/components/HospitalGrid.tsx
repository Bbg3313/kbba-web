import Image from "next/image";
import { hospitalPartners } from "@/data/hospitals";

const partnerLogoAlt = "KBBA partner hospital logo";

/** Same outer frame in Featured strip + Full grid (logos align visually). */
const partnerLogoFrameClass =
  "flex aspect-square w-36 shrink-0 flex-col rounded-xl border border-zinc-200/70 bg-zinc-200/40 p-2 shadow-sm sm:aspect-[5/4] sm:w-40 sm:p-2.5";

const partnerLogoMatClass =
  "flex min-h-0 flex-1 items-center justify-center rounded-lg bg-white shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_0_0_1px_rgba(0,0,0,0.04)]";

const partnerLogoImgClass =
  "max-h-[78%] max-w-[88%] object-contain transition duration-200 group-hover:scale-[1.03]";

export function HospitalGrid() {
  const marqueeItems = [
    ...hospitalPartners,
    ...hospitalPartners,
    ...hospitalPartners,
  ];

  return (
    <section
      id="partners"
      className="border-y border-rose-200/30 bg-gradient-to-b from-stone-50/90 via-rose-50/25 to-white py-14 sm:py-20"
    >
      <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl min-w-0">
          <div className="mb-4 h-px w-12 bg-gradient-to-r from-rose-400/80 to-transparent sm:w-16" />
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-rose-500/90 sm:text-xs">
            Partner network
          </p>
          <h2 className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-950 via-rose-900 to-pink-800 sm:text-3xl">
            60+ partner hospitals
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-rose-900/65 sm:text-base">
            Hospitals and clinics that collaborate with KBBA — scroll the strip or browse the full
            partner grid below.
          </p>
        </div>

        <div className="relative mt-10">
          <p className="mb-3 text-center text-[0.7rem] font-medium uppercase tracking-[0.22em] text-rose-400/90 sm:text-left sm:text-xs">
            Featured strip
          </p>
          <div className="relative overflow-hidden rounded-[1.65rem] border border-rose-200/35 bg-gradient-to-br from-white via-rose-50/30 to-pink-50/20 p-[1px] shadow-[0_24px_80px_-40px_rgba(190,24,93,0.2),inset_0_1px_0_rgba(255,255,255,0.9)]">
            <div className="relative overflow-hidden rounded-[1.6rem] bg-white/70 backdrop-blur-md">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white via-white/95 to-transparent sm:w-20"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/95 to-transparent sm:w-20"
                aria-hidden
              />
              <div className="border-b border-rose-100/50 bg-gradient-to-b from-rose-50/15 to-transparent py-5 sm:py-6">
                <div className="flex w-max animate-marquee items-center gap-4 px-3 pr-10 sm:gap-6 sm:px-4 sm:pr-12">
                  {marqueeItems.map((h, idx) => (
                    <div
                      key={`${h.id}-marquee-${idx}`}
                      className={`group ${partnerLogoFrameClass} transition duration-200 hover:border-rose-200/70 hover:bg-zinc-200/55 hover:shadow-md`}
                    >
                      <div className={partnerLogoMatClass}>
                        <Image
                          src={h.imageSrc}
                          alt={partnerLogoAlt}
                          width={200}
                          height={120}
                          className={partnerLogoImgClass}
                          sizes="160px"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-12">
          <p className="mb-4 text-center text-[0.7rem] font-medium uppercase tracking-[0.22em] text-rose-400/90 sm:text-left sm:text-xs">
            Full partner grid
          </p>
          <div className="rounded-2xl border border-zinc-200/90 bg-zinc-100/80 p-3 shadow-sm sm:p-4 md:p-5">
            <div className="grid min-w-0 grid-cols-2 justify-items-center gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-3.5 lg:grid-cols-5 lg:gap-3.5 xl:grid-cols-6">
              {hospitalPartners.map((h) => (
                <article
                  key={h.id}
                  className={`group ${partnerLogoFrameClass} transition duration-200 hover:border-rose-200/70 hover:bg-zinc-200/55 hover:shadow-md`}
                >
                  <div className={partnerLogoMatClass}>
                    <Image
                      src={h.imageSrc}
                      alt={partnerLogoAlt}
                      width={200}
                      height={120}
                      className={partnerLogoImgClass}
                      sizes="(max-width: 640px) 45vw, 160px"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
