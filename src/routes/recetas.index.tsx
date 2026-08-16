import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { categories, recipes } from "@/data/recipes";
import { Chip, RecipeCard, SectionHeading } from "@/components/site/ui-bits";

export const Route = createFileRoute("/recetas")({
  head: () => ({
    meta: [
      { title: "Recetas para disfrutar | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "Recetario editorial con platos guatemaltecos, recetas en 30 minutos, saludables, para la familia y postres, pensados para Thermomix.",
      },
      { property: "og:title", content: "Recetas para disfrutar | Yo Uso Thermomix" },
      {
        property: "og:description",
        content: "Del pepián de casa al pan de cada día.",
      },
    ],
  }),
  component: Recetas,
});

function Recetas() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);

  const list = useMemo(
    () =>
      recipes.filter(
        (r) =>
          (!cat || r.categories.includes(cat)) &&
          (!q || r.title.toLowerCase().includes(q.toLowerCase())),
      ),
    [q, cat],
  );

  return (
    <div className="container-page py-12 md:py-20">
      <SectionHeading
        eyebrow="Recetario"
        title="Recetas para disfrutar."
        description="Recetas que cocino de verdad en casa, con los pasos y ajustes que uso en el vaso."
      />

      <div className="mt-10 flex flex-col gap-5">
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar receta…"
            className="h-12 w-full rounded-full border border-border bg-card pl-11 pr-5 text-sm outline-none focus:border-primary"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Chip active={cat === null} onClick={() => setCat(null)}>
            Todas
          </Chip>
          {categories.map((c) => (
            <Chip key={c.id} active={cat === c.id} onClick={() => setCat(c.id)}>
              {c.label}
            </Chip>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((r) => (
          <RecipeCard key={r.slug} recipe={r} />
        ))}
      </div>
      {list.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">
          Todavía no tengo recetas para esa búsqueda. Pronto habrá más.
        </p>
      )}
    </div>
  );
}
