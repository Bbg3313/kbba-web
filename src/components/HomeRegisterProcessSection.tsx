import { RegisterStepsCards } from "@/components/RegisterStepsCards";

/** “How to register” strip above the home consultation form — matches START NOW flow. */
export function HomeRegisterProcessSection() {
  return (
    <div id="register-process" aria-labelledby="register-process-heading">
      <div className="mx-auto min-w-0 w-full max-w-6xl px-4 pb-2 pt-10 sm:px-6 sm:pb-3 sm:pt-12 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600 sm:text-[0.7rem]">
          START NOW
        </p>
        <h2
          id="register-process-heading"
          className="font-display mt-2 text-pretty text-2xl font-bold tracking-tight text-pink-700 sm:text-3xl lg:text-[2rem]"
        >
          How to register with KBBA
        </h2>
        <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-rose-900/75 sm:text-base">
          Register, complete your contract and training, then launch with our team behind you.
        </p>

        <RegisterStepsCards
          gridClassName="mt-8 grid min-w-0 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5"
          cardClassName="min-w-0 rounded-2xl border border-rose-100/90 bg-white/95 px-4 pb-5 pt-6 text-center shadow-sm shadow-rose-100/30 sm:px-5 sm:pb-6 sm:pt-7"
        />
      </div>
    </div>
  );
}
