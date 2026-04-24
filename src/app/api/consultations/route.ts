import { NextResponse } from "next/server";
import {
  createConsultationSubmission,
} from "@/lib/consultations";
import { defaultLocale, isLocale, type Locale } from "@/i18n/routing";

type ConsultationRequestBody = {
  locale?: string;
  fullName?: string;
  nickname?: string;
  facebook?: string;
  lineId?: string;
  email?: string;
  phone?: string;
  course?: string;
  hearAbout?: string;
};

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export async function POST(request: Request) {
  let body: ConsultationRequestBody;

  try {
    body = (await request.json()) as ConsultationRequestBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const locale = normalizeLocale(asTrimmedString(body.locale));
  const fullName = asTrimmedString(body.fullName);
  const nickname = asTrimmedString(body.nickname);
  const facebook = asTrimmedString(body.facebook);
  const lineId = asTrimmedString(body.lineId);
  const email = asTrimmedString(body.email).toLowerCase();
  const phone = asTrimmedString(body.phone);
  const course = asTrimmedString(body.course);
  const hearAbout = asTrimmedString(body.hearAbout);

  if (!lineId || !email || !phone || !course) {
    return NextResponse.json(
      { error: "Missing required submission fields." },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 },
    );
  }

  try {
    await createConsultationSubmission({
      locale,
      fullName,
      nickname,
      facebook,
      lineId,
      email,
      phone,
      course,
      hearAbout,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[consultation submission error]", error);

    return NextResponse.json(
      { error: "Unable to save consultation request." },
      { status: 500 },
    );
  }
}
