import { createFileRoute, notFound } from "@tanstack/react-router";
import { getRecipe, recipes } from "@/data/recipes";
import { RecipeCard } from "@/components/site/ui-bits";
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
          <p className="eyebrow">Ejemplo de receta</p>
          <h1 className="mt-3 text-[2.2rem] leading-tight md:text-[3rem]">{recipe.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {recipe.description}
          </p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Esta imagen es un ejemplo de lo que se puede preparar con Thermomix. Para conocer los
            ingredientes exactos, cantidades y el paso a paso tal como lo cocina María Regina,
            escríbele por WhatsApp.
          </p>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[1.5rem] bg-secondary/70 p-6">
            <p className="font-display text-xl">¿Quieres esta receta?</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Escríbeme y te explico cómo la preparo, paso por paso, con Thermomix.
            </p>
            <WhatsAppLink source="recipe" extra={`Receta: ${recipe.title}.`} className="mt-4" size="sm">
              Preguntar por WhatsApp
            </WhatsAppLink>
          </div>
        </aside>
      </div>

      <section className="container-page mt-20">
        <h2 className="text-2xl md:text-3xl">Más ejemplos</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <RecipeCard key={r.slug} recipe={r} />
          ))}
        </div>
      </section>
    </article>
  );
}
