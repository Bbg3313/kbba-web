import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { SubpageHero } from "@/components/SubpageHero";
import { hospitalPartners } from "@/data/hospitals";
import officialPartners from "@/data/official-partners.json";

export const metadata: Metadata = {
  title: "WHO WE ARE",
  description:
    "Korea Beauty Business Academy — training and partnerships with S.K.I, BBG, and leading Korean institutions.",
};

const pillars = [
  {
    title: "Korean plastic surgery agency business",
    desc: "Structure and support to launch and scale a professional agency.",
    imageSrc:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&h=520&q=82",
    imageAlt:
      "Doctor consulting with a patient in a clinic, representing professional plastic surgery coordination and agency services",
  },
  {
    title: "Beauty & aesthetics business",
    desc: "Connect services and networks between Thailand and Korea.",
    imageSrc:
      "https://images.unsplash.com/photo-1522337360788-8b13dee3a37e?auto=format&fit=crop&w=800&h=520&q=82",
    imageAlt: "Professional makeup station with brushes and cosmetics, representing beauty and aesthetics business",
  },
  {
    title: "Surgeon skills training",
    desc: "Technique programmes with top hospitals in South Korea.",
    imageSrc:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&h=520&q=82",
    imageAlt: "Operating theatre lighting and surgical environment, representing hands-on surgeon technique training",
  },
] as const;

const businessSupportItems = [
  {
    emoji: "🪪",
    title: "Compliant licensing",
    desc: "Legal permits and licensing pathways that match how Korea-facing agencies actually operate.",
  },
  {
    emoji: "🧭",
    title: "Business advisory",
    desc: "Strategic guidance on launching, scaling, and coordinating beauty and surgery-related ventures.",
  },
  {
    emoji: "✨",
    title: "Data & promotions",
    desc: "Campaign ideas, performance signals, and promotional support so your pipeline stays visible.",
  },
  {
    emoji: "🛟",
    title: "Operations support",
    desc: "A specialist team behind you for day-to-day questions, handoffs, and practical problem-solving.",
  },
  {
    emoji: "🏥",
    title: "Partner hospitals",
    desc: "Access and continuity across Korean partner clinics so introductions feel credible and consistent.",
  },
  {
    emoji: "📋",
    title: "Documentation",
    desc: "Contracts, forms, and paperwork organised so compliance and client care do not stall.",
  },
  {
    emoji: "🚐",
    title: "Transfers & mobility",
    desc: "Coordinated pick-ups, drops, and movement logistics for clients while they are in Korea.",
  },
  {
    emoji: "💬",
    title: "Interpreter care",
    desc: "Interpreter coverage and client-care touchpoints so language never blocks trust or safety.",
  },
] as const;

/** Sequential “what we deliver” journey — copy + imagery for landing-style depth. */
const whatWeDeliver = [
  {
    step: "01",
    emoji: "📚",
    title: "Education & skills hub",
    lead: "Structured learning for Korea-connected plastic surgery and beauty businesses.",
    body: "KBBA is a dedicated training centre—not a one-off seminar. You move through modules that bridge Thai market reality and Korean hospital culture: consultation tone, cross-border paperwork, risk-aware messaging, and coordinator etiquette. The point is to leave with shared vocabulary, templates, and judgement you can reuse from week one—not slides you never open again.",
    imageSrc:
      "https://images.unsplash.com/photo-1524178232363-1e2a58e3c8f6?auto=format&fit=crop&w=900&h=600&q=82",
    imageAlt: "People in a focused learning environment, representing KBBA’s structured training hub",
  },
  {
    step: "02",
    emoji: "🤝",
    title: "Post-training business support",
    lead: "Help that starts after certificates are issued.",
    body: "Graduation is the beginning of operations. KBBA keeps specialists beside you for licensing questions, hospital introductions, campaign feedback, and the operational detail that quietly derails new agencies. We shorten the distance between “I understand the model” and “I am running it with fewer blind spots”—without asking you to fund a full back-office on day zero.",
    imageSrc:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&h=600&q=82",
    imageAlt: "Team collaborating on business planning and client operations after training",
  },
  {
    step: "03",
    emoji: "🌐",
    title: "Platform to expand",
    lead: "A springboard into adjacent beauty and surgery lines.",
    body: "Once your core offer is stable, KBBA’s network and curriculum are meant to compound: new city partners, complementary programmes, or deeper Korean clinic relationships. You are not boxed into a single product—the ecosystem is built so disciplined operators can widen revenue and trust without rebuilding from scratch each time.",
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&h=600&q=82",
    imageAlt: "Analytics and strategy workspace, symbolising growth and expansion beyond the first service line",
  },
  {
    step: "04",
    emoji: "⚕️",
    title: "Surgeon technique programmes",
    lead: "Korean technique intensives for practising doctors.",
    body: "Separate from agency tracks, KBBA hosts hands-on programmes led by specialist Korean plastic surgeons. Practising physicians refine approaches that map to real operating workflows—case discussion, technique detail, and standards you can defend to patients and peers. It is continuing education for teams that need depth, not conference headlines alone.",
    imageSrc:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&h=600&q=82",
    imageAlt: "Operating theatre environment representing advanced surgical technique training",
  },
] as const;

const instructors = [
  {
    name: "May Kanyanat Sutpa",
    nameKo: "메이 카냐누트 수트파",
    role: "Founder & CEO, Surgery Korea Info (S.K.I)",
    body: "Executive with Surgery Korea Info (S.K.I), a Korea-focused plastic surgery information and agency business. She brings 10+ years of professional experience across the Korean plastic surgery market—bridging client expectations, hospital protocols, and compliant agency operations.",
    course: "Practical Korean plastic surgery consulting programme",
    tag: "@SKI.May",
    imageSrc: hospitalPartners[17]?.imageSrc,
    imageAlt: "May Kanyanat Sutpa — Surgery Korea Info",
  },
  {
    name: "Prof. Lee Eun-young",
    nameKo: "이은영 교수",
    role: "Hospital coordinator specialist",
    body: "Professor specialising in hospital operations and coordinator practice, aligned with the International License Institute and Korea’s lifelong learning pathways—grounding KBBA’s coordinator track in documentation, etiquette, and real ward realities.",
    course: "Hospital coordinator programme",
    tag: "Lee Eun-young",
    imageSrc: hospitalPartners[14]?.imageSrc,
    imageAlt: "Professor Lee Eun-young",
  },
  {
    name: "Sun Sathapon Wisakasat",
    nameKo: "선 사타폰 위사카사트",
    role: "Founder & CEO, online digital marketing",
    body: "Online marketing specialist for beauty and clinic brands: finding the right audiences, building content that carries a consultative tone, and engineering follow-up so campaigns actually close—without vanity metrics that waste ad spend.",
    course: "Digital marketing programme",
    tag: "Son Digital Marketing",
    imageSrc: hospitalPartners[16]?.imageSrc,
    imageAlt: "Sun Sathapon Wisakasat",
  },
  {
    name: "Dr. Cho In-chang",
    nameKo: "조인창 외과의",
    role: "President, BIO Plastic Surgery",
    body: "Plastic surgeon with 20+ years in practice. BIO Plastic Surgery has delivered structured surgical education for more than a decade—including delicate aesthetic work recognised at the highest public level, alongside technique programmes for practising surgeons.",
    course: "Surgical technique training for doctors",
    tag: "Cho In-chang",
    imageSrc: hospitalPartners[24]?.imageSrc,
    imageAlt: "Dr. Cho In-chang — BIO Plastic Surgery",
  },
] as const;

export default function WhoWeArePage() {
  return (
    <SiteShell>
      <SubpageHero
        eyebrow="KBBA — KOREA BEAUTY BUSINESS ACADEMY"
        title="WHO WE ARE"
        subtitle="Training and resources for Korea beauty businesses — in partnership with Surgery Korea Info (S.K.I), Blue Bridge Global (BBG) in South Korea, and leading institutes and hospitals."
      />

      <div className="border-b border-rose-100/60 bg-white/80">
        <div className="mx-auto min-w-0 max-w-6xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-pretty text-sm leading-relaxed text-rose-900/80 sm:text-base">
            We specialise in Thailand–Korea beauty businesses across the region. From first steps in compliant
            agency work to advanced programmes, KBBA provides training plus launch and scale-up support so teams can
            reach their goals faster.
          </p>
        </div>
      </div>

      <section className="border-b border-rose-100/60 bg-gradient-to-b from-rose-50/40 to-white py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-pretty text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
            Korea Beauty Business Academy
          </h2>
          <div className="mt-10 grid min-w-0 gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="min-w-0 rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-md shadow-rose-100/25"
              >
                <div className="relative mb-5 h-28 w-full overflow-hidden rounded-xl border border-rose-100/80 bg-rose-50/50 sm:h-32">
                  <Image
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-lg font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-pretty text-lg font-semibold text-rose-950">{p.title}</h3>
                <p className="mt-2 text-pretty text-sm text-rose-900/75">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="business-support"
        aria-labelledby="business-support-heading"
        className="border-b border-rose-100/60 bg-gradient-to-b from-rose-50/45 via-white to-white"
      >
        <div className="mx-auto min-w-0 max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2
            id="business-support-heading"
            className="font-display text-pretty text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl"
          >
            Business support
          </h2>
          <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-rose-900/80 sm:text-base">
            KBBA is not only a training institute—we stay with you after graduation so you can open for business
            with less upfront capital. Specialists help across licensing, advisory, campaigns, hospital ties,
            paperwork, transfers in Korea, and interpreter-led client care.
          </p>
          <ul className="mt-10 grid min-w-0 list-none gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {businessSupportItems.map((item) => (
              <li
                key={item.title}
                className="flex min-h-0 min-w-0 flex-col rounded-2xl border border-rose-100/90 bg-white/95 p-5 shadow-md shadow-rose-100/20 transition hover:border-pink-200/70 hover:shadow-lg hover:shadow-rose-100/30"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 text-2xl shadow-inner shadow-white/80"
                  aria-hidden
                >
                  {item.emoji}
                </span>
                <h3 className="mt-4 font-display text-pretty text-base font-semibold text-rose-950">{item.title}</h3>
                <p className="mt-2 text-pretty text-xs leading-relaxed text-rose-900/72 sm:text-sm">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-rose-100/60 bg-white/90 py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-pretty text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl">
            Partnerships
          </h2>
          <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-rose-900/75 sm:text-base">
            KBBA works officially with hospitals and clinics in the network plus Korean accreditation bodies so
            curricula and business support meet international expectations.
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
                    alt="Partner logo"
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

      <section
        id="what-we-deliver"
        aria-labelledby="what-we-deliver-heading"
        className="relative overflow-x-clip bg-gradient-to-b from-rose-50/50 via-white to-rose-50/25 py-14 sm:py-20"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,113,133,0.12),transparent)]"
          aria-hidden
        />
        <div className="relative mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-pink-600">What we do</p>
          <h2
            id="what-we-deliver-heading"
            className="font-display mt-2 text-pretty text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl lg:text-[2rem]"
          >
            What we deliver — in order
          </h2>
          <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-rose-900/75 sm:text-base">
            Four linked chapters, from classroom to operating theatre: learn the Korea-facing playbook, run with
            post-training support, widen your footprint, and—where clinically appropriate—level up surgeon technique
            with Korean specialists.
          </p>

          <ol className="relative mt-12 flex min-w-0 list-none flex-col gap-8 sm:gap-10 lg:gap-12">
            {whatWeDeliver.map((item, i) => (
              <li key={item.step} className="relative min-w-0">
                {i > 0 ? (
                  <div
                    className="absolute -top-4 left-6 hidden h-4 w-px bg-gradient-to-b from-rose-200 to-transparent sm:left-8 md:block lg:left-10"
                    aria-hidden
                  />
                ) : null}
                <article
                  className={`overflow-hidden rounded-2xl border border-rose-100/90 bg-white/95 shadow-[0_20px_50px_-28px_rgba(190,24,93,0.35)] ring-1 ring-rose-50/80 md:flex md:min-h-[280px] ${
                    i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="relative h-52 w-full shrink-0 sm:h-60 md:h-auto md:min-h-[260px] md:w-[44%] lg:w-[42%]">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 42vw"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-950/25 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-white/15"
                      aria-hidden
                    />
                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-bold text-rose-950 shadow-sm backdrop-blur-sm sm:left-5 sm:top-5">
                      <span className="text-base leading-none" aria-hidden>
                        {item.emoji}
                      </span>
                      <span className="tracking-wide">Step {item.step}</span>
                    </div>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center px-5 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-10">
                    <h3 className="font-display text-pretty text-xl font-semibold text-rose-950 sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-pretty text-sm font-medium text-pink-800/90 sm:text-base">{item.lead}</p>
                    <p className="mt-4 text-pretty text-sm leading-relaxed text-rose-900/78 sm:text-[0.95rem] sm:leading-[1.7]">
                      {item.body}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="expert-faculty"
        aria-labelledby="expert-faculty-heading"
        className="border-t border-rose-100/60"
      >
        <div className="mx-auto max-w-6xl px-4 pb-4 pt-14 text-center sm:px-6 sm:pt-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-pink-600">Expert speakers</p>
          <h2
            id="expert-faculty-heading"
            className="font-display mt-2 text-pretty text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-fuchsia-900 sm:text-3xl lg:text-[2rem]"
          >
            Meet our faculty
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-rose-900/75 sm:text-base">
            Practitioners and educators who anchor KBBA programmes—from Korea-facing agency craft and coordinator
            pathways to digital growth and advanced surgical technique.
          </p>
        </div>

        {instructors.map((person, index) => {
          const imageOnLeft = index % 2 === 0;
          const stripeBg = index % 2 === 1;
          return (
            <div
              key={person.name}
              className={`border-y border-rose-100/40 ${stripeBg ? "bg-zinc-50/90" : "bg-white"}`}
            >
              <div
                className={`mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-14 md:flex-row md:items-center lg:gap-16 lg:px-8 lg:py-16 ${
                  imageOnLeft ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="relative shrink-0">
                  <div
                    className="absolute left-1/2 top-1/2 h-[min(100%,13.5rem)] w-[min(100%,13.5rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-zinc-100 via-rose-50/80 to-zinc-100/90 sm:h-56 sm:w-56"
                    aria-hidden
                  />
                  <div className="relative h-44 w-44 overflow-hidden rounded-full border-[5px] border-white shadow-[0_20px_50px_-24px_rgba(190,24,93,0.45)] ring-1 ring-rose-100/70 sm:h-52 sm:w-52">
                    <Image
                      src={person.imageSrc}
                      alt={person.imageAlt}
                      fill
                      className="bg-white object-contain p-3 sm:p-4"
                      sizes="(max-width: 768px) 176px, 208px"
                    />
                  </div>
                </div>

                <div
                  className={`min-w-0 flex-1 text-center md:max-w-xl md:text-left ${imageOnLeft ? "lg:pl-4" : "lg:pr-4"}`}
                >
                  <h3 className="font-display text-pretty text-xl font-semibold text-rose-950 sm:text-2xl lg:text-[1.65rem]">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-pretty text-sm text-rose-800/85">{person.nameKo}</p>
                  <p className="mt-3 text-pretty text-sm font-semibold text-pink-700 sm:text-base">{person.role}</p>
                  <p className="mt-4 text-pretty text-sm leading-[1.75] text-rose-900/80 sm:text-[0.95rem]">
                    {person.body}
                  </p>
                  <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-rose-100/90 pt-5 text-xs font-medium text-rose-800/90 sm:justify-start sm:gap-x-3 sm:text-sm">
                    <span className="text-pretty text-rose-900/85">{person.course}</span>
                    <span className="text-rose-300" aria-hidden>
                      <span className="sm:hidden">·</span>
                      <span className="hidden sm:inline">||</span>
                    </span>
                    <span className="text-pretty font-semibold text-pink-700">{person.tag}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section
        id="official-partners"
        className="border-t border-rose-100/70 bg-gradient-to-b from-white to-rose-50/30 py-12 sm:py-20"
      >
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-pink-600">Official Partner</p>
          <h2 className="font-display mt-2 text-pretty text-2xl font-semibold text-rose-950 sm:text-3xl">
            Official partners
          </h2>

          <div className="mt-10 min-w-0 space-y-10">
            <div className="min-w-0">
              <h3 className="text-pretty text-lg font-semibold text-rose-900">Institute</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-pretty text-sm text-rose-900/85 sm:text-base">
                {officialPartners.institutes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ol>
            </div>
            <div className="min-w-0">
              <h3 className="text-pretty text-lg font-semibold text-rose-900">Hospital and Clinic in Korea</h3>
              <ol className="mt-4 max-h-[24rem] list-decimal space-y-2 overflow-y-auto overflow-x-hidden pr-2 text-pretty text-sm text-rose-900/85 sm:text-base">
                {officialPartners.hospitalsKorea.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ol>
            </div>
            <div className="min-w-0">
              <h3 className="text-pretty text-lg font-semibold text-rose-900">Hospital and Clinic in Thailand</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-pretty text-sm text-rose-900/85 sm:text-base">
                {officialPartners.hospitalsThailand.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ol>
            </div>
            <div className="min-w-0">
              <h3 className="text-pretty text-lg font-semibold text-rose-900">Company</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-pretty text-sm text-rose-900/85 sm:text-base">
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
