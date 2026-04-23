import Link from "next/link";
import { SITE_FACEBOOK_URL, SITE_INSTAGRAM_URL, SITE_LINE_URL } from "@/data/site-links";

type SocialBrandIconRowProps = {
  /** Larger hit target on consultation panel */
  size?: "md" | "lg";
  className?: string;
};

const tile =
  "inline-flex shrink-0 items-center justify-center shadow-md transition hover:scale-[1.06] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

/** Facebook, Instagram, LINE — official-style brand colours, white glyphs. */
export function SocialBrandIconRow({ size = "md", className = "" }: SocialBrandIconRowProps) {
  const dim = size === "lg" ? "h-11 w-11" : "h-10 w-10";
  const icon = size === "lg" ? "h-5 w-5" : "h-[1.125rem] w-[1.125rem]";
  const igInner = size === "lg" ? "h-6 w-6" : "h-5 w-5";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Link
        href={SITE_FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${tile} ${dim} rounded-full bg-[#1877F2] focus-visible:outline-[#1877F2]`}
        aria-label="Facebook"
      >
        <svg className={`${icon} text-white`} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </Link>

      <Link
        href={SITE_INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${tile} ${dim} rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] focus-visible:outline-pink-500`}
        aria-label="Instagram"
      >
        <svg className={`${igInner} text-white`} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.59 3.59 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      </Link>

      <Link
        href={SITE_LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${tile} ${dim} rounded-[0.45rem] bg-[#06C755] focus-visible:outline-emerald-500`}
        aria-label="LINE"
      >
        <svg className={size === "lg" ? "h-6 w-6" : "h-5 w-5"} viewBox="0 0 32 32" aria-hidden>
          <path
            fill="#ffffff"
            d="M26 15.2c0 4.4-4.5 8-10 8-.9 0-1.8-.1-2.6-.3L8 25l1.1-4.2C8.4 19.6 8 17.4 8 15.2 8 10.8 12.5 7 18 7s8 3.8 8 8.2z"
          />
          <path
            fill="#06C755"
            d="M13.5 12.5h1v5h-1zm2.5 0h1.2c.9 0 1.5.5 1.5 1.3 0 .8-.6 1.3-1.5 1.3H17v2.4h-1zm1.1 2.1c.4 0 .7-.2.7-.6s-.3-.6-.7-.6H17v1.2zm3.1-2.1h1v5h-1z"
          />
        </svg>
      </Link>
    </div>
  );
}
