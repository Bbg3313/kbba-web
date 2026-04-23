import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { SubpageHero } from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "BLOG & NEWS",
  description: "KBBA news and articles — clinic partnerships, agency insights, and Korea beauty business updates.",
};

const posts = [
  {
    title: "KBBA & Mabel Clinic — aftercare in Thailand after surgery in Korea",
    excerpt:
      "End-to-end service before and after the sale: Mabel Clinic helps patients after surgery with direct physician support.",
  },
  {
    title: "KBBA & Hi' Seoul Clinic — seamless aftercare when clients return",
    excerpt:
      "Comfort and outcomes come first. Hi' Seoul Clinic is a full-service Korean-style aesthetic clinic partner.",
  },
  {
    title: "Why is the Korean plastic surgery agency sector growing?",
    excerpt:
      "Korean government statistics show tens of thousands of medical travellers each year — among the highest globally.",
  },
  {
    title: "Why formal agency training matters",
    excerpt:
      "Agency work demands deep expertise; without enough experience it is hard to build a sustainable business.",
  },
  {
    title: "Why build your agency with KBBA",
    excerpt:
      "Operating in Korea requires the right licences for attracting foreign patients — KBBA aligns you with the legal framework.",
  },
] as const;

export default function BlogPage() {
  return (
    <SiteShell>
      <SubpageHero
        eyebrow="BLOG & NEWS"
        title="Articles & news"
        subtitle="Partnerships, case studies, and perspectives on the Thailand–Korea beauty corridor."
      />
      <div className="mx-auto min-w-0 max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <ul className="grid min-w-0 gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <li key={post.title}>
              <article className="flex h-full min-w-0 flex-col rounded-2xl border border-rose-100/90 bg-white/95 p-6 shadow-md shadow-rose-100/25 transition hover:border-pink-200 hover:shadow-lg">
                <h2 className="font-display text-pretty text-lg font-semibold leading-snug text-rose-950">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-rose-900/75">{post.excerpt}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </SiteShell>
  );
}
