import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Heart, Settings, ShoppingCart, Sparkles } from "lucide-react";
import { recipes } from "@/data/recipes";
import { RecipeCard, UsageMeter } from "@/components/site/ui-bits";

export const Route = createFileRoute("/mi-cocina")({
  head: () => ({
    meta: [
      { title: "Mi Cocina — Tus recetas, semanas y listas | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "Tu espacio personal: recetas guardadas, planes semanales, listas de compras e historial de AI Kitchen.",
      },
      { property: "og:title", content: "Mi Cocina | Yo Uso Thermomix" },
      { property: "og:description", content: "Tus recetas guardadas y tus planes de la semana." },
    ],
  }),
  component: MiCocina,
});

const secciones = [
  { icon: Heart, label: "Mis recetas" },
  { icon: CalendarDays, label: "Mis semanas" },
  { icon: ShoppingCart, label: "Mis listas" },
  { icon: Sparkles, label: "Historial de AI Kitchen" },
  { icon: Settings, label: "Preferencias" },
];

function MiCocina() {
  return (
    <div className="container-page py-12 md:py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Tu espacio</p>
          <h1 className="mt-3 text-3xl md:text-[2.6rem]">Mi Cocina</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Plan gratuito · 2 generaciones disponibles
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <UsageMeter used={3} total={5} />
          <Link
            to="/plus"
            className="inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground"
          >
            Descubrir Plus
          </Link>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {secciones.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
            <s.icon className="size-5 text-primary" />
            <p className="mt-4 font-display text-lg">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-[1.5rem] border border-dashed border-border p-8 text-center">
        <p className="font-display text-xl">Aún no has iniciado sesión</p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Las cuentas llegarán en la siguiente etapa. Mientras tanto, así se verá tu cocina con tus
          recetas guardadas.
        </p>
      </div>

      <h2 className="mt-16 text-2xl">Ejemplo: tus recetas guardadas</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.slice(0, 3).map((r) => (
          <RecipeCard key={r.slug} recipe={r} />
        ))}
      </div>
    </div>
  );
}
