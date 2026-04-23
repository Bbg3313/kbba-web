import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { SubpageHero } from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "REVIEW",
  description: "รีวิวและเสียงจากพันธมิตร KBBA — บริการหลังการขายและความร่วมมือคลินิก",
};

const services = [
  {
    title: "SET UP Agency Business",
    body: "อบรมความรู้พื้นฐานและให้คำปรึกษาเพื่อให้คุณสามารถทำธุรกิจเอเจนซี่ได้อย่างถูกต้องตามกฎหมายทันทีหลังการอบรมกับ KBBA โดยไม่ต้องลงทุนเพิ่ม",
  },
  {
    title: "Promotion & Service",
    body: "KBBA ร่วมกับโรงพยาบาลในเครือกว่า 60 แห่ง มีโปรโมชั่นสำหรับทำการตลาดทุกเดือนและมีทีมงานล่ามคอยบริการดูแลลูกค้าระหว่างอยู่เกาหลี",
  },
  {
    title: "After Service",
    body: "KBBA ร่วมกับคลีนิกในเครือ 2+ แห่งและกำลังขยายความร่วมมือ ให้บริการหลังการขายกับลูกค้า เช่น ตัดไหม ถอดเฝือก หรือเลเซอร์ลดบวม",
  },
] as const;

export default function ReviewPage() {
  return (
    <SiteShell>
      <SubpageHero
        eyebrow="REVIEW"
        title="รีวิวและบริการ"
        subtitle="เสียงจากผู้เข้าร่วมและพันธมิตรคลินิก — โครงสร้างการสนับสนุนหลังอบรม"
      />

      <section className="border-b border-rose-100/60 bg-white/90 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <figure className="rounded-2xl border border-rose-100/90 bg-gradient-to-br from-rose-50/60 to-white p-8 shadow-md">
            <figcaption className="text-sm font-semibold text-pink-700">
              คุณ อาร์ม อาริณี — เจ้าของธุรกิจเอเจนซี่ Look at me by Arinee
            </figcaption>
            <blockquote className="mt-4 text-base leading-relaxed text-rose-900/85">
              <h3 className="mb-3 font-display text-lg font-semibold text-rose-950">
                เริ่มต้นจากความรักสวยรักงาม
              </h3>
              และความสนใจในการทำศัลยกรรมอยู่แล้ว จึงอยากแนะนำให้คนรอบข้างได้พบการเปลี่ยนแปลงที่ดีขึ้น
              จากโรงพยาบาลชั้นนำที่มีความเป็นมืออาชีพ หมอเก่งๆ นี่ก็คือจุดเริ่มต้น
              ที่หันมาทำธุรกิจเอเจนซี่ศัลยกรรมเกาหลีเป็นอาชีพเสริมค่ะ
            </blockquote>
          </figure>
        </div>
      </section>

      <section className="bg-gradient-to-b from-rose-50/40 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-600">Our Service</p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-rose-950 sm:text-3xl">
            KBBA พร้อมสนับสนุนคุณในทุกด้าน
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-rose-900/80 sm:text-base">
            ตั้งแต่ความรู้พื้นฐานในการเริ่มสร้างธุรกิจ ตลอดจนสนับสนุนให้คุณสามารถทำธุรกิจได้อย่างต่อเนื่องโดยไม่ต้องลงทุนเพิ่ม
            อีกทั้งมีทีมงานและล่าม เพื่อให้คุณสามารถทำงานได้อย่างราบรื่น ทั้งการส่งเสริมการขายและการตลาด
            การบริการก่อน ระหว่าง และหลังการขาย เมื่อลูกค้ากลับมาที่ไทยก็มีคลินิครองรับดูแลต่อเนื่อง
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-sm"
              >
                <h3 className="font-display text-lg font-semibold text-rose-950">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-rose-900/75">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rose-100/60 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-md">
            <h2 className="font-display text-xl font-semibold text-rose-950">Hi&apos; Seoul Clinic</h2>
            <p className="mt-4 text-sm leading-relaxed text-rose-900/80">
              เมื่อได้มีโอกาสดูแลลูกค้าหลังการไปทำศัลยกรรมที่เกาหลี ทางคลินิกได้เห็นผลงานและรอยยิ้มความสุขของลูกค้า
              จึงได้ร่วมเป็นคลินิกพาร์ทเนอกับคุณเมย์ S.K.I การส่งลูกค้า VIP ไปทำสวยที่เกาหลีไม่ใช่เรื่องยากอีกต่อไป
              กลับมาให้เราดูแลหลังกลับมา รักษารอยบวมช้ำ รอยแผลเป็น ลูกค้า Happy และมั่นใจในการไปทำศัลยกรรมมากขึ้นค่ะ
            </p>
            <p className="mt-4 text-sm font-medium text-pink-700">เยี่ยมชมคลีนิก</p>
          </article>
          <article className="rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-md">
            <h2 className="font-display text-xl font-semibold text-rose-950">Mabel Clinic</h2>
            <p className="mt-4 text-sm leading-relaxed text-rose-900/80">
              หมอนุชอยู่ในวงการงานผิวให้ลูกค้าระดับ VIP มากว่า 10 ปี มีความสนใจเทคนิคศัลยกรรมเกาหลี
              เมื่อลูกค้ากลับจากศัลยกรรมมักมาหาหมอผิวเพื่อรักษารอยช้ำ รอยแดง รอยแผลเป็น
              ได้พูดคุยกับคุณเมย์ S.K.I และเริ่มทำงานร่วมกัน ข้อมูลแน่น หมอดีใจที่ S.K.I เปิดคอร์ส KBBA
              เชื่อว่าคอร์สนี้จะผลิตเอเจนซี่และที่ปรึกษาที่มีคุณภาพ ให้ทุกคนสวยอย่างปลอดภัยค่ะ
            </p>
            <p className="mt-4 text-sm font-medium text-pink-700">เยี่ยมชมคลีนิก</p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
