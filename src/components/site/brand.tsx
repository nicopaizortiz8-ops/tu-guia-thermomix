import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/** Render a large typographic site title instead of the logo artwork */
export function BrandLogo({ className }: { className?: string }) {
  return (
    <Link to="/" aria-label="Yo Uso Thermomix" className={cn("block", className)}>
      <div className="mx-auto md:mx-0 p-2 rounded-sm flex items-center" style={{ maxWidth: 420 }}>
        <div>
          <p className="font-display text-[1.65rem] md:text-[2.4rem] leading-none uppercase tracking-[0.06em] text-foreground">Yo Uso</p>
          <p className="font-display text-[1.15rem] md:text-[1.6rem] leading-none uppercase tracking-[0.18em] text-olive">Thermomix</p>
          <p className="signature mt-2 text-base md:text-2xl">con María Regina</p>
        </div>
      </div>
    </Link>
  );
}

/** Typographic lockup for dark surfaces where the logo artwork cannot sit. */
export function BrandLockup({ className }: { className?: string }) {
  return (
    <div className={cn("leading-none", className)}>
      <p className="font-display text-[1.6rem] uppercase tracking-[0.14em] md:text-[2rem]">
        Yo Uso
      </p>
      <p className="mt-2 text-[0.7rem] uppercase tracking-[0.44em] text-olive">Thermomix</p>
      <p className="signature mt-3 text-2xl">con María Regina</p>
    </div>
  );
}
