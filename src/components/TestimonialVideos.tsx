const TESTIMONIAL_EMBEDS = [
  {
    id: "ajkBFCNCHmw",
    title: "KBBA testimonial — วิดีโอที่ 1",
  },
  {
    id: "j6ZO8s0I81g",
    title: "KBBA testimonial — วิดีโอที่ 2",
  },
  {
    id: "90crr8ymhKc",
    title: "KBBA testimonial — วิดีโอที่ 3",
  },
] as const;

function embedSrc(videoId: string) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    hl: "th",
  });
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

export function TestimonialVideos() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-x-clip border-y border-rose-900/20 bg-gradient-to-b from-rose-950 via-[#1a0a14] to-rose-950 py-14 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-fuchsia-600/15 blur-[100px]" />
        <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-56 w-56 rounded-full bg-pink-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <div className="mx-auto mb-5 h-px w-16 bg-gradient-to-r from-transparent via-rose-300/70 to-transparent sm:w-24" />
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-rose-300/90 sm:text-xs">
            Voices & stories
          </p>
          <h2
            id="testimonials-heading"
            className="font-display mt-3 text-pretty text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Testimonial
          </h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-rose-200/80 sm:text-base">
            รับฟังประสบการณ์จริงจากผู้เข้าร่วมและพันธมิตรของ Korea Beauty Business Academy
          </p>
        </header>

        <div className="grid gap-7 sm:gap-8 lg:grid-cols-3">
          {TESTIMONIAL_EMBEDS.map((video, index) => (
            <article
              key={video.id}
              className="group relative"
            >
              <div
                className="absolute -inset-[1px] rounded-[1.35rem] bg-gradient-to-br from-rose-300/35 via-fuchsia-300/20 to-rose-400/25 opacity-60 blur-[1px] transition duration-500 group-hover:opacity-100 group-hover:blur-0"
                aria-hidden
              />
              <div className="relative flex flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-rose-950/60 shadow-[0_28px_80px_-40px_rgba(0,0,0,0.75)] ring-1 ring-white/5 backdrop-blur-sm transition duration-300 group-hover:border-rose-200/25 group-hover:shadow-[0_32px_90px_-36px_rgba(244,63,94,0.35)]">
                <div className="relative aspect-video w-full bg-black/80">
                  <iframe
                    src={embedSrc(video.id)}
                    title={video.title}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3.5 sm:px-5">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-600 text-xs font-bold text-white shadow-inner shadow-black/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold uppercase tracking-[0.2em] text-rose-200/90">
                        Featured story
                      </p>
                      <p className="truncate text-sm font-medium text-white/95">
                        YouTube — KBBA
                      </p>
                    </div>
                  </div>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-rose-100 transition hover:border-rose-300/40 hover:bg-white/10"
                  >
                    เปิดใน YouTube
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
