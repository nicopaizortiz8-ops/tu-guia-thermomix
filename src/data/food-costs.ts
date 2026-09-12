/** GTQ per comparable batch. Retail references checked 2026-09-11; homemade costs are estimates. */
export type FoodCost = {
  name: string;
  detail?: string;
  comparisonNote?: string;
  unit: string;
  bought: number;
  homemade: number;
  monthly: number;
  basis: string;
  source?: string;
  reference?: string;
  slug?: string;
};
export const foodCosts: FoodCost[] = [
  {
    name: "Pan",
    detail: "baguette",
    unit: "560 g · 2 baguettes de 280 g",
    bought: 36,
    homemade: 12,
    monthly: 4,
    basis:
      "Compra: 2 baguettes Tradición Masa Madre de Paiz, de 280 g a Q18 cada una. Casero: 380 g harina Q5.70 + levadura Q1.50 + aceite y sal Q1.80 + energía Q3.00; rendimiento estimado 560 g. El pan casero usa levadura, no masa madre.",
    source: "https://www.paiz.com.gt/panaderia-y-tortilleria?page=5",
    reference: "Paiz · Baguette Tradición Masa Madre 280 g · Q18",
    slug: "pan-casero",
  },
  {
    name: "Yogurt",
    unit: "1 kg",
    bought: 33,
    homemade: 18,
    monthly: 4,
    basis:
      "900 ml leche Q11.93 + 100 g cultivo Q3.30 + energía Q2.77; rendimiento aproximado 1 kg.",
    source: "https://www.paiz.com.gt/yogurt-yes-cremoso-natural-1000-g-2/p",
    reference: "Paiz · Yes natural 1 kg",
    slug: "yogurt-natural-casero",
  },
  {
    name: "Salsa de tomate",
    unit: "680 g",
    bought: 32,
    homemade: 17,
    monthly: 2,
    basis:
      "800 g tomate Q10 + cebolla Q2 + aceite y condimentos Q3 + energía Q2; rendimiento reducido a 680 g.",
    source: "https://www.walmart.com.gt/salsa-de-tomate-hunts-tradicional-680-g-2/p",
    reference: "Walmart · Hunt’s 680 g",
    slug: "salsa-de-tomate-casera",
  },
  {
    name: "Masa de pizza",
    unit: "500 g",
    bought: 25,
    homemade: 9,
    monthly: 2,
    basis:
      "300 g harina Q4.50 + levadura Q1 + aceite y sal Q2.50 + energía Q1. Sin cobertura ni horneado. Compra estimada.",
  },
  {
    name: "Hummus",
    unit: "454 g",
    bought: 59.9,
    homemade: 22,
    monthly: 2,
    basis:
      "300 g garbanzo cocido Q9 + tahini Q6 + limón, ajo y aceite Q6 + energía Q1; agua hasta completar 454 g.",
    source: "https://www.walmart.com.gt/yum",
    reference: "Walmart · YUM pimientos 454 g; versión casera simple",
    slug: "hummus-de-garbanzos",
  },
  {
    name: "Mermelada",
    unit: "300 g",
    bought: 27.2,
    homemade: 16,
    monthly: 1,
    basis:
      "250 g fresa Q10 + 130 g azúcar Q2 + limón Q1 + energía Q3; rendimiento tras cocción 300 g.",
    source: "https://www.walmart.com.gt/mermelada-valle-de-panchoy-de-fresa-300gr/p",
    reference: "Walmart · Valle de Panchoy 300 g",
  },
  {
    name: "Leche vegetal",
    unit: "946 ml",
    bought: 26.1,
    homemade: 5,
    monthly: 4,
    basis:
      "95 g avena Q2.31 (Q8.50 / 350 g) + agua, filtrado y energía Q2.69. La casera no equivale nutricionalmente a una bebida fortificada.",
    source: "https://www.walmart.com.gt/avena-silk-sin-azucar-946ml/p",
    reference: "Walmart · Silk avena sin azúcar 946 ml",
    slug: "bebida-de-avena",
  },
  {
    name: "Mantequilla de maní",
    unit: "1 kg",
    bought: 60,
    homemade: 66,
    monthly: 1,
    basis:
      "1 kg maní Q64.98 (Q29.50 / 454 g) + energía Q1.02. Con este maní de referencia, prepararla cuesta más.",
    source: "https://www.walmart.com.gt/mantequilla-de-mani-great-value-smooth-1000-g/p",
    reference: "Walmart · Great Value 1 kg",
    slug: "mantequilla-de-mani",
  },
  {
    name: "Mayonesa",
    unit: "400 g",
    bought: 12.5,
    homemade: 15,
    monthly: 1,
    basis:
      "300 ml aceite Q9 + huevo pasteurizado Q4 + limón y sal Q1 + energía Q1. Rendimiento aproximado 400 g.",
    source: "https://www.walmart.com.gt/b-b",
    reference: "Walmart · B&B clásica 400 g",
  },
  {
    name: "Granola",
    unit: "400 g",
    bought: 35,
    homemade: 23,
    monthly: 2,
    basis: "250 g avena Q6.07 + semillas Q7 + miel Q5 + aceite Q1.93 + horno Q3. Compra estimada.",
  },
  {
    name: "Pesto",
    unit: "200 g",
    bought: 38,
    homemade: 26,
    monthly: 1,
    basis: "Albahaca Q5 + maní Q5 + queso Q8 + aceite Q6 + ajo y energía Q2. Compra estimada.",
    slug: "pesto-de-albahaca",
  },
  {
    name: "Helado",
    unit: "500 g",
    bought: 35,
    homemade: 24,
    monthly: 2,
    basis:
      "250 g fruta Q10 + 200 g yogurt Q6.60 + azúcar Q1.40 + crema Q4 + energía Q2. Compra estimada.",
  },
  {
    name: "Pizza",
    unit: "1 mediana",
    bought: 65,
    homemade: 38,
    monthly: 2,
    basis: "Masa Q9 + salsa Q4 + queso Q18 + verduras Q3 + horno Q4. Compra estimada.",
  },
  {
    name: "Postres",
    detail: "mousse de chocolate",
    unit: "6 onzas de peso (≈170 g)",
    bought: 10.4,
    homemade: 8.87,
    monthly: 2,
    comparisonNote: "Comparado con pudín de chocolate Essential Everyday de La Torre; no es mousse. Precio proporcional a 6 oz.",
    basis: "Compra: pudín Essential Everyday, Q22.50 / 368 g; Q22.50 × 170.1 / 368 = Q10.40 por 6 oz de peso, no onzas líquidas. El envase completo cuesta Q22.50. Mousse casero: 200 g chocolate Q18 + 300 g crema Q12 + 3 huevos (150 g sin cáscara) Q4 + 40 g azúcar Q1 + energía Q1; Q36 / 690 g × 170.1 g = Q8.87. Rendimiento y costos de ingredientes estimados. Son postres distintos en textura y composición. La ficha consultada indica sin disponibilidad; precio publicado de referencia.",
    source: "https://www.latorre.com.gt/pudin-chocolate-essential-everyday-2057333/p",
    reference: "La Torre · Pudín Essential Everyday 368 g · Q22.50 (sin disponibilidad al consultar)",
    slug: "mousse-de-chocolate",
  },
  {
    name: "Caldos",
    detail: "de verduras",
    unit: "907 g de caldo líquido",
    bought: 42.9,
    homemade: 14,
    monthly: 2,
    basis:
      "Compra: caldo de verduras sin sal Kitchen Basics en La Torre, Q42.90 por 907 g según la ficha del supermercado. Casero: verduras Q9 + hierbas Q2 + agua y energía Q3, ajustando el caldo colado a un peso final de 907 g. Costo casero estimado para la misma cantidad; no es una comparación con cubitos ni polvo. La ficha consultada indica sin disponibilidad; precio publicado de referencia.",
    comparisonNote: "Comparado con caldo líquido de verduras Kitchen Basics de La Torre, por el mismo peso.",
    source: "https://www.latorre.com.gt/caldo-verduras-sin-sal-kitchen-basics-tetra-99345/p",
    reference: "La Torre · Kitchen Basics sin sal 907 g · Q42.90 (sin disponibilidad al consultar)",
  },
  {
    name: "Mantequilla",
    unit: "200 g",
    bought: 25,
    homemade: 32,
    monthly: 2,
    basis:
      "500 ml crema para batir Q30 + energía Q2; rendimiento supuesto 200 g. No se descuenta el suero. Compra estimada.",
  },
];
export const moneyInput = (value: string | number) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.min(100000, Math.max(0, parsed)) : 0;
};
export function monthlyFoodTotals(names: string[], household = 4) {
  const selected = foodCosts.filter((food) => names.includes(food.name));
  const factor = household / 4;
  return selected.reduce(
    (total, food) => ({
      bought: total.bought + food.bought * food.monthly * factor,
      homemade: total.homemade + food.homemade * food.monthly * factor,
    }),
    { bought: 0, homemade: 0 },
  );
}
