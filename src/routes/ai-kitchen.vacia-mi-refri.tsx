import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import refriImg from "@/assets/ingredientes-refri.jpg";
import { recipes } from "@/data/recipes";
import { Chip, Disclaimer, EditorialButton, Label } from "@/components/site/ui-bits";
import { WhatsAppLink } from "@/components/site/whatsapp-link";
import { track } from "@/lib/site";

export const Route = createFileRoute("/ai-kitchen/vacia-mi-refri")({
  head: () => ({
    meta: [
      { title: "Vacía mi refri — Antes de tirarlo, cocinémoslo | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "Dime qué necesitas usar pronto y encuentra qué cocinar hoy con lo que ya tienes en casa.",
      },
      { property: "og:title", content: "Vacía mi refri | Yo Uso Thermomix" },
      {
        property: "og:description",
        content: "Aprovecha lo que ya tienes antes de que se eche a perder.",
      },
    ],
  }),
  component: VaciaMiRefri,
});

const sugerencias = [
  "3 tomates",
  "pollo cocido",
  "½ cebolla",
  "aguacate maduro",
  "crema",
  "queso",
  "arroz",
  "zanahoria",
  "huevos",
  "cilantro",
  "limón",
  "papa",
];

type Estado = "completo" | "falta" | "urgente";

const etiquetas: Record<Estado, { label: string; cls: string }> = {
  completo: { label: "Tienes todo", cls: "text-olive border-olive" },
  falta: { label: "Te falta 1 ingrediente", cls: "text-champagne border-champagne" },
  urgente: { label: "Usa esto primero", cls: "text-cognac border-cognac" },
};

function VaciaMiRefri() {
  const [items, setItems] = useState<string[]>(["3 tomates", "pollo cocido", "½ cebolla"]);
  const [draft, setDraft] = useState("");

  const ideas = useMemo(() => {
    const base = recipes.slice(0, 3);
    const estados: Estado[] = ["completo", "falta", "urgente"];
    return base.map((r, i) => ({ recipe: r, estado: estados[i % 3] as Estado }));
  }, []);

  const add = (value: string) => {
    const v = value.trim();
    if (!v || items.includes(v)) return;
    setItems((s) => [...s, v]);
    track("ai_tool_opened", { tool: "vacia_mi_refri", item: v });
  };

  return (
    <div className="container-wide py-10 md:py-16">
      <Link
        to="/ai-kitchen"
        className="editorial-link inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground"
      >
        <ArrowLeft className="size-4" /> ¿Qué cocinamos?
      </Link>

      <div className="mt-10 grid gap-12 md:grid-cols-[1fr_0.8fr] md:gap-16">
        <div>
          <Label tone="champagne">Vacía mi refri</Label>
          <h1 className="mt-6 text-[2.6rem] leading-[0.95] md:text-[4rem]">
            Antes de tirarlo,
            <br />
            <span className="italic">cocinémoslo.</span>
          </h1>

          <div className="mt-12 border-t border-border pt-8">
            <p className="label-xs">¿Qué necesitas usar pronto?</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((i) => (
                <Chip key={i} active onClick={() => setItems((s) => s.filter((x) => x !== i))}>
                  {i} ×
                </Chip>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                add(draft);
                setDraft("");
              }}
              className="mt-6 flex gap-3"
            >
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Escribe un ingrediente"
                className="h-12 flex-1 border-b border-ink/25 bg-transparent text-base outline-none focus:border-ink"
              />
              <EditorialButton type="submit" variant="outline">
                Agregar
              </EditorialButton>
            </form>

            <p className="label-xs mt-8">O toca lo que tengas</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {sugerencias
                .filter((s) => !items.includes(s))
                .map((s) => (
                  <Chip key={s} onClick={() => add(s)}>
                    {s}
                  </Chip>
                ))}
            </div>
          </div>

          <section className="mt-16">
            <p className="label-xs">Qué podrías cocinar hoy</p>
            <ul className="mt-6 border-t border-border">
              {ideas.map(({ recipe, estado }) => (
                <li key={recipe.slug} className="border-b border-border py-7">
                  <span
                    className={`inline-block border px-3 py-1 text-[0.6rem] uppercase tracking-[0.24em] ${etiquetas[estado].cls}`}
                  >
                    {etiquetas[estado].label}
                  </span>
                  <h2 className="mt-4 font-display text-2xl md:text-3xl">{recipe.title}</h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {recipe.description}
                  </p>
                  <Link
                    to="/recetas/$slug"
                    params={{ slug: recipe.slug }}
                    className="editorial-link mt-4 inline-block text-[0.72rem] uppercase tracking-[0.2em] text-cognac"
                  >
                    Cocinar →
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 max-w-xl">
              <Disclaimer>
                Las ideas son sugerencias y pueden requerir ajustes. Revisa siempre el estado de tus
                ingredientes antes de cocinarlos.
              </Disclaimer>
            </div>
            <div className="mt-8">
              <WhatsAppLink source="vacia_mi_refri" showIcon={false}>
                Preguntar a María Regina
              </WhatsAppLink>
            </div>
          </section>
        </div>

        <div className="hover-zoom hidden md:block">
          <img
            src={refriImg}
            alt="Ingredientes por aprovechar"
            loading="lazy"
            className="sticky top-28 aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
