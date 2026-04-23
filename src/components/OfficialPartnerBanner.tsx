/** แถบคำอธิบายใต้แถบโลโก้ — ข้อความเดียวกับบล็อก Wix ถัดจากแถบ 5 โลโก้ */
export function OfficialPartnerBanner() {
  return (
    <section
      id="official"
      aria-labelledby="official-partner-heading"
      className="bg-gradient-to-b from-pink-50/95 via-rose-50/92 to-rose-50/70"
    >
      <div className="mx-auto max-w-6xl px-4 pb-5 pt-10 text-center sm:px-6 sm:pb-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-pink-600">
          OFFICIAL PARTNER
        </p>
        <h2
          id="official-partner-heading"
          className="font-display mt-3 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-fuchsia-800 sm:text-2xl"
        >
          KBBA เชื่อมโยงพันธมิตรโรงพยาบาลและคลินิกชั้นนำในเกาหลีอย่างเป็นทางการ
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-rose-900/75 sm:text-base">
          KBBA ร่วมมืออย่างเป็นทางการกับสถาบันการศึกษาและโรงพยาบาลศัลยกรรมชั้นนำกว่า 40 แห่งในเกาหลีใต้
          เพื่อการอบรมและการทำธุรกิจอย่างมีมาตรฐาน
        </p>
      </div>
    </section>
  );
}
