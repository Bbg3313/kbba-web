export function OfficialPartnerBanner() {
  return (
    <section
      id="official"
      aria-labelledby="official-partner-heading"
      className="bg-gradient-to-b from-pink-50/95 via-rose-50/92 to-rose-50/70"
    >
      <div className="mx-auto min-w-0 max-w-6xl px-4 pb-5 pt-10 text-center sm:px-6 sm:pb-6 lg:px-8">
        <p className="text-pretty text-xs font-semibold uppercase tracking-[0.2em] text-pink-600 sm:tracking-[0.28em]">
          OFFICIAL PARTNER
        </p>
        <h2
          id="official-partner-heading"
          className="font-display mt-3 text-pretty text-lg font-semibold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-fuchsia-800 sm:text-2xl sm:leading-normal"
        >
          KBBA officially connects you with leading Korean hospitals and clinics
        </h2>
        <p className="mx-auto mt-4 max-w-3xl min-w-0 text-pretty text-sm leading-relaxed text-rose-900/75 sm:text-base">
          KBBA works formally with education institutes and more than 40 top-tier plastic surgery
          providers in South Korea — so your training and business operations meet a serious standard.
        </p>
      </div>
    </section>
  );
}
