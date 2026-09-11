/** GTQ per comparable batch. Retail references checked 2026-09-11; homemade costs are estimates. */
export type FoodCost = {
  name: string;
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
    unit: "580 g",
    bought: 24,
    homemade: 12,
    monthly: 4,
    basis:
      "380 g harina Q5.70 + levadura Q1.50 + aceite y sal Q1.80 + energía Q3.00. Precio comprado estimado.",
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
    unit: "4 porciones",
    bought: 60,
    homemade: 36,
    monthly: 2,
    basis: "Chocolate Q18 + crema Q12 + azúcar Q2 + leche Q3 + energía Q1. Compra estimada.",
    slug: "mousse-de-chocolate",
  },
  {
    name: "Caldos",
    unit: "1 L líquido",
    bought: 28,
    homemade: 14,
    monthly: 2,
    basis:
      "Verduras Q9 + hierbas Q2 + agua y energía Q3. Comparación con caldo líquido, no cubitos. Compra estimada.",
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
