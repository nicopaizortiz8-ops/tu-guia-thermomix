import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Minus, Plus } from "lucide-react";
import { foodCosts } from "@/data/food-costs";
import { formatQ } from "@/lib/site";
import { MachineDrawing } from "./machine-drawing";

const comparisonFoods = foodCosts.filter((food) => food.homemade <= food.bought);

export function FoodComparison({ interactive = false }: { interactive?: boolean }) {
  const [counts, setCounts] = useState<Record<string, number>>({
    Pan: 4,
    Yogurt: 4,
    "Salsa de tomate": 2,
  });
  const total = comparisonFoods.reduce(
    (sum, food) => {
      const count = counts[food.name] ?? 0;
      return { bought: sum.bought + food.bought * count, home: sum.home + food.homemade * count };
    },
    { bought: 0, home: 0 },
  );
  return (
    <div className="food-comparison mt-10">
      {interactive && (
        <div className="comparison-summary">
          <MachineDrawing className="h-24 w-20 text-champagne" />
          <div>
            <p className="text-xs text-white/65">Diferencia estimada al mes</p>
            <output className="mt-1 block font-display text-4xl tabular-nums">
              {formatQ(total.bought - total.home)}
            </output>
          </div>
          <div className="ml-auto flex gap-8 text-sm">
            <div>
              <p className="text-white/65">Comprado</p>
              <p className="mt-2">{formatQ(total.bought)}</p>
            </div>
            <div>
              <p className="text-white/65">Hecho en casa</p>
              <p className="mt-2">{formatQ(total.home)}</p>
            </div>
          </div>
        </div>
      )}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>Guatemala · GTQ · Referencias consultadas el 11/09/2026</p>
        <p>
          {interactive
            ? "Elige cuántas unidades compras al mes."
            : "Misma cantidad por producto · costos estimados"}
        </p>
      </div>
      <div className="comparison-grid">
        {comparisonFoods.map((food) => {
          const count = counts[food.name] ?? 0;
          const difference = food.bought - food.homemade;
          return (
            <article key={food.name} className="food-card" data-selected={interactive && count > 0}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-display text-xl">
                    {food.name}{food.detail && ` (${food.detail})`}
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground">{food.unit}</p>
                </div>
                <span className={`difference-badge ${difference < 0 ? "difference-negative" : ""}`}>
                  {difference >= 0 ? <Check className="size-3" /> : null}
                  {formatQ(difference)}
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-muted-foreground">
                    Comprado{food.source ? "" : " (est.)"}
                  </p>
                  <p className="mt-1 text-lg tabular-nums">{formatQ(food.bought)}</p>
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground">Hecho en casa (est.)</p>
                  <p className="mt-1 text-lg tabular-nums text-olive">{formatQ(food.homemade)}</p>
                </div>
              </div>
              <div className="cost-track mt-4" aria-hidden="true">
                <span style={{ width: `${Math.min((food.homemade / food.bought) * 100, 100)}%` }} />
              </div>
              {food.comparisonNote && (
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{food.comparisonNote}</p>
              )}
              {interactive && (
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">Unidades / mes</span>
                  <div className="quantity-control">
                    <button
                      aria-label={`Reducir ${food.name}`}
                      disabled={count === 0}
                      onClick={() =>
                        setCounts((v) => ({ ...v, [food.name]: Math.max(0, count - 1) }))
                      }
                    >
                      <Minus className="size-4" />
                    </button>
                    <output aria-label={`Unidades de ${food.name}`}>{count}</output>
                    <button
                      aria-label={`Aumentar ${food.name}`}
                      disabled={count === 30}
                      onClick={() =>
                        setCounts((v) => ({ ...v, [food.name]: Math.min(30, count + 1) }))
                      }
                    >
                      <Plus className="size-4" />
                    </button>
                  </div>
                </div>
              )}
              <details className="mt-4 text-xs leading-relaxed text-muted-foreground">
                <summary className="cursor-pointer py-2">Cálculo y referencia</summary>
                <p className="mt-2">{food.basis}</p>
                {food.source && (
                  <a
                    href={food.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-olive underline underline-offset-4"
                  >
                    {food.reference}
                    <ArrowUpRight className="size-3 shrink-0" />
                  </a>
                )}
                {food.slug && (
                  <Link
                    to="/recetas/$slug"
                    params={{ slug: food.slug }}
                    className="mt-3 block text-cognac underline underline-offset-4"
                  >
                    Ver receta
                  </Link>
                )}
              </details>
            </article>
          );
        })}
      </div>
      <details className="cost-method mt-6 rounded-2xl border border-border p-5 text-xs leading-relaxed text-muted-foreground">
        <summary className="cursor-pointer font-medium text-foreground">
          Cómo calculamos esta comparación
        </summary>
        <p className="mt-3">
          Precio comprado por la cantidad indicada menos ingredientes y energía estimados para un
          rendimiento equivalente. El total mensual multiplica cada costo por las unidades elegidas.
          Esta selección muestra productos cuyo costo casero estimado no supera el comprado. Las
          presentaciones y recetas pueden tener composición distinta.
        </p>
        <p className="mt-2">
          Los precios enlazados son referencias publicadas, sujetos a tienda, disponibilidad y
          promociones; los demás son supuestos de compra. Todos los costos caseros son estimaciones,
          no cotizaciones. No incluyen tiempo de trabajo, envases, entrega ni compra o
          financiamiento de Thermomix.
        </p>
        <p className="mt-2">
          Referencias de ingredientes:{" "}
          <a
            className="underline"
            href="https://www.walmart.com.gt/lacteos/leche/leche-entera"
            target="_blank"
            rel="noopener noreferrer"
          >
            leche Sabemas Q13.25 / L
          </a>
          ,{" "}
          <a
            className="underline"
            href="https://www.walmart.com.gt/avena-del-molino-integral-350-g-6/p"
            target="_blank"
            rel="noopener noreferrer"
          >
            avena Q8.50 / 350 g
          </a>
          ,{" "}
          <a
            className="underline"
            href="https://www.walmart.com.gt/mani-great-value-sin-sal-454-g-0/p"
            target="_blank"
            rel="noopener noreferrer"
          >
            maní Q29.50 / 454 g
          </a>
          . Otros ingredientes y energía usan supuestos redondeados detallados por producto.
        </p>
      </details>
    </div>
  );
}
