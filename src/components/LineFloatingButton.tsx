import Image from "next/image";
import { SITE_LINE_URL } from "@/data/site-links";

export function LineFloatingButton() {
  return (
    <a
      href={SITE_LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[100] flex items-center gap-2 rounded-full bg-[#06C755] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 ring-2 ring-white/90 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:px-5 sm:text-base"
      aria-label="ติดต่อสอบถามผ่าน LINE"
    >
      <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-white/15">
        <Image
          src="/images/shared/line-icon.svg"
          alt=""
          width={32}
          height={32}
          className="object-contain p-1"
          priority
        />
      </span>
      <span className="max-w-[9rem] leading-tight sm:max-w-none">
        สอบถามทาง LINE
      </span>
    </a>
  );
}
