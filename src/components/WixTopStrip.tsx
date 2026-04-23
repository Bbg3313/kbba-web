import Image from "next/image";
import { wixTopStripImages } from "@/data/wix-strip";

/** Five-slot partner logo strip (uniform cell sizes, Wix-aligned). */
export function WixTopStrip() {
  return (
    <div className="border-b border-rose-100/70 bg-gradient-to-b from-rose-50/70 via-rose-50/40 to-white pb-5 pt-2 sm:pb-10 md:pb-11">
      <div className="mx-auto grid min-w-0 max-w-6xl grid-cols-5 gap-1.5 rounded-xl border border-rose-100/80 bg-white/92 px-2 py-2 shadow-[0_20px_50px_-34px_rgba(190,24,93,0.45)] sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3 md:gap-5 md:rounded-3xl md:px-6 md:py-5 lg:gap-7 lg:px-8">
        {wixTopStripImages.map((img, i) => (
          <div
            key={`${img.imageSrc}-${i}`}
            className="flex h-11 min-w-0 items-center justify-center rounded-lg bg-white/70 sm:h-[4.5rem] md:h-28 md:rounded-2xl"
          >
            <div className="flex h-full w-full max-h-[2.65rem] items-center justify-center px-0.5 sm:max-h-[5.5rem] md:max-h-[6.5rem]">
              <Image
                src={img.imageSrc}
                alt={img.alt}
                width={220}
                height={140}
                className="max-h-full max-w-full object-contain"
                sizes="(max-width: 640px) 18vw, 160px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
