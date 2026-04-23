import Image from "next/image";

function IconTravelers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 20v-1a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconHeadset({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 14v3a2 2 0 0 0 2 2h1v-6H6a1 1 0 0 0-1 1Zm14 0v3a2 2 0 0 1-2 2h-1v-6h2a1 1 0 0 1 1 1Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M4 14a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconHospital({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconCertificate({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 4h10a1 1 0 0 1 1 1v12l-3-2-3 2-3-2-3 2V5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="m10 9 1.5 1.5L14 8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const stats = [
  {
    icon: IconTravelers,
    value: "30,000++",
    label: "Thai travellers choosing Korean plastic surgery each year (industry scale)",
  },
  {
    icon: IconHeadset,
    value: "3,000++",
    label: "Estimated market demand for professional surgery agency services",
  },
  {
    icon: IconHospital,
    value: "60++",
    label: "Network access to leading Korean plastic surgery hospitals",
  },
  {
    icon: IconCertificate,
    value: "99%",
    label: "Strong track record supporting legal certification pathways for graduates",
  },
] as const;

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
        {stats.map(({ icon: Icon, value, label }) => (
          <li
            key={value}
            className="flex min-w-0 flex-col items-center rounded-2xl border border-rose-100/90 bg-white/90 px-4 py-5 text-center shadow-sm shadow-rose-100/15 sm:px-5"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white shadow-md shadow-zinc-900/20">
              <Icon className="h-7 w-7" />
            </span>
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
