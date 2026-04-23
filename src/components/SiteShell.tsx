import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col overflow-x-clip">
      <Navbar />
      <main className="flex-1 pb-[calc(5.5rem+env(safe-area-inset-bottom))] sm:pb-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
