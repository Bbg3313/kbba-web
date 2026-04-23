"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  SITE_ADDRESS_SEOUL_START,
  SITE_EMAIL_FORM,
  SITE_PHONE_KR,
} from "@/data/site-contact";
import { SITE_FACEBOOK_URL, SITE_INSTAGRAM_URL, SITE_LINE_URL } from "@/data/site-links";

const LEFT_BG =
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80";
const RIGHT_BG =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80";

const COURSE_OPTIONS = [
  {
    value: "compliant-agency",
    label: "Compliant Korean plastic surgery agency programme",
  },
  {
    value: "agency-study-tour",
    label: "Agency programme with a study tour in Korea",
  },
  {
    value: "surgeon-training",
    label: "Skills training with Korean plastic surgeons",
  },
] as const;

const HEAR_ABOUT = [
  { value: "facebook", label: "Facebook" },
  { value: "online-ads", label: "Online ads" },
  { value: "friend", label: "Friend referral" },
] as const;

type FormValues = {
  fullName: string;
  nickname: string;
  facebook: string;
  lineId: string;
  email: string;
  phone: string;
  course: (typeof COURSE_OPTIONS)[number]["value"] | "";
  hearAbout: (typeof HEAR_ABOUT)[number]["value"] | "";
};

const inputShell =
  "w-full min-w-0 rounded-t-lg border-0 border-b-2 border-violet-500/80 bg-[#E8FBF4] px-3 py-2.5 text-sm text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-violet-700 focus:bg-[#dff8ef]";

export function HomeConsultRegisterSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      nickname: "",
      facebook: "",
      lineId: "",
      email: "",
      phone: "",
      course: "",
      hearAbout: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    // TODO: send to Supabase when backend is ready
    await new Promise((r) => setTimeout(r, 400));
    console.info("[consult form]", data);
  };

  return (
    <section
      id="consult-register"
      aria-labelledby="consult-register-heading"
      className="scroll-mt-28 border-t border-rose-100/80 bg-slate-100/40"
    >
      <div className="mx-auto grid min-h-0 max-w-6xl overflow-hidden rounded-none shadow-[0_40px_100px_-48px_rgba(15,23,42,0.35)] lg:my-10 lg:rounded-3xl lg:border lg:border-slate-200/60">
        <div className="grid min-h-0 lg:grid-cols-12">
          {/* Brand column */}
          <div className="relative order-1 flex min-h-[22rem] flex-col justify-between bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12 lg:order-none lg:col-span-5 lg:min-h-[36rem] lg:px-8 lg:py-14">
            <Image
              src={LEFT_BG}
              alt=""
              fill
              className="object-cover brightness-[0.45] contrast-[1.05] grayscale"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/88 via-slate-900/80 to-violet-950/55" aria-hidden />
            <div className="relative z-10 flex flex-1 flex-col justify-between gap-10">
              <div>
                <p className="font-serif text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-white/70 sm:text-xs">
                  Korea Beauty Business Academy
                </p>
                <h2
                  id="consult-register-heading"
                  className="font-serif mt-4 text-pretty text-2xl font-semibold leading-snug tracking-wide text-white sm:text-3xl"
                >
                  KOREA BEAUTY
                  <br />
                  BUSINESS ACADEMY
                </h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-white/85">
                <p className="text-pretty">{SITE_ADDRESS_SEOUL_START}</p>
                <p>
                  <a href={`tel:${SITE_PHONE_KR.replace(/\s/g, "")}`} className="hover:text-white">
                    {SITE_PHONE_KR}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${SITE_EMAIL_FORM}`} className="break-all hover:text-white">
                    {SITE_EMAIL_FORM}
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={SITE_FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/25 p-2.5 text-white transition hover:border-white/50 hover:bg-white/10"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={SITE_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/25 p-2.5 text-white transition hover:border-white/50 hover:bg-white/10"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href={SITE_LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/25 p-2.5 text-white transition hover:border-white/50 hover:bg-white/10"
                  aria-label="LINE"
                >
                  <Image
                    src="/images/shared/line-icon.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 brightness-0 invert"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="relative order-2 bg-white lg:col-span-7">
            <Image
              src={RIGHT_BG}
              alt=""
              fill
              className="object-cover opacity-[0.07]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-violet-50/30 to-emerald-50/20" aria-hidden />
            <div className="relative z-10 px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
              <h3 className="font-display text-pretty text-2xl font-bold tracking-tight text-violet-700 sm:text-3xl">
                Consultation &amp; registration
              </h3>
              <p className="mt-2 text-pretty text-sm text-slate-600">
                Tell us how to reach you. We will follow up with course options and next steps.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="min-w-0">
                    <label className="block text-xs font-semibold uppercase tracking-wide text-violet-800/90">
                      Full name
                    </label>
                    <input
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      className={`${inputShell} mt-1.5`}
                      {...register("fullName")}
                    />
                  </div>
                  <div className="min-w-0">
                    <label className="block text-xs font-semibold uppercase tracking-wide text-violet-800/90">
                      Nickname
                    </label>
                    <input
                      type="text"
                      autoComplete="nickname"
                      placeholder="Nickname"
                      className={`${inputShell} mt-1.5`}
                      {...register("nickname")}
                    />
                  </div>
                  <div className="min-w-0">
                    <label className="block text-xs font-semibold uppercase tracking-wide text-violet-800/90">
                      Facebook profile
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Facebook profile name or URL"
                      className={`${inputShell} mt-1.5`}
                      {...register("facebook")}
                    />
                  </div>
                  <div className="min-w-0">
                    <label className="block text-xs font-semibold uppercase tracking-wide text-violet-800/90">
                      Line ID <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Enter your LINE ID"
                      className={`${inputShell} mt-1.5 ${errors.lineId ? "border-rose-500 bg-rose-50/50" : ""}`}
                      {...register("lineId", { required: "LINE ID is required" })}
                    />
                    {errors.lineId ? (
                      <p className="mt-1 text-xs text-rose-600">{errors.lineId.message}</p>
                    ) : null}
                  </div>
                </div>

                <div className="min-w-0">
                  <label className="block text-xs font-semibold uppercase tracking-wide text-violet-800/90">
                    Email <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="e.g. name@example.com"
                    className={`${inputShell} mt-1.5 ${errors.email ? "border-rose-500 bg-rose-50/50" : ""}`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                  {errors.email ? (
                    <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p>
                  ) : null}
                </div>

                <div className="max-w-md min-w-0">
                  <label className="block text-xs font-semibold uppercase tracking-wide text-violet-800/90">
                    Phone number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    autoComplete="tel"
                    placeholder="e.g. +66-81-234-5678"
                    className={`${inputShell} mt-1.5 ${errors.phone ? "border-rose-500 bg-rose-50/50" : ""}`}
                    {...register("phone", { required: "Phone number is required" })}
                  />
                  {errors.phone ? (
                    <p className="mt-1 text-xs text-rose-600">{errors.phone.message}</p>
                  ) : null}
                </div>

                <fieldset className="min-w-0">
                  <legend className="text-xs font-semibold uppercase tracking-wide text-violet-800/90">
                    Select course <span className="text-rose-600">*</span>
                  </legend>
                  <div className="mt-3 space-y-2.5 rounded-xl border border-violet-100/90 bg-white/70 p-4 shadow-sm">
                    {COURSE_OPTIONS.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex cursor-pointer gap-3 rounded-lg p-2 text-sm text-slate-800 transition hover:bg-[#E8FBF4]/80"
                      >
                        <input
                          type="radio"
                          value={opt.value}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-violet-600"
                          {...register("course", { required: "Please select a course" })}
                        />
                        <span className="text-pretty leading-snug">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.course ? (
                    <p className="mt-1 text-xs text-rose-600">{errors.course.message}</p>
                  ) : null}
                </fieldset>

                <fieldset className="min-w-0">
                  <legend className="text-xs font-semibold uppercase tracking-wide text-violet-800/90">
                    How did you find us?
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-4">
                    {HEAR_ABOUT.map((opt) => (
                      <label
                        key={opt.value}
                        className="inline-flex cursor-pointer items-center gap-2 text-sm text-slate-800"
                      >
                        <input
                          type="radio"
                          value={opt.value}
                          className="h-4 w-4 accent-violet-600"
                          {...register("hearAbout")}
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-500 px-10 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-600 disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending…" : "Apply now"}
                  </button>
                  <Link
                    href="#hero"
                    className="text-center text-sm font-semibold text-violet-600 underline-offset-4 hover:text-violet-800 hover:underline sm:text-right"
                  >
                    Back to top
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
