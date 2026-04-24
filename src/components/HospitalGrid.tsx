import Image from "next/image";
import { hospitalPartners } from "@/data/hospitals";
import { MainSectionEyebrow } from "@/components/MainSectionEyebrow";

const partnerLogoAlt = "KBBA partner hospital logo";

/** Featured marquee — sized for readable logos; still compact on very small screens. */
const marqueeFrameClass =
  "flex aspect-square w-[7.25rem] shrink-0 flex-col rounded-lg border border-zinc-200/70 bg-zinc-200/40 p-2 shadow-sm sm:w-44 sm:rounded-xl sm:p-2.5 sm:aspect-[5/4] md:w-52 md:p-3";

/** Full grid — width follows the cell; extra columns on narrow screens reduce scroll length. */
const gridFrameClass =
  "group flex aspect-square w-full min-w-0 flex-col rounded-md border border-zinc-200/70 bg-zinc-200/40 p-1.5 shadow-sm sm:rounded-lg sm:p-2 md:rounded-xl md:p-2.5";

const partnerLogoMatClass =
  "flex min-h-0 flex-1 items-center justify-center rounded-md bg-white shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_0_0_1px_rgba(0,0,0,0.04)] sm:rounded-lg";

const partnerLogoImgClass =
  "max-h-[88%] max-w-[94%] object-contain transition duration-200 group-hover:scale-[1.03]";

export function HospitalGrid() {
  const marqueeItems = [
    ...hospitalPartners,
    ...hospitalPartners,
    ...hospitalPartners,
  ];

  return (
    <section
      id="partners"
      className="border-y border-rose-200/30 bg-gradient-to-b from-stone-50/90 via-rose-50/25 to-white py-10 sm:py-16 lg:py-20"
    >
      <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl min-w-0">
          <MainSectionEyebrow label="Partner Network" />
          <h2 className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-950 via-rose-900 to-pink-800 sm:text-3xl">
            60+ partner hospitals
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-rose-900/65 sm:text-base">
            Hospitals and clinics that collaborate with KBBA — scroll the strip or browse the full
            partner grid below.
          </p>
        </div>

        <div className="relative mt-8 sm:mt-10">
          <p className="mb-2 text-center text-[0.7rem] font-medium uppercase tracking-[0.22em] text-rose-400/90 sm:mb-3 sm:text-left sm:text-xs">
            Featured strip
          </p>
          <div className="relative overflow-hidden rounded-[1.35rem] border border-rose-200/35 bg-gradient-to-br from-white via-rose-50/30 to-pink-50/20 p-[1px] shadow-[0_24px_80px_-40px_rgba(190,24,93,0.2),inset_0_1px_0_rgba(255,255,255,0.9)] sm:rounded-[1.65rem]">
            <div className="relative overflow-hidden rounded-[1.3rem] bg-white/70 backdrop-blur-md sm:rounded-[1.6rem]">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white via-white/95 to-transparent sm:w-12 md:w-20"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white via-white/95 to-transparent sm:w-12 md:w-20"
                aria-hidden
              />
              <div className="border-b border-rose-100/50 bg-gradient-to-b from-rose-50/15 to-transparent py-4 sm:py-5 md:py-6">
                <div className="flex w-max animate-marquee items-center gap-4 px-2 pr-8 [--marquee-duration:22s] sm:gap-8 sm:px-4 sm:pr-12 sm:[--marquee-duration:34s]">
                  {marqueeItems.map((h, idx) => (
                    <div
                      key={`${h.id}-marquee-${idx}`}
                      className={`group ${marqueeFrameClass} transition duration-200 hover:border-rose-200/70 hover:bg-zinc-200/55 hover:shadow-md`}
                    >
                      <div className={partnerLogoMatClass}>
                        <Image
                          src={h.imageSrc}
                          alt={partnerLogoAlt}
                          width={260}
                          height={140}
                          className={partnerLogoImgClass}
                          sizes="(max-width: 640px) 116px, 208px"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-10 sm:mt-12">
          <p className="mb-3 text-center text-[0.7rem] font-medium uppercase tracking-[0.22em] text-rose-400/90 sm:mb-4 sm:text-left sm:text-xs">
            Full partner grid
          </p>
          <div className="rounded-xl border border-zinc-200/90 bg-zinc-100/80 p-2 shadow-sm sm:rounded-2xl sm:p-3 md:p-5">
            <div className="grid min-w-0 grid-cols-4 gap-1.5 sm:grid-cols-5 sm:gap-2 md:grid-cols-5 md:gap-2.5 lg:grid-cols-6 lg:gap-3 xl:grid-cols-7 xl:gap-3">
              {hospitalPartners.map((h) => (
                <article
                  key={h.id}
                  className={`${gridFrameClass} transition duration-200 hover:border-rose-200/70 hover:bg-zinc-200/55 hover:shadow-md`}
                >
                  <div className={partnerLogoMatClass}>
                    <Image
                      src={h.imageSrc}
                      alt={partnerLogoAlt}
                      width={260}
                      height={140}
                      className={partnerLogoImgClass}
                      sizes="(max-width: 640px) 22vw, 168px"
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
