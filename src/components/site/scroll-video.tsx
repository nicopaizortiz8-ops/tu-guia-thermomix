import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import videoSrc from "@/assets/VIDEO-2025-09-01-17-12-24.mp4";
import { WhatsAppLink } from "./whatsapp-link";

/** One decoder, with scroll-driven seeking only while the film is visible. */
function ScrubExperience() {
  const containerRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;
    const video = videoRef.current;
    if (!container || !stage || !video) return;

    let frame = 0;
    let progress = 0;
    let displayed = 0;
    let duration = 0;
    let visible = false;
    let disposed = false;

    const schedule = () => {
      if (!disposed && visible && !frame && !document.hidden) frame = requestAnimationFrame(tick);
    };

    function tick() {
      frame = 0;
      if (!visible || document.hidden) return;
      displayed += (progress - displayed) * 0.16;
      if (Math.abs(progress - displayed) < 0.0005) displayed = progress;
      stage!.style.setProperty("--film-progress", String(displayed));
      stage!.dataset["complete"] = String(progress > 0.97);
      if (duration > 0 && !video!.seeking) {
        const target = displayed * duration;
        if (Math.abs(video!.currentTime - target) > 0.035) video!.currentTime = target;
      }
      if (Math.abs(progress - displayed) > 0.0005) schedule();
    }

    const update = () => {
      const rect = container.getBoundingClientRect();
      const stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
      const distance = rect.height - stage.offsetHeight;
      progress = distance > 0 ? Math.min(1, Math.max(0, (stickyTop - rect.top) / distance)) : 0;
      visible = rect.top < window.innerHeight && rect.bottom > stickyTop;
      schedule();
    };
    const metadata = () => {
      const raw = video.duration;
      duration = Number.isFinite(raw) ? Math.max(0, raw > 5 ? raw - 5 : raw) : 0;
      update();
    };
    // A direct touch gesture unlocks the decoder on iOS if preload alone did not.
    const unlock = () => {
      const attempt = video.play();
      attempt
        ?.then(() => {
          video.pause();
          schedule();
        })
        .catch(() => {});
    };

    video.addEventListener("loadedmetadata", metadata);
    video.addEventListener("loadeddata", schedule);
    video.addEventListener("seeked", schedule);
    container.addEventListener("touchstart", unlock, { once: true, passive: true });
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    document.addEventListener("visibilitychange", update);
    if (video.readyState >= 1) metadata();
    update();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      video.pause();
      video.removeEventListener("loadedmetadata", metadata);
      video.removeEventListener("loadeddata", schedule);
      video.removeEventListener("seeked", schedule);
      container.removeEventListener("touchstart", unlock);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className={`film-scroll ${failed ? "film-scroll-error" : ""}`}
      aria-label="Video de Thermomix controlado al desplazarte"
    >
      <div ref={stageRef} className="film-stage">
        <div className="film-topline">
          <span>Thermomix TM7</span>
          <span>Hay que verla para entenderla.</span>
        </div>
        <div className="film-display">
          <div className="film-side-note" aria-hidden="true">
            <span>01 — THERMOMIX</span>
            <span className="film-side-rule" />
          </div>
          <div className="film-window">
            <video
              ref={videoRef}
              src={videoSrc}
              muted
              playsInline
              preload="auto"
              aria-label="Demostración de Thermomix; desplázate para avanzar o retroceder"
              onError={() => setFailed(true)}
            />
            {failed && (
              <div className="film-error">
                <p>No se pudo cargar el video.</p>
                <a href={videoSrc} className="lux-text-link">
                  Abrir video <ArrowUpRight size={14} />
                </a>
              </div>
            )}
          </div>
          <p className="film-side-signature signature" aria-hidden="true">
            María Regina
          </p>
        </div>
        <div className="film-footer">
          <div className="film-scroll-cue">
            <span className="film-scroll-icon">
              <ArrowDown size={16} aria-hidden="true" />
            </span>
            <span>Desliza para descubrir</span>
          </div>
          <WhatsAppLink
            source="demonstration"
            variant="outline"
            size="sm"
            showIcon={false}
            className="film-cta"
          >
            Agendar demostración <ArrowUpRight size={14} aria-hidden="true" />
          </WhatsAppLink>
        </div>
        <div className="film-timeline" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}

/** The same framing with native playback controls when reduced motion is preferred. */
function FallbackVideo() {
  return (
    <section className="film-static">
      <div className="film-topline">
        <span>Thermomix TM7</span>
        <span>Hay que verla para entenderla.</span>
      </div>
      <div className="film-display">
        <div className="film-window">
          <video
            src={videoSrc}
            muted
            playsInline
            controls
            preload="metadata"
            aria-label="Demostración de Thermomix"
          />
        </div>
      </div>
      <div className="film-static-footer">
        <WhatsAppLink source="demonstration" variant="outline" size="sm" showIcon={false}>
          Agendar demostración <ArrowUpRight size={14} aria-hidden="true" />
        </WhatsAppLink>
      </div>
    </section>
  );
}

export function ScrollVideo() {
  const [useScrub, setUseScrub] = useState(false);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setUseScrub(!motion.matches);
    update();
    motion.addEventListener("change", update);
    return () => motion.removeEventListener("change", update);
  }, []);
  return <div id="scroll-video">{useScrub ? <ScrubExperience /> : <FallbackVideo />}</div>;
}
