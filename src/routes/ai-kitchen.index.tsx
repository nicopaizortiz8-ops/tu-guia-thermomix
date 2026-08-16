import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  ChefHat,
  Clock,
  ShoppingBasket,
  Sparkles,
  Wallet,
} from "lucide-react";
import { SectionHeading, UsageMeter } from "@/components/site/ui-bits";
import { track } from "@/lib/site";

export const Route = createFileRoute("/ai-kitchen/")({
  head: () => ({
    meta: [
      { title: "AI Kitchen — Herramientas para cocinar mejor | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "Seis herramientas para decidir qué cocinar, planear tu semana, estimar tu ahorro y aprovechar tu cocina.",
      },
      { property: "og:title", content: "AI Kitchen | Yo Uso Thermomix" },
      {
        property: "og:description",
        content: "Herramientas inteligentes para cocinar mejor en casa.",
      },
    ],
  }),
  component: AiKitchenPage,
});

const tools = [
  {
    icon: ChefHat,
    title: "¿Qué cocino hoy?",
    desc: "Dime qué ingredientes tienes y descubre qué puedes preparar.",
    cta: "Crear receta",
    to: "/ai-kitchen/crear-receta",
  },
  {
    icon: Wallet,
    title: "Calcula tu ahorro",
    desc: "Descubre cuánto podrías ahorrar cocinando más en casa.",
    cta: "Calcular",
    to: "/ai-kitchen/ahorro",
  },
  {
    icon: ShoppingBasket,
    title: "Hazlo en casa",
    desc: "Descubre qué productos del supermercado puedes preparar tú mismo.",
    cta: "Descubrir",
    to: "/ai-kitchen/hazlo-en-casa",
  },
  {
    icon: CalendarDays,
    title: "Planea mi semana",
    desc: "Crea un menú semanal adaptado a tu familia, presupuesto y preferencias.",
    cta: "Crear plan",
    to: "/ai-kitchen/plan-semanal",
  },
  {
    icon: Clock,
    title: "Tu tiempo en la cocina",
    desc: "Descubre qué tareas puedes simplificar con Thermomix.",
    cta: "Calcular",
    to: "/ai-kitchen/tiempo",
  },
  {
    icon: Sparkles,
    title: "Pregúntame",
    desc: "Resuelve dudas sobre recetas, funciones y cocina con Thermomix.",
    cta: "Preguntar",
    to: "/ai-kitchen/preguntame",
  },
] as const;

function AiKitchenPage() {
  return (
    <div className="container-page py-14 md:py-20">
      <SectionHeading
        eyebrow="AI Kitchen"
        title="Tu cocina, un poco más inteligente."
        description="Dime qué necesitas y empezamos."
      />
      <div className="mt-8">
        <UsageMeter used={3} total={5} />
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((t) => (
          <Link
            key={t.title}
            to={t.to}
            onClick={() => track("ai_tool_opened", { tool: t.to, from: "ai_kitchen" })}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-sage-soft text-primary">
              <t.icon className="size-5" />
            </span>
            <h2 className="mt-5 font-display text-xl">{t.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
              {t.cta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-14 grid gap-6 rounded-[1.5rem] border border-border bg-card p-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="font-display text-2xl">Sigue cocinando con Yo Uso Thermomix+</h2>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {[
              "Más generaciones con AI Kitchen",
              "Planificación semanal",
              "Recetas exclusivas",
              "Guarda todas tus recetas",
              "Historial",
              "Preferencias personalizadas",
            ].map((b) => (
              <li key={b}>· {b}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            Tus generaciones gratuitas se renuevan el próximo mes.
          </p>
        </div>
        <Link
          to="/plus"
          onClick={() => track("plus_viewed", { source: "ai_kitchen" })}
          className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
        >
          Conocer Thermomix+
        </Link>
      </div>
    </div>
  );
}
