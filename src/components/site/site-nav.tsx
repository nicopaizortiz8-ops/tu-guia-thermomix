import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhatsAppLink } from "./whatsapp-link";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/ai-kitchen", label: "AI Kitchen" },
  { to: "/recetas", label: "Recetas" },
  { to: "/lives", label: "Lives" },
  { to: "/thermomix", label: "Conoce Thermomix" },
  { to: "/sobre-mi", label: "Sobre mí" },
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
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-lg tracking-tight md:text-xl">Yo Uso Thermomix</span>
          <span className="mt-0.5 text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
            Cocina · Recetas · Herramientas
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-foreground/75 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/recetas"
            aria-label="Buscar recetas"
            className="hidden size-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground md:inline-flex"
          >
            <Search className="size-[18px]" />
          </Link>
          <Link
            to="/mi-cocina"
            className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm text-foreground/75 transition-colors hover:bg-secondary hover:text-foreground lg:inline-flex"
          >
            <UserRound className="size-4" />
            Iniciar sesión
          </Link>
          <WhatsAppLink source="nav" className="hidden sm:inline-flex" size="sm">
            Hablar por WhatsApp
          </WhatsAppLink>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border-b border-border/60 py-3.5 font-display text-xl"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/mi-cocina" className="py-3.5 text-sm text-muted-foreground">
              Iniciar sesión
            </Link>
            <WhatsAppLink source="nav" size="lg" className="mb-4 w-full">
              Hablar por WhatsApp
            </WhatsAppLink>
          </nav>
        </div>
      )}
    </header>
  );
}
