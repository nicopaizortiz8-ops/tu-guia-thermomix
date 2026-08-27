import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "./brand";
import { WhatsAppLink } from "./whatsapp-link";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/ai-kitchen", label: "¿Qué cocinamos?" },
  { to: "/recetas", label: "Recetas" },
  { to: "/lives", label: "Lives" },
  { to: "/sobre-mi", label: "María Regina" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/80 bg-background/92 backdrop-blur-xl"
          : "border-b border-transparent bg-background",
      )}
    >
      <div className="container-wide grid h-[4.5rem] grid-cols-[auto_1fr_auto] items-center gap-4 md:h-24">
        <BrandLogo />

        <nav className="hidden items-center justify-center gap-8 xl:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="editorial-link text-[0.72rem] uppercase tracking-[0.2em] text-foreground/65 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-1 md:gap-2">
          <Link
            to="/recetas"
            aria-label="Buscar recetas"
            className="hidden size-10 items-center justify-center text-foreground/60 transition-colors hover:text-foreground md:inline-flex"
          >
            <Search className="size-[17px]" />
          </Link>
          <WhatsAppLink source="nav" className="hidden sm:inline-flex" size="sm" showIcon={false}>
            Hablar con María Regina
          </WhatsAppLink>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex size-10 items-center justify-center border border-border xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="container-page flex flex-col py-4">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                className="flex items-baseline gap-4 border-b border-border/60 py-4 font-display text-2xl"
                activeProps={{ className: "text-cognac" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                <span className="num-index">{String(i + 1).padStart(2, "0")}</span>
                {l.label}
              </Link>
            ))}
            <WhatsAppLink source="nav" size="lg" className="mb-4 w-full" showIcon={false}>
              Hablar con María Regina
            </WhatsAppLink>
          </nav>
        </div>
      )}
    </header>
  );
}
