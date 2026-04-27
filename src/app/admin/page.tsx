import type { Metadata } from "next";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { signOutAdminAction, updateSubmissionAction } from "@/app/admin/actions";
import {
  consultationStatuses,
  listConsultationSubmissions,
} from "@/lib/consultations";
import { getAdminSession } from "@/lib/admin-auth";
import { getRequestLocale } from "@/i18n/server";
import { getMissingSupabaseEnvNames, hasSupabaseEnv } from "@/lib/supabase/env";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
  },
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function formatStatusLabel(status: string) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export default async function AdminPage() {
  const locale = await getRequestLocale();

  if (!hasSupabaseEnv()) {
    const missingVars = getMissingSupabaseEnvNames();
    const submissions = await listConsultationSubmissions();
    const newCount = submissions.filter((item) => item.status === "new").length;
    const activeCount = submissions.filter(
      (item) => item.status === "contacted" || item.status === "qualified",
    ).length;

    return (
      <main className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_30px_100px_-45px_rgba(15,23,42,0.28)] sm:p-7">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-600">
                  KBBA Admin
                </p>
                <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Consultation submissions
                </h1>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Preview mode only. Connect Supabase later to enable login and
                  live consultation data.
                </p>
              </div>
              <span className="inline-flex min-h-11 items-center justify-center rounded-full border border-amber-200 bg-amber-50 px-5 text-sm font-semibold text-amber-800">
                Preview mode
              </span>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-950">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                Missing values
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {missingVars.map((name) => (
                  <code
                    key={name}
                    className="rounded-full bg-white px-3 py-1 text-xs text-amber-950"
                  >
                    {name}
                  </code>
                ))}
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Total
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">
                  {submissions.length}
                </p>
              </article>
              <article className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-600">
                  New
                </p>
                <p className="mt-2 text-2xl font-semibold text-rose-950">
                  {newCount}
                </p>
              </article>
              <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Active
                </p>
                <p className="mt-2 text-2xl font-semibold text-emerald-950">
                  {activeCount}
                </p>
              </article>
            </div>
          </div>

          <section className="mt-6 space-y-4">
            {submissions.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Dashboard preview
                </p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                  Submission cards will appear here after you test the home form
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                  Submit the consultation form once on the home page, then come
                  back here to review how the entry is displayed.
                </p>
              </div>
            ) : (
              submissions.map((submission) => (
                <article
                  key={submission.id}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_70px_-48px_rgba(15,23,42,0.32)]"
                >
                  <div className="grid gap-5 xl:grid-cols-[minmax(0,1.5fr)_minmax(20rem,1fr)]">
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Submitted
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          {formatDate(submission.submitted_at)}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Locale
                        </p>
                        <p className="mt-2 text-sm font-medium uppercase text-slate-900">
                          {submission.locale}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Status
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          {formatStatusLabel(submission.status)}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Name
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          {submission.full_name || "-"}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          Nickname: {submission.nickname || "-"}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Contact
                        </p>
                        <p className="mt-2 break-all text-sm font-medium text-slate-900">
                          {submission.email}
                        </p>
                        <p className="mt-1 text-sm text-slate-700">
                          {submission.phone}
                        </p>
                        <p className="mt-1 text-sm text-slate-700">
                          LINE: {submission.line_id}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Discovery
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          {submission.hear_about_label || "-"}
                        </p>
                        <p className="mt-1 break-all text-xs text-slate-500">
                          Facebook: {submission.facebook || "-"}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4 sm:col-span-2 xl:col-span-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Course interest
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          {submission.course_label}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          Value: {submission.course}
                        </p>
                      </div>
                    </div>

                    <form
                      action={updateSubmissionAction}
                      className="rounded-3xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <input type="hidden" name="locale" value={locale} />
                      <input type="hidden" name="id" value={submission.id} />
                      <div className="space-y-1.5">
                        <label className="block text-sm font-medium text-slate-900">
                          Status
                        </label>
                        <select
                          name="status"
                          defaultValue={submission.status}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-rose-300/40 transition focus:border-rose-300 focus:ring-2"
                        >
                          {consultationStatuses.map((status) => (
                            <option key={status} value={status}>
                              {formatStatusLabel(status)}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mt-4 space-y-1.5">
                        <label className="block text-sm font-medium text-slate-900">
                          Internal note
                        </label>
                        <textarea
                          name="adminNote"
                          defaultValue={submission.admin_note ?? ""}
                          rows={7}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-rose-300/40 transition focus:border-rose-300 focus:ring-2"
                          placeholder="Add follow-up notes for the team..."
                        />
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button
                          type="submit"
                          className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                        >
                          Save update
                        </button>
                      </div>
                    </form>
                  </div>
                </article>
              ))
            )}
          </section>
        </div>
      </main>
    );
  }

  const { user, isAdmin } = await getAdminSession();

  if (!user) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-md items-center px-4 py-12 sm:px-6">
        <section className="w-full rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-600">
            KBBA Admin
          </p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            Sign in to review consultation requests
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            This area is hidden from public navigation and only approved
            administrators can access submission data.
          </p>
          <div className="mt-6">
            <AdminLoginForm locale={locale} />
          </div>
        </section>
      </main>
    );
  }

  if (!isAdmin) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-lg items-center px-4 py-12 sm:px-6">
        <section className="w-full rounded-3xl border border-amber-200 bg-amber-50 p-7 text-amber-950 shadow-[0_24px_80px_-40px_rgba(120,53,15,0.35)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
            Access denied
          </p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight">
            Your account is not on the KBBA admin allowlist
          </h1>
          <p className="mt-2 text-sm leading-6 text-amber-900/80">
            Ask the site owner to add your email address to{" "}
            <code className="rounded bg-white/80 px-1 py-0.5 text-xs text-amber-900">
              ADMIN_EMAILS
            </code>{" "}
            before trying again.
          </p>
          <form action={signOutAdminAction} className="mt-6">
            <input type="hidden" name="locale" value={locale} />
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Sign out
            </button>
          </form>
        </section>
      </main>
    );
  }

  const submissions = await listConsultationSubmissions();
  const newCount = submissions.filter((item) => item.status === "new").length;
  const activeCount = submissions.filter(
    (item) => item.status === "contacted" || item.status === "qualified",
  ).length;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_30px_100px_-45px_rgba(15,23,42,0.28)] sm:p-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-600">
                KBBA Admin
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Consultation submissions
              </h1>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Logged in as {user.email}
              </p>
            </div>
            <form action={signOutAdminAction}>
              <input type="hidden" name="locale" value={locale} />
              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-100"
              >
                Sign out
              </button>
            </form>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Total
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">
                {submissions.length}
              </p>
            </article>
            <article className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-600">
                New
              </p>
              <p className="mt-2 text-2xl font-semibold text-rose-950">
                {newCount}
              </p>
            </article>
            <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Active
              </p>
              <p className="mt-2 text-2xl font-semibold text-emerald-950">
                {activeCount}
              </p>
            </article>
          </div>
        </div>

        <section className="mt-6 space-y-4">
          {submissions.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center text-sm text-slate-500">
              No consultation submissions yet.
            </div>
          ) : (
            submissions.map((submission) => (
              <article
                key={submission.id}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_70px_-48px_rgba(15,23,42,0.32)]"
              >
                <div className="grid gap-5 xl:grid-cols-[minmax(0,1.5fr)_minmax(20rem,1fr)]">
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Submitted
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-900">
                        {formatDate(submission.submitted_at)}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Locale
                      </p>
                      <p className="mt-2 text-sm font-medium uppercase text-slate-900">
                        {submission.locale}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Status
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-900">
                        {formatStatusLabel(submission.status)}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Name
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-900">
                        {submission.full_name || "-"}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Nickname: {submission.nickname || "-"}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Contact
                      </p>
                      <p className="mt-2 break-all text-sm font-medium text-slate-900">
                        {submission.email}
                      </p>
                      <p className="mt-1 text-sm text-slate-700">
                        {submission.phone}
                      </p>
                      <p className="mt-1 text-sm text-slate-700">
                        LINE: {submission.line_id}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Discovery
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-900">
                        {submission.hear_about_label || "-"}
                      </p>
                      <p className="mt-1 break-all text-xs text-slate-500">
                        Facebook: {submission.facebook || "-"}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4 sm:col-span-2 xl:col-span-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Course interest
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-900">
                        {submission.course_label}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Value: {submission.course}
                      </p>
                    </div>
                  </div>

                  <form
                    action={updateSubmissionAction}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <input type="hidden" name="locale" value={locale} />
                    <input type="hidden" name="id" value={submission.id} />
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-slate-900">
                        Status
                      </label>
                      <select
                        name="status"
                        defaultValue={submission.status}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-rose-300/40 transition focus:border-rose-300 focus:ring-2"
                      >
                        {consultationStatuses.map((status) => (
                          <option key={status} value={status}>
                            {formatStatusLabel(status)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mt-4 space-y-1.5">
                      <label className="block text-sm font-medium text-slate-900">
                        Internal note
                      </label>
                      <textarea
                        name="adminNote"
                        defaultValue={submission.admin_note ?? ""}
                        rows={7}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-rose-300/40 transition focus:border-rose-300 focus:ring-2"
                        placeholder="Add follow-up notes for the team..."
                      />
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        Save update
                      </button>
                    </div>
                  </form>
                </div>
              </article>
            ))
          )}
        </section>
      </div>
    </main>
  );
}
