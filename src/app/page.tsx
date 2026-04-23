import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { HospitalGrid } from "@/components/HospitalGrid";
import { OfficialPartnerBanner } from "@/components/OfficialPartnerBanner";
import { SiteShell } from "@/components/SiteShell";
import { TestimonialVideos } from "@/components/TestimonialVideos";
import { WixTopStrip } from "@/components/WixTopStrip";

const courses = [
  {
    name: "หลักสูตรสร้างเอเจนซี่ศัลยกรรมเกาหลีแบบถูกต้องตามกฎหมาย",
    note: "เหมาะสำหรับผู้ที่ต้องการเริ่มต้นธุรกิจเอเจนซี่, ที่ปรึกษาศัลยกรรม, พนักงานโรงพยาบาลศัลยกรรม/คลีนิก",
    price: "59,000 บาท",
  },
  {
    name: "หลักสูตรสร้างเอเจนซี่ศัลยกรรมพร้อมศึกษาดูงานที่ประเทศเกาหลี",
    note: "เหมาะสำหรับผู้ที่ต้องการเริ่มต้นธุรกิจเอเจนซี่, ที่ปรึกษาศัลยกรรม และประสบการณ์ศึกษาดูงาน ณ โรงพยาบาลเกาหลี",
    price: "99,000 บาท",
  },
  {
    name: "หลักสูตรสร้างเทรนนิ่งอัพสกิลกับศัลยแพทย์เกาหลี",
    note: "เหมาะสำหรับศัลยแพทย์ที่ต้องการฝึกฝนทักษะการศัลยกรรมและเรียนรู้เทคนิคการศัลยกรรมจากศัลยแพทย์เกาหลี",
    price: "159,000 บาท",
  },
] as const;

const blogPosts = [
  {
    title: "KBBA ร่วมกับ Mabel Clinic เปิดบริการดูแลลูกค้าต่อเนื่องในไทย หลังการทำศัลยกรรมที่เกาหลี",
    excerpt:
      "KBBA เราเน้นการบริการที่ครบครันทั้งก่อนการขายและหลังการขาย โดยร่วมมือกับมาเบลคลินิกในการดูแลลูกค้าหลังศัลยกรรม โดยแพทย์ผู้เชี่ยวชาญโดยตรง...",
  },
  {
    title: "KBBA ร่วมกับ Hi' Seoul Clinic เปิดบริการดูแลลูกค้าต่อเนื่องในไทย หลังการทำศัลยกรรมที่เกาหลี",
    excerpt:
      "KBBA คำนึงถึงความสะดวกสบายและผลลัพธ์หลังการผ่าตัดที่ดีที่สุดของลูกค้า จึงร่วมมือกับ Hi' Seoul Clinic คลินิกเสริมความงามครบวงจรแนวเกาหลีระ...",
  },
  {
    title: "ทำไมธุรกิจเอเจนซี่ศัลยกรรมเกาหลีถึงได้รับความนิยม?",
    excerpt:
      "จากข้อมูลสถิติของรัฐบาลเกาหลี คนไทยกว่า 30,000 คนเข้ารับการทำศัลยกรรมในเกาหลีทุกปี ซึ่งเป็นจำนวนมากที่สุดในหมู่ชาวต่างชาติที่เข้ารับการผ่...",
  },
  {
    title: "ทำไมต้องมีการฝึกอบรมเอเจนซี่ศัลยกรรม?",
    excerpt:
      "งานเอเจนซี่ศัลยกรรมเป็นสาขาที่ต้องการความเชี่ยวชาญและประสบการณ์สูง ซึ่งหากมีประสบการณ์ไม่เพียงพอจะทำให้ประสบความสำเร็จได้ยาก ...",
  },
  {
    title: "เหตุผลที่ต้องทำธุรกิจเอเจนซี่ร่วมกับ KBBA",
    excerpt:
      "การทำธุรกิจเอเจนซี่ศัลยกรรมในเกาหลี จำเป็นจะต้องมีใบอนุญาตในการดึงดูดผู้ป่วยต่างชาติ ตามกฎหมายการดึงดูดผู้ป่วยต่างชาติในเกาหลีเท่านั้นจึง...",
  },
] as const;

const faqs = [
  {
    q: "KBBA ช่วยอะไรได้บ้างสำหรับคลินิกไทย?",
    a: "KBBA เป็นศูนย์ฝึกอบรมและเครือข่ายธุรกิจความงามไทย–เกาหลี ช่วยทั้งการอบรมพื้นฐาน การเชื่อมพันธมิตรโรงพยาบาล และการสนับสนุนการทำธุรกิจต่อเนื่องหลังจบหลักสูตร",
  },
  {
    q: "ต่างจากเอเจนซี่ทั่วไปอย่างไร?",
    a: "แนวทางของ KBBA คือหลักสูตรที่รับรองโดยสถาบันและเครือข่ายเกาหลี พร้อมทีมสนับสนุนด้านเอกสาร ข้อมูล ล่าม และการดูแลลูกค้า เพื่อให้เริ่มธุรกิจได้จริงโดยไม่ต้องลงทุนเพิ่ม",
  },
  {
    q: "หลังเข้าร่วม KBBA จะได้สิทธิประโยชน์อะไร?",
    a: "ผู้เรียนจะได้รับองค์ความรู้เชิงปฏิบัติ เครือข่ายโรงพยาบาลในเครือ และการสนับสนุนต่อเนื่องทั้งด้านการจัดการ ข้อมูล โปรโมชั่น รถรับส่ง และทีมงานล่าม",
  },
  {
    q: "ใช้เวลานานแค่ไหนกว่าจะเห็นผล?",
    a: "ระยะเวลาเห็นผลขึ้นอยู่กับแนวทางธุรกิจและการลงมือทำของแต่ละทีม โดยปกติช่วงแรกจะใช้สำหรับปูพื้นฐานและตั้งระบบ จากนั้นจึงขยายผลเชิงรายได้และการบริการ",
  },
  {
    q: "ทำไมธุรกิจเอเจนซี่ศัลยกรรมเกาหลีถึงได้รับความนิยม?",
    a: "จากแนวโน้มตลาดและพฤติกรรมผู้บริโภค ความต้องการบริการศัลยกรรมเกาหลีเพิ่มขึ้นต่อเนื่อง จึงเป็นโอกาสสำคัญของผู้ที่ต้องการเริ่มธุรกิจเอเจนซี่อย่างมืออาชีพ",
  },
  {
    q: "ทำไมต้องมีการฝึกอบรมเอเจนซี่ศัลยกรรม?",
    a: "งานเอเจนซี่ศัลยกรรมเป็นงานเฉพาะทางที่ต้องการความรู้ด้านบริการ การประสานงาน และมาตรฐานที่ถูกต้อง การฝึกอบรมช่วยลดความผิดพลาดและเพิ่มโอกาสสำเร็จระยะยาว",
  },
  {
    q: "เหตุผลที่ต้องทำธุรกิจเอเจนซี่ร่วมกับ KBBA คืออะไร?",
    a: "KBBA รวมหลักสูตรที่ได้รับการรับรอง เครือข่ายพันธมิตรโรงพยาบาล และระบบสนับสนุนหลังอบรม ทำให้ผู้เริ่มต้นสามารถทำงานได้จริง มีโครงสร้าง และเติบโตได้เร็วขึ้น",
  },
  {
    q: "KBBA ร่วมกับ Mabel Clinic ดูแลลูกค้าหลังศัลยกรรมอย่างไร?",
    a: "มีการเชื่อมบริการดูแลหลังทำศัลยกรรมในไทยโดยทีมคลินิกพาร์ทเนอร์ เพื่อช่วยเรื่องการติดตามผล การให้คำแนะนำ และการดูแลต่อเนื่องให้ลูกค้า",
  },
  {
    q: "KBBA ร่วมกับ Hi' Seoul Clinic ดูแลลูกค้าหลังศัลยกรรมอย่างไร?",
    a: "KBBA ทำงานร่วมกับคลินิกพาร์ทเนอร์ในไทยเพื่อรองรับการดูแลหลังกลับจากเกาหลี ช่วยให้ลูกค้าได้รับบริการต่อเนื่อง สะดวก และมั่นใจมากขึ้น",
  },
] as const;

const HOME_CONSULTING_VISUAL = "/images/sections/home-consulting-presenter-v2.png";
const HOME_CONSULTING_CERT_IMAGE =
  "https://static.wixstatic.com/media/e22438_8c13c8af9e8e40e58a1f61b99735956f~mv2.png";

export default function Home() {
  return (
    <SiteShell>
        <HeroSection />
        <OfficialPartnerBanner />
        <WixTopStrip />
        <HospitalGrid />

        <TestimonialVideos />

        <section className="relative overflow-x-clip border-b border-rose-100/70 bg-white py-8 sm:py-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-rose-100/40 blur-3xl" />
            <div className="absolute -right-20 bottom-6 h-64 w-64 rounded-full bg-fuchsia-100/35 blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <header className="max-w-3xl pb-8 sm:pb-16">
              <h2 className="text-pretty text-xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
                KOREA BEAUTY BUSINESS ACADEMY
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-rose-900/70 sm:text-base">
                สถาบันฝึกอบรมธุรกิจความงามเกาหลี
              </p>
            </header>

            <div className="grid items-start gap-8 md:grid-cols-[1.25fr_0.75fr] md:gap-6 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-2xl bg-white sm:aspect-[16/11] sm:max-w-none md:mx-0 md:aspect-[980/558]">
                <Image
                  src={HOME_CONSULTING_VISUAL}
                  alt="KBBA presenter visual"
                  fill
                  className="object-contain object-bottom sm:object-right-bottom"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="flex min-w-0 flex-col gap-4 text-left md:items-end md:text-right">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-rose-100/80 bg-white/95 shadow-[0_22px_45px_-32px_rgba(190,24,93,0.45)] sm:aspect-[16/11] md:aspect-[980/558]">
                  <Image
                    src={HOME_CONSULTING_CERT_IMAGE}
                    alt="Hospital coordinator certificates"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="text-pretty text-base leading-relaxed text-zinc-900 sm:text-lg">
                  "มาร่วมเป็นที่ปรึกษาความงามมืออาชีพที่ผ่านการรับรองและมีรายได้สูง
                  พร้อมรับใบรับรองผู้ประสานงานโรงพยาบาลเกาหลีกับเรากันค่ะ"
                </p>
                <a
                  href="https://line.me/R/ti/p/@756xidmw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 w-full flex-wrap items-center justify-center gap-2 rounded-full border-2 border-black bg-[#e200d8] px-4 py-3 text-center text-sm font-bold text-white shadow-[0_4px_0_#000,0_14px_24px_-16px_rgba(226,0,216,0.85)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_5px_0_#000,0_20px_30px_-16px_rgba(226,0,216,0.95)] sm:w-auto sm:flex-nowrap sm:px-5 sm:text-base md:ml-auto"
                >
                  <span className="max-w-[20rem] sm:max-w-none">
                    สอบถาม “ว่าคุณ” เหมาะกับคอร์สนี้หรือไม่
                  </span>
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-lg leading-none text-[#e200d8]">
                    ›
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="courses"
          className="border-t border-rose-100/60 bg-gradient-to-b from-rose-50/40 via-white to-white py-14 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
              Our Course
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-rose-900/70 sm:text-base">
              หลักสูตรจากหน้า Our Course บนเว็บไซต์ต้นฉบับของ KBBA
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {courses.map((c) => (
                <article
                  key={c.name}
                  className="flex flex-col rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-md shadow-rose-100/25"
                >
                  <h3 className="font-display text-pretty text-base font-semibold leading-snug text-rose-950 sm:text-lg">
                    {c.name}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-rose-900/70">{c.note}</p>
                  <p className="mt-4 text-xl font-semibold text-rose-950">{c.price}</p>
                  <p className="mt-5">
                    <Link href="/our-course" className="text-sm font-semibold text-pink-700 hover:underline">
                      ดูรายละเอียดคอร์ส
                    </Link>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-rose-100/50 bg-gradient-to-b from-rose-50/50 to-white py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
              บทความ & ข่าว
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <div
                  key={post.title}
                  className="rounded-2xl border border-dashed border-rose-200/80 bg-white/80 p-5 text-sm font-medium text-rose-900/85 shadow-sm shadow-rose-100/30"
                >
                  <h3 className="text-pretty font-semibold leading-snug text-rose-950">{post.title}</h3>
                  <p className="mt-2 text-xs font-normal text-rose-700/80">{post.excerpt}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-rose-900/70">
              <Link href="/blog" className="font-semibold text-pink-700 hover:underline">
                ดูบทความทั้งหมด
              </Link>
            </p>
          </div>
        </section>

        <section
          id="faq"
          className="border-t border-rose-100/70 bg-gradient-to-b from-rose-50/40 via-white to-white py-14 sm:py-20"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
              คำถามที่พบบ่อย
            </h2>
            <div className="mt-10 space-y-4">
              {faqs.map((f, i) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-rose-100/90 bg-white/90 px-4 py-3 shadow-sm shadow-rose-100/25 open:shadow-md"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-2 text-left text-sm font-semibold text-rose-950 sm:items-center sm:gap-3 [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 flex-1 gap-2 sm:gap-3">
                      <span className="shrink-0 text-pink-600">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-pretty">{f.q}</span>
                    </span>
                    <span className="mt-0.5 shrink-0 text-rose-300 transition group-open:rotate-180 sm:mt-0">▾</span>
                  </summary>
                  <p className="mt-3 border-t border-rose-100/80 pt-3 text-sm leading-relaxed text-rose-900/75">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
    </SiteShell>
  );
}
