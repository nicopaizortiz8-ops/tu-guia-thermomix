import { Link } from "@tanstack/react-router";
import { MachineDrawing } from "./machine-drawing";
import { cn } from "@/lib/utils";

/** Compact wordmark that stays legible at every navigation size. */
export function BrandLogo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Yo Uso Thermomix, con María Regina"
      className={cn("brand-mark", className)}
    >
      <MachineDrawing className="brand-machine" />
      <span className="brand-words">
        <span className="brand-title">
          Yo Uso <span>Thermomix</span>
        </span>
        <span className="brand-signature">con María Regina</span>
      </span>
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
