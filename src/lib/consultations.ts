import { en } from "@/i18n/dictionaries/en";
import { th } from "@/i18n/dictionaries/th";
import type { Locale } from "@/i18n/routing";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { hasSupabaseEnv } from "@/lib/supabase/env";

const dictionaries = { en, th } as const;
const tableName = "consultation_submissions";

export const consultationStatuses = ["new", "contacted", "qualified", "closed"] as const;
export type ConsultationStatus = (typeof consultationStatuses)[number];

type ConsultationInsertInput = {
  locale: Locale;
  fullName: string;
  nickname: string;
  facebook: string;
  lineId: string;
  email: string;
  phone: string;
  course: string;
  hearAbout: string;
};

export type ConsultationSubmissionRecord = {
  id: string;
  locale: Locale;
  full_name: string | null;
  nickname: string | null;
  facebook: string | null;
  line_id: string;
  email: string;
  phone: string;
  course: string;
  course_label: string;
  hear_about: string | null;
  hear_about_label: string | null;
  status: ConsultationStatus;
  admin_note: string | null;
  submitted_at: string;
};

const previewSubmissions: ConsultationSubmissionRecord[] = [
  {
    id: "preview-seed-1",
    locale: "en",
    full_name: "Nina S.",
    nickname: "Nina",
    facebook: "nina.beauty.consult",
    line_id: "@ninaagency",
    email: "nina@example.com",
    phone: "+66-81-222-3456",
    course: "agency-study-tour",
    course_label: "Agency programme with a study tour in Korea",
    hear_about: "facebook",
    hear_about_label: "Facebook",
    status: "new",
    admin_note: "Preview sample entry for layout review.",
    submitted_at: new Date(Date.now() - 1000 * 60 * 48).toISOString(),
  },
];

function getLocalizedLabel(
  locale: Locale,
  type: "course" | "hearAbout",
  value: string,
) {
  const dictionary = dictionaries[locale].shared.consultForm;
  const options =
    type === "course" ? dictionary.courseOptions : dictionary.hearAboutOptions;

  return options.find((option) => option.value === value)?.label ?? value;
}

function createSubmissionPayload(input: ConsultationInsertInput) {
  return {
    locale: input.locale,
    full_name: input.fullName || null,
    nickname: input.nickname || null,
    facebook: input.facebook || null,
    line_id: input.lineId,
    email: input.email,
    phone: input.phone,
    course: input.course,
    course_label: getLocalizedLabel(input.locale, "course", input.course),
    hear_about: input.hearAbout || null,
    hear_about_label: input.hearAbout
      ? getLocalizedLabel(input.locale, "hearAbout", input.hearAbout)
      : null,
  };
}

export async function createConsultationSubmission(input: ConsultationInsertInput) {
  const payload = createSubmissionPayload(input);

  if (!hasSupabaseEnv()) {
    previewSubmissions.unshift({
      id: crypto.randomUUID(),
      ...payload,
      status: "new",
      admin_note: null,
      submitted_at: new Date().toISOString(),
    });
    return;
  }

  const supabase = createSupabaseAdminClient();

  const { error } = await supabase.from(tableName).insert(payload);

  if (error) {
    throw error;
  }
}

export async function listConsultationSubmissions() {
  if (!hasSupabaseEnv()) {
    return [...previewSubmissions];
  }

  const supabase = createSupabaseAdminClient();
  const { data, error } = await supabase
    .from(tableName)
    .select("*")
    .order("submitted_at", { ascending: false });

  if (error) {
    throw error;
  }

  return (data ?? []) as ConsultationSubmissionRecord[];
}

export async function updateConsultationSubmission(
  id: string,
  updates: {
    status: ConsultationStatus;
    adminNote: string;
  },
) {
  if (!hasSupabaseEnv()) {
    const previewSubmission = previewSubmissions.find((item) => item.id === id);

    if (!previewSubmission) {
      throw new Error("Preview submission not found.");
    }

    previewSubmission.status = updates.status;
    previewSubmission.admin_note = updates.adminNote || null;
    return;
  }

  const supabase = createSupabaseAdminClient();
  const { error } = await supabase
    .from(tableName)
    .update({
      status: updates.status,
      admin_note: updates.adminNote || null,
    })
    .eq("id", id);

  if (error) {
    throw error;
  }
}
