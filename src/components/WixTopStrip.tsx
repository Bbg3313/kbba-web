import Image from "next/image";
import { wixTopStripImages } from "@/data/wix-strip";

/** แถบโลโก้ 5 ช่อง — ขนาดเท่ากันทุกช่อง (ตามแถบขาวบนหน้า Wix) */
export function WixTopStrip() {
  return (
    <div className="border-b border-rose-100/70 bg-gradient-to-b from-rose-50/70 via-rose-50/40 to-white pb-9 pt-2 sm:pb-11">
      <div className="mx-auto grid max-w-6xl grid-cols-5 gap-3 rounded-3xl border border-rose-100/80 bg-white/92 px-4 py-4 shadow-[0_20px_50px_-34px_rgba(190,24,93,0.45)] sm:gap-6 sm:px-6 sm:py-5 lg:gap-8 lg:px-8">
        {wixTopStripImages.map((img, i) => (
          <div
            key={`${img.imageSrc}-${i}`}
            className="flex h-20 items-center justify-center rounded-2xl bg-white/70 sm:h-24 md:h-28"
          >
            <div className="flex h-full w-full max-h-[5.5rem] items-center justify-center sm:max-h-[6rem] md:max-h-[6.5rem]">
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
