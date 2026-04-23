import Image from "next/image";
import { hospitalPartners } from "@/data/hospitals";

const partnerLogoAlt = "KBBA partner hospital logo";

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
                      className="flex h-[4.75rem] w-[6.75rem] shrink-0 items-center justify-center rounded-2xl border border-rose-100/80 bg-gradient-to-b from-white to-rose-50/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_8px_24px_-12px_rgba(190,24,93,0.12)] ring-1 ring-white/80 transition duration-300 hover:border-rose-200/90 hover:shadow-[0_12px_28px_-14px_rgba(190,24,93,0.18)] sm:h-[5.25rem] sm:w-[7.75rem]"
                    >
                      <Image
                        src={h.imageSrc}
                        alt={partnerLogoAlt}
                        width={200}
                        height={120}
                        className="max-h-[78%] max-w-[88%] object-contain opacity-[0.92] transition duration-300 hover:opacity-100"
                        sizes="128px"
                      />
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
          <div className="relative overflow-hidden rounded-[1.75rem] border border-rose-200/35 bg-gradient-to-b from-white/90 via-rose-50/20 to-pink-50/15 p-4 shadow-[0_28px_80px_-48px_rgba(190,24,93,0.22),inset_0_1px_0_rgba(255,255,255,0.85)] sm:p-5 md:p-6">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-10%,rgba(251,113,133,0.09),transparent_52%),radial-gradient(ellipse_70%_45%_at_100%_100%,rgba(244,114,182,0.06),transparent_50%)]"
              aria-hidden
            />
            <div className="relative grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3.5 md:grid-cols-4 md:gap-4 lg:grid-cols-5 lg:gap-4 xl:grid-cols-6">
              {hospitalPartners.map((h, i) => (
                <article key={h.id} className="group relative aspect-square min-h-0 sm:aspect-[5/4]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-200/55 via-white to-pink-100/45 p-px shadow-[0_10px_28px_-14px_rgba(190,24,93,0.18)] transition-all duration-500 group-hover:from-rose-300/50 group-hover:shadow-[0_18px_40px_-12px_rgba(244,63,94,0.28),0_0_0_1px_rgba(251,113,133,0.12)]">
                    <div
                      className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[calc(1rem-1px)] ${
                        i % 2 === 0
                          ? "bg-gradient-to-b from-white via-rose-50/[0.12] to-stone-100/35"
                          : "bg-gradient-to-b from-stone-50/90 via-white to-rose-50/25"
                      } `}
                    >
                      <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white/95 via-white/35 to-transparent"
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-rose-950/[0.04] via-transparent to-transparent"
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute inset-[8%] rounded-xl bg-gradient-to-b from-white/25 to-transparent opacity-70"
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute inset-y-[-15%] -left-2/3 z-20 w-[70%] -translate-x-full skew-x-[-16deg] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 blur-[0.5px] transition duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[320%] group-hover:opacity-100"
                        aria-hidden
                      />
                      <div className="relative z-10 flex h-full w-full items-center justify-center p-2.5 sm:p-3.5">
                        <Image
                          src={h.imageSrc}
                          alt={partnerLogoAlt}
                          width={200}
                          height={120}
                          className="max-h-[82%] max-w-[90%] object-contain opacity-[0.88] drop-shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition duration-500 ease-out group-hover:scale-[1.05] group-hover:opacity-100 group-hover:drop-shadow-[0_4px_14px_rgba(190,24,93,0.12)]"
                          sizes="(max-width: 640px) 45vw, 160px"
                        />
                      </div>
                    </div>
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
