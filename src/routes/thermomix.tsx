import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import heroImg from "@/assets/hero-cocina.jpg";
import { Chip, Disclaimer, SectionHeading } from "@/components/site/ui-bits";
import { WhatsAppLink } from "@/components/site/whatsapp-link";
import { track } from "@/lib/site";

export const Route = createFileRoute("/thermomix")({
  head: () => ({
    meta: [
      { title: "Conoce Thermomix — Qué hace y para quién | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "Una explicación honesta de qué es Thermomix, qué puedes cocinar con ella y cómo saber si encaja en tu cocina. Sin promesas exageradas.",
      },
      { property: "og:title", content: "Conoce Thermomix | Yo Uso Thermomix" },
      {
        property: "og:description",
        content: "Qué hace, qué puedes cocinar y para quién puede tener sentido.",
      },
    ],
  }),
  component: ThermomixPage,
});

const faqs = [
  ["¿Qué funciones tiene?", "Pesa, tritura, amasa, calienta, cocina al vapor y remueve. [Especificaciones oficiales pendientes de verificar.]"],
  ["¿Cuánto cuesta?", "El precio y las formas de pago vigentes en Guatemala te los comparto directamente por WhatsApp."],
  ["¿Necesito saber cocinar?", "No. Las recetas guiadas indican tiempo, temperatura y velocidad en cada paso."],
  ["¿Sirve para comida guatemalteca?", "Sí: recados, caldos, salsas, atoles y más. En el recetario tienes ejemplos."],
  ["¿Hay garantía y soporte?", "[Información oficial pendiente de confirmar.] Como consultora te acompaño después de la compra."],
];

const quizQuestions = [
  { q: "¿Cuántas personas viven en casa?", options: ["1", "2", "3–4", "5+"] },
  { q: "¿Con qué frecuencia cocinas?", options: ["Casi nunca", "2–3 veces por semana", "Casi a diario", "Siempre"] },
  { q: "¿Cuánto tiempo tienes para cocinar?", options: ["Menos de 20 min", "30 min", "1 hora", "El que haga falta"] },
  { q: "¿Qué cocinas más?", options: ["Comida rápida", "Comida de casa", "Saludable", "Postres y repostería"] },
  { q: "¿Qué te frustra de cocinar?", options: ["El tiempo", "Lavar trastes", "No saber qué hacer", "Que no me sale igual"] },
  { q: "¿Qué te gustaría mejorar?", options: ["Comer más en casa", "Ahorrar", "Variedad", "Cocinar más sano"] },
];

const perfiles = [
  "Familia práctica",
  "Cocinero ocupado",
  "Foodie creativo",
  "Meal-prep planner",
  "Principiante",
];

function ThermomixPage() {
  return (
    <div>
      <section className="container-page pt-6">
        <div className="relative overflow-hidden rounded-[1.75rem]">
          <img src={heroImg} alt="Cocinando con Thermomix" className="h-[52vh] min-h-80 w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 md:p-12">
            <h1 className="max-w-2xl font-display text-[2.2rem] leading-tight text-cream md:text-[3.4rem]">
              Descubre Thermomix
            </h1>
            <p className="mt-4 max-w-xl leading-relaxed text-cream/85">
              Sin discurso de venta: qué hace, qué se puede cocinar y cómo saber si tiene sentido
              para tu cocina.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl">Qué es</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Thermomix es un aparato de cocina que reúne en un solo vaso varias tareas que
              normalmente haces con distintos utensilios: pesar, picar, triturar, amasar, calentar,
              cocinar al vapor y remover mientras cocina.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              [Especificaciones técnicas oficiales pendientes de verificar antes de publicarlas.]
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl">Qué puedes hacer</h2>
            <ul className="mt-4 grid gap-2.5 text-muted-foreground sm:grid-cols-2">
              {[
                "Sopas y cremas",
                "Recados y salsas",
                "Masas y pan",
                "Yogurt y lácteos",
                "Postres",
                "Comida al vapor",
                "Molidos y polvos",
                "Bebidas y atoles",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            ["1. Eliges la receta", "Una receta guiada o una de las mías."],
            ["2. Cocinas paso a paso", "Cada paso indica tiempo, temperatura y velocidad."],
            ["3. Sirves y lavas menos", "Casi todo ocurre dentro del mismo vaso."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-display text-lg">{t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <Quiz />

      <section className="container-page py-16 md:py-24">
        <SectionHeading eyebrow="Preguntas" title="Preguntas frecuentes" />
        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg">
                {q}
                <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <WhatsAppLink source="thermomix_page" size="lg">
            Quiero verla funcionando
          </WhatsAppLink>
          <Link
            to="/recetas"
            className="inline-flex h-13 items-center rounded-full border border-border bg-card px-6 text-sm font-medium"
          >
            Ver recetas primero
          </Link>
        </div>
        <div className="mt-8 max-w-2xl">
          <Disclaimer>
            Yo Uso Thermomix es una iniciativa independiente de una consultora de Thermomix en
            Guatemala. La información de producto que requiere verificación oficial aparece marcada
            como pendiente.
          </Disclaimer>
        </div>
      </section>
    </div>
  );
}

function Quiz() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [done, setDone] = useState(false);
  const perfil = perfiles[Object.keys(answers).length % perfiles.length] ?? perfiles[0];

  return (
    <section id="quiz" className="border-y border-border bg-secondary/50 py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="6 preguntas"
          title="¿Thermomix es para mí?"
          description="Responde con calma. Al final te digo qué funciones podrían serte útiles según cómo cocinas."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-7 rounded-[1.5rem] border border-border bg-card p-6 md:p-8">
            {quizQuestions.map((item, idx) => (
              <div key={item.q}>
                <p className="font-display text-lg">{item.q}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.options.map((o) => (
                    <Chip
                      key={o}
                      active={answers[idx] === o}
                      onClick={() => setAnswers((a) => ({ ...a, [idx]: o }))}
                    >
                      {o}
                    </Chip>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={() => {
                setDone(true);
                track("thermomix_quiz_completed", { answers });
              }}
              className="h-13 w-full rounded-full bg-primary text-base font-medium text-primary-foreground"
            >
              Ver mi resultado
            </button>
          </div>

          <div className="rounded-[1.5rem] border border-border bg-card p-6 md:p-8">
            {done ? (
              <>
                <p className="eyebrow">Tu perfil</p>
                <h3 className="mt-3 font-display text-3xl">{perfil}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Según tus respuestas, estas funciones podrían ser especialmente útiles para ti:
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {[
                    "Recetas guiadas para resolver la cena entre semana",
                    "Cocción mientras remueve, para dejar de estar pendiente",
                    "Masas y pan sin amasar a mano",
                    "Preparar en un mismo vaso y lavar menos",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 rounded-2xl bg-secondary/70 p-5">
                  <p className="font-display text-lg">¿Quieres probarlo tú mismo?</p>
                  <p className="mt-1 text-sm text-muted-foreground">Agenda una demostración conmigo.</p>
                  <WhatsAppLink source="thermomix_quiz" className="mt-4" size="sm">
                    Agendar demostración
                  </WhatsAppLink>
                </div>
              </>
            ) : (
              <div className="flex h-full min-h-56 flex-col items-center justify-center text-center">
                <ArrowRight className="size-5 text-muted-foreground" />
                <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                  Responde las preguntas y aquí verás tu perfil de cocina.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
