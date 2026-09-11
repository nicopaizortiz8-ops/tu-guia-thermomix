import { createFileRoute, Link } from "@tanstack/react-router";
import { FoodComparison } from "@/components/site/food-comparison";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/ai-kitchen/hazlo-en-casa")({
  head: () => ({
    meta: [
      { title: "¿Lo compro o lo hago? — Qué puedes preparar tú mismo | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "Descubre qué productos del supermercado podrías preparar en casa y compara costos estimados.",
      },
      { property: "og:title", content: "¿Lo compro o lo hago? | Yo Uso Thermomix" },
      {
        property: "og:description",
        content: "Pan, yogurt, salsas y más, hechos en casa.",
      },
    ],
  }),
  component: HazloEnCasa,
});

function HazloEnCasa() {
  return (
    <div className="container-page py-10 md:py-16">
      <Link
        to="/ai-kitchen"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> ¿Qué cocinamos?
      </Link>
      <h1 className="mt-6 max-w-2xl text-3xl md:text-[2.6rem]">¿Lo compro o lo hago?</h1>
      <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
        Marca lo que sueles comprar hecho. No todo resulta siempre más barato en casa: aquí verás
        una comparación estimada para decidir con calma.
      </p>
      <FoodComparison interactive />
    </div>
  );
}
