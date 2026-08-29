import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

/** The supplied Yo Uso Thermomix logo. Used as provided, never redrawn. */
export function BrandLogo({ className }: { className?: string }) {
  return (
    <Link to="/" aria-label="Yo Uso Thermomix, con María Regina" className={cn("block", className)}>
      <img
        src={logo}
        alt="Yo Uso Thermomix — con María Regina"
        width={100}
        height={379}
        className="animate-soft-fade h-10 w-auto mix-blend-multiply opacity-70 md:h-32"
      />
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
