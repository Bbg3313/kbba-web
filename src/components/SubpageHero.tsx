type SubpageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SubpageHero({ eyebrow, title, subtitle }: SubpageHeroProps) {
  return (
    <div className="border-b border-rose-100/80 bg-gradient-to-br from-fuchsia-50/90 via-rose-50/85 to-amber-50/40 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-pink-600">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display mt-2 text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-rose-900/75 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
