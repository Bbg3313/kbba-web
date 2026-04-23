import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { SubpageHero } from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "BLOG & NEWS",
  description: "ข่าวและบทความ KBBA — ความร่วมมือคลินิก ไอเดียธุรกิจเอเจนซี่ศัลยกรรมเกาหลี",
};

const posts = [
  {
    title: "KBBA ร่วมกับ Mabel Clinic เปิดบริการดูแลลูกค้าต่อเนื่องในไทย หลังการทำศัลยกรรมที่เกาหลี",
    excerpt:
      "KBBA เน้นการบริการครบครันทั้งก่อนและหลังการขาย โดยร่วมมือกับมาเบลคลินิกในการดูแลลูกค้าหลังศัลยกรรม โดยแพทย์ผู้เชี่ยวชาญโดยตรง",
  },
  {
    title: "KBBA ร่วมกับ Hi' Seoul Clinic เปิดบริการดูแลลูกค้าต่อเนื่องในไทย หลังการทำศัลยกรรมที่เกาหลี",
    excerpt:
      "คำนึงถึงความสะดวกและผลลัพธ์หลังการผ่าตัดของลูกค้า ร่วมมือกับ Hi' Seoul Clinic คลินิกเสริมความงามครบวงจรแนวเกาหลี",
  },
  {
    title: "ทำไมธุรกิจเอเจนซี่ศัลยกรรมเกาหลีถึงได้รับความนิยม?",
    excerpt:
      "จากข้อมูลสถิติของรัฐบาลเกาหลี คนไทยกว่า 30,000 คนเข้ารับการทำศัลยกรรมในเกาหลีทุกปี ซึ่งเป็นจำนวนมากที่สุดในหมู่ชาวต่างชาติ",
  },
  {
    title: "ทำไมต้องมีการฝึกอบรมเอเจนซี่ศัลยกรรม?",
    excerpt:
      "งานเอเจนซี่ศัลยกรรมเป็นสาขาที่ต้องการความเชี่ยวชาญและประสบการณ์สูง หากมีประสบการณ์ไม่เพียงพอจะทำให้ประสบความสำเร็จได้ยาก",
  },
  {
    title: "เหตุผลที่ต้องทำธุรกิจเอเจนซี่ร่วมกับ KBBA",
    excerpt:
      "การทำธุรกิจเอเจนซี่ศัลยกรรมในเกาหลีจำเป็นต้องมีใบอนุญาตในการดึงดูดผู้ป่วยต่างชาติตามกฎหมายเกาหลี",
  },
] as const;

export default function BlogPage() {
  return (
    <SiteShell>
      <SubpageHero
        eyebrow="BLOG & NEWS"
        title="บทความและข่าวสาร"
        subtitle="อัปเดตความร่วมมือ กรณีศึกษา และมุมมองธุรกิจความงามไทย–เกาหลี"
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <ul className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <li key={post.title}>
              <article className="flex h-full flex-col rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-md shadow-rose-100/25 transition hover:border-pink-200 hover:shadow-lg">
                <h2 className="font-display text-pretty text-lg font-semibold leading-snug text-rose-950">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-rose-900/75">{post.excerpt}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </SiteShell>
  );
}
