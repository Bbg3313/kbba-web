const TESTIMONIAL_EMBEDS = [
  {
    id: "ajkBFCNCHmw",
    title: "KBBA testimonial video 1",
  },
  {
    id: "j6ZO8s0I81g",
    title: "KBBA testimonial video 2",
  },
  {
    id: "90crr8ymhKc",
    title: "KBBA testimonial video 3",
  },
] as const;

function embedSrc(videoId: string) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    hl: "en",
  });
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

export function TestimonialVideos() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-x-clip border-y border-rose-100/80 bg-gradient-to-b from-rose-50/95 via-white to-pink-50/70 py-14 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-rose-200/35 blur-[100px]" />
        <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-pink-100/50 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-56 w-56 rounded-full bg-rose-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-10 max-w-2xl min-w-0 text-center sm:mb-14">
          <div className="mx-auto mb-5 h-px w-16 bg-gradient-to-r from-transparent via-rose-300/80 to-transparent sm:w-24" />
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-pink-600/90 sm:text-xs">
            Voices & stories
          </p>
          <h2
            id="testimonials-heading"
            className="font-display mt-3 text-pretty text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-pink-700 sm:text-4xl"
          >
            Testimonial
          </h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-rose-900/70 sm:text-base">
            Hear from participants and partners of Korea Beauty Business Academy.
          </p>
        </header>

        <div className="grid min-w-0 gap-7 sm:gap-8 lg:grid-cols-3">
          {TESTIMONIAL_EMBEDS.map((video, index) => (
            <article key={video.id} className="group relative min-w-0">
              <div
                className="absolute -inset-[1px] rounded-[1.35rem] bg-gradient-to-br from-rose-200/50 via-pink-200/35 to-rose-100/40 opacity-70 blur-[1px] transition duration-500 group-hover:opacity-100 group-hover:blur-0"
                aria-hidden
              />
              <div className="relative flex flex-col overflow-hidden rounded-[1.25rem] border border-rose-100/90 bg-white/95 shadow-[0_24px_60px_-36px_rgba(190,24,93,0.22)] ring-1 ring-rose-100/60 backdrop-blur-sm transition duration-300 group-hover:border-pink-200/80 group-hover:shadow-[0_28px_70px_-32px_rgba(244,63,94,0.28)]">
                <div className="relative aspect-video w-full bg-rose-950/5">
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
                <div className="flex min-w-0 items-center justify-between gap-2 border-t border-rose-100/80 bg-gradient-to-r from-rose-50/80 to-white px-4 py-3.5 sm:gap-3 sm:px-5">
                  <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-600 text-xs font-bold text-white shadow-md shadow-rose-300/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold uppercase tracking-[0.2em] text-pink-700/90">
                        Featured story
                      </p>
                      <p className="truncate text-sm font-medium text-rose-950">
                        YouTube — KBBA
                      </p>
                    </div>
                  </div>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full border border-rose-200 bg-white px-2.5 py-1.5 text-[0.7rem] font-semibold text-rose-800 shadow-sm transition hover:border-pink-300 hover:bg-rose-50 sm:px-3 sm:text-xs"
                  >
                    Open in YouTube
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
