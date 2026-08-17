import { createFileRoute, Link } from "@tanstack/react-router";
import mesa from "@/assets/mesa-editorial.jpg";
import refri from "@/assets/ingredientes-refri.jpg";
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
    title: "Tengo estos ingredientes",
    desc: "Dime qué tienes en casa y encontremos qué cocinar.",
    cta: "Dame ideas",
    to: "/ai-kitchen/crear-receta",
    image: mesa,
    className: "md:col-span-2 md:row-span-2",
    large: true,
  },
  {
    index: "02",
    title: "Vacía mi refri",
    desc: "Antes de tirarlo, cocinémoslo.",
    cta: "Aprovechar ingredientes",
    to: "/ai-kitchen/vacia-mi-refri",
    image: refri,
    className: "md:row-span-2",
  },
  {
    index: "03",
    title: "Planea mi semana",
    desc: "Un menú que sí puedas cumplir.",
    cta: "Planear",
    to: "/ai-kitchen/plan-semanal",
  },
  {
    index: "04",
    title: "Calcula mi ahorro",
    desc: "Dónde se va tu presupuesto de comida.",
    cta: "Calcular",
    to: "/ai-kitchen/ahorro",
    className: "md:col-span-2",
  },
  {
    index: "05",
    title: "¿Lo compro o lo hago?",
    desc: "Compara el súper con lo hecho en casa.",
    cta: "Comparar",
    to: "/ai-kitchen/hazlo-en-casa",
  },
  {
    index: "06",
    title: "Preguntar",
    desc: "Dudas de recetas, ingredientes y técnicas.",
    cta: "Preguntar",
    to: "/ai-kitchen/preguntame",
  },
  {
    index: "07",
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

      <div className="mt-14 grid auto-rows-[13rem] gap-px bg-border md:grid-cols-3">
        {tiles.map((t) => (
          <Link
            key={t.to}
            to={t.to}
            onClick={() => track("ai_tool_opened", { tool: t.to, from: "que_cocinamos" })}
            className={`group relative flex flex-col justify-between overflow-hidden bg-background p-7 transition-colors duration-500 hover:bg-warm-white ${t.className ?? ""}`}
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
            <div className="relative">
              <h2
                className={`font-display uppercase leading-[0.98] tracking-tight ${t.large ? "text-[2.2rem] md:text-[3.2rem]" : "text-[1.5rem]"}`}
              >
                {t.title}
              </h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
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
