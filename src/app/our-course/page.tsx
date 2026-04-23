import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { SubpageHero } from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "OUR COURSE",
  description:
    "หลักสูตรเอเจนซี่ศัลยกรรมเกาหลีแบบถูกกฎหมาย ศึกษาดูงานเกาหลี และเทรนนิ่งอัพสกิลกับศัลยแพทย์ — KBBA",
};

const introCourses = [
  {
    title: "หลักสูตรสร้างเอเจนซี่ศัลยกรรมเกาหลีแบบถูกต้องตามกฎหมาย",
    desc: "เหมาะสำหรับผู้ที่ต้องการเริ่มต้นธุรกิจเอเจนซี่, ที่ปรึกษาศัลยกรรม, พนักงานโรงพยาบาลศัลยกรรม/คลีนิก",
    id: "course-legal" as const,
  },
  {
    title: "หลักสูตรสร้างเอเจนซี่ศัลยกรรมพร้อมศึกษาดูงานที่ประเทศเกาหลี",
    desc: "เหมาะสำหรับผู้ที่ต้องการเริ่มต้นธุรกิจเอเจนซี่, ที่ปรึกษาศัลยกรรม และประสบการณ์ศึกษาดูงาน ณ โรงพยาบาลเกาหลี",
    id: "course-trip" as const,
  },
  {
    title: "หลักสูตรสร้างเทรนนิ่งอัพสกิลกับศัลยแพทย์เกาหลี",
    desc: "เหมาะสำหรับศัลยแพทย์ที่ต้องการฝึกฝนทักษะการศัลยกรรมและเรียนรู้เทคนิคจากศัลยแพทย์เกาหลี",
    id: "course-surgeon" as const,
  },
] as const;

const supportItems = [
  "ที่ปรึกษาทางธุรกิจ",
  "ข้อมูลและโปรโมชั่น",
  "เอกสารต่างๆ",
  "รถรับ-ส่ง",
  "ล่ามดูแลลูกค้า",
  "โรงพยาบาลในเครือ",
] as const;

const endorsedBy = [
  "สถาบันใบอนุญาตระหว่างประเทศ (International License Institute)",
  "สถาบันการศึกษาตลอดชีพ ประเทศเกาหลีใต้ (Long Life Education Institute)",
  "หลักสูตรผ่านมาตรฐานของกระทรวงสาธารณะสุขเกาหลีใต้",
  "บริษัท Blue Bridge Global จำกัด (จดทะเบียนธุรกิจดึงดูดผู้ป่วยต่างชาติในเกาหลีอย่างถูกกฎหมาย และร่วมมืออย่างเป็นทางการกับ Gangnam Medical Tour Center องค์กรการส่งเสริมการท่องเที่ยวเชิงการแพทย์เกาหลี)",
] as const;

const certificatesAgency = [
  "ใบรับรองการผ่านการอบรมหลักสูตรที่ปรึกษาศัลยกรรมเกาหลี",
  "ใบรับรองผู้ประสานงานโรงพยาบาล",
  "บัตรประจำตัว License ผู้ประสานงานโรงพยาบาล (สามารถใช้ยื่นประกอบการสมัครงานระดับโรงพยาบาลในเกาหลีได้)",
] as const;

const endorsedSurgeon = [
  "โรงพยาบาลศัลยกรรมบีไอโอ",
  "หลักสูตรผ่านมาตรฐานของกระทรวงสาธารณะสุขเกาหลีใต้",
  "บริษัท Blue Bridge Global จำกัด (จดทะเบียนธุรกิจดึงดูดผู้ป่วยต่างชาติในเกาหลีอย่างถูกกฎหมาย และร่วมมืออย่างเป็นทางการกับ Gangnam Medical Tour Center องค์กรการส่งเสริมการท่องเที่ยวเชิงการแพทย์เกาหลี)",
] as const;

const certificateSurgeon = [
  "ใบรับรองการผ่านการอบรมเทคนิคการทำศัลยกรรมเกาหลี",
] as const;

function CourseBlock({
  id,
  titleTh,
  titleEn,
  endorsed,
  certificates,
}: {
  id: string;
  titleTh: string;
  titleEn: string;
  endorsed: readonly string[];
  certificates: readonly string[];
}) {
  return (
    <article
      id={id}
      className="scroll-mt-28 rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-lg shadow-rose-100/30 sm:p-8"
    >
      <h2 className="font-display text-pretty text-lg font-semibold leading-snug text-rose-950 sm:text-xl md:text-2xl">
        {titleTh}
      </h2>
      <p className="mt-1 text-sm font-medium text-pink-700">{titleEn}</p>
      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-rose-800">
        รับรองหลักสูตรโดย
      </h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-rose-900/85">
        {endorsed.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-rose-800">
        ใบรับรองที่จะได้รับหลังจบการอบรม
      </h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-rose-900/85">
        {certificates.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <p className="mt-6">
        <Link
          href="/start-now"
          className="inline-flex rounded-full bg-gradient-to-r from-rose-600 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-rose-300/40 transition hover:from-rose-500 hover:to-pink-500"
        >
          รายละเอียด / ลงทะเบียน
        </Link>
      </p>
    </article>
  );
}

export default function OurCoursePage() {
  return (
    <SiteShell>
      <SubpageHero
        eyebrow="OUR COURSE"
        title="หลักสูตร KBBA"
        subtitle="ศูนย์รวมการฝึกอบรมธุรกิจความงาม ร่วมมืออย่างเป็นทางการกับสถาบันการศึกษาตลอดชีพและสถาบันใบรับรองระหว่างประเทศของประเทศเกาหลีใต้"
      />

      <section className="border-b border-rose-100/60 bg-white/90 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-600">KBBA</p>
              <h2 className="font-display mt-1 text-2xl font-semibold text-rose-950">Our Course</h2>
            </div>
            <Link
              href="/start-now"
              className="inline-flex w-fit items-center rounded-full border-2 border-rose-200 bg-white px-5 py-2.5 text-sm font-semibold text-rose-800 transition hover:border-rose-300"
            >
              Online Register →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {introCourses.map((c) => (
              <Link
                key={c.id}
                href={`#${c.id}`}
                className="group rounded-2xl border border-rose-100/90 bg-gradient-to-b from-rose-50/50 to-white p-5 shadow-sm transition hover:border-pink-200 hover:shadow-md"
              >
                <h3 className="font-display text-pretty text-base font-semibold leading-snug text-rose-950 group-hover:text-pink-800">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-rose-900/75">{c.desc}</p>
                <span className="mt-4 inline-block text-sm font-medium text-pink-600">ดูรายละเอียด ↓</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-rose-50/35 to-white py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm leading-relaxed text-rose-900/80 sm:text-base">
            KBBA ศูนย์รวมการฝึกอบรมธุรกิจเกี่ยวกับความงาม ซึ่งร่วมมืออย่างเป็นทางการกับสถาบันการศึกษาตลอดชีพ
            และสถาบันใบรับรองระหว่างประเทศของประเทศเกาหลีใต้ ในการจัดหลักสูตรอบรมเอเจนซี่ศัลยกรรมเกาหลีอย่างถูกต้องตามกฎหมาย
            รวมถึงมีทีมงานสนับสนุนในการทำธุรกิจหลังจบหลักสูตร ให้คุณสามารถเริ่มต้นทำธุรกิจได้ทันทีโดยไม่ต้องลงทุนเพิ่ม
            นอกจากนี้ยังมีหลักสูตรอบรมเทคนิคการผ่าตัดของศัลยแพทย์ โดยโรงพยาบาลบีไอโอ
          </p>
        </div>
      </section>

      <section className="border-y border-rose-100/60 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-semibold text-rose-950 sm:text-2xl">
            สถาบันใบอนุญาตระหว่างประเทศ — International License Institue
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-rose-900/80 sm:text-base">
            KBBA ร่วมมืออย่างเป็นทางการกับสถาบันใบอนุญาตระหว่างประเทศ ในการเปิดหลักสูตรใบรับรองผู้ประสานงานโรงพยาบาลเป็นภาษาไทย
            เพื่อให้ผู้ที่สนใจสามารถศึกษาและนำความรู้ที่ได้มาต่อยอดในการทำธุรกิจหรือการประกอบอาชีพเกี่ยวกับการบริการทางการแพทย์
            เช่น เอเจนซี่ศัลยกรรมเกาหลี ที่ปรึกษาศัลยกรรมเกาหลี พนักงานโรงพยาบาลศัลยกรรมหรือคลีนิคความงาม เป็นต้น
          </p>
        </div>
      </section>

      <section className="bg-rose-50/40 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-semibold text-rose-950 sm:text-2xl">
            การสนับสนุนทางธุรกิจ
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-rose-900/80 sm:text-base">
            KBBA ไม่เพียงแต่เป็นสถาบันฝึกอบรมเท่านั้น แต่ยังสนับสนุนการทำธุรกิจของคุณอย่างต่อเนื่องหลังจบหลักสูตร
            เพื่อให้คุณสามารถเริ่มต้นธุรกิจของคุณเองทันทีได้โดยไม่ต้องลงทุนเพิ่ม พร้อมมีทีมงานที่จะช่วยสนับสนุนคุณในทุกด้าน
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {supportItems.map((t) => (
              <li
                key={t}
                className="rounded-full border border-rose-200 bg-white px-3 py-1.5 text-xs font-medium text-rose-900 sm:text-sm"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-rose-100/70 bg-gradient-to-br from-rose-950 via-fuchsia-950 to-rose-900 py-14 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-200">More than 10 years of</p>
          <h2 className="font-display mt-2 text-3xl font-semibold sm:text-4xl">COMBINED EXPERIENCE</h2>
          <p className="mt-4 text-rose-100/90">We have the know-how you need.</p>
        </div>
      </section>

      <section className="space-y-12 bg-gradient-to-b from-white to-rose-50/30 py-12 sm:space-y-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <CourseBlock
            id="course-legal"
            titleTh="หลักสูตรสร้างเอเจนซี่ศัลยกรรมเกาหลีแบบถูกต้องตามกฎหมาย"
            titleEn="Korea Plastic Surgery Agency and Consultant Program"
            endorsed={endorsedBy}
            certificates={certificatesAgency}
          />
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <CourseBlock
            id="course-trip"
            titleTh="หลักสูตรสร้างเอเจนซี่ศัลยกรรมเกาหลีแบบถูกต้องตามกฎหมาย พร้อมศึกษาดูงานที่ประเทศเกาหลี"
            titleEn="Intensive Korea Plastic Surgery Agency and Consultant Program"
            endorsed={endorsedBy}
            certificates={certificatesAgency}
          />
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <CourseBlock
            id="course-surgeon"
            titleTh="หลักสูตรเทรนนิ่งอัพสกิลกับศัลยแพทย์เกาหลี (สำหรับศัลยแพทย์)"
            titleEn="Korea Special Plastic Surgery Techniques Program For Doctor"
            endorsed={endorsedSurgeon}
            certificates={certificateSurgeon}
          />
        </div>
      </section>
    </SiteShell>
  );
}
