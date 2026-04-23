import Image from "next/image";
import { hospitalPartners } from "@/data/hospitals";

const partnerLogoAlt = "โลโก้พันธมิตร KBBA";

export function HospitalGrid() {
  /** แถบเลื่อนใช้ชุดเดียวกับกริด — ขนาด/สีตรงกัน (ไม่ใช้แถบ 5 โลโก้แยก) */
  const marqueeItems = [
    ...hospitalPartners,
    ...hospitalPartners,
    ...hospitalPartners,
  ];

  return (
    <section
      id="partners"
      className="border-y border-rose-100/70 bg-gradient-to-b from-rose-50/45 via-white to-rose-50/30 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
            โรงพยาบาลพันธมิตรกว่า 60 แห่ง
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-rose-900/70 sm:text-base">
            เครือข่ายโรงพยาบาลและคลินิกพันธมิตรที่ร่วมมือกับ KBBA
            สามารถดูโลโก้พาร์ทเนอร์ทั้งหมดได้ในส่วนนี้
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-rose-100/90 bg-white/95 py-5 shadow-[0_20px_70px_-40px_rgba(190,24,93,0.45)]">
          <div className="flex w-max animate-marquee items-center gap-6 px-2 pr-8 sm:gap-8">
            {marqueeItems.map((h, idx) => (
              <div
                key={`${h.id}-marquee-${idx}`}
                className="flex h-[5.5rem] w-[7.5rem] shrink-0 items-center justify-center sm:h-24 sm:w-32"
              >
                <Image
                  src={h.imageSrc}
                  alt={partnerLogoAlt}
                  width={200}
                  height={120}
                  className="max-h-full max-w-full object-contain"
                  sizes="128px"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {hospitalPartners.map((h) => (
            <article
              key={h.id}
              className="group flex min-h-[7.5rem] flex-col items-center justify-center rounded-2xl border border-rose-100/90 bg-white/95 px-3 py-4 text-center shadow-sm shadow-rose-50/50 transition duration-200 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-100/45 sm:min-h-[8.5rem] sm:px-4 sm:py-5"
            >
              <div className="relative flex h-[5.5rem] w-full items-center justify-center sm:h-24">
                <Image
                  src={h.imageSrc}
                  alt={partnerLogoAlt}
                  width={200}
                  height={120}
                  className="max-h-full max-w-full object-contain transition group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 45vw, 160px"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
