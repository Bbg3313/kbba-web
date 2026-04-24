import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getRequestDictionary } from "@/i18n/server";

export async function SiteShell({ children }: { children: React.ReactNode }) {
  const { locale, dictionary } = await getRequestDictionary();

  return (
    <div className="flex min-h-full flex-col overflow-x-clip">
      <Navbar locale={locale} copy={dictionary.shell.navbar} />
      <main className="min-w-0 flex-1 pb-[calc(5.5rem+env(safe-area-inset-bottom))] sm:pb-20">
        {children}
      </main>
      <Footer
        locale={locale}
        copy={dictionary.shell.footer}
        socialLabels={dictionary.shell.socialLabels}
      />
    </div>
  );
}
