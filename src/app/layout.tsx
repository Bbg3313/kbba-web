import type { Metadata, Viewport } from "next";
import { getRequestDictionary } from "@/i18n/server";
import { Inter, Kanit } from "next/font/google";
import { LineFloatingButton } from "@/components/LineFloatingButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jsmh8292.wixsite.com/korea-beauty-busines";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff5f7",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  title: {
    default: "KBBA | Korea Beauty Business Academy",
    template: "%s | KBBA",
  },
  description:
    "Korea Beauty Business Academy (KBBA) — training and partner network for Korean plastic surgery agencies, hospital coordinators, and beauty businesses.",
  keywords: [
    "KBBA",
    "Korea Beauty Business Academy",
    "Korean plastic surgery",
    "beauty clinic",
    "Korean hospital partners",
    "medical tourism Korea",
    "Korean hospital representative",
    "LINE consultation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Korea Beauty Business Academy",
    images: ["/opengraph-image"],
    title:
      "KBBA — Korea Beauty Business Academy | Korean hospital partners & marketing courses",
    description:
      "Connect your beauty business with Korean hospitals and clinics, with practical training and marketing programmes built for clinics and agencies.",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image"],
    title: "KBBA | Korea Beauty Business Academy",
    description:
      "Korean hospital partner network & professional courses for beauty and agency businesses.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { locale, dictionary } = await getRequestDictionary();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${kanit.variable} locale-${locale} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full font-sans text-rose-950 antialiased">
        {children}
        <LineFloatingButton
          ariaLabel={dictionary.shell.lineFloatingButton.ariaLabel}
          label={dictionary.shell.lineFloatingButton.label}
        />
      </body>
    </html>
  );
}
