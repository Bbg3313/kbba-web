import type { Metadata } from "next";

export { default } from "@/app/admin/page";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
  },
};
