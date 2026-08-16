import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarPlus, Clock, Heart, Share2, Signal, Users, Wallet } from "lucide-react";
import { getRecipe, recipes } from "@/data/recipes";
import { formatQ, track } from "@/lib/site";
import { Disclaimer, RecipeCard } from "@/components/site/ui-bits";
import { WhatsAppLink } from "@/components/site/whatsapp-link";

export const Route = createFileRoute("/recetas/$slug")({
  loader: ({ params }) => {
    const recipe = getRecipe(params.slug);
    if (!recipe) throw notFound();
    return { recipe };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Receta no encontrada | Yo Uso Thermomix" }, { name: "robots", content: "noindex" }],
      };
    }
    const { recipe } = loaderData;
    return {
      meta: [
        { title: `${recipe.title} | Yo Uso Thermomix` },
        { name: "description", content: recipe.description },
        { property: "og:title", content: `${recipe.title} | Yo Uso Thermomix` },
        { property: "og:description", content: recipe.description },
      ],
    };
  },
  component: RecipeDetail,
});

function RecipeDetail() {
  const { recipe } = Route.useLoaderData();
  const [servings, setServings] = useState(recipe.servings);
  const factor = servings / recipe.servings;
  const related = recipes.filter((r) => r.slug !== recipe.slug).slice(0, 3);

  return (
    <article className="pb-10">
      <div className="container-page pt-6">
        <div className="overflow-hidden rounded-[1.75rem]">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-[46vh] max-h-[560px] min-h-72 w-full object-cover"
          />
        </div>
      </div>

      <div className="container-page mt-10 grid gap-12 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="eyebrow">Receta</p>
          <h1 className="mt-3 text-[2.2rem] leading-tight md:text-[3rem]">{recipe.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {recipe.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-y border-border py-5 text-sm">
            <Meta icon={Clock} label="Tiempo" value={`${recipe.minutes} min`} />
            <Meta icon={Users} label="Porciones" value={`${servings} personas`} />
            <Meta icon={Signal} label="Dificultad" value={recipe.difficulty} />
            <Meta
              icon={Wallet}
              label="Costo estimado"
              value={`${formatQ(recipe.costPerServing * servings)} total`}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => track("recipe_saved", { slug: recipe.slug })}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium hover:bg-secondary"
            >
              <Heart className="size-4" /> Guardar
            </button>
            <button className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium hover:bg-secondary">
              <Share2 className="size-4" /> Compartir
            </button>
            <Link
              to="/ai-kitchen/plan-semanal"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium hover:bg-secondary"
            >
              <CalendarPlus className="size-4" /> Agregar a mi semana
            </Link>
          </div>

          <section className="mt-14">
            <h2 className="text-2xl md:text-3xl">Paso a paso</h2>
            <ol className="mt-8 space-y-7">
              {recipe.steps.map((s, i) => (
                <li key={i} className="grid grid-cols-[3rem_1fr] gap-5">
                  <span className="font-display text-2xl text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[1.05rem] leading-relaxed">{s.text}</p>
                    {s.settings && (
                      <p className="mt-3 inline-flex rounded-lg bg-sage-soft px-3.5 py-2 font-mono text-[0.82rem] tracking-tight text-foreground/80">
                        {s.settings}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-14 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-xl">Consejos</h2>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                {recipe.tips.map((t) => (
                  <li key={t}>· {t}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl">Sustituciones</h2>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                {recipe.swaps.map((t) => (
                  <li key={t}>· {t}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl">Información nutricional</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["Calorías", "Proteína", "Carbohidratos", "Grasa"].map((n) => (
                <div key={n} className="rounded-xl border border-dashed border-border p-4 text-center">
                  <p className="text-xs text-muted-foreground">{n}</p>
                  <p className="mt-1 font-display text-lg text-muted-foreground">—</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              [Información nutricional pendiente de calcular. No sustituye una recomendación
              profesional.]
            </p>
          </section>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[1.5rem] border border-border bg-card p-6 md:p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl">Ingredientes</h2>
              <div className="flex items-center gap-1 rounded-full border border-border p-1">
                <button
                  onClick={() => setServings((s) => Math.max(1, s - 1))}
                  className="size-8 rounded-full text-sm hover:bg-secondary"
                  aria-label="Menos porciones"
                >
                  −
                </button>
                <span className="w-8 text-center text-sm">{servings}</span>
                <button
                  onClick={() => setServings((s) => s + 1)}
                  className="size-8 rounded-full text-sm hover:bg-secondary"
                  aria-label="Más porciones"
                >
                  +
                </button>
              </div>
            </div>
            <ul className="mt-6 divide-y divide-border text-[0.95rem]">
              {recipe.ingredients.map((ing) => (
                <li key={ing.name} className="flex justify-between gap-4 py-3">
                  <span>{ing.name}</span>
                  <span className="shrink-0 text-muted-foreground">
                    {Math.round(ing.amount * factor * 10) / 10} {ing.unit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-[1.5rem] bg-secondary/70 p-6">
            <p className="font-display text-xl">¿Dudas al prepararla?</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Escríbeme y te explico cómo la hago yo, paso por paso.
            </p>
            <WhatsAppLink source="recipe" extra={`Receta: ${recipe.title}.`} className="mt-4" size="sm">
              Preguntar por WhatsApp
            </WhatsAppLink>
          </div>

          <div className="mt-5">
            <Disclaimer>
              Verifica siempre tiempos, temperaturas y cantidades según tu equipo e ingredientes.
            </Disclaimer>
          </div>
        </aside>
      </div>

      <section className="container-page mt-20">
        <h2 className="text-2xl md:text-3xl">También te puede gustar</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <RecipeCard key={r.slug} recipe={r} />
          ))}
        </div>
      </section>
    </article>
  );
}

function Meta({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="size-4 text-muted-foreground" />
      <div>
        <p className="text-[0.68rem] uppercase tracking-[0.15em] text-muted-foreground">{label}</p>
        <p className="text-sm">{value}</p>
      </div>
    </div>
  );
}
