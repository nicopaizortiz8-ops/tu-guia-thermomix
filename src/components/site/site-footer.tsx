import { Link } from "@tanstack/react-router";
import { site, track } from "@/lib/site";
import { BrandLockup } from "./brand";
import { whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-warm-white">
      <div className="container-page py-16 md:py-24">
        <div className="grid gap-14 md:grid-cols-[1.4fr_repeat(3,0.7fr)]">
          <div>
            <BrandLockup className="text-warm-white" />
            <p className="mt-8 max-w-xs text-sm leading-relaxed text-warm-white/60">
              Recetas, Lives y herramientas para cocinar mejor en casa, desde Guatemala.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-[0.72rem] uppercase tracking-[0.2em]">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("instagram_clicked", { source: "footer" })}
                className="editorial-link w-fit text-warm-white/80 hover:text-warm-white"
              >
                Instagram {site.social.instagramHandle}
              </a>
              <a
                href={whatsappUrl("footer")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_clicked", { whatsapp_clicked_source: "footer" })}
                className="editorial-link w-fit text-warm-white/80 hover:text-warm-white"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <FooterCol
            title="Cocinar"
            items={[
              { to: "/recetas", label: "Recetas" },
              { to: "/ai-kitchen", label: "¿Qué cocinamos?" },
              { to: "/ai-kitchen/plan-semanal", label: "Mi semana" },
            ]}
          />
          <FooterCol
            title="Descubrir"
            items={[
              { to: "/lives", label: "Lives" },
              { to: "/sobre-mi", label: "María Regina" },
            ]}
          />
          <FooterCol
            title="Cuenta"
            items={[
              { to: "/mi-cocina", label: "Mi cocina" },
              { to: "/plus", label: "Club Yo Uso" },
            ]}
          />
        </div>

        <div className="mt-16 space-y-4 border-t border-warm-white/15 pt-10 text-[0.72rem] leading-relaxed text-warm-white/45">
          <p className="max-w-3xl">
            Yo Uso Thermomix es una iniciativa independiente de María Regina, consultora de
            Thermomix en Guatemala. Las recetas e ideas generadas con herramientas automáticas son sugerencias y pueden requerir ajustes.
            Los cálculos de costos y tiempos son estimaciones.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 pt-2 uppercase tracking-[0.2em]">
            <span>© {new Date().getFullYear()} Yo Uso Thermomix</span>
            <Link to="/" hash="privacidad" className="hover:text-warm-white">
              Privacidad
            </Link>
            <Link to="/" hash="terminos" className="hover:text-warm-white">
              Términos
            </Link>
            <Link to="/" hash="divulgacion" className="hover:text-warm-white">
              Divulgación
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { to: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-[0.66rem] uppercase tracking-[0.28em] text-champagne">{title}</p>
      <ul className="mt-6 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.to}>
            <Link
              to={i.to}
              className="editorial-link text-warm-white/70 transition-colors hover:text-warm-white"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
