"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { MainSectionEyebrow } from "@/components/MainSectionEyebrow";
import { SocialBrandIconRow } from "@/components/SocialBrandIconRow";
import { SITE_PHONE_KR } from "@/data/site-contact";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { localizeHref, type Locale } from "@/i18n/routing";

/** Bright, airy interiors — minimal overlay so photos stay light. */
const LEFT_BG =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=82";
const RIGHT_BG = "/images/reviews/gallery/consultation-room.png";

type FormValues = {
  fullName: string;
  nickname: string;
  facebook: string;
  lineId: string;
  email: string;
  phone: string;
  course: Dictionary["shared"]["consultForm"]["courseOptions"][number]["value"] | "";
  hearAbout: Dictionary["shared"]["consultForm"]["hearAboutOptions"][number]["value"] | "";
};

const inputShell =
  "w-full min-w-0 rounded-xl border border-rose-200 bg-white px-4 py-2.5 text-sm text-rose-950 outline-none ring-rose-300/40 transition placeholder:text-rose-400 focus:border-rose-300 focus:ring-2 focus:ring-rose-300/50";

type HomeConsultRegisterSectionProps = {
  locale: Locale;
  copy: Dictionary["shared"]["consultForm"];
  socialLabels: Dictionary["shell"]["socialLabels"];
};

export function HomeConsultRegisterSection({
  locale,
  copy,
  socialLabels,
}: HomeConsultRegisterSectionProps) {
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
      className="scroll-mt-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="w-full overflow-hidden rounded-none border-rose-100/80 shadow-[0_20px_50px_-36px_rgba(190,24,93,0.2)] lg:mb-0 lg:mt-2 lg:rounded-2xl lg:border lg:border-rose-100/90">
          <div className="grid min-h-0 lg:grid-cols-12">
            {/* Brand column */}
            <div className="relative order-1 flex min-h-[15.5rem] flex-col justify-between px-6 py-8 sm:min-h-[17rem] sm:px-8 sm:py-10 lg:order-none lg:col-span-4 lg:min-h-[22rem] lg:px-8 lg:py-10">
            <Image
              src={LEFT_BG}
              alt=""
              fill
              className="object-cover object-[18%_center] sm:object-[14%_center] lg:scale-105 lg:object-[12%_center]"
              sizes="(max-width: 1024px) 100vw, 36vw"
              priority={false}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-white/92 via-white/78 to-rose-50/55"
              aria-hidden
            />
            <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-between gap-6 pl-0.5 pr-1 sm:pl-1">
              <div className="min-w-0 max-w-full">
                <p className="font-display text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-pink-600 sm:text-[0.65rem]">
                  {copy.brandEyebrow}
                </p>
                <h2
                  id="consult-register-heading"
                  className="font-display mt-2 max-w-[16rem] text-pretty text-xl font-semibold leading-snug tracking-tight text-rose-950 sm:max-w-none sm:text-2xl"
                >
                  {copy.brandTitle[0]}
                  <br />
                  {copy.brandTitle[1]}
                </h2>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-rose-700/80">{copy.phoneLabel}</p>
                <p className="mt-1 text-sm font-medium text-rose-950">
                  <a
                    href={`tel:${SITE_PHONE_KR.replace(/\s/g, "")}`}
                    className="hover:text-pink-700"
                  >
                    {SITE_PHONE_KR}
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-rose-700/80">{copy.socialLabel}</p>
                <SocialBrandIconRow size="lg" className="mt-2" labels={socialLabels} />
              </div>
            </div>
            </div>

            {/* Form column */}
            <div className="relative order-2 border-t border-rose-100/80 bg-white lg:col-span-8 lg:border-l lg:border-t-0">
            <Image
              src={RIGHT_BG}
              alt=""
              fill
              className="object-cover opacity-[0.04]"
              sizes="(max-width: 1024px) 100vw, 62vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-rose-50/35 to-white" aria-hidden />
            <div className="relative z-10 px-6 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
              <MainSectionEyebrow label={copy.eyebrow} />
              <h3 className="font-display text-pretty text-xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-2xl">
                {copy.title}
              </h3>
              <p className="mt-2 text-pretty text-xs leading-relaxed text-rose-900/75 sm:text-sm">
                {copy.description}
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-4 sm:mt-6 sm:space-y-5" noValidate>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-4">
                  <div className="min-w-0">
                    <label className="block text-sm font-medium text-rose-900">
                      {copy.fields.fullName}
                    </label>
                    <input
                      type="text"
                      autoComplete="name"
                      placeholder={copy.fields.fullNamePlaceholder}
                      className={`${inputShell} mt-1.5`}
                      {...register("fullName")}
                    />
                  </div>
                  <div className="min-w-0">
                    <label className="block text-sm font-medium text-rose-900">
                      {copy.fields.nickname}
                    </label>
                    <input
                      type="text"
                      autoComplete="nickname"
                      placeholder={copy.fields.nicknamePlaceholder}
                      className={`${inputShell} mt-1.5`}
                      {...register("nickname")}
                    />
                  </div>
                  <div className="min-w-0">
                    <label className="block text-sm font-medium text-rose-900">
                      {copy.fields.facebook}
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder={copy.fields.facebookPlaceholder}
                      className={`${inputShell} mt-1.5`}
                      {...register("facebook")}
                    />
                  </div>
                  <div className="min-w-0">
                    <label className="block text-sm font-medium text-rose-900">
                      {copy.fields.lineId} <span className="text-pink-600">{copy.requiredMark}</span>
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder={copy.fields.lineIdPlaceholder}
                      className={`${inputShell} mt-1.5 ${errors.lineId ? "border-rose-500 bg-rose-50/50" : ""}`}
                      {...register("lineId", { required: copy.errors.lineIdRequired })}
                    />
                    {errors.lineId ? (
                      <p className="mt-1 text-xs text-rose-600">{errors.lineId.message}</p>
                    ) : null}
                  </div>
                </div>

                <div className="min-w-0">
                  <label className="block text-sm font-medium text-rose-900">
                    {copy.fields.email} <span className="text-pink-600">{copy.requiredMark}</span>
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder={copy.fields.emailPlaceholder}
                    className={`${inputShell} mt-1.5 ${errors.email ? "border-rose-500 bg-rose-50/50" : ""}`}
                    {...register("email", {
                      required: copy.errors.emailRequired,
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: copy.errors.emailInvalid,
                      },
                    })}
                  />
                  {errors.email ? (
                    <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p>
                  ) : null}
                </div>

                <div className="max-w-md min-w-0">
                  <label className="block text-sm font-medium text-rose-900">
                    {copy.fields.phone} <span className="text-pink-600">{copy.requiredMark}</span>
                  </label>
                  <input
                    type="tel"
                    autoComplete="tel"
                    placeholder={copy.fields.phonePlaceholder}
                    className={`${inputShell} mt-1.5 ${errors.phone ? "border-rose-500 bg-rose-50/50" : ""}`}
                    {...register("phone", { required: copy.errors.phoneRequired })}
                  />
                  {errors.phone ? (
                    <p className="mt-1 text-xs text-rose-600">{errors.phone.message}</p>
                  ) : null}
                </div>

                <fieldset className="min-w-0">
                  <legend className="text-sm font-medium text-rose-900">
                    {copy.fields.selectCourse} <span className="text-pink-600">{copy.requiredMark}</span>
                  </legend>
                  <div className="mt-2 space-y-1.5 rounded-xl border border-rose-100/90 bg-rose-50/40 p-3 shadow-sm">
                    {copy.courseOptions.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex cursor-pointer gap-2.5 rounded-lg p-1.5 text-xs text-rose-900/90 transition hover:bg-white/90 sm:text-sm"
                      >
                        <input
                          type="radio"
                          value={opt.value}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-pink-600"
                          {...register("course", { required: copy.errors.courseRequired })}
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
                  <legend className="text-sm font-medium text-rose-900">
                    {copy.fields.howDidYouFindUs}
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-4">
                    {copy.hearAboutOptions.map((opt) => (
                      <label
                        key={opt.value}
                        className="inline-flex cursor-pointer items-center gap-2 text-sm text-rose-900/85"
                      >
                        <input
                          type="radio"
                          value={opt.value}
                          className="h-4 w-4 accent-pink-600"
                          {...register("hearAbout")}
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="flex flex-col items-stretch gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-h-10 items-center justify-center rounded-full bg-gradient-to-r from-rose-600 to-pink-600 px-8 text-center text-xs font-semibold text-white shadow-lg shadow-rose-300/35 transition hover:from-rose-500 hover:to-pink-500 disabled:opacity-60 sm:min-h-11 sm:px-9 sm:text-sm"
                  >
                    {isSubmitting ? copy.submitBusy : copy.submitIdle}
                  </button>
                  <Link
                    href={localizeHref(locale, "/#hero")}
                    className="text-center text-sm font-semibold text-pink-700 underline-offset-4 hover:text-rose-800 hover:underline sm:text-right"
                  >
                    {copy.backToTop}
                  </Link>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
