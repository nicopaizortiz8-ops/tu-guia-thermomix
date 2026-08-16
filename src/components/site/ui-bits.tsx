import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, Heart, Signal } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Recipe } from "@/data/recipes";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl leading-[1.1] text-balance-tight md:text-[2.6rem]">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
          {description}
        </p>
      )}
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
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-200",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-foreground/80 hover:border-foreground/25",
        onClick && "cursor-pointer active:scale-[0.98]",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

export function RecipeCard({ recipe, className }: { recipe: Recipe; className?: string }) {
  return (
    <Link
      to="/recetas/$slug"
      params={{ slug: recipe.slug }}
      className={cn("group block", className)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-secondary">
        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-background/85 backdrop-blur">
          <Heart className="size-4 text-foreground/70" />
        </span>
      </div>
      <h3 className="mt-4 font-display text-xl leading-snug">{recipe.title}</h3>
      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {recipe.description}
      </p>
      <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="size-3.5" /> {recipe.minutes} min
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Signal className="size-3.5" /> {recipe.difficulty}
        </span>
      </div>
    </Link>
  );
}

export function Disclaimer({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-xl border border-border bg-secondary/70 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}

export function UsageMeter({ used = 3, total = 5 }: { used?: number; total?: number }) {
  const left = Math.max(total - used, 0);
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-full border border-border bg-card px-4 py-2 text-xs text-muted-foreground">
      <span className="flex gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-5 rounded-full",
              i < used ? "bg-primary" : "bg-border",
            )}
          />
        ))}
      </span>
      <span>
        {used} de {total} generaciones utilizadas · te quedan {left} este mes
      </span>
    </div>
  );
}
