import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";

const statImageSources = [
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=640&h=480&q=82",
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=640&h=480&q=82",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=640&h=480&q=82",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=640&h=480&q=82",
] as const;

const badgeGradients: readonly { a: string; b: string; c: string }[] = [
  { a: "#fb7185", b: "#f472b6", c: "#e11d48" },
  { a: "#f9a8d4", b: "#ec4899", c: "#be185d" },
  { a: "#e879f9", b: "#d946ef", c: "#a21caf" },
  { a: "#fda4af", b: "#f43f5e", c: "#9d174d" },
] as const;

function StatPhotoVisual({
  imageSrc,
  imageAlt,
  index,
}: {
  imageSrc: string;
  imageAlt: string;
  index: number;
}) {
  const g = badgeGradients[index] ?? badgeGradients[0];

  return (
    <div
      className="mx-auto w-full max-w-[11rem] rounded-2xl p-[3px] shadow-[0_14px_32px_-10px_rgba(225,29,72,0.38)] sm:max-w-[12rem]"
      style={{
        background: `linear-gradient(135deg, ${g.a}, ${g.b} 45%, ${g.c})`,
      }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[13px] bg-rose-50 ring-1 ring-white/90">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 45vw, 12rem"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-950/25 via-transparent to-white/10"
          aria-hidden
        />
      </div>
    </div>
  );
}

type HomeAcademyIntroBlockProps = {
  copy: Dictionary["home"]["academyIntro"];
};

export function HomeAcademyIntroBlock({ copy }: HomeAcademyIntroBlockProps) {
  return (
    <div className="mt-2 border-t border-rose-100/60 pt-8 sm:mt-0 sm:border-t-0 sm:pt-0">
      <div className="relative overflow-hidden rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#fffdfa] via-[#fffaf6] to-[#fff8fb] p-4 shadow-sm shadow-rose-100/20 sm:p-6 lg:p-7">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_42%),linear-gradient(to_right,rgba(120,53,15,0.05)_1px,transparent_1px)] bg-[length:100%_100%,32px_32px] opacity-60" />
          <div className="absolute left-6 right-6 top-5 flex items-center justify-between text-[0.56rem] font-semibold uppercase tracking-[0.26em] text-stone-400/90 sm:left-8 sm:right-8">
            <span>{copy.editorialLeft}</span>
            <span>{copy.editorialRight}</span>
          </div>
          <div className="absolute left-1/2 top-11 h-px w-[calc(100%-3rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-stone-300/70 to-transparent sm:w-[calc(100%-4rem)]" />
          <div className="absolute bottom-5 left-8 right-8 h-px bg-gradient-to-r from-transparent via-rose-200/80 to-transparent" />
          <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-rose-100/25 blur-3xl" />
        </div>

        <div className="relative flex flex-col items-center gap-4 pt-8 sm:gap-5 sm:pt-9">
          <Image
            src="/images/logos/kbba-header.svg"
            alt="KBBA — Korea Beauty Business Academy wordmark"
            width={340}
            height={150}
            className="h-auto w-full max-w-[240px] object-contain sm:max-w-[280px] lg:max-w-[300px]"
          />
        </div>
        <p className="relative mx-auto mt-5 max-w-4xl text-pretty text-sm leading-relaxed text-rose-900/80 sm:mt-6 sm:text-base sm:leading-[1.7] lg:text-justify">
          <span className="font-semibold text-pink-600">{copy.introParts.brand}</span>
          {copy.introParts.beforeHospitals}
          <span className="font-semibold text-pink-600">{copy.introParts.hospitalCount}</span>
          {copy.introParts.beforeExperience}
          <span className="font-semibold text-pink-600">{copy.introParts.experienceYears}</span>
          {copy.introParts.afterExperience}
        </p>
      </div>

      <ul className="mt-8 grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:mt-10 lg:grid-cols-4 lg:gap-5">
        {copy.stats.map(({ value, label, imageAlt }, index) => (
          <li
            key={value}
            className="flex min-w-0 flex-col items-center rounded-2xl border border-rose-100/90 bg-white/90 px-3 py-4 text-center shadow-sm shadow-rose-100/15 sm:px-5 sm:py-5"
          >
            <StatPhotoVisual imageSrc={statImageSources[index] ?? statImageSources[0]} imageAlt={imageAlt} index={index} />
            <p className="mt-3 font-display text-xl font-semibold tracking-tight text-rose-950 sm:mt-4 sm:text-[1.65rem]">
              {value}
            </p>
            <p className="mt-2 text-pretty text-[0.72rem] leading-relaxed text-rose-900/70 sm:text-sm">{label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
