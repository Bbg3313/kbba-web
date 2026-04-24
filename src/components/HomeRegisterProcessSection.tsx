import { RegisterStepsCards } from "@/components/RegisterStepsCards";
import { MainSectionEyebrow } from "@/components/MainSectionEyebrow";
import type { Dictionary } from "@/i18n/dictionaries/en";

/** “How to register” strip above the home consultation form — matches START NOW flow. */
type HomeRegisterProcessSectionProps = {
  copy: Dictionary["shared"]["registerSteps"];
};

export function HomeRegisterProcessSection({ copy }: HomeRegisterProcessSectionProps) {
  return (
    <div id="register-process" aria-labelledby="register-process-heading">
      <div className="mx-auto min-w-0 w-full max-w-6xl px-4 pb-2 pt-10 sm:px-6 sm:pb-3 sm:pt-12 lg:px-8">
        <MainSectionEyebrow label={copy.eyebrow} />
        <h2
          id="register-process-heading"
          className="font-display mt-2 text-pretty text-2xl font-bold tracking-tight text-pink-700 sm:text-3xl lg:text-[2rem]"
        >
          {copy.title}
        </h2>
        <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-rose-900/75 sm:text-base">
          {copy.description}
        </p>

        <RegisterStepsCards
          gridClassName="mt-8 grid min-w-0 grid-cols-3 gap-2 sm:mt-10 sm:gap-4 md:gap-5"
          cardClassName="flex h-full min-w-0 flex-col rounded-2xl border border-rose-100/90 bg-white/95 px-2.5 pb-3.5 pt-4 text-center shadow-sm shadow-rose-100/30 sm:px-5 sm:pb-6 sm:pt-7"
          copy={copy.steps}
        />
      </div>
    </div>
  );
}
