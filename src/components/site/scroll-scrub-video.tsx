import React, { useEffect, useRef, useState } from "react";
import { WhatsAppLink } from "@/components/site/whatsapp-link";
import { track } from "@/lib/site";

function clamp(v: number, a = 0, b = 1) {
  return Math.min(b, Math.max(a, v));
}

export type OverlayMessage = {
  id: string;
  lines: string[];
  start: number; // 0-1
  end: number; // 0-1
};

export default function ScrollScrubVideo({
  src,
  poster,
  messages,
}: {
  src?: string;
  poster?: string;
  messages: OverlayMessage[];
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [duration, setDuration] = useState<number>(0);
  const [progress, setProgress] = useState(0);

  const prefersReduced = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container) return;

    let mounted = true;
    let lastProgress = -1;

    function onResize() {
      // trigger a recalculation on resize
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(loop);
    }

    function loop() {
      if (!mounted) return;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      const scrolled = clamp((-rect.top) / (total > 0 ? total : 1), 0, 1);
      // reduce thrash: only update state when significant change
      if (Math.abs(scrolled - lastProgress) > 0.001) {
        lastProgress = scrolled;
        setProgress(scrolled);
        if (video && duration > 0 && !prefersReduced && src) {
          const targetTime = scrolled * duration;
          // smooth seeking by small increments to avoid jank
          try {
            // Only set if difference is meaningful
            if (Math.abs((video.currentTime || 0) - targetTime) > 0.02) {
              video.currentTime = targetTime;
            }
          } catch (e) {
            // some browsers may throw if not allowed to set currentTime yet
          }
        }
      }
      rafRef.current = requestAnimationFrame(loop);
    }

    window.addEventListener("resize", onResize, { passive: true });
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      mounted = false;
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, src, prefersReduced]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    function onLoaded() {
      setDuration(v.duration || 0);
    }
    v.addEventListener("loadedmetadata", onLoaded);
    return () => v.removeEventListener("loadedmetadata", onLoaded);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[350vh] md:h-[400vh]">
      <div className="sticky top-0 left-0 right-0 h-screen w-screen overflow-hidden bg-black">
        {src && !prefersReduced ? (
          <video
            ref={videoRef}
            src={src}
            preload="metadata"
            playsInline
            muted
            className="h-full w-full object-cover"
            poster={poster}
            // no autoplay: scrubbing controlled by scroll
            controls={false}
          />
        ) : (
          // fallback: static poster
          <div className="h-full w-full">
            {poster ? (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img src={poster} alt="Thermomix" className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-neutral-900" />
            )}
          </div>
        )}

        {/* overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-3xl text-center text-warm-white">
            {messages.map((m) => {
              const { start, end } = m;
              const range = Math.max(0.0001, end - start);
              const local = clamp((progress - start) / range, 0, 1);
              // ease in/out
              const eased = 3 * Math.pow(local, 2) - 2 * Math.pow(local, 3);
              const opacity = eased;
              const translateY = (1 - eased) * 16; // px
              return (
                <div
                  key={m.id}
                  className="transition-opacity will-change-transform"
                  style={{
                    opacity: opacity,
                    transform: `translateY(${translateY}px)`,
                    transition: "opacity 240ms linear, transform 240ms linear",
                    position: "absolute",
                    inset: 0,
                    display: opacity > 0 ? "flex" : "none",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 1rem",
                  }}
                >
                  <div>
                    {m.lines.map((line, i) => (
                      <div
                        key={i}
                        className="font-display text-[2.4rem] leading-tight md:text-[4rem]"
                        style={{
                          textShadow: "0 6px 30px rgba(0,0,0,0.6)",
                        }}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* final CTA at the end */}
            <div
              style={{
                position: "absolute",
                bottom: 64,
                left: 0,
                right: 0,
                display: progress > 0.82 ? "flex" : "none",
                justifyContent: "center",
                pointerEvents: "auto",
              }}
            >
              <WhatsAppLink
                source="demonstration"
                extra={"Hola María Regina, vi tu página y me gustaría conocer Thermomix y agendar una demostración."}
                variant="light"
                size="lg"
                showIcon={false}
                // track click also
                className="shadow-2xl"
              >
                QUIERO VERLA FUNCIONANDO
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
