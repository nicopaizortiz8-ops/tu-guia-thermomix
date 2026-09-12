import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/homepage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thermomix Guatemala | María Regina Ortiz | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "Thermomix Guatemala con María Regina Ortiz, consultora independiente. Conoce la TM7, descubre recetas y agenda una demostración personalizada.",
      },
      { property: "og:title", content: "Thermomix Guatemala | Yo Uso Thermomix" },
      {
        property: "og:description",
        content:
          "Thermomix Guatemala: conoce la TM7, descubre recetas y agenda una demostración con María Regina Ortiz, consultora independiente.",
      },
      { name: "twitter:title", content: "Thermomix Guatemala | Yo Uso Thermomix" },
      {
        name: "twitter:description",
        content: "Conoce Thermomix TM7 en Guatemala con María Regina Ortiz. Recetas y demostraciones personalizadas.",
      },
    ],
  }),
  component: HomePage,
});
