import { useEffect, useRef, useState, type ReactNode } from "react";
import videoSrc from "@/assets/VIDEO-2025-09-01-17-12-24.mp4";
import { WhatsAppLink } from "./whatsapp-link";

type Segment = {
  start: number;
  end: number;
  holdToEnd?: boolean;
  render: () => ReactNode;
};

const segments: Segment[] = [
  {
    start: 0,
    end: 0.15,
    render: () => (
      <p className="font-display text-[2.6rem] uppercase tracking-[0.06em] text-warm-white md:text-[6rem]">
        Thermomix TM7
      </p>
    ),
  },
  {
    start: 0.15,
    end: 0.35,
    render: () => (
      <p className="max-w-2xl font-display text-[2rem] italic leading-[1.2] text-warm-white md:text-[3.8rem]">
        Una máquina.
        <br />
        Muchas cosas menos.
      </p>
    ),
  },
  {
    start: 0.35,
    end: 0.55,
    render: () => (
      <p className="max-w-xl font-display text-[2.2rem] uppercase leading-[1.2] tracking-tight text-warm-white md:text-[4.2rem]">
        Pesa.
        <br />
        Prepara.
        <br />
        Cocina.
        <br />
        Guía.
      </p>
    ),
  },
  {
    start: 0.55,
    end: 0.75,
    render: () => (
      <p className="max-w-2xl font-display text-[2rem] italic leading-[1.2] text-warm-white md:text-[3.8rem]">
        Menos pasos.
        <br />
        Más posibilidades.
      </p>
    ),
  },
  {
    start: 0.75,
    end: 0.9,
    render: () => (
      <p className="max-w-2xl font-display text-[2.2rem] leading-[1.15] text-warm-white md:text-[4.4rem]">
        Hay que verla
        <br />
        <span className="italic text-champagne">para entenderla.</span>
      </p>
    ),
  },
  {
    start: 0.9,
    end: 1,
    holdToEnd: true,
    render: () => (
      <div className="flex flex-col items-center gap-7">
        <p className="text-[0.66rem] uppercase tracking-[0.32em] text-champagne">María Regina</p>
        <WhatsAppLink source="demonstration" variant="light" size="lg" showIcon={false}>
          Agendar demostración
        </WhatsAppLink>
      </div>
    ),
  },
];

function segmentOpacity(progress: number, start: number, end: number, holdToEnd?: boolean) {
  if (progress < start) return 0;
  const span = Math.max(end - start, 0.0001);
  const fadeInEnd = start + span * 0.25;
  if (progress < fadeInEnd) return (progress - start) / (fadeInEnd - start);
  if (holdToEnd) return 1;
  if (progress > end) return 0;
  const fadeOutStart = end - span * 0.25;
  if (progress > fadeOutStart) {
    return Math.max(0, 1 - (progress - fadeOutStart) / (end - fadeOutStart));
  }
  return 1;
}

/** Desktop, motion-safe experience: scroll position drives video.currentTime directly. */
function ScrubExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef(0);
  const currentTimeRef = useRef(0);
  const durationRef = useRef(0);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => {
      durationRef.current = video.duration || 0;
      // Warm up the decoder so the first scrub isn't the first frame ever rendered (Safari/iOS).
      const playAttempt = video.play();
      if (playAttempt && typeof playAttempt.then === "function") {
        playAttempt.then(() => video.pause()).catch(() => {});
      }
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    if (video.readyState >= 1) onLoadedMetadata();
    return () => video.removeEventListener("loadedmetadata", onLoadedMetadata);
  }, []);

  useEffect(() => {
    const computeProgress = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      progressRef.current = scrollable > 0 ? Math.min(Math.max(scrolled / scrollable, 0), 1) : 0;
    };

    computeProgress();
    window.addEventListener("scroll", computeProgress, { passive: true });
    window.addEventListener("resize", computeProgress);
    return () => {
      window.removeEventListener("scroll", computeProgress);
      window.removeEventListener("resize", computeProgress);
    };
  }, []);

  useEffect(() => {
    const tick = () => {
      const video = videoRef.current;
      const duration = durationRef.current;

      if (video && duration > 0) {
        const target = progressRef.current * duration;
        const current = currentTimeRef.current;
        const next = current + (target - current) * 0.12;
        currentTimeRef.current = Math.abs(target - next) < 0.002 ? target : next;
        if (Math.abs(video.currentTime - currentTimeRef.current) > 0.01) {
          video.currentTime = currentTimeRef.current;
        }
      }

      segments.forEach((seg, i) => {
        const node = textRefs.current[i];
        if (!node) return;
        const o = segmentOpacity(progressRef.current, seg.start, seg.end, seg.holdToEnd);
        node.style.opacity = String(o);
        node.style.transform = `translateY(${(1 - o) * 18}px)`;
        node.style.pointerEvents = o > 0.5 ? "auto" : "none";
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ink">
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          preload="auto"
          controls={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          {segments.map((seg, i) => (
            <div
              key={i}
              ref={(node) => {
                textRefs.current[i] = node;
              }}
              className="absolute inset-0 flex flex-col items-center justify-center opacity-0"
            >
              {seg.render()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Mobile / reduced-motion fallback: plain inline muted looping video, no scroll-jacking. */
function FallbackVideo() {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      <div className="relative aspect-[3/4] w-full sm:aspect-video">
        <video
          src={videoSrc}
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/25" />
        <div className="absolute inset-0 flex flex-col items-center justify-end gap-5 px-6 pb-10 text-center">
          <p className="font-display text-[1.9rem] leading-[1.1] text-warm-white">
            Hay que verla
            <br />
            <span className="italic text-champagne">para entenderla.</span>
          </p>
          <WhatsAppLink source="demonstration" variant="light" showIcon={false}>
            Agendar demostración
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}

export function ScrollVideo() {
  const [mounted, setMounted] = useState(false);
  const [useScrub, setUseScrub] = useState(false);

  useEffect(() => {
    setMounted(true);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    setUseScrub(isDesktop && !reduceMotion);
  }, []);

  return <div id="scroll-video">{mounted && useScrub ? <ScrubExperience /> : <FallbackVideo />}</div>;
}
