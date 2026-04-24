import type { Metadata } from "next";
import { buildPageMetadata } from "@/i18n/metadata";
import { getRequestDictionary } from "@/i18n/server";
import { SiteShell } from "@/components/SiteShell";
import { SubpageHero } from "@/components/SubpageHero";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, dictionary } = await getRequestDictionary();
  return buildPageMetadata({
    locale,
    title: dictionary.blog.meta.title,
    description: dictionary.blog.meta.description,
    pathname: "/blog",
  });
}

export default async function BlogPage() {
  const { dictionary } = await getRequestDictionary();

  return (
    <SiteShell>
      <SubpageHero
        eyebrow={dictionary.blog.hero.eyebrow}
        title={dictionary.blog.hero.title}
        subtitle={dictionary.blog.hero.subtitle}
      />
      <div className="mx-auto min-w-0 max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <ul className="grid min-w-0 gap-6 md:grid-cols-2">
          {dictionary.blog.posts.map((post) => (
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
