import type { Metadata, Viewport } from "next";
import { Kanit, Noto_Sans_Thai } from "next/font/google";
import { LineFloatingButton } from "@/components/LineFloatingButton";
import "./globals.css";

const notoThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["latin", "thai"],
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
  title: {
    default:
      "KBBA | Korea Beauty Business Academy — คอร์สโฆษณา Google Ads & เครือข่ายโรงพยาบาลเกาหลี",
    template: "%s | KBBA",
  },
  description:
    "Korea Beauty Business Academy (KBBA) — สถาบันพันธมิตรโรงพยาบาลและคลินิกเกาหลี 40+ แห่ง หลักสูตรการตลาดออนไลน์ Google Ads สำหรับธุรกิจความงาม ที่ปรึกษาคลินิกไทยเชื่อมเกาหลี ราคาแพ็กเกจชัดเจน รองรับเจ้าของคลินิกและเอเจนซี่",
  keywords: [
    "KBBA",
    "Korea Beauty Business Academy",
    "ศัลยกรรมเกาหลี",
    "คลินิกความงาม",
    "Google Ads",
    "โฆษณาออนไลน์",
    "พันธมิตรโรงพยาบาลเกาหลี",
    "ทัวร์ศัลยกรรมเกาหลี",
    "ตัวแทนโรงพยาบาลเกาหลี",
    "การตลาดคลินิก",
    "LINE ปรึกษา",
  ],
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "Korea Beauty Business Academy",
    title:
      "KBBA — Korea Beauty Business Academy | พันธมิตรโรงพยาบาลเกาหลี & คอร์ส Google Ads",
    description:
      "เชื่อมธุรกิจความงามกับโรงพยาบาลและคลินิกเกาหลี พร้อมหลักสูตรโฆษณาออนไลน์ที่ออกแบบสำหรับคลินิกโดยเฉพาะ",
  },
  twitter: {
    card: "summary_large_image",
    title: "KBBA | Korea Beauty Business Academy",
    description:
      "พันธมิตรโรงพยาบาลเกาหลี 40+ | คอร์ส Google Ads สำหรับธุรกิจความงาม",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${notoThai.variable} ${kanit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full font-sans text-rose-950 antialiased">
        {children}
        <LineFloatingButton />
      </body>
    </html>
  );
}
