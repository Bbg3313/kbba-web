"use client";

import { useActionState } from "react";
import { signInAdminAction, type AdminAuthActionState } from "@/app/admin/actions";
import type { Locale } from "@/i18n/routing";

const initialAdminAuthState: AdminAuthActionState = {
  error: null,
};

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex min-h-11 items-center justify-center rounded-full bg-rose-600 px-5 text-sm font-semibold text-white transition hover:bg-rose-500"
    >
      {pending ? "Signing in..." : "Sign in"}
    </button>
  );
}

export function AdminLoginForm({ locale }: { locale: Locale }) {
  const [state, formAction, pending] = useActionState(
    signInAdminAction,
    initialAdminAuthState,
  );

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="locale" value={locale} />
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-slate-900">
          Email
        </label>
        <input
          name="email"
          type="email"
          autoComplete="email"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none ring-rose-300/40 transition placeholder:text-slate-400 focus:border-rose-300 focus:ring-2"
          placeholder="admin@example.com"
          required
        />
      </div>
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-slate-900">
          Password
        </label>
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none ring-rose-300/40 transition focus:border-rose-300 focus:ring-2"
          required
        />
      </div>
      {state.error ? (
        <p className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
          {state.error}
        </p>
      ) : null}
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-slate-500">
          Sign in with a Supabase Auth account that is listed in the{" "}
          <code className="rounded bg-slate-100 px-1 py-0.5 text-[11px] text-slate-700">
            ADMIN_EMAILS
          </code>{" "}
          allowlist.
        </p>
        <div className={pending ? "opacity-70" : ""}>
          <SubmitButton pending={pending} />
        </div>
      </div>
    </form>
  );
}
