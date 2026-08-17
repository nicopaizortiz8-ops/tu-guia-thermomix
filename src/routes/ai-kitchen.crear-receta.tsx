import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Plus, Sparkles, X } from "lucide-react";
import { recipes } from "@/data/recipes";
import { track } from "@/lib/site";
import { Chip, Disclaimer, IdeasMeter } from "@/components/site/ui-bits";
import { WhatsAppLink } from "@/components/site/whatsapp-link";

export const Route = createFileRoute("/ai-kitchen/crear-receta")({
  head: () => ({
    meta: [
      { title: "¿Qué cocino hoy? — Crea recetas con lo que tienes | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "Escribe los ingredientes que tienes en casa y recibe tres ideas de recetas adaptadas a tu tiempo y tu familia.",
      },
      { property: "og:title", content: "¿Qué cocino hoy? | Yo Uso Thermomix" },
      {
        property: "og:description",
        content: "Recetas a partir de los ingredientes que ya tienes.",
      },
    ],
  }),
  component: CrearReceta,
});

const personas = ["1", "2", "4", "6+"];
const tiempos = ["15 min", "30 min", "45 min", "No importa"];
const antojos = ["Rápido", "Saludable", "Comfort food", "Algo especial", "Económico", "Sorpréndeme"];

function CrearReceta() {
  const [ingredients, setIngredients] = useState<string[]>(["Pollo", "Tomate", "Arroz"]);
  const [input, setInput] = useState("");
  const [persona, setPersona] = useState("4");
  const [tiempo, setTiempo] = useState("30 min");
  const [antojo, setAntojo] = useState<string[]>(["Rápido"]);
  const [evitar, setEvitar] = useState("");
  const [results, setResults] = useState(false);

  const add = () => {
    const v = input.trim();
    if (!v) return;
    setIngredients((s) => (s.includes(v) ? s : [...s, v]));
    setInput("");
  };

  return (
    <div className="container-page py-10 md:py-16">
      <Link
        to="/ai-kitchen"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> AI Kitchen
      </Link>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-[2.6rem]">¿Qué cocino hoy?</h1>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Cuéntame qué tienes a la mano y te propongo tres formas de resolver la comida.
          </p>
        </div>
        <IdeasMeter used={3} total={5} />
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="space-y-8 rounded-[1.5rem] border border-border bg-card p-6 md:p-8">
          <div>
            <label className="font-display text-xl" htmlFor="ing">
              ¿Qué tienes en tu cocina?
            </label>
            <div className="mt-4 flex gap-2">
              <input
                id="ing"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    add();
                  }
                }}
                placeholder="Escribe un ingrediente y presiona Enter"
                className="h-12 flex-1 rounded-full border border-border bg-background px-5 text-sm outline-none focus:border-primary"
              />
              <button
                onClick={add}
                aria-label="Agregar ingrediente"
                className="inline-flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground"
              >
                <Plus className="size-5" />
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {ingredients.map((i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full bg-sage-soft px-4 py-2 text-sm"
                >
                  {i}
                  <button
                    onClick={() => setIngredients((s) => s.filter((x) => x !== i))}
                    aria-label={`Quitar ${i}`}
                  >
                    <X className="size-3.5" />
                  </button>
                </span>
              ))}
              {ingredients.length === 0 && (
                <p className="text-sm text-muted-foreground">Aún no has agregado ingredientes.</p>
              )}
            </div>
          </div>

          <Question title="¿Para cuántas personas?">
            {personas.map((p) => (
              <Chip key={p} active={persona === p} onClick={() => setPersona(p)}>
                {p}
              </Chip>
            ))}
          </Question>

          <Question title="¿Cuánto tiempo tienes?">
            {tiempos.map((t) => (
              <Chip key={t} active={tiempo === t} onClick={() => setTiempo(t)}>
                {t}
              </Chip>
            ))}
          </Question>

          <Question title="¿Qué te apetece?">
            {antojos.map((a) => (
              <Chip
                key={a}
                active={antojo.includes(a)}
                onClick={() =>
                  setAntojo((s) => (s.includes(a) ? s.filter((x) => x !== a) : [...s, a]))
                }
              >
                {a}
              </Chip>
            ))}
          </Question>

          <div>
            <p className="font-display text-xl">¿Algo que quieras evitar?</p>
            <input
              value={evitar}
              onChange={(e) => setEvitar(e.target.value)}
              placeholder="Ej. lácteos, picante, cilantro…"
              className="mt-4 h-12 w-full rounded-full border border-border bg-background px-5 text-sm outline-none focus:border-primary"
            />
          </div>

          <button
            onClick={() => {
              setResults(true);
              track("recipe_generated", {
                ingredients: ingredients.length,
                persona,
                tiempo,
                antojo,
              });
            }}
            className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-primary text-base font-medium text-primary-foreground transition-transform active:scale-[0.99]"
          >
            <Sparkles className="size-4" /> Crear mis recetas
          </button>

          <Disclaimer>
            Las recetas sugeridas son ideas generadas automáticamente y pueden requerir ajustes de
            cantidades, tiempos o temperaturas. Las preferencias alimentarias que indiques no
            sustituyen una recomendación médica.
          </Disclaimer>
        </div>

        <div>
          {results ? (
            <div className="space-y-5">
              <p className="eyebrow">Tres ideas para hoy</p>
              {recipes.slice(1, 4).map((r, i) => (
                <div
                  key={r.slug}
                  className="overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div className="relative">
                    <img
                      src={r.image}
                      alt={r.title}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs backdrop-blur">
                      {["⚡ Más rápida", "🥗 Más saludable", "👨‍👩‍👧 Para compartir"][i]}
                    </span>
                  </div>
                  <div className="p-5">
                    <h2 className="font-display text-xl">{r.title}</h2>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {r.minutes} min · {r.servings} personas · {r.difficulty}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {r.description}
                    </p>
                    <Link
                      to="/recetas/$slug"
                      params={{ slug: r.slug }}
                      className="mt-5 inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground"
                    >
                      Ver receta
                    </Link>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl bg-secondary/70 p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  ¿Quieres saber cómo quedarían estas recetas hechas en Thermomix?
                </p>
                <WhatsAppLink source="recipe_generator" className="mt-4" size="sm">
                  Preguntarle a {"María Regina"}
                </WhatsAppLink>
              </div>
            </div>
          ) : (
            <div className="flex h-full min-h-64 flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-border p-10 text-center">
              <Sparkles className="size-6 text-muted-foreground" />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Tus recetas aparecerán aquí. Agrega ingredientes y presiona “Crear mis recetas”.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Question({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-display text-xl">{title}</p>
      <div className="mt-4 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
