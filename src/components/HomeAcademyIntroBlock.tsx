import Image from "next/image";

const stats = [
  {
    value: "30,000++",
    label: "Thai travellers choosing Korean plastic surgery each year (industry scale)",
    imageSrc:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=640&h=480&q=82",
    imageAlt: "View from an airplane window, symbolising travel to Korea for medical care",
  },
  {
    value: "3,000++",
    label: "Estimated market demand for professional surgery agency services",
    imageSrc:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=640&h=480&q=82",
    imageAlt:
      "Doctor consulting with a patient in a clinic, representing demand for professional plastic surgery agency and coordination services",
  },
  {
    value: "60++",
    label: "Network access to leading Korean plastic surgery hospitals",
    imageSrc:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=640&h=480&q=82",
    imageAlt: "Bright modern hospital corridor, representing partner hospital network",
  },
  {
    value: "99%",
    label: "Strong track record supporting legal certification pathways for graduates",
    imageSrc:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=640&h=480&q=82",
    imageAlt: "Graduates celebrating with diplomas, symbolising certification success",
  },
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

export function HomeAcademyIntroBlock() {
  return (
    <div className="mt-2 border-t border-rose-100/60 pt-8 sm:mt-0 sm:border-t-0 sm:pt-0">
      <div className="relative overflow-hidden rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#fffdf8] via-[#fffaf5] to-[#fff7fb] p-5 shadow-sm shadow-rose-100/20 sm:p-7 lg:p-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-[0.28] [background-image:linear-gradient(to_right,rgba(120,53,15,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,53,15,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute -left-10 top-5 rotate-[-8deg] rounded-sm border border-stone-300/70 bg-white/70 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-stone-500 shadow-sm">
            Seoul Edition
          </div>
          <div className="absolute right-6 top-8 hidden rounded-sm border border-stone-300/70 bg-white/70 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-stone-500 shadow-sm sm:block">
            Beauty Business Journal
          </div>
          <div className="absolute -right-16 bottom-6 h-28 w-28 rounded-full border border-rose-200/60 bg-rose-100/30 blur-2xl" />
          <div className="absolute left-10 top-20 h-px w-28 rotate-[12deg] bg-stone-300/70" />
          <div className="absolute right-16 bottom-16 h-px w-24 rotate-[-10deg] bg-stone-300/70" />
        </div>

        <div className="relative flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:gap-10">
          <Image
            src="/images/logos/kbba-header.svg"
            alt="KBBA — Korea Beauty Business Academy wordmark"
            width={340}
            height={150}
            className="h-auto w-full max-w-[240px] object-contain sm:max-w-[280px] lg:max-w-[300px]"
          />
        </div>
        <p className="relative mx-auto mt-6 max-w-4xl text-pretty text-sm leading-relaxed text-rose-900/80 sm:text-base sm:leading-[1.7] lg:mt-8 lg:text-justify">
          <span className="font-semibold text-pink-600">KBBA</span> is a training and support hub for launching
          beauty businesses, built through partnerships between leading institutes in South Korea and Thailand.
          We help you succeed in the international beauty industry by connecting your operations with{" "}
          <span className="font-semibold text-pink-600">60+</span> leading plastic surgery hospitals in Korea.
          You can start legally and move quickly—with hospital coordinator pathways aligned to expectations in
          Korea. With more than <span className="font-semibold text-pink-600">10</span> years of expertise in
          the Korean plastic surgery agency field, our intensive programmes are structured so you can operate
          without heavy extra capital. A dedicated support team backs beauty ventures in both Thailand and
          Korea.
        </p>
      </div>

      <ul className="mt-8 grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:mt-10 lg:grid-cols-4 lg:gap-5">
        {stats.map(({ value, label, imageSrc, imageAlt }, index) => (
          <li
            key={value}
            className="flex min-w-0 flex-col items-center rounded-2xl border border-rose-100/90 bg-white/90 px-3 py-4 text-center shadow-sm shadow-rose-100/15 sm:px-5 sm:py-5"
          >
            <StatPhotoVisual imageSrc={imageSrc} imageAlt={imageAlt} index={index} />
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
