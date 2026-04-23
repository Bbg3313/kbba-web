/** Primary outbound links — override here or with NEXT_PUBLIC_* env vars. */
export const SITE_LINE_URL =
  process.env.NEXT_PUBLIC_LINE_URL ?? "https://line.me/R/ti/p/@756xidmw";

export const SITE_FACEBOOK_URL =
  process.env.NEXT_PUBLIC_FACEBOOK_URL ??
  "https://www.facebook.com/kbba.agency/";
