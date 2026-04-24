import type { Metadata } from "next";
import { buildPageMetadata } from "@/i18n/metadata";
import { getRequestDictionary } from "@/i18n/server";
import { SiteShell } from "@/components/SiteShell";
import { SubpageHero } from "@/components/SubpageHero";
import { HomeConsultRegisterSection } from "@/components/HomeConsultRegisterSection";
import { RegisterStepsCards } from "@/components/RegisterStepsCards";
import { SITE_EMAIL_FORM, SITE_PHONE_KR, SITE_ADDRESS_SEOUL_START } from "@/data/site-contact";
import { SITE_FACEBOOK_URL, SITE_LINE_URL } from "@/data/site-links";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, dictionary } = await getRequestDictionary();
  return buildPageMetadata({
    locale,
    title: dictionary.startNow.meta.title,
    description: dictionary.startNow.meta.description,
    pathname: "/start-now",
  });
}

export default async function StartNowPage() {
  const { locale, dictionary } = await getRequestDictionary();

  return (
    <SiteShell>
      <SubpageHero
        eyebrow={dictionary.startNow.hero.eyebrow}
        title={dictionary.startNow.hero.title}
        subtitle={dictionary.startNow.hero.subtitle}
      />

      <section className="border-b border-rose-100/60 bg-white/90 py-12">
        <RegisterStepsCards
          gridClassName="mx-auto grid min-w-0 w-full max-w-6xl grid-cols-1 items-stretch gap-3 px-4 md:grid-cols-3 md:gap-4 sm:px-6 lg:gap-5 lg:px-8"
          cardClassName="flex h-full min-h-0 min-w-0 flex-col rounded-2xl border border-rose-100/90 bg-gradient-to-b from-rose-50/50 to-white px-4 pb-6 pt-6 text-center shadow-sm sm:px-5 sm:pb-7 sm:pt-7"
          copy={dictionary.shared.registerSteps.steps}
        />
      </section>

      <section className="bg-gradient-to-b from-rose-50/40 to-white py-12 sm:py-16">
        <div className="mx-auto min-w-0 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-pretty text-xl font-semibold text-rose-950 sm:text-2xl">
            {dictionary.startNow.contactBlock.academyTitle}
          </h2>
          <address className="mt-4 not-italic text-pretty break-words text-sm leading-relaxed text-rose-900/80">
            {SITE_ADDRESS_SEOUL_START}
            <br />
            <a href={`tel:${SITE_PHONE_KR.replace(/\s/g, "")}`} className="font-medium text-pink-700">
              {SITE_PHONE_KR}
            </a>
            <br />
            <a href={`mailto:${SITE_EMAIL_FORM}`} className="text-pink-700">
              {SITE_EMAIL_FORM}
            </a>
          </address>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SITE_LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#06C755] px-4 py-2 text-sm font-semibold text-white"
            >
              {dictionary.startNow.contactBlock.lineLabel}
            </a>
            <a
              href={SITE_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#1877F2] px-4 py-2 text-sm font-semibold text-white"
            >
              {dictionary.startNow.contactBlock.facebookLabel}
            </a>
          </div>
        </div>
      </section>

      <HomeConsultRegisterSection
        locale={locale}
        copy={dictionary.shared.consultForm}
        socialLabels={dictionary.shell.socialLabels}
      />
    </SiteShell>
  );
}
