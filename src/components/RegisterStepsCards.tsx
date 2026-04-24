import { BookOpen, ClipboardList, FilePen, Mail, Store } from "lucide-react";

const stroke = 1.65;

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-rose-200/90 bg-rose-100 shadow-sm shadow-rose-100/30 sm:h-16 sm:w-16">
      {children}
    </div>
  );
}

/** 01 — form (clipboard) + contact (mail), Lucide icons */
function StepRegisterIcons() {
  return (
    <IconCircle>
      <span className="flex items-center justify-center gap-0.5" aria-hidden>
        <ClipboardList className="h-[0.95rem] w-[0.95rem] text-rose-950 sm:h-6 sm:w-6" strokeWidth={stroke} />
        <Mail className="h-[0.9rem] w-[0.9rem] text-pink-700 sm:h-[1.35rem] sm:w-[1.35rem]" strokeWidth={stroke} />
      </span>
    </IconCircle>
  );
}

/** 02 — signed agreement + course materials, Lucide icons */
function StepContractIcons() {
  return (
    <IconCircle>
      <span className="flex items-center justify-center gap-0.5" aria-hidden>
        <FilePen className="h-[0.95rem] w-[0.95rem] text-rose-950 sm:h-6 sm:w-6" strokeWidth={stroke} />
        <BookOpen className="h-[0.9rem] w-[0.9rem] text-pink-700 sm:h-[1.35rem] sm:w-[1.35rem]" strokeWidth={stroke} />
      </span>
    </IconCircle>
  );
}

/** 03 — open your agency / business, Lucide Store */
function StepLaunchIcon() {
  return (
    <IconCircle>
      <Store className="h-5 w-5 text-rose-950 sm:h-8 sm:w-8" strokeWidth={stroke} aria-hidden />
    </IconCircle>
  );
}

const steps = [
  {
    n: "01",
    title: "Register",
    desc: "Fill the form or contact our team.",
    Visual: StepRegisterIcons,
  },
  {
    n: "02",
    title: "Contract & training",
    desc: "Complete the agreed onboarding steps.",
    Visual: StepContractIcons,
  },
  {
    n: "03",
    title: "Launch your agency",
    desc: "Ongoing support after you graduate.",
    Visual: StepLaunchIcon,
  },
] as const;

type RegisterStepsCardsProps = {
  gridClassName: string;
  cardClassName: string;
};

export function RegisterStepsCards({ gridClassName, cardClassName }: RegisterStepsCardsProps) {
  return (
    <div className={gridClassName}>
      {steps.map(({ n, title, desc, Visual }) => (
        <div key={n} className={cardClassName}>
          <Visual />
          <p className="font-display mt-2 text-2xl font-semibold text-pink-600 sm:mt-4 sm:text-[2rem]">{n}</p>
          <h3 className="font-display mt-1 min-h-[1.8rem] text-pretty text-[0.82rem] font-semibold leading-snug text-rose-950 sm:min-h-[2.75rem] sm:text-lg">
            {title}
          </h3>
          <p className="mt-1.5 min-h-[3.1rem] text-pretty text-[0.68rem] leading-relaxed text-rose-900/75 sm:mt-2 sm:min-h-0 sm:text-sm">
            {desc}
          </p>
        </div>
      ))}
    </div>
  );
}
