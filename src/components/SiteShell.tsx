import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
