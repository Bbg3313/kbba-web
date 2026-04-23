import Image from "next/image";
import { wixTopStripImages } from "@/data/wix-strip";

/** Five-slot partner logo strip (uniform cell sizes, Wix-aligned). */
export function WixTopStrip() {
  return (
    <div className="border-b border-rose-100/70 bg-gradient-to-b from-rose-50/70 via-rose-50/40 to-white pb-7 pt-2 sm:pb-11">
      <div className="mx-auto grid min-w-0 max-w-6xl grid-cols-2 gap-2 rounded-2xl border border-rose-100/80 bg-white/92 px-3 py-3 shadow-[0_20px_50px_-34px_rgba(190,24,93,0.45)] sm:grid-cols-3 sm:gap-4 sm:rounded-3xl sm:px-5 sm:py-4 md:grid-cols-5 md:gap-6 md:px-6 md:py-5 lg:gap-8 lg:px-8">
        {wixTopStripImages.map((img, i) => (
          <div
            key={`${img.imageSrc}-${i}`}
            className="flex h-[4.5rem] items-center justify-center rounded-xl bg-white/70 sm:h-24 md:h-28 md:rounded-2xl"
          >
            <div className="flex h-full w-full max-h-[4.25rem] items-center justify-center sm:max-h-[6rem] md:max-h-[6.5rem]">
              <Image
                src={img.imageSrc}
                alt={img.alt}
                width={220}
                height={140}
                className="max-h-full max-w-full object-contain"
                sizes="(max-width: 640px) 42vw, 160px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
