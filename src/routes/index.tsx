import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/homepage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yo Uso Thermomix | Thermomix Guatemala | María Regina Ortiz" },
      {
        name: "description",
        content:
          "Descubre Thermomix en Guatemala con María Regina Ortiz. Conoce Thermomix TM7, sus beneficios y agenda una demostración personalizada.",
      },
      { property: "og:title", content: "Yo Uso Thermomix | Thermomix Guatemala" },
      {
        property: "og:description",
        content:
          "Descubre Thermomix TM7 y agenda una demostración con María Regina Ortiz en Guatemala..",
      },
    ],
  }),
  component: HomePage,
});
