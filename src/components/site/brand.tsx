import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

/** The supplied Yo Uso Thermomix logo. Used as provided, never redrawn. */
export function BrandLogo({ className }: { className?: string }) {
  return (
    <Link to="/" aria-label="Yo Uso Thermomix, con María Regina" className={cn("block", className)}>
      <span className="inline-flex items-center rounded-md bg-ivory/40 px-2 py-1" style={{ mixBlendMode: 'multiply' }}>
        <img
          src={logo}
          alt="Yo Uso Thermomix — con María Regina"
          width={1200}
          height={579}
          className="h-10 w-auto md:h-12"
        />
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
