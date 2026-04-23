import Image from "next/image";
import { SITE_LINE_URL } from "@/data/site-links";

export function LineFloatingButton() {
  return (
    <a
      href={SITE_LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[100] flex items-center gap-3 rounded-full bg-[#06C755] py-2.5 pl-2.5 pr-5 text-[0.9375rem] font-bold tracking-wide text-white shadow-[0_6px_24px_rgba(6,199,85,0.45)] ring-2 ring-white/95 transition hover:bg-[#05b34c] hover:shadow-[0_8px_28px_rgba(6,199,85,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06C755] sm:py-3 sm:pl-3 sm:pr-6 sm:text-base"
      aria-label="Contact us on LINE"
    >
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#06C755] shadow-sm ring-1 ring-black/5 sm:h-12 sm:w-12">
        <Image
          src="/images/shared/line-brand-logo.svg"
          alt=""
          width={320}
          height={320}
          className="h-[94%] w-[94%] object-contain"
          priority
        />
      </span>
      <span className="max-w-[9.5rem] text-pretty leading-tight sm:max-w-none">LINE us</span>
    </a>
  );
}
