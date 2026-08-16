import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";
import { Chip, Disclaimer, UsageMeter } from "@/components/site/ui-bits";
import { WhatsAppLink } from "@/components/site/whatsapp-link";

export const Route = createFileRoute("/ai-kitchen/preguntame")({
  head: () => ({
    meta: [
      { title: "Pregúntame — Dudas de cocina y Thermomix | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "Resuelve dudas sobre recetas, funciones y técnicas de cocina con Thermomix. Respuestas guiadas, sin complicaciones.",
      },
      { property: "og:title", content: "Pregúntame | Yo Uso Thermomix" },
      { property: "og:description", content: "Dudas de cocina resueltas de forma sencilla." },
    ],
  }),
  component: Preguntame,
});

const sugerencias = [
  "¿Cómo sustituyo la crema en una salsa?",
  "¿A qué velocidad se amasa el pan?",
  "¿Puedo hacer atol en el vaso?",
  "¿Cómo limpio el vaso rápido?",
];

function Preguntame() {
  const [q, setQ] = useState("");
  const [asked, setAsked] = useState<string | null>(null);

  return (
    <div className="container-page py-10 md:py-16">
      <Link
        to="/ai-kitchen"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> AI Kitchen
      </Link>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
        <h1 className="text-3xl md:text-[2.6rem]">Pregúntame</h1>
        <UsageMeter used={3} total={5} />
      </div>
      <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
        Dudas sobre recetas, funciones o técnicas. Escribe con tus palabras.
      </p>

      <div className="mt-10 max-w-3xl rounded-[1.5rem] border border-border bg-card p-6 md:p-8">
        <div className="flex flex-wrap gap-2">
          {sugerencias.map((s) => (
            <Chip key={s} onClick={() => setQ(s)}>
              {s}
            </Chip>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setAsked(q);
          }}
          className="mt-6 flex gap-2"
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Escribe tu pregunta…"
            className="h-13 flex-1 rounded-full border border-border bg-background px-5 text-sm outline-none focus:border-primary"
          />
          <button
            type="submit"
            aria-label="Enviar pregunta"
            className="inline-flex size-13 items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            <Send className="size-5" />
          </button>
        </form>

        {asked && (
          <div className="mt-6 rounded-2xl bg-secondary/60 p-5">
            <p className="text-sm font-medium">{asked}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              [Respuesta de ejemplo. Esta herramienta todavía no está conectada: en la siguiente
              etapa las respuestas se generarán en el servidor y se guardarán en tu historial.]
            </p>
            <WhatsAppLink source="recipe_generator" size="sm" variant="outline" className="mt-4">
              Prefiero preguntarle a Ana
            </WhatsAppLink>
          </div>
        )}

        <div className="mt-6">
          <Disclaimer>
            Las respuestas generadas son orientativas y pueden requerir verificación. No sustituyen
            recomendaciones médicas ni nutricionales.
          </Disclaimer>
        </div>
      </div>
    </div>
  );
}
