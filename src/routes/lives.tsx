import { createFileRoute, Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import liveImg from "@/assets/live-italiana.jpg";
import { recipes } from "@/data/recipes";
import { track } from "@/lib/site";
import { SectionHeading } from "@/components/site/ui-bits";
import { WhatsAppLink } from "@/components/site/whatsapp-link";

export const Route = createFileRoute("/lives")({
  head: () => ({
    meta: [
      { title: "Cocina conmigo — Lives de cocina | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "Cocinamos en vivo cada semana: recetas paso a paso, dudas resueltas y los Lives anteriores para ver cuando quieras.",
      },
      { property: "og:title", content: "Cocina conmigo — Lives | Yo Uso Thermomix" },
      { property: "og:description", content: "Lives de cocina en vivo y grabados." },
    ],
  }),
  component: Lives,
});

function Lives() {
  return (
    <div className="container-page py-12 md:py-20">
      <SectionHeading
        eyebrow="Cocina conmigo"
        title="Nos vemos en la cocina."
        description="Cada semana cocinamos en vivo una receta completa y respondo dudas mientras avanzamos."
      />

      <div className="mt-12 grid gap-8 rounded-[1.75rem] border border-border bg-card p-6 md:grid-cols-2 md:items-center md:p-10">
        <div className="relative overflow-hidden rounded-[1.25rem]">
          <img src={liveImg} alt="Próximo live" loading="lazy" className="w-full object-cover" />
          <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.15em] text-accent-foreground">
            ● Próximo live
          </span>
        </div>
        <div>
          <p className="eyebrow">[Fecha por confirmar]</p>
          <h2 className="mt-3 text-3xl">Jueves · 7:00 p.m.</h2>
          <p className="mt-3 text-muted-foreground">
            Preparamos: <span className="text-foreground">Pan casero de todos los días</span>
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#"
              onClick={() => track("live_clicked", { source: "lives_page" })}
              className="inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground"
            >
              Quiero verlo
            </a>
            <button className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm font-medium hover:bg-secondary">
              Recordármelo
            </button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            [Enlace al Live pendiente de integración con Instagram.]
          </p>
        </div>
      </div>

      <h2 className="mt-20 text-2xl md:text-3xl">Lives anteriores</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.slice(1, 7).map((r) => (
          <div key={r.slug} className="group">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={r.image}
                alt={r.title}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-background/85 backdrop-blur">
                  <Play className="size-5" />
                </span>
              </span>
            </div>
            <h3 className="mt-4 font-display text-xl">Live: {r.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">[Fecha placeholder] · {r.minutes} min</p>
            <Link
              to="/recetas/$slug"
              params={{ slug: r.slug }}
              className="mt-3 inline-flex text-sm font-medium text-primary"
            >
              Ver la receta
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-[1.5rem] bg-secondary/70 p-8 md:p-12">
        <h2 className="max-w-xl text-2xl md:text-3xl">
          ¿Quieres que cocinemos algo específico en el próximo Live?
        </h2>
        <WhatsAppLink source="lives" className="mt-6" size="lg">
          Escríbeme tu idea
        </WhatsAppLink>
      </div>
    </div>
  );
}
