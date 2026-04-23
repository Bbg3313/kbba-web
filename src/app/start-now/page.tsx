import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { SubpageHero } from "@/components/SubpageHero";
import { SITE_EMAIL_FORM, SITE_PHONE_KR, SITE_ADDRESS_SEOUL_START } from "@/data/site-contact";
import { SITE_FACEBOOK_URL, SITE_LINE_URL } from "@/data/site-links";

export const metadata: Metadata = {
  title: "START NOW",
  description: "How to register for KBBA training — steps and contact details.",
};

const steps = [
  { n: "01", title: "Register", desc: "Fill the form or contact our team." },
  { n: "02", title: "Contract & training", desc: "Complete the agreed onboarding steps." },
  { n: "03", title: "Launch your agency", desc: "Ongoing support after you graduate." },
] as const;

const courseOptions = [
  "Compliant Korean plastic surgery agency programme",
  "Agency programme with study tour in Korea",
  "Skills training with Korean plastic surgeons",
] as const;

const hearAbout = ["Facebook", "Online ads", "Friend referral", "Other"] as const;

export default function StartNowPage() {
  return (
    <SiteShell>
      <SubpageHero
        eyebrow="START NOW"
        title="How to register with KBBA"
        subtitle="Register, complete your contract and training, then launch with our team behind you."
      />

      <section className="border-b border-rose-100/60 bg-white/90 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-rose-100/90 bg-gradient-to-b from-rose-50/50 to-white p-6 text-center shadow-sm"
            >
              <p className="font-display text-3xl font-semibold text-pink-600">{s.n}</p>
              <h2 className="mt-2 font-display text-pretty text-lg font-semibold text-rose-950">{s.title}</h2>
              <p className="mt-2 text-sm text-rose-900/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-rose-50/40 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-pretty text-xl font-semibold text-rose-950 sm:text-2xl">
            KOREA BEAUTY BUSINESS ACADEMY
          </h2>
          <address className="mt-4 not-italic break-words text-sm leading-relaxed text-rose-900/80">
            {SITE_ADDRESS_SEOUL_START}
            <br />
            <a href={`tel:${SITE_PHONE_KR.replace(/\s/g, "")}`} className="font-medium text-pink-700">
              {SITE_PHONE_KR}
            </a>
            <br />
            <a href={`mailto:${SITE_EMAIL_FORM}`} className="text-pink-700">
              {SITE_EMAIL_FORM}
            </a>
          </address>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SITE_LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#06C755] px-4 py-2 text-sm font-semibold text-white"
            >
              LINE
            </a>
            <a
              href={SITE_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#1877F2] px-4 py-2 text-sm font-semibold text-white"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-display text-pretty text-xl font-semibold text-rose-950">Consult &amp; register</h2>
        <form className="mt-8 space-y-4" action="#" method="post">
          {(
            [
              ["Full name", "name", "text"],
              ["Preferred name", "nickname", "text"],
              ["Facebook profile name", "facebook", "text"],
              ["Line ID", "line", "text"],
              ["E-mail", "email", "email"],
              ["Phone", "phone", "tel"],
            ] as const
          ).map(([label, name, type]) => (
            <label key={name} className="block min-w-0">
              <span className="text-sm font-medium text-rose-900">{label}</span>
              <input
                name={name}
                type={type}
                autoComplete="on"
                className="mt-1 w-full min-w-0 rounded-xl border border-rose-200 bg-white px-4 py-2.5 text-sm text-rose-950 outline-none ring-rose-300/40 focus:ring-2"
              />
            </label>
          ))}
          <label className="block min-w-0">
            <span className="text-sm font-medium text-rose-900">Course *</span>
            <select
              name="course"
              required
              className="mt-1 w-full min-w-0 rounded-xl border border-rose-200 bg-white px-4 py-2.5 text-sm text-rose-950 outline-none ring-rose-300/40 focus:ring-2"
              defaultValue=""
            >
              <option value="" disabled>
                Select a course
              </option>
              {courseOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
          <fieldset>
            <legend className="text-sm font-medium text-rose-900">How did you hear about KBBA?</legend>
            <div className="mt-2 flex flex-wrap gap-4">
              {hearAbout.map((h) => (
                <label key={h} className="flex min-w-0 items-center gap-2 text-sm text-rose-900/85">
                  <input type="radio" name="hear" value={h} className="text-pink-600" />
                  {h}
                </label>
              ))}
            </div>
          </fieldset>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-rose-600 to-pink-600 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-300/35 transition hover:from-rose-500 hover:to-pink-500 sm:w-auto sm:px-10"
          >
            Submit registration
          </button>
        </form>
      </section>
    </SiteShell>
  );
}
