import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { defaultLocale, isLocale, localeHeaderName } from "@/i18n/routing";

function withLocaleHeader(request: NextRequest, locale: string) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(localeHeaderName, locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const [, maybeLocale] = pathname.split("/");

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  if (isLocale(maybeLocale)) {
    return withLocaleHeader(request, maybeLocale);
  }

  const redirectPath = `/${defaultLocale}${pathname}${search}`;
  return NextResponse.redirect(new URL(redirectPath, request.url));
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|fonts|.*\\..*).*)",
  ],
};
