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

        <div className="mt-12">
          <p className="mb-4 text-center text-[0.7rem] font-medium uppercase tracking-[0.22em] text-rose-400/90 sm:text-left sm:text-xs">
            Full partner grid
          </p>
          <div className="grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {hospitalPartners.map((h) => (
              <article
                key={h.id}
                className="group relative flex min-h-[8rem] flex-col items-center justify-center overflow-hidden rounded-2xl border border-rose-100/70 bg-gradient-to-b from-white via-white to-rose-50/25 px-3 py-4 text-center shadow-[0_18px_48px_-32px_rgba(190,24,93,0.14),inset_0_1px_0_rgba(255,255,255,0.85)] ring-1 ring-rose-100/25 transition duration-300 hover:-translate-y-0.5 hover:border-rose-200/80 hover:shadow-[0_22px_56px_-28px_rgba(190,24,93,0.22)] sm:min-h-[8.75rem] sm:px-4 sm:py-5"
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-200/60 to-transparent opacity-80"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-rose-100/25 to-transparent opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative flex h-[5.25rem] w-full items-center justify-center sm:h-[5.75rem]">
                  <div
                    className="absolute inset-[12%] rounded-xl bg-gradient-to-b from-rose-50/40 to-transparent opacity-60 blur-md transition duration-300 group-hover:from-rose-100/50 group-hover:opacity-80"
                    aria-hidden
                  />
                  <Image
                    src={h.imageSrc}
                    alt={partnerLogoAlt}
                    width={200}
                    height={120}
                    className="relative z-[1] max-h-full max-w-[92%] object-contain opacity-90 transition duration-300 group-hover:scale-[1.04] group-hover:opacity-100"
                    sizes="(max-width: 640px) 45vw, 160px"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
