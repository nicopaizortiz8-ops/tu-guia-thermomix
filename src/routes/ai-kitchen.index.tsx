import { createFileRoute, Link } from "@tanstack/react-router";
import mesa from "@/assets/mesa-editorial.jpg";
import { MachineDrawing } from "@/components/site/machine-drawing";
import { IdeasMeter, Label, SectionHeading } from "@/components/site/ui-bits";
import { track } from "@/lib/site";

export const Route = createFileRoute("/ai-kitchen/")({
  head: () => ({
    meta: [
      { title: "¿Qué cocinamos? — Herramientas de cocina | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "Empieza por lo que necesitas hoy: ideas con lo que tienes, aprovechar el refri, planear tu semana y comparar costos.",
      },
      { property: "og:title", content: "¿Qué cocinamos? | Yo Uso Thermomix" },
      {
        property: "og:description",
        content: "Herramientas para cocinar mejor en casa, con María Regina.",
      },
    ],
  }),
  component: QueCocinamosPage,
});

type Tile = {
  index: string;
  title: string;
  desc: string;
  cta: string;
  to: string;
  image?: string;
  className?: string;
  large?: boolean;
};

const tiles: Tile[] = [
  {
    index: "01",
    title: "Calcula mi ahorro",
    desc: "Dónde se va tu presupuesto de comida.",
    cta: "Calcular",
    to: "/ai-kitchen/ahorro",
    image: mesa,
  },
  {
    index: "02",
    title: "¿Lo compro o lo hago?",
    desc: "Compara el súper con lo hecho en casa.",
    cta: "Comparar",
    to: "/ai-kitchen/hazlo-en-casa",
  },
  {
    index: "03",
    title: "Preguntar",
    desc: "Dudas de recetas, ingredientes y técnicas.",
    cta: "Preguntar",
    to: "/ai-kitchen/preguntame",
  },
  {
    index: "04",
    title: "Tu tiempo en la cocina",
    desc: "Qué tareas podrías simplificar.",
    cta: "Ver mi tiempo",
    to: "/ai-kitchen/tiempo",
  },
];

function QueCocinamosPage() {
  return (
    <div className="container-wide py-14 md:py-24">
      <SectionHeading
        eyebrow="Tu cocina"
        title="¿Qué cocinamos?"
        description="Empieza por lo que necesitas hoy."
        aside={<IdeasMeter used={3} total={5} />}
      />

      <div className="kitchen-grid mt-10 grid gap-5 md:grid-cols-2">
        {tiles.map((t) => (
          <Link
            key={t.to}
            to={t.to}
            onClick={() => track("ai_tool_opened", { tool: t.to, from: "que_cocinamos" })}
            className={`kitchen-tile group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-7 transition-colors duration-500 hover:bg-warm-white ${t.className ?? ""}`}
          >
            {t.image && (
              <img
                src={t.image}
                alt=""
                aria-hidden
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-15 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-25"
              />
            )}
            <span className="relative num-index">{t.index}</span>
            <MachineDrawing className="absolute right-7 top-6 h-20 w-20 text-olive/30" />
            <div className="relative">
              <h2
                className={`font-display uppercase leading-[0.98] tracking-tight ${t.large ? "text-[2.2rem] md:text-[3.2rem]" : "text-[1.5rem]"}`}
              >
                {t.title}
              </h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {t.desc}
              </p>
              <span className="editorial-link mt-4 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-cognac">
                {t.cta} <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 grid gap-8 border-t border-border pt-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Label tone="champagne">Próximamente</Label>
          <h2 className="mt-5 text-[2rem] leading-tight md:text-[2.8rem]">Club Yo Uso</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Más recetas, planificación, listas, herramientas y contenido de María Regina. Tus ideas
            gratuitas se renuevan cada mes.
          </p>
        </div>
        <Link
          to="/plus"
          onClick={() => track("plus_viewed", { source: "que_cocinamos" })}
          className="editorial-link text-[0.75rem] uppercase tracking-[0.2em]"
        >
          Conocer el Club →
        </Link>
      </div>
    </div>
  );
}
