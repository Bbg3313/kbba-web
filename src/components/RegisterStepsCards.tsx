type StepIconProps = { className?: string };

function IconRegister({ className }: StepIconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="20" className="fill-rose-100 stroke-rose-200/90" strokeWidth="1.5" />
      <path
        d="M17 14h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H17a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2Z"
        className="stroke-rose-900"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M19 20h10M19 24h10M19 28h6" className="stroke-rose-700" strokeWidth="1.75" strokeLinecap="round" />
      <path
        d="M26 32h6l2 2v-4h-4"
        className="stroke-pink-600"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconContractTraining({ className }: StepIconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="20" className="fill-rose-100 stroke-rose-200/90" strokeWidth="1.5" />
      <path
        d="M16 17h18v14H16a2 2 0 0 1-2-2V19a2 2 0 0 1 2-2Z"
        className="stroke-rose-900"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M18 22h12M18 26h9" className="stroke-rose-700" strokeWidth="1.75" strokeLinecap="round" />
      <path
        d="M28 30.5 31 33.5 36 26.5"
        className="stroke-pink-600"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 33l4-3" className="stroke-rose-900" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconLaunch({ className }: StepIconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="20" className="fill-rose-100 stroke-rose-200/90" strokeWidth="1.5" />
      <path
        d="M22 14c8 4 12 10 12 18-4-2-8-3-12-3s-8 1-12 3c0-8 4-14 12-18Z"
        className="stroke-rose-900"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M22 22v6M19 25h6" className="stroke-pink-600" strokeWidth="1.75" strokeLinecap="round" />
      <path
        d="M30 12v5M27.5 14.5h5"
        className="stroke-pink-600"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
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
