import { FileCheck2, MessageCircleMore, Rocket } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";

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

type RegisterStepsCardsProps = {
  gridClassName: string;
  cardClassName: string;
  copy: Dictionary["shared"]["registerSteps"]["steps"];
};

const stepIcons = [MessageCircleMore, FileCheck2, Rocket] as const;

export function RegisterStepsCards({ gridClassName, cardClassName, copy }: RegisterStepsCardsProps) {
  return (
    <div className={gridClassName}>
      {copy.map(({ n, title, desc }, index) => {
        const Icon = stepIcons[index] ?? Rocket;

        return (
          <div key={n} className={cardClassName}>
            <StepIconVisual Icon={Icon} />
            <p className="font-display mt-2 text-2xl font-semibold text-pink-600 sm:mt-4 sm:text-[2rem]">
              {n}
            </p>
            <h3 className="font-display mt-1 min-h-[1.8rem] text-pretty text-[0.82rem] font-semibold leading-snug text-rose-950 sm:min-h-[2.75rem] sm:text-lg">
              {title}
            </h3>
            <p className="mt-1.5 min-h-[3.1rem] text-pretty text-[0.68rem] leading-relaxed text-rose-900/75 sm:mt-2 sm:min-h-0 sm:text-sm">
              {desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}
