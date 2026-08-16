import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { site, track } from "@/lib/site";
import { WhatsAppLink } from "./whatsapp-link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl">Yo Uso Thermomix</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Recetas, Lives y herramientas para cocinar mejor en casa, desde Guatemala.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("instagram_clicked", { source: "footer" })}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-background"
                aria-label="Instagram"
              >
                <Instagram className="size-[18px]" />
              </a>
              <WhatsAppLink source="footer" size="sm" variant="outline">
                WhatsApp
              </WhatsAppLink>
            </div>
          </div>

          <FooterCol
            title="Cocinar"
            items={[
              { to: "/recetas", label: "Recetas" },
              { to: "/ai-kitchen", label: "AI Kitchen" },
              { to: "/ai-kitchen/crear-receta", label: "¿Qué cocino hoy?" },
              { to: "/ai-kitchen/plan-semanal", label: "Planea mi semana" },
            ]}
          />
          <FooterCol
            title="Descubrir"
            items={[
              { to: "/lives", label: "Lives" },
              { to: "/thermomix", label: "Conoce Thermomix" },
              { to: "/ai-kitchen/ahorro", label: "Calcula tu ahorro" },
              { to: "/sobre-mi", label: "Sobre mí" },
            ]}
          />
          <FooterCol
            title="Cuenta"
            items={[
              { to: "/mi-cocina", label: "Mi Cocina" },
              { to: "/plus", label: "Thermomix+" },
            ]}
          />
        </div>

        <div className="mt-12 space-y-3 border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground">
          <p>
            Yo Uso Thermomix es una iniciativa independiente de una consultora de Thermomix en
            Guatemala. [Texto de divulgación pendiente de confirmación].
          </p>
          <p>
            Las recetas creadas con herramientas automáticas son sugerencias y pueden requerir
            ajustes o verificación antes de cocinarlas. Los cálculos de ahorro y tiempo son
            estimaciones y varían según ingredientes, establecimientos y hábitos.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
            <span>© {new Date().getFullYear()} Yo Uso Thermomix</span>
            <Link to="/" hash="privacidad" className="hover:text-foreground">
              Privacidad
            </Link>
            <Link to="/" hash="terminos" className="hover:text-foreground">
              Términos
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
      <p className="eyebrow">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="text-foreground/75 transition-colors hover:text-foreground">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
