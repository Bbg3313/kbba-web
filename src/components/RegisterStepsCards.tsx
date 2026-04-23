type StepIconProps = { className?: string };

/** 01 Register — clipboard checklist = fill the application form. */
function IconRegister({ className }: StepIconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="20" className="fill-rose-100 stroke-rose-200/90" strokeWidth="1.5" />
      <path
        d="M18 10h12v3h2.5a2 2 0 0 1 2 2v21a2 2 0 0 1-2 2H15.5a2 2 0 0 1-2-2V15a2 2 0 0 1 2-2H18v-3Z"
        className="stroke-rose-900"
        strokeWidth="1.85"
        strokeLinejoin="round"
      />
      <path d="M20 10v3h8v-3" className="stroke-rose-900" strokeWidth="1.85" strokeLinecap="round" />
      <path d="M16.5 19h3.2v3h-3.2z" className="stroke-pink-600" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M21.5 20.5h10" className="stroke-rose-700" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16.5 24.5h3.2v3h-3.2z" className="stroke-rose-700" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M21.5 26h8.5" className="stroke-rose-700" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16.5 30h3.2v3h-3.2z" className="stroke-rose-700" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M21.5 31.5h7" className="stroke-rose-700" strokeWidth="1.6" strokeLinecap="round" />
      {/* Envelope — contact the team */}
      <path d="M26 13.5h10v7H26z" className="stroke-pink-600" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M26 13.5 31 17.5 36 13.5" className="stroke-pink-600" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** 02 Contract & training — document + signature (contract) and open book (training). */
function IconContractTraining({ className }: StepIconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="20" className="fill-rose-100 stroke-rose-200/90" strokeWidth="1.5" />
      {/* Contract (left) */}
      <path
        d="M9.5 14.5h12.5v19H9.5a1.5 1.5 0 0 1-1.5-1.5V16a1.5 1.5 0 0 1 1.5-1.5Z"
        className="stroke-rose-900"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M11.5 18.5h7.5M11.5 21.5h9M11.5 24.5h6" className="stroke-rose-700" strokeWidth="1.45" strokeLinecap="round" />
      <path
        d="M11 28.5c1.2-.8 2.2.4 3.5 0s2.3-1.6 3.8-1 2 2 3.5 1.2"
        className="stroke-pink-600"
        strokeWidth="1.65"
        strokeLinecap="round"
      />
      <path d="M17 26.5l3-3.5" className="stroke-rose-900" strokeWidth="1.5" strokeLinecap="round" />
      {/* Open book (right) — training / onboarding materials */}
      <path
        d="M24 17.5c-3.8 1-6.2 3.8-6.2 7.5v8.2H24V17.5Z"
        className="stroke-rose-900"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M24 17.5c3.8 1 6.2 3.8 6.2 7.5v8.2H24V17.5Z"
        className="stroke-rose-900"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M24 17.5V33.2" className="stroke-rose-700/85" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20.2 21.8h3.2M28.6 21.8h3.2M20.2 25h2.8M29 25h2.8" className="stroke-rose-700/65" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

/** 03 Launch your agency — storefront: open your own agency / office. */
function IconLaunch({ className }: StepIconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="20" className="fill-rose-100 stroke-rose-200/90" strokeWidth="1.5" />
      {/* Awning */}
      <path d="M11 19h26v2.5H11V19Z" className="stroke-rose-900" strokeWidth="1.75" strokeLinejoin="round" />
      <path
        d="M11 21.5h4.3l3.2-2.5 3.3 2.5 3.2-2.5 3.3 2.5 3.2-2.5 4.7 2.5"
        className="stroke-pink-600"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Shop front */}
      <path d="M12 21.5h24V36H12V21.5Z" className="stroke-rose-900" strokeWidth="1.85" strokeLinejoin="round" />
      <path d="M20 36V28.5a1.8 1.8 0 0 1 1.8-1.8h4.4a1.8 1.8 0 0 1 1.8 1.8V36" className="stroke-pink-600" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M14.5 25h4v3.2h-4V25ZM29.5 25h4v3.2h-4V25Z" className="stroke-rose-700" strokeWidth="1.45" strokeLinejoin="round" />
      <path d="M33 15l1.8 3.2 3.5 1-3.5 1L33 23.5l-1.8-3.2-3.5-1 3.5-1L33 15Z" className="stroke-pink-600" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

const steps = [
  {
    n: "01",
    title: "Register",
    desc: "Fill the form or contact our team.",
    Icon: IconRegister,
  },
  {
    n: "02",
    title: "Contract & training",
    desc: "Complete the agreed onboarding steps.",
    Icon: IconContractTraining,
  },
  {
    n: "03",
    title: "Launch your agency",
    desc: "Ongoing support after you graduate.",
    Icon: IconLaunch,
  },
] as const;

type RegisterStepsCardsProps = {
  gridClassName: string;
  cardClassName: string;
};

export function RegisterStepsCards({ gridClassName, cardClassName }: RegisterStepsCardsProps) {
  return (
    <div className={gridClassName}>
      {steps.map(({ n, title, desc, Icon }) => (
        <div key={n} className={cardClassName}>
          <Icon className="mx-auto h-14 w-14 shrink-0 sm:h-16 sm:w-16" />
          <p className="font-display mt-3 text-3xl font-semibold text-pink-600 sm:mt-4 sm:text-[2rem]">{n}</p>
          <h3 className="font-display mt-1 text-pretty text-base font-semibold text-rose-950 sm:text-lg">{title}</h3>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-rose-900/75">{desc}</p>
        </div>
      ))}
    </div>
  );
}
