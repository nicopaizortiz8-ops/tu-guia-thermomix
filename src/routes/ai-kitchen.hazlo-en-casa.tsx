import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Chip, Disclaimer } from "@/components/site/ui-bits";
import { WhatsAppLink } from "@/components/site/whatsapp-link";
import { formatQ, track } from "@/lib/site";

export const Route = createFileRoute("/ai-kitchen/hazlo-en-casa")({
  head: () => ({
    meta: [
      { title: "Hazlo en casa — Qué puedes preparar tú mismo | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "Descubre qué productos del supermercado podrías preparar en casa y compara costos estimados.",
      },
      { property: "og:title", content: "Hazlo en casa | Yo Uso Thermomix" },
      {
        property: "og:description",
        content: "Pan, yogurt, salsas y más, hechos en casa.",
      },
    ],
  }),
  component: HazloEnCasa,
});

type Item = { name: string; super: number; casa: number; slug?: string };

const items: Item[] = [
  { name: "Pan", super: 220, casa: 70, slug: "pan-casero" },
  { name: "Pizza", super: 260, casa: 95 },
  { name: "Yogurt", super: 180, casa: 65, slug: "yogurt-natural-casero" },
  { name: "Mantequilla", super: 150, casa: 110 },
  { name: "Mermelada", super: 90, casa: 45 },
  { name: "Mayonesa", super: 80, casa: 35 },
  { name: "Hummus", super: 120, casa: 40 },
  { name: "Salsa de tomate", super: 100, casa: 45 },
  { name: "Leche vegetal", super: 200, casa: 60 },
  { name: "Helado", super: 160, casa: 85 },
  { name: "Postres", super: 190, casa: 90, slug: "mousse-de-chocolate" },
  { name: "Masas", super: 130, casa: 45 },
  { name: "Caldos", super: 70, casa: 30 },
];

function HazloEnCasa() {
  const [sel, setSel] = useState<string[]>(["Pan", "Yogurt", "Salsa de tomate"]);
  const selected = items.filter((i) => sel.includes(i.name));
  const totalSuper = selected.reduce((a, b) => a + b.super, 0);
  const totalCasa = selected.reduce((a, b) => a + b.casa, 0);
  const top = [...selected].sort((a, b) => b.super - b.casa - (a.super - a.casa)).slice(0, 3);

  return (
    <div className="container-page py-10 md:py-16">
      <Link
        to="/ai-kitchen"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> AI Kitchen
      </Link>

      <h1 className="mt-6 max-w-2xl text-3xl md:text-[2.6rem]">¿Qué podrías preparar en casa?</h1>
      <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
        Marca lo que sueles comprar hecho. No todo resulta siempre más barato en casa: aquí verás
        una comparación estimada para decidir con calma.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {items.map((i) => (
          <Chip
            key={i.name}
            active={sel.includes(i.name)}
            onClick={() => {
              setSel((s) => (s.includes(i.name) ? s.filter((x) => x !== i.name) : [...s, i.name]));
              track("ai_tool_opened", { tool: "hazlo_en_casa", item: i.name });
            }}
          >
            {i.name}
          </Chip>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-secondary/70 text-left text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-5 py-3 font-medium">Producto</th>
                <th className="px-5 py-3 font-medium">Súper (est. mes)</th>
                <th className="px-5 py-3 font-medium">En casa (est.)</th>
                <th className="px-5 py-3 font-medium">Diferencia</th>
              </tr>
            </thead>
            <tbody>
              {selected.map((i) => (
                <tr key={i.name} className="border-t border-border">
                  <td className="px-5 py-3.5">{i.name}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{formatQ(i.super)}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{formatQ(i.casa)}</td>
                  <td className="px-5 py-3.5 text-primary">{formatQ(i.super - i.casa)}</td>
                </tr>
              ))}
              {selected.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-5 py-8 text-center text-muted-foreground">
                    Selecciona al menos un producto.
                  </td>
                </tr>
              )}
            </tbody>
            {selected.length > 0 && (
              <tfoot className="border-t border-border bg-secondary/50">
                <tr>
                  <td className="px-5 py-4 font-medium">Total estimado</td>
                  <td className="px-5 py-4">{formatQ(totalSuper)}</td>
                  <td className="px-5 py-4">{formatQ(totalCasa)}</td>
                  <td className="px-5 py-4 font-medium text-primary">
                    {formatQ(totalSuper - totalCasa)}
                  </td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>

        <div className="space-y-5">
          <div className="rounded-[1.5rem] border border-border bg-card p-6">
            <p className="eyebrow">Tus mejores oportunidades</p>
            <ul className="mt-4 space-y-3">
              {top.map((i) => (
                <li key={i.name} className="rounded-2xl bg-secondary/60 p-4">
                  <p className="font-display text-lg">{i.name} casero</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Diferencia estimada: {formatQ(i.super - i.casa)} al mes
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {i.slug ? (
                      <Link
                        to="/recetas/$slug"
                        params={{ slug: i.slug }}
                        className="inline-flex h-9 items-center rounded-full bg-primary px-4 text-xs font-medium text-primary-foreground"
                      >
                        Ver receta
                      </Link>
                    ) : (
                      <Link
                        to="/recetas"
                        className="inline-flex h-9 items-center rounded-full bg-primary px-4 text-xs font-medium text-primary-foreground"
                      >
                        Ver recetas
                      </Link>
                    )}
                    <WhatsAppLink source="hazlo_en_casa" size="sm" variant="outline" showIcon={false}>
                      Preparar con Thermomix
                    </WhatsAppLink>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Disclaimer>
            Estimación únicamente. Los precios son valores de referencia [pendientes de verificar
            con precios locales] y dependen de ingredientes, establecimientos y hábitos.
          </Disclaimer>
        </div>
      </div>
    </div>
  );
}
