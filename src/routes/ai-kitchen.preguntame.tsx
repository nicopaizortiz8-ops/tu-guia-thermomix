import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, Send, MessageCircle } from "lucide-react";
import { whatsappUrl, track } from "@/lib/site";
import maria from "@/assets/maria-regina.png";

export const Route = createFileRoute("/ai-kitchen/preguntame")({
  head: () => ({
    meta: [
      { title: "Pregúntame — Dudas de cocina y Thermomix | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "Envía tus dudas sobre recetas, funciones y técnicas de cocina directamente a María Regina por WhatsApp.",
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
  "¿Qué incluye una demostración de Thermomix?",
  "¿Cómo puedo agendar una demostración?",
  "¿Qué diferencias hay entre Thermomix TM6 y TM7?",
  "¿Qué opciones de pago están disponibles?",
  "¿Qué puedo cocinar para toda la familia?",
  "¿Cómo adapto una receta tradicional a Thermomix?",
  "¿Cómo se cocina al vapor con el Varoma?",
  "¿Qué recetas me recomiendas para empezar?",
  "¿Puedo preparar recetas sin gluten o sin lácteos?",
  "¿Cómo puedo participar en el próximo Live?",
  "¿Qué acompañamiento recibo después de comprarla?",
  "¿Cómo preparo yogurt natural en casa?",
];

function Preguntame() {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="ask-page container-page py-10 md:py-16">
      <Link
        to="/ai-kitchen"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> ¿Qué cocinamos?
      </Link>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
        <h1 className="text-3xl md:text-[2.6rem]">Pregúntame</h1>
      </div>
      <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
        Dudas sobre recetas, funciones o técnicas. Escribe con tus palabras.
      </p>

      <div className="ask-layout mt-10">
        <div className="ask-suggestions">
          <p className="lux-kicker">Recetas, Thermomix y tu cocina</p>
          {sugerencias.map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={q === s}
              onClick={() => {
                setQ(s);
                inputRef.current?.focus({ preventScroll: true });
                document.getElementById("question-form")?.scrollIntoView({
                  behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                    ? "auto"
                    : "smooth",
                  block: "center",
                });
              }}
            >
              <span>{s}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          ))}
        </div>
        <form
          id="question-form"
          onSubmit={(e) => {
            e.preventDefault();
            const question = q.trim();
            if (!question) return;
            track("whatsapp_clicked", { whatsapp_clicked_source: "question" });
            window.location.assign(whatsappUrl("question", question));
          }}
          className="ask-form"
        >
          <div className="ask-person">
            <img src={maria} alt="María Regina" width={72} height={72} />
            <div>
              <p>María Regina</p>
              <span>
                <MessageCircle size={13} aria-hidden="true" /> WhatsApp
              </span>
            </div>
          </div>
          <label htmlFor="question-input" className="mt-7 block font-display text-2xl">
            Escribe tu pregunta
          </label>
          <textarea
            ref={inputRef}
            id="question-input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Escribe tu pregunta…"
            rows={5}
            maxLength={1500}
            required
            aria-describedby="whatsapp-question-help"
            className="mt-4 w-full resize-y rounded-lg border border-border bg-background p-4 text-base leading-relaxed focus:border-primary"
          />
          <p
            id="whatsapp-question-help"
            className="mt-3 text-xs leading-relaxed text-muted-foreground"
          >
            Al pulsar Enviar, se abrirá WhatsApp con tu pregunta lista para enviársela a María
            Regina.
          </p>
          <button
            type="submit"
            disabled={!q.trim()}
            aria-label="Enviar pregunta"
            className="mt-6 inline-flex h-13 w-full items-center justify-center gap-3 rounded-full bg-primary text-sm text-primary-foreground disabled:opacity-40"
          >
            Enviar <Send className="size-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  );
}
