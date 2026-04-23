import Image from "next/image";

type StatKind = "travel" | "support" | "network" | "credential";

const stats = [
  {
    kind: "travel" as const,
    value: "30,000++",
    label: "Thai travellers choosing Korean plastic surgery each year (industry scale)",
  },
  {
    kind: "support" as const,
    value: "3,000++",
    label: "Estimated market demand for professional surgery agency services",
  },
  {
    kind: "network" as const,
    value: "60++",
    label: "Network access to leading Korean plastic surgery hospitals",
  },
  {
    kind: "credential" as const,
    value: "99%",
    label: "Strong track record supporting legal certification pathways for graduates",
  },
] as const;

const badgeGradients: readonly { a: string; b: string; c: string }[] = [
  { a: "#fb7185", b: "#f472b6", c: "#e11d48" },
  { a: "#f9a8d4", b: "#ec4899", c: "#be185d" },
  { a: "#e879f9", b: "#d946ef", c: "#a21caf" },
  { a: "#fda4af", b: "#f43f5e", c: "#9d174d" },
] as const;

function AcademyStatGlyph({
  kind,
  strokeRef,
  softFill,
  sealGradientId,
}: {
  kind: StatKind;
  strokeRef: string;
  softFill: string;
  sealGradientId: string;
}) {
  const s = { stroke: strokeRef, strokeWidth: 1.65, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (kind) {
    case "travel":
      return (
        <g>
          <path
            d="M6 32c4-10 12-16 22-14s10 6 12 10"
            stroke={strokeRef}
            strokeWidth={1.25}
            fill="none"
            strokeLinecap="round"
            opacity={0.22}
          />
          <ellipse cx="17" cy="17" rx="3.2" ry="3.4" fill={softFill} stroke={strokeRef} strokeWidth={1.4} />
          <path
            d="M12.5 35v-1c0-3 1.8-5.5 4.5-6.8s4.2-1 6.5-.6M23 22l2.5 1.2M23 22l2.4-1.3"
            {...s}
            strokeWidth={1.5}
          />
          <path
            d="M27 11.5l7-3.2M31.5 7.8v6.4M34 11.5h-5.2"
            stroke={strokeRef}
            strokeWidth={1.55}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="31" cy="16" r="1.15" fill={strokeRef} opacity={0.35} />
        </g>
      );
    case "support":
      return (
        <g>
          <path
            d="M10 20.5c0-5 4.3-9 12-9s12 4 12 9v5.2a2.4 2.4 0 0 1-2.4 2.4h-1.6"
            {...s}
            strokeWidth={1.55}
          />
          <path d="M12 24.5v6.2a2.3 2.3 0 0 0 2.3 2.3h2" {...s} strokeWidth={1.55} />
          <path d="M34 24.5v4.5a2.3 2.3 0 0 1-2.3 2.3h-2.2" {...s} strokeWidth={1.55} />
          <path d="M22 30v5.5" {...s} strokeWidth={1.45} />
          <path d="M18 35.5h8" {...s} strokeWidth={1.35} opacity={0.42} />
          <path d="M15 17v5.2M19.5 17.5v4.5M24 17v5.2M28.5 17.5v4.5" stroke={strokeRef} strokeWidth={1.4} strokeLinecap="round" opacity={0.5} />
        </g>
      );
    case "network":
      return (
        <g>
          <path
            d="M14 10h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2Z"
            fill={softFill}
            stroke={strokeRef}
            strokeWidth={1.55}
            strokeLinejoin="round"
          />
          <path d="M22 15v6M19 18h6" stroke={strokeRef} strokeWidth={1.85} strokeLinecap="round" />
          <path d="M10 18h2M32 18h2M10 26h2M32 26h2" stroke={strokeRef} strokeWidth={1.35} strokeLinecap="round" opacity={0.4} />
          <circle cx="22" cy="28" r="1.35" fill={strokeRef} opacity={0.25} />
          <path
            d="M7 14c-1.2 0-2 1-2 2.2v11.6c0 1.2.8 2.2 2 2.2M37 14c1.2 0 2 1 2 2.2v11.6c0 1.2-.8 2.2-2 2.2"
            stroke={strokeRef}
            strokeWidth={1.25}
            fill="none"
            strokeLinecap="round"
            opacity={0.35}
          />
        </g>
      );
    case "credential":
      return (
        <g>
          <path d="M12 9h20v22l-4-2.5-4 2.5-4-2.5-4 2.5V9Z" fill={softFill} stroke={strokeRef} strokeWidth={1.55} strokeLinejoin="round" />
          <path d="M16 14h12M16 18h10M16 22h8" stroke={strokeRef} strokeWidth={1.15} strokeLinecap="round" opacity={0.4} />
          <circle cx="22" cy="8.5" r="3.6" fill={`url(#${sealGradientId})`} stroke={strokeRef} strokeWidth={1.35} />
          <path d="M22 6.8v3.4M20.1 8.5h3.8" stroke="#fff" strokeWidth={1.1} strokeLinecap="round" opacity={0.9} />
          <path d="m18.2 26.2 2.2 2.2 5.6-5.6" stroke={strokeRef} strokeWidth={1.55} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
  }
}

function StatIconBadge({ kind, index }: { kind: StatKind; index: number }) {
  const ringId = `stat-ring-${index}`;
  const strokeId = `stat-stroke-${index}`;
  const softId = `stat-soft-${index}`;
  const sealId = `stat-cred-seal-${index}`;
  const g = badgeGradients[index] ?? badgeGradients[0];

  return (
    <div
      className="relative flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl p-[3px] shadow-[0_14px_32px_-10px_rgba(225,29,72,0.42)]"
      style={{
        background: `linear-gradient(135deg, ${g.a}, ${g.b} 45%, ${g.c})`,
      }}
    >
      <div className="flex h-full w-full items-center justify-center rounded-[13px] bg-gradient-to-b from-white via-white to-rose-50/90 ring-1 ring-rose-100/80">
        <svg className="h-10 w-10" viewBox="0 0 44 44" fill="none" aria-hidden>
          <defs>
            <linearGradient id={ringId} x1="6" y1="4" x2="38" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor={g.a} />
              <stop offset="0.5" stopColor={g.b} />
              <stop offset="1" stopColor={g.c} />
            </linearGradient>
            <linearGradient id={strokeId} x1="8" y1="6" x2="36" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9f1239" />
              <stop offset="1" stopColor="#881337" />
            </linearGradient>
            <radialGradient id={softId} cx="50%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#fff1f2" />
              <stop offset="1" stopColor="#ffe4e6" stopOpacity={0.85} />
            </radialGradient>
            <radialGradient id={sealId} cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor={g.a} />
              <stop offset="0.55" stopColor={g.b} />
              <stop offset="1" stopColor={g.c} />
            </radialGradient>
          </defs>
          <circle cx="22" cy="22" r="19" fill={`url(#${softId})`} stroke={`url(#${ringId})`} strokeOpacity={0.35} strokeWidth={1} />
          <g transform="translate(2 2)">
            <AcademyStatGlyph
              kind={kind}
              strokeRef={`url(#${strokeId})`}
              softFill={`url(#${softId})`}
              sealGradientId={sealId}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function HomeAcademyIntroBlock() {
  return (
    <div className="mt-2 border-t border-rose-100/60 pt-8 sm:mt-0 sm:border-t-0 sm:pt-0">
      <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-white via-rose-50/30 to-fuchsia-50/25 p-5 shadow-sm shadow-rose-100/20 sm:p-7 lg:p-8">
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:gap-10">
          <Image
            src="/images/logos/kbba-header.svg"
            alt="KBBA — Korea Beauty Business Academy wordmark"
            width={340}
            height={150}
            className="h-auto w-full max-w-[240px] object-contain sm:max-w-[280px] lg:max-w-[300px]"
          />
          <h3 className="max-w-xl text-center font-display text-pretty text-xl font-semibold leading-tight text-rose-950 sm:text-2xl lg:text-left lg:text-3xl">
            Korea Beauty Business Academy
          </h3>
        </div>
        <p className="mx-auto mt-6 max-w-4xl text-pretty text-sm leading-relaxed text-rose-900/80 sm:text-base sm:leading-[1.7] lg:mt-8 lg:text-justify">
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

      <ul className="mt-8 grid min-w-0 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
        {stats.map(({ kind, value, label }, index) => (
          <li
            key={value}
            className="flex min-w-0 flex-col items-center rounded-2xl border border-rose-100/90 bg-white/90 px-4 py-5 text-center shadow-sm shadow-rose-100/15 sm:px-5"
          >
            <StatIconBadge kind={kind} index={index} />
            <p className="mt-4 font-display text-2xl font-semibold tracking-tight text-rose-950 sm:text-[1.65rem]">
              {value}
            </p>
            <p className="mt-2 text-pretty text-xs leading-relaxed text-rose-900/70 sm:text-sm">{label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
