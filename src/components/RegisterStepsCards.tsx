import { FileCheck2, MessageCircleMore, Rocket } from "lucide-react";

function StepIconVisual({
  Icon,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  return (
    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-rose-100/90 bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100 text-pink-700 shadow-sm shadow-rose-100/30 sm:h-14 sm:w-14">
      <Icon className="h-5 w-5 sm:h-7 sm:w-7" strokeWidth={1.9} />
    </div>
  );
}

const steps = [
  {
    n: "01",
    title: "Register",
    desc: "Fill the form or contact our team.",
    Icon: MessageCircleMore,
  },
  {
    n: "02",
    title: "Contract & training",
    desc: "Complete the agreed onboarding steps.",
    Icon: FileCheck2,
  },
  {
    n: "03",
    title: "Launch your agency",
    desc: "Ongoing support after you graduate.",
    Icon: Rocket,
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
          <StepIconVisual Icon={Icon} />
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
