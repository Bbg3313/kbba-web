type SubpageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SubpageHero({ eyebrow, title, subtitle }: SubpageHeroProps) {
  return (
    <div className="border-b border-rose-100/80 bg-gradient-to-br from-fuchsia-50/90 via-rose-50/85 to-amber-50/40 text-left">
      <div className="mx-auto min-w-0 max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        {eyebrow ? (
          <p className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-pink-600 sm:text-xs sm:tracking-[0.28em]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display mt-2 text-pretty text-[clamp(1.4rem,5vw,2.25rem)] font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-4xl sm:leading-snug">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-3xl min-w-0 text-pretty text-sm leading-relaxed text-rose-900/75 sm:text-base sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
