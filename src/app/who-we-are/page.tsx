import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { SubpageHero } from "@/components/SubpageHero";
import { hospitalPartners } from "@/data/hospitals";
import officialPartners from "@/data/official-partners.json";
import { wixTopStripImages } from "@/data/wix-strip";

export const metadata: Metadata = {
  title: "WHO WE ARE",
  description:
    "ศูนย์ฝึกอบรม Korea Beauty Business Academy — ความร่วมมือ S.K.I, BBG และพันธมิตรเกาหลี",
};

const pillars = [
  {
    title: "ธุรกิจเอเจนซี่ศัลยกรรมเกาหลี",
    desc: "โครงสร้างและการสนับสนุนเพื่อเริ่มต้นและต่อยอดเอเจนซี่อย่างมืออาชีพ",
    imageSrc: wixTopStripImages[1]?.imageSrc ?? hospitalPartners[2]?.imageSrc,
  },
  {
    title: "ธุรกิจเสริมความงาม",
    desc: "เชื่อมโยงบริการและเครือข่ายความงามระหว่างไทยและเกาหลี",
    imageSrc: wixTopStripImages[0]?.imageSrc ?? hospitalPartners[0]?.imageSrc,
  },
  {
    title: "ฝึกอบรมทักษะศัลยแพทย์",
    desc: "หลักสูตรเทคนิคร่วมกับโรงพยาบาลชั้นนำในเกาหลีใต้",
    imageSrc: wixTopStripImages[2]?.imageSrc ?? hospitalPartners[8]?.imageSrc,
  },
] as const;

const supportPills = [
  "ใบอนุญาตที่ถูกกฎหมาย",
  "โรงพยาบาลในเครือ",
  "ที่ปรึกษาทางธุรกิจ",
  "เอกสารต่างๆ",
  "ข้อมูลและโปรโมชั่น",
  "รถรับ-ส่ง",
  "ทีมงานสนับสนุน",
  "ล่ามดูแลลูกค้า",
] as const;

const whatWeDo = [
  {
    n: "01",
    title:
      "ศูนย์ฝึกอบรมความรู้และความสามารถในการทำธุรกิจศัลยกรรมและความงามร่วมกับประเทศเกาหลีใต้",
  },
  {
    n: "02",
    title:
      "ให้การสนับสนุนในการทำธุรกิจศัลยกรรมและความงามร่วมกับประเทศเกาหลีใต้หลังการฝึกอบรม",
  },
  {
    n: "03",
    title: "ต่อยอดธุรกิจศัลยกรรมและความงามอื่นๆ ในอนาคต",
  },
  {
    n: "04",
    title:
      "หลักสูตรอบรมทักษะศัลยกรรมเกาหลีโดยศัลยแพทย์ผู้เชี่ยวชาญสำหรับศัลยแพทย์",
  },
] as const;

const instructors = [
  {
    name: "คุณเมย์ กัญญณัช สุทปา",
    role: "Surgery Korea Info Founder & CEO",
    body: "ผู้บริหารเอเจนซี่ศัลยกรรมเกาหลี Surgery Korea Info (S.K.I) มีความเชี่ยวชาญและประสบการณ์ในวงการเอเจนซี่ศัลยกรรมเกาหลีกว่า 10 ปี",
    course: "หลักสูตรการให้คำปรึกษาศัลยกรรมเกาหลีเชิงปฏิบัติ",
    tag: "@SKI.May",
    imageSrc: hospitalPartners[17]?.imageSrc,
  },
  {
    name: "ศาสตราจารย์ อี อึนยอง",
    role: "Hospital Coordinator Specialist",
    body: "ศาสตราจารย์ผู้เชี่ยวชาญด้านการประสานงานโรงพยาบาลจากสถาบันใบอนุญาตระหว่างประเทศและสถาบันการศึกษาตลอดชีพประเทศเกาหลีใต้",
    course: "หลักสูตรผู้ประสานงานโรงพยาบาล",
    tag: "LEE EUN-YOUNG",
    imageSrc: hospitalPartners[14]?.imageSrc,
  },
  {
    name: "อ.ซัน สถาพร วิสาขศาสตร์",
    role: "Online Digital Marketing Founder & CEO",
    body: "ผู้เชี่ยวชาญด้านการตลาดออนไลน์ หลักสูตรการทำการตลาดออนไลน์ การหาและวิเคราะห์กลุ่มลูกค้า การทำคอนเทนต์และการปิดการขาย",
    course: "หลักสูตรการตลาดออนไลน์",
    tag: "Son Digital Marketing",
    imageSrc: hospitalPartners[16]?.imageSrc,
  },
  {
    name: "ศัลยแพทย์ โช อินชาง",
    role: "BIO Plastic Surgery President",
    body: "ศัลยแพทย์ที่มีความชำนาญและประสบการณ์ในการศัลยกรรมกว่า 20 ปี โรงพยาบาลบีไอโอจัดทำหลักสูตรอบรมศัลยแพทย์มาแล้วกว่า 10 ปี",
    course: "หลักสูตรอบรมเทคนิคการผ่าตัดสำหรับศัลยแพทย์",
    tag: "CHO IN-CHANG",
    imageSrc: hospitalPartners[24]?.imageSrc,
  },
] as const;

function SectionCard({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <h2 className="font-display text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-rose-900/80 sm:text-base">
        {children}
      </div>
    </section>
  );
}

export default function WhoWeArePage() {
  return (
    <SiteShell>
      <SubpageHero
        eyebrow="KBBA — KOREA BEAUTY BUSINESS ACADEMY"
        title="WHO WE ARE"
        subtitle="ศูนย์ฝึกอบรมและรวบรวมสิ่งที่จำเป็นในการทำธุรกิจความงามเกาหลี โดยความร่วมมือระหว่างบริษัท เซอร์เจอรี่โคเรียอินโฟ จำกัด (S.K.I), บริษัท บลูบริดจ์โกลบอล จำกัด (BBG) ประเทศเกาหลีใต้ และพันธมิตรสถาบันและโรงพยาบาลชั้นนำ"
      />

      <div className="border-b border-rose-100/60 bg-white/80">
        <div className="mx-auto max-w-6xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm leading-relaxed text-rose-900/80 sm:text-base">
            เราเป็นผู้เชี่ยวชาญในการทำธุรกิจความงามระหว่างประเทศไทยและเกาหลีใต้
            รวมถึงเอเชียภูมิภาค เรามีทุกสิ่งที่ต้องการในการเริ่มต้นทำธุรกิจเอเจนซี่ศัลยกรรมเกาหลีและธุรกิจความงามอื่นๆ
            โดยให้การอบรมความรู้ตั้งแต่พื้นฐานตลอดจนการสนับสนุนการเริ่มต้นและต่อยอดธุรกิจ
            ที่จะทำให้คุณประสบความสำเร็จในเวลาอันสั้นได้
          </p>
        </div>
      </div>

      <section className="border-b border-rose-100/60 bg-gradient-to-b from-rose-50/40 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
            Korea Beauty Business Academy
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-md shadow-rose-100/25"
              >
                <div className="relative mb-5 h-24 w-full overflow-hidden rounded-xl border border-rose-100/80 bg-white">
                  <Image
                    src={p.imageSrc}
                    alt={p.title}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-lg font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-rose-950">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-rose-900/75">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCard title="การสนับสนุนทางธุรกิจ">
        <p>
          KBBA ไม่เพียงแต่เป็นสถาบันฝึกอบรมเท่านั้น
          แต่ยังสนับสนุนการทำธุรกิจของคุณอย่างต่อเนื่องหลังจบหลักสูตร
          เพื่อให้คุณสามารถเริ่มต้นธุรกิจของคุณเองทันทีได้โดยไม่ต้องลงทุนเพิ่ม
          พร้อมมีทีมงานที่จะช่วยสนับสนุนคุณในทุกด้าน
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {supportPills.map((t) => (
            <li
              key={t}
              className="rounded-full border border-rose-200/80 bg-rose-50/80 px-3 py-1.5 text-xs font-medium text-rose-900 sm:text-sm"
            >
              {t}
            </li>
          ))}
        </ul>
      </SectionCard>

      <section className="border-y border-rose-100/60 bg-white/90 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
            ความร่วมมือ
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-rose-900/75 sm:text-base">
            KBBA ทำงานร่วมกับโรงพยาบาลและคลินิกในเครืออย่างเป็นทางการ
            รวมถึงสถาบันรับรองจากเกาหลีใต้ เพื่อให้หลักสูตรและการสนับสนุนธุรกิจสอดคล้องกับมาตรฐานสากล
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-rose-100/90 bg-white py-4 shadow-sm">
            <div className="flex w-max animate-marquee items-center gap-6 px-4 pr-10">
              {[...hospitalPartners, ...hospitalPartners].map((h, i) => (
                <div
                  key={`${h.id}-who-${i}`}
                  className="flex h-16 w-28 shrink-0 items-center justify-center"
                >
                  <Image
                    src={h.imageSrc}
                    alt="โลโก้พันธมิตร"
                    width={140}
                    height={80}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-rose-50/35 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-600">
            What We Do
          </p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-rose-950 sm:text-3xl">
            สิ่งที่เราทำ
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2">
            {whatWeDo.map((w) => (
              <li
                key={w.n}
                className="flex gap-4 rounded-2xl border border-rose-100/90 bg-white/95 p-5 shadow-sm"
              >
                <span className="font-display text-3xl font-semibold text-pink-600">{w.n}</span>
                <p className="text-sm font-medium leading-relaxed text-rose-900 sm:text-base">
                  {w.title}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-rose-100/60 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid gap-6 rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-md shadow-rose-100/25 md:grid-cols-[220px,1fr]">
            <div className="relative mx-auto h-56 w-44 overflow-hidden rounded-xl border border-rose-100/80 bg-white">
              <Image
                src={instructors[0].imageSrc}
                alt={instructors[0].name}
                fill
                className="object-contain p-2"
                sizes="220px"
              />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-rose-950 sm:text-2xl">
                {instructors[0].name}
              </h2>
              <p className="mt-1 text-sm font-medium text-pink-700">{instructors[0].role}</p>
              <p className="mt-4 text-sm leading-relaxed text-rose-900/80">
                {instructors[0].body}
              </p>
              <p className="mt-3 text-sm text-rose-800">
                <span className="font-semibold">หลักสูตร: </span>
                {instructors[0].course}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-rose-500">
                {instructors[0].tag}
              </p>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
            วิทยากรผู้เชี่ยวชาญ
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {instructors.slice(1).map((p) => (
              <article
                key={p.name}
                className="rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-md shadow-rose-100/20"
              >
                <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl border border-rose-100/80 bg-white">
                  <Image
                    src={p.imageSrc}
                    alt={p.name}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-rose-950">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-pink-700">{p.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-rose-900/75">{p.body}</p>
                <p className="mt-4 text-sm text-rose-800">
                  <span className="font-semibold">หลักสูตร: </span>
                  {p.course}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-rose-500">
                  {p.tag}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rose-100/70 bg-gradient-to-b from-rose-50/40 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-rose-950 sm:text-3xl">
            Gallery
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {hospitalPartners.slice(0, 12).map((h) => (
              <div
                key={`who-gallery-${h.id}`}
                className="relative h-28 overflow-hidden rounded-xl border border-rose-100/80 bg-white sm:h-32"
              >
                <Image
                  src={h.imageSrc}
                  alt="Gallery KBBA"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 45vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="official-partners"
        className="border-t border-rose-100/70 bg-gradient-to-b from-white to-rose-50/30 py-12 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-pink-600">
            Official Partner
          </p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-rose-950 sm:text-3xl">
            พันธมิตรอย่างเป็นทางการ
          </h2>

          <div className="mt-10 space-y-10">
            <div>
              <h3 className="text-lg font-semibold text-rose-900">Institute</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-rose-900/85 sm:text-base">
                {officialPartners.institutes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-rose-900">
                Hospital and Clinic in Korea
              </h3>
              <ol className="mt-4 max-h-[24rem] list-decimal space-y-2 overflow-y-auto pr-2 text-sm text-rose-900/85 sm:text-base">
                {officialPartners.hospitalsKorea.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-rose-900">
                Hospital and Clinic in Thailand
              </h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-rose-900/85 sm:text-base">
                {officialPartners.hospitalsThailand.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-rose-900">Company</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-rose-900/85 sm:text-base">
                {officialPartners.companies.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
