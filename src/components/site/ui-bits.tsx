import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { Recipe } from "@/data/recipes";

/** Tiny uppercase editorial label, optionally numbered: 01 — INSPIRACIÓN */
export function Label({
  index,
  children,
  className,
  tone = "muted",
}: {
  index?: string;
  children: ReactNode;
  className?: string;
  tone?: "muted" | "champagne" | "light";
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[0.66rem] font-medium uppercase tracking-[0.28em]",
        tone === "muted" && "text-muted-foreground",
        tone === "champagne" && "text-champagne",
        tone === "light" && "text-warm-white/70",
        className,
      )}
    >
      {index && <span className="text-champagne">{index}</span>}
      {index && <span className="h-px w-6 bg-champagne/60" aria-hidden />}
      <span>{children}</span>
    </p>
  );
}

/** Asymmetrical editorial section head. Never centered by default. */
export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
  aside,
}: {
  eyebrow?: string;
  index?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  aside?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end",
        align === "center" && "md:grid-cols-1 md:justify-items-center md:text-center",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
        {eyebrow && (
          <Label index={index} tone={tone === "light" ? "light" : "muted"}>
            {eyebrow}
          </Label>
        )}
        <h2
          className={cn(
            "mt-5 text-[2.1rem] leading-[0.98] text-balance-tight md:text-[3.4rem]",
            tone === "light" && "text-warm-white",
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-5 max-w-xl text-[1.02rem] leading-relaxed",
              tone === "light" ? "text-warm-white/70" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        )}
      </div>
      {aside && <div className="md:pb-2">{aside}</div>}
    </div>
  );
}

export function Chip({
  children,
  active,
  onClick,
  className,
}: {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  const Comp = onClick ? "button" : "span";
  return (
    <Comp
      onClick={onClick}
      className={cn(
        "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[0.8rem] tracking-wide transition-all duration-300",
        active
          ? "border-ink bg-ink text-warm-white"
          : "border-border bg-transparent text-foreground/70 hover:border-foreground/40 hover:text-foreground",
        onClick && "cursor-pointer active:scale-[0.98]",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

/** Editorial link with animated underline. */
export function ArrowLink({
  to,
  href,
  children,
  className,
  onClick,
  tone = "dark",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  tone?: "dark" | "light";
}) {
  const cls = cn(
    "editorial-link inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.2em]",
    tone === "light" ? "text-warm-white" : "text-foreground",
    className,
  );
  const content = (
    <>
      {children}
      <span aria-hidden>→</span>
    </>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} onClick={onClick} className={cls}>
      {content}
    </Link>
  );
}

/** Solid editorial button (near-black by default). */
export function EditorialButton({
  to,
  onClick,
  children,
  variant = "solid",
  className,
  type = "button",
}: {
  to?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
  type?: "button" | "submit";
}) {
  const cls = cn(
    "inline-flex h-12 items-center justify-center gap-2 rounded-sm px-7 text-[0.78rem] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-[2px]",
    variant === "solid" && "bg-ink text-warm-white hover:bg-espresso",
    variant === "outline" && "border border-ink/25 text-foreground hover:border-ink",
    variant === "light" && "bg-warm-white text-ink hover:bg-ivory",
    className,
  );
  if (to) {
    return (
      <Link to={to} onClick={onClick} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function RecipeCard({
  recipe,
  className,
  size = "md",
}: {
  recipe: Recipe;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <Link
      to="/recetas/$slug"
      params={{ slug: recipe.slug }}
      className={cn("group block", className)}
    >
      <div className="hover-zoom relative bg-secondary">
        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          className={cn(
            "w-full object-cover",
            size === "sm" && "aspect-[4/5]",
            size === "md" && "aspect-[4/3]",
            size === "lg" && "aspect-[16/10]",
          )}
        />
      </div>
      <p className="mt-4 text-[0.62rem] uppercase tracking-[0.28em] text-champagne">
        {recipe.minutes} min · {recipe.difficulty}
      </p>
      <h3
        className={cn(
          "mt-2 font-display leading-tight",
          size === "lg" ? "text-3xl md:text-4xl" : "text-2xl",
        )}
      >
        {recipe.title}
      </h3>
      <p className="mt-2 line-clamp-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        {recipe.description}
      </p>
    </Link>
  );
}

export function Disclaimer({ children }: { children: ReactNode }) {
  return (
    <p className="border-l border-champagne/60 pl-4 text-[0.72rem] leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}

/** Customer-facing usage language — never "generations" or "AI credits". */
export function IdeasMeter({ used = 3, total = 5 }: { used?: number; total?: number }) {
  const left = Math.max(total - used, 0);
  return (
    <div className="flex flex-wrap items-center gap-4 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
      <span className="flex gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={cn("h-px w-7 transition-colors", i < left ? "bg-champagne" : "bg-border")}
          />
        ))}
      </span>
      <span>
        Te quedan {left} ideas este mes
      </span>
    </div>
  );
}

/** Scroll reveal wrapper — soft, never flashy. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <As
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </As>
  );
}

/** Animated number for calculators. */
export function AnimatedNumber({
  value,
  format = (n: number) => String(Math.round(n)),
  className,
}: {
  value: number;
  format?: (n: number) => string;
  className?: string;
}) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);

  useEffect(() => {
    const start = performance.now();
    const initial = from.current;
    const diff = value - initial;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / 650, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setShown(initial + diff * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else from.current = value;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return <span className={className}>{format(shown)}</span>;
}
