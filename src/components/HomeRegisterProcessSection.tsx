const steps = [
  { n: "01", title: "Register", desc: "Fill the form or contact our team." },
  { n: "02", title: "Contract & training", desc: "Complete the agreed onboarding steps." },
  { n: "03", title: "Launch your agency", desc: "Ongoing support after you graduate." },
] as const;

/** “How to register” strip above the home consultation form — matches START NOW flow. */
export function HomeRegisterProcessSection() {
  return (
    <div id="register-process" aria-labelledby="register-process-heading">
      <div className="mx-auto min-w-0 max-w-5xl px-4 pb-2 pt-10 sm:px-6 sm:pb-3 sm:pt-12 lg:px-8">
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

        <div className="mt-8 grid min-w-0 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="min-w-0 rounded-2xl border border-rose-100/90 bg-white/95 p-5 text-center shadow-sm shadow-rose-100/30 sm:p-6"
            >
              <p className="font-display text-3xl font-semibold text-pink-600 sm:text-[2rem]">{s.n}</p>
              <h3 className="font-display mt-2 text-pretty text-base font-semibold text-rose-950 sm:text-lg">
                {s.title}
              </h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-rose-900/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
