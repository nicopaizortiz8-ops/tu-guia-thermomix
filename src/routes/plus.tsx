import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/site/ui-bits";
import { WhatsAppLink } from "@/components/site/whatsapp-link";

export const Route = createFileRoute("/plus")({
  head: () => ({
    meta: [
      { title: "Yo Uso Thermomix+ — Cocina más. Planea menos." },
      {
        name: "description",
        content:
          "Más generaciones en AI Kitchen, planificación semanal, recetas exclusivas e historial. Próximamente.",
      },
      { property: "og:title", content: "Yo Uso Thermomix+" },
      { property: "og:description", content: "Cocina más. Planea menos. Próximamente." },
    ],
  }),
  component: Plus,
});

const gratis = [
  "Generaciones limitadas de AI Kitchen",
  "Recetas básicas",
  "Calculadora de ahorro",
  "Lives",
  "Información sobre Thermomix",
];

const plus = [
  "Más generaciones sujetas a uso razonable",
  "Recetas exclusivas",
  "Recetas guardadas sin límite",
  "Planificación semanal",
  "Listas de compras",
  "Historial",
  "Preferencias personales",
];

function Plus() {
  return (
    <div className="container-page py-12 md:py-20">
      <SectionHeading
        eyebrow="Membresía"
        title="Cocina más. Planea menos."
        description="Una versión ampliada de Yo Uso Thermomix para quienes cocinan a diario."
        align="center"
      />

      <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
        <div className="rounded-[1.5rem] border border-border bg-card p-8">
          <p className="eyebrow">Gratis</p>
          <p className="mt-3 font-display text-3xl">Q0</p>
          <ul className="mt-6 space-y-3 text-sm">
            {gratis.map((g) => (
              <li key={g} className="flex items-start gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {g}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[1.5rem] bg-primary p-8 text-primary-foreground">
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-primary-foreground/70">
            Thermomix+
          </p>
          <p className="mt-3 font-display text-3xl">Próximamente</p>
          <ul className="mt-6 space-y-3 text-sm">
            {plus.map((g) => (
              <li key={g} className="flex items-start gap-2">
                <Check className="mt-0.5 size-4 shrink-0" /> {g}
              </li>
            ))}
          </ul>
          <button
            disabled
            className="mt-8 h-12 w-full cursor-not-allowed rounded-full bg-cream/20 text-sm font-medium"
          >
            Próximamente
          </button>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-xl text-center text-xs text-muted-foreground">
        Los precios y la fecha de lanzamiento están pendientes de definir. Tus generaciones
        gratuitas se renuevan cada mes.
      </p>

      <div className="mt-12 text-center">
        <WhatsAppLink source="homepage" size="lg" variant="outline">
          ¿Tienes dudas? Escríbeme
        </WhatsAppLink>
      </div>
    </div>
  );
}
