"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  consultationStatuses,
  updateConsultationSubmission,
} from "@/lib/consultations";
import { isAdminEmail } from "@/lib/admin-auth";
import { defaultLocale, isLocale, type Locale } from "@/i18n/routing";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type AdminAuthActionState = {
  error: string | null;
};

function normalizeLocale(value: FormDataEntryValue | null): Locale {
  return typeof value === "string" && isLocale(value) ? value : defaultLocale;
}

function getTrimmedFormValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function redirectToAdmin(locale: Locale) {
  redirect(`/${locale}/admin`);
}

export async function signInAdminAction(
  _prevState: AdminAuthActionState,
  formData: FormData,
): Promise<AdminAuthActionState> {
  const locale = normalizeLocale(formData.get("locale"));
  const email = getTrimmedFormValue(formData, "email");
  const password = getTrimmedFormValue(formData, "password");

  if (!email || !password) {
    return { error: "Enter both email and password." };
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: error.message };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!isAdminEmail(user?.email)) {
    await supabase.auth.signOut();
    return { error: "This account is not allowed to access the admin area." };
  }

  redirectToAdmin(locale);
  return { error: null };
}

export async function signOutAdminAction(formData: FormData) {
  const locale = normalizeLocale(formData.get("locale"));
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirectToAdmin(locale);
}

export async function updateSubmissionAction(formData: FormData) {
  const locale = normalizeLocale(formData.get("locale"));
  const id = getTrimmedFormValue(formData, "id");
  const status = getTrimmedFormValue(formData, "status");
  const adminNote = getTrimmedFormValue(formData, "adminNote");

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!isAdminEmail(user?.email)) {
    redirectToAdmin(locale);
  }

  if (!id || !consultationStatuses.includes(status as (typeof consultationStatuses)[number])) {
    throw new Error("Invalid submission update.");
  }

  await updateConsultationSubmission(id, {
    status: status as (typeof consultationStatuses)[number],
    adminNote,
  });

  revalidatePath(`/${locale}/admin`);
}
