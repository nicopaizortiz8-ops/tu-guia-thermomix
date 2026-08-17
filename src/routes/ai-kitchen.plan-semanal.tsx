import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, RefreshCw, Share2 } from "lucide-react";
import { recipes } from "@/data/recipes";
import { formatQ, track } from "@/lib/site";
import { Chip, Disclaimer } from "@/components/site/ui-bits";

export const Route = createFileRoute("/ai-kitchen/plan-semanal")({
  head: () => ({
    meta: [
      { title: "Planea mi semana — Menú semanal | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "Crea un menú semanal adaptado a tu familia, tu presupuesto en quetzales y tus preferencias, con lista de compras incluida.",
      },
      { property: "og:title", content: "Planea mi semana | Yo Uso Thermomix" },
      { property: "og:description", content: "Menú semanal y lista de compras estimada." },
    ],
  }),
  component: PlanSemanal,
});

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const comidas = ["Desayuno", "Almuerzo", "Cena"];
const prefs = ["Saludable", "Rápido", "Familiar", "Económico", "Vegetariano", "Alto en proteína"];

const lista = {
  "Frutas y verduras": ["Tomate", "Cebolla", "Espinaca", "Brócoli", "Limón"],
  Proteínas: ["Pollo", "Huevos", "Frijol negro"],
  Lácteos: ["Leche", "Crema", "Queso"],
  Despensa: ["Arroz", "Harina", "Aceite de oliva", "Levadura"],
  Otros: ["Especias", "Caldo"],
};

function PlanSemanal() {
  const [personas, setPersonas] = useState("4");
  const [presupuesto, setPresupuesto] = useState(1200);
  const [meals, setMeals] = useState<string[]>(["Almuerzo", "Cena"]);
  const [pref, setPref] = useState<string[]>(["Familiar", "Económico"]);
  const [evitar, setEvitar] = useState("");
  const [plan, setPlan] = useState(false);
  const [showList, setShowList] = useState(false);

  return (
    <div className="container-page py-10 md:py-16">
      <Link
        to="/ai-kitchen"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> ¿Qué cocinamos?
      </Link>
      <h1 className="mt-6 text-3xl md:text-[2.6rem]">Planea mi semana</h1>
      <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
        Un menú para siete días, pensado con lo que comen en casa.
      </p>

      <div className="mt-10 grid gap-6 rounded-[1.5rem] border border-border bg-card p-6 md:grid-cols-2 md:p-8">
        <div>
          <p className="font-display text-lg">¿Cuántas personas?</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["1", "2", "3", "4", "5+"].map((p) => (
              <Chip key={p} active={personas === p} onClick={() => setPersonas(p)}>
                {p}
              </Chip>
            ))}
          </div>
          <p className="mt-7 font-display text-lg">Presupuesto semanal (Q)</p>
          <input
            type="number"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
            className="mt-3 h-12 w-44 rounded-full border border-border bg-background px-5 text-sm outline-none focus:border-primary"
          />
          <p className="mt-7 font-display text-lg">¿Qué comidas necesitas?</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {comidas.map((c) => (
              <Chip
                key={c}
                active={meals.includes(c)}
                onClick={() =>
                  setMeals((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]))
                }
              >
                {c}
              </Chip>
            ))}
          </div>
        </div>
        <div>
          <p className="font-display text-lg">Preferencias</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {prefs.map((p) => (
              <Chip
                key={p}
                active={pref.includes(p)}
                onClick={() => setPref((s) => (s.includes(p) ? s.filter((x) => x !== p) : [...s, p]))}
              >
                {p}
              </Chip>
            ))}
          </div>
          <p className="mt-7 font-display text-lg">Ingredientes a evitar</p>
          <input
            value={evitar}
            onChange={(e) => setEvitar(e.target.value)}
            placeholder="Ej. cerdo, picante…"
            className="mt-3 h-12 w-full rounded-full border border-border bg-background px-5 text-sm outline-none focus:border-primary"
          />
          <button
            onClick={() => {
              setPlan(true);
              track("meal_plan_generated", { personas, presupuesto, meals, pref });
            }}
            className="mt-7 h-13 w-full rounded-full bg-primary text-base font-medium text-primary-foreground"
          >
            Crear mi plan
          </button>
        </div>
      </div>

      {plan && (
        <>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {dias.map((d, di) => (
              <div key={d} className="rounded-2xl border border-border bg-card p-5">
                <p className="eyebrow">{d}</p>
                <ul className="mt-4 space-y-3">
                  {meals.map((m, mi) => {
                    const r = recipes[(di + mi) % recipes.length]!;
                    return (
                      <li key={m} className="rounded-xl bg-secondary/60 p-3">
                        <p className="text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
                          {m}
                        </p>
                        <p className="mt-1 text-sm">{r.title}</p>
                        <div className="mt-2 flex gap-3 text-xs text-primary">
                          <Link to="/recetas/$slug" params={{ slug: r.slug }}>
                            Abrir
                          </Link>
                          <button className="inline-flex items-center gap-1">
                            <RefreshCw className="size-3" /> Cambiar
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowList(true)}
            className="mt-8 h-12 rounded-full bg-foreground px-6 text-sm font-medium text-background"
          >
            Generar lista de compras
          </button>
        </>
      )}

      {showList && (
        <div className="mt-8 rounded-[1.5rem] border border-border bg-card p-6 md:p-8">
          <h2 className="text-2xl">Tu lista de compras</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(lista).map(([cat, items]) => (
              <div key={cat}>
                <p className="eyebrow">{cat}</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {items.map((i) => (
                    <li key={i}>· {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <p className="font-display text-xl">Costo estimado: {formatQ(presupuesto * 0.82)}</p>
            <button className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium">
              <Share2 className="size-4" /> Compartir lista
            </button>
          </div>
          <div className="mt-6 max-w-2xl">
            <Disclaimer>
              Estimación únicamente. Los costos reales dependen de ingredientes, establecimientos y
              precios locales.
            </Disclaimer>
          </div>
        </div>
      )}
    </div>
  );
}
