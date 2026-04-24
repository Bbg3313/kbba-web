"use client";

import Image from "next/image";
import { MainSectionEyebrow } from "@/components/MainSectionEyebrow";
import { useEffect, useRef, useState } from "react";

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

const HOME_REVIEW_CARDS = [
  {
    name: "Arm Arinee",
    business: "Look at me by Arinee",
    imageSrc: "/images/reviews/arm-arinee.png",
    imageAlt: "Arm Arinee from Look at me by Arinee",
    quote:
      "My interest in beauty and cosmetic surgery naturally grew into a side business helping people find trusted hospitals and skilled doctors in Korea.",
  },
  {
    name: "Margaret Langer",
    business: "Mar Pa Suay",
    imageSrc: "/images/reviews/margaret-langer.png",
    imageAlt: "Margaret Langer from Mar Pa Suay",
    quote:
      "KBBA gave me a structured and legal path into the Korean surgery agency business, making client care smoother and more professional.",
  },
  {
    name: "Miew Kiranapat",
    business: "Queen Management",
    imageSrc: "/images/reviews/miew-kiranapat.png",
    imageAlt: "Miew Kiranapat from Queen Management",
    quote:
      "With trusted guidance from S.K.I and the KBBA system, I could step confidently into Korean surgery consulting and work more smoothly.",
  },
  {
    name: "Kim Phakin",
    business: "Kim S.K.I",
    imageSrc: "/images/reviews/kim-phakin.png",
    imageAlt: "Kim Phakin from Kim S.K.I",
    quote:
      "The KBBA system makes it easier to send clients with confidence while I continue managing my other businesses in Thailand.",
  },
  {
    name: "Pop Supaporn",
    business: "Pop S.K.I",
    imageSrc: "/images/reviews/pop-supaporn.png",
    imageAlt: "Pop Supaporn from Pop S.K.I",
    quote:
      "Working with S.K.I and KBBA turned my personal experience into a professional consulting path with stronger client planning and care.",
  },
] as const;

const MOBILE_REVIEW_LOOP = [...HOME_REVIEW_CARDS, ...HOME_REVIEW_CARDS];

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
  const [activeReview, setActiveReview] = useState(0);
  const mobileReviewStripRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % HOME_REVIEW_CARDS.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const strip = mobileReviewStripRef.current;

    if (!strip || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let rafId = 0;
    let lastFrame = 0;
    let isTouching = false;
    let resumeAfter = 0;

    const pauseAutoScroll = () => {
      resumeAfter = performance.now() + 2400;
    };

    const handleTouchStart = () => {
      isTouching = true;
    };

    const handleTouchEnd = () => {
      isTouching = false;
      pauseAutoScroll();
    };

    const handlePointerDown = () => {
      isTouching = true;
    };

    const handlePointerUp = () => {
      isTouching = false;
      pauseAutoScroll();
    };

    const tick = (timestamp: number) => {
      if (!lastFrame) {
        lastFrame = timestamp;
      }

      const elapsed = timestamp - lastFrame;
      lastFrame = timestamp;

      if (!isTouching && timestamp > resumeAfter) {
        strip.scrollLeft += elapsed * 0.03;

        const loopWidth = strip.scrollWidth / 2;
        if (strip.scrollLeft >= loopWidth) {
          strip.scrollLeft -= loopWidth;
        }
      }

      rafId = window.requestAnimationFrame(tick);
    };

    strip.addEventListener("touchstart", handleTouchStart, { passive: true });
    strip.addEventListener("touchend", handleTouchEnd, { passive: true });
    strip.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
      strip.removeEventListener("touchstart", handleTouchStart);
      strip.removeEventListener("touchend", handleTouchEnd);
      strip.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

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
          <MainSectionEyebrow label="Voices & Stories" align="center" className="mx-auto" />
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

        <div className="mt-10 sm:mt-14">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-pink-600/90 sm:text-xs">
                Review Cards
              </p>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-rose-900/70 sm:text-base">
                Quick participant highlights from the KBBA network.
              </p>
            </div>
            <div className="hidden items-center gap-2 sm:flex" aria-label="Review carousel controls">
              {HOME_REVIEW_CARDS.map((review, index) => (
                <button
                  key={review.name}
                  type="button"
                  onClick={() => setActiveReview(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeReview ? "w-8 bg-pink-600" : "w-2.5 bg-rose-200 hover:bg-rose-300"
                  }`}
                  aria-label={`Show review ${index + 1}`}
                  aria-pressed={index === activeReview}
                />
              ))}
            </div>
          </div>

          <div
            ref={mobileReviewStripRef}
            className="overflow-x-auto overscroll-x-contain rounded-[1.5rem] border border-rose-100/90 bg-white/95 shadow-[0_24px_60px_-36px_rgba(190,24,93,0.24)] sm:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex w-max items-stretch gap-4 px-4 py-4 pr-8">
              {MOBILE_REVIEW_LOOP.map((review, index) => (
                <article
                  key={`${review.name}-${index}`}
                  className="flex min-h-[24rem] w-[17rem] shrink-0 snap-start flex-col rounded-[1.4rem] border border-rose-100/90 bg-gradient-to-b from-white via-white to-rose-50/35 p-4 shadow-sm shadow-rose-100/25"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-rose-100/90 bg-[#f3eff6] shadow-sm">
                    <Image
                      src={review.imageSrc}
                      alt={review.imageAlt}
                      fill
                      className="object-contain object-center p-2"
                      sizes="272px"
                    />
                  </div>
                  <div className="mt-4 min-w-0 flex-1">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-pink-600/90">
                      Participant Review
                    </p>
                    <h3 className="font-display mt-2 text-pretty text-xl font-semibold text-rose-950">
                      {review.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-rose-800/85">
                      Owner, <span className="font-semibold text-pink-700">{review.business}</span>
                    </p>
                    <blockquote className="mt-3 text-pretty text-sm leading-relaxed text-rose-900/80">
                      {review.quote}
                    </blockquote>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="hidden overflow-hidden rounded-[1.5rem] border border-rose-100/90 bg-white/95 shadow-[0_24px_60px_-36px_rgba(190,24,93,0.24)] sm:block">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeReview * 100}%)` }}
            >
              {HOME_REVIEW_CARDS.map((review) => (
                <article
                  key={review.name}
                  className="flex min-w-full flex-col gap-5 p-4 sm:p-6 md:flex-row md:items-center md:gap-6 lg:p-7"
                >
                  <div className="relative aspect-[4/5] w-full max-w-[16rem] self-center overflow-hidden rounded-2xl border border-rose-100/90 bg-[#f3eff6] shadow-sm md:w-44 md:max-w-none md:shrink-0 lg:w-48">
                    <Image
                      src={review.imageSrc}
                      alt={review.imageAlt}
                      fill
                      className="object-contain object-center p-2"
                      sizes="(max-width: 768px) 256px, 192px"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-pink-600/90 sm:text-xs">
                      Participant Review
                    </p>
                    <h3 className="font-display mt-2 text-pretty text-2xl font-semibold text-rose-950">
                      {review.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-rose-800/85 sm:text-base">
                      Owner, <span className="font-semibold text-pink-700">{review.business}</span>
                    </p>
                    <blockquote className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-rose-900/80 sm:text-base sm:leading-[1.85]">
                      {review.quote}
                    </blockquote>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-4 hidden items-center justify-center gap-2 sm:flex" aria-label="Review carousel controls">
            {HOME_REVIEW_CARDS.map((review, index) => (
              <button
                key={review.name}
                type="button"
                onClick={() => setActiveReview(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeReview ? "w-8 bg-pink-600" : "w-2.5 bg-rose-200 hover:bg-rose-300"
                }`}
                aria-label={`Show review ${index + 1}`}
                aria-pressed={index === activeReview}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
