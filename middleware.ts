import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ar", "fr", "es", "de"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the file is an asset
  const isPublicFile = /\.(svg|png|jpg|jpeg|gif|webp|ico|css|js)$/.test(
    pathname
  );
  if (isPublicFile) return;

  // Check if path already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to default locale
  const locale = defaultLocale;
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
