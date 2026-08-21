import risotto from "@/assets/receta-risotto.jpg";
import pan from "@/assets/receta-pan.jpg";
import polloLimon from "@/assets/receta-pollo-limon.jpg";
import pepian from "@/assets/receta-pepian.jpg";
import yogurt from "@/assets/receta-yogurt.jpg";
import sopa from "@/assets/receta-sopa.jpg";
import postre from "@/assets/receta-postre.jpg";

export type Step = {
  text: string;
  settings?: string;
};

export type Recipe = {
  slug: string;
  title: string;
  image: string;
  description: string;
  minutes: number;
  servings: number;
  difficulty: "Fácil" | "Media" | "Avanzada";
  costPerServing: number;
  categories: string[];
  ingredients: { amount: number; unit: string; name: string }[];
  steps: Step[];
  tips: string[];
  swaps: string[];
};

export const categories = [
  { id: "guatemala", label: "🇬🇹 Guatemala en Thermomix" },
  { id: "rapidas", label: "⚡ En 30 minutos" },
  { id: "saludables", label: "🥗 Saludables" },
  { id: "familia", label: "👨‍👩‍👧 Para toda la familia" },
  { id: "postres", label: "🍰 Postres" },
  { id: "comunidad", label: "🕒 Lo que cocino cuando no tengo tiempo" },
  { id: "autora", label: "⭐ Favoritas de María Regina" },
];

export const recipes: Recipe[] = [
  {
    slug: "risotto-cremoso-de-hongos",
    title: "Risotto cremoso de hongos",
    image: risotto,
    description:
      "Un risotto sedoso que se cocina prácticamente solo: el vaso remueve por ti mientras el arroz libera su almidón.",
    minutes: 35,
    servings: 4,
    difficulty: "Fácil",
    costPerServing: 22,
    categories: ["familia", "autora", "comunidad"],
    ingredients: [
      { amount: 2, unit: "dientes", name: "ajo" },
      { amount: 40, unit: "g", name: "aceite de oliva" },
      { amount: 250, unit: "g", name: "hongos frescos" },
      { amount: 320, unit: "g", name: "arroz arborio" },
      { amount: 900, unit: "g", name: "caldo de verduras" },
      { amount: 60, unit: "g", name: "queso parmesano" },
      { amount: 1, unit: "ramita", name: "tomillo fresco" },
    ],
    steps: [
      { text: "Añade el ajo al vaso y trocea.", settings: "5 seg · Velocidad 7" },
      { text: "Agrega el aceite de oliva y sofríe.", settings: "3 min · 120 °C · Velocidad 1" },
      {
        text: "Incorpora los hongos en láminas y cocina con la mariposa colocada.",
        settings: "5 min · 100 °C · Velocidad 1 · Giro inverso",
      },
      {
        text: "Añade el arroz y el caldo caliente. Deja cocinar sin abrir el vaso.",
        settings: "16 min · 100 °C · Velocidad 1 · Giro inverso",
      },
      { text: "Agrega el parmesano rallado y mezcla.", settings: "20 seg · Velocidad 1 · Giro inverso" },
      { text: "Deja reposar 3 minutos, termina con tomillo y sirve." },
    ],
    tips: [
      "Usa el caldo caliente: el arroz mantiene mejor la textura.",
      "Si te gusta más suelto, añade 50 g extra de caldo al final.",
    ],
    swaps: ["Parmesano → queso duro local madurado", "Hongos → zucchini o espárragos"],
  },
  {
    slug: "pollo-cremoso-al-limon",
    title: "Pollo cremoso al limón",
    image: polloLimon,
    description: "Una salsa ligera de limón y hierbas sobre pollo jugoso. Perfecto para un día entre semana.",
    minutes: 25,
    servings: 4,
    difficulty: "Fácil",
    costPerServing: 26,
    categories: ["rapidas", "familia"],
    ingredients: [
      { amount: 600, unit: "g", name: "pechuga de pollo" },
      { amount: 1, unit: "unidad", name: "limón (jugo y ralladura)" },
      { amount: 150, unit: "g", name: "crema" },
      { amount: 30, unit: "g", name: "aceite de oliva" },
      { amount: 1, unit: "cdta", name: "sal" },
      { amount: 1, unit: "ramita", name: "romero" },
    ],
    steps: [
      { text: "Añade el aceite y el romero al vaso y calienta.", settings: "2 min · 120 °C · Velocidad 1" },
      { text: "Coloca el pollo en el Varoma y cocina al vapor.", settings: "18 min · Varoma · Velocidad 1" },
      { text: "Añade crema, jugo y ralladura de limón. Mezcla.", settings: "2 min · 90 °C · Velocidad 2" },
      { text: "Baña el pollo con la salsa y sirve." },
    ],
    tips: ["Corta las pechugas en filetes parejos para una cocción uniforme."],
    swaps: ["Crema → leche evaporada", "Romero → tomillo o albahaca"],
  },
  {
    slug: "pan-casero",
    title: "Pan casero de todos los días",
    image: pan,
    description: "Miga suave, corteza dorada y una masa que se amasa sola. El pan que reemplaza al del súper.",
    minutes: 120,
    servings: 8,
    difficulty: "Fácil",
    costPerServing: 3,
    categories: ["familia", "comunidad", "autora"],
    ingredients: [
      { amount: 300, unit: "g", name: "agua tibia" },
      { amount: 10, unit: "g", name: "levadura seca" },
      { amount: 500, unit: "g", name: "harina de trigo" },
      { amount: 10, unit: "g", name: "sal" },
      { amount: 20, unit: "g", name: "aceite de oliva" },
    ],
    steps: [
      { text: "Añade agua y levadura al vaso y templa.", settings: "1 min · 37 °C · Velocidad 2" },
      { text: "Agrega harina, sal y aceite. Mezcla.", settings: "20 seg · Velocidad 6" },
      { text: "Amasa la masa.", settings: "3 min · Espiga" },
      { text: "Deja levar en el vaso tapado hasta que doble su volumen (aprox. 45 min)." },
      { text: "Forma el pan, deja levar 30 min más y hornea a 200 °C por 30 min." },
    ],
    tips: ["Coloca un recipiente con agua en el horno para una corteza más crujiente."],
    swaps: ["Harina de trigo → 20 % harina integral para más sabor"],
  },
  {
    slug: "pepian-guatemalteco",
    title: "Pepián guatemalteco",
    image: pepian,
    description: "El clásico de casa, con su recado tostado y molido en el vaso hasta quedar perfectamente terso.",
    minutes: 60,
    servings: 6,
    difficulty: "Media",
    costPerServing: 24,
    categories: ["guatemala", "familia", "autora"],
    ingredients: [
      { amount: 4, unit: "unidades", name: "tomate" },
      { amount: 2, unit: "unidades", name: "miltomate" },
      { amount: 50, unit: "g", name: "pepitoria" },
      { amount: 30, unit: "g", name: "ajonjolí" },
      { amount: 1, unit: "unidad", name: "chile guaque" },
      { amount: 800, unit: "g", name: "pollo en piezas" },
      { amount: 600, unit: "g", name: "caldo de pollo" },
    ],
    steps: [
      { text: "Tuesta pepitoria y ajonjolí en el vaso.", settings: "6 min · 120 °C · Velocidad 1" },
      { text: "Pulveriza las semillas tostadas.", settings: "30 seg · Velocidad 10" },
      { text: "Añade tomate, miltomate y chile. Cocina.", settings: "10 min · 100 °C · Velocidad 1" },
      { text: "Tritura el recado hasta que quede terso.", settings: "1 min · Velocidad 8" },
      { text: "Agrega pollo y caldo y cocina.", settings: "30 min · 100 °C · Velocidad 1 · Giro inverso" },
      { text: "Sirve con arroz y tortillas." },
    ],
    tips: ["Cuela el recado si lo prefieres aún más fino."],
    swaps: ["Pollo → res para una versión más profunda"],
  },
  {
    slug: "yogurt-natural-casero",
    title: "Yogurt natural casero",
    image: yogurt,
    description: "Cremoso, sin azúcares añadidos y a una fracción del costo del yogurt del supermercado.",
    minutes: 30,
    servings: 6,
    difficulty: "Fácil",
    costPerServing: 4,
    categories: ["saludables", "comunidad"],
    ingredients: [
      { amount: 1000, unit: "g", name: "leche entera" },
      { amount: 120, unit: "g", name: "yogurt natural (cultivo)" },
    ],
    steps: [
      { text: "Calienta la leche en el vaso.", settings: "12 min · 90 °C · Velocidad 2" },
      { text: "Deja templar hasta 40 °C y añade el yogurt.", settings: "10 seg · Velocidad 3" },
      { text: "Fermenta en frascos tibios entre 6 y 8 horas." },
      { text: "Refrigera al menos 4 horas antes de servir." },
    ],
    tips: ["Guarda 120 g del yogurt terminado como cultivo para la siguiente tanda."],
    swaps: [],
  },
  // Additional recipes (ingredients only) — steps intentionally omitted because steps may be Cookidoo-protected
  {
    slug: "gallo-pinto",
    title: "Gallo pinto — mezcla tradicional",
    image: sopa,
    description: "El clásico desayuno guatemalteco: frijol, arroz y sazón casera.",
    minutes: 20,
    servings: 4,
    difficulty: "Fácil",
    costPerServing: 6,
    categories: ["guatemala", "familia"],
    ingredients: [
      { amount: 400, unit: "g", name: "frijoles negros cocidos" },
      { amount: 240, unit: "g", name: "arroz blanco cocido" },
      { amount: 1, unit: "unidad", name: "cebolla mediana picada" },
      { amount: 2, unit: "dientes", name: "ajo picado" },
      { amount: 2, unit: "cdas", name: "aceite" },
      { amount: 1, unit: "pizca", name: "comino" },
      { amount: 1, unit: "ramita", name: "cilantro (opcional)" },
    ],
    steps: [],
    tips: [],
    swaps: [],
  },
  {
    slug: "sopa-de-pollo-ligera",
    title: "Sopa de pollo ligera",
    image: sopa,
    description: "Sopa casera reconfortante, perfecta para días frescos.",
    minutes: 45,
    servings: 4,
    difficulty: "Fácil",
    costPerServing: 18,
    categories: ["familia", "saludables"],
    ingredients: [
      { amount: 800, unit: "g", name: "pollo en piezas" },
      { amount: 2, unit: "unidades", name: "zanahorias" },
      { amount: 2, unit: "unidades", name: "papas medianas" },
      { amount: 1, unit: "unidad", name: "cebolla" },
      { amount: 2, unit: "dientes", name: "ajo" },
      { amount: 1, unit: "ramita", name: "apio" },
      { amount: 1, unit: "lt", name: "agua o caldo de pollo" },
    ],
    steps: [],
    tips: [],
    swaps: [],
  },
  {
    slug: "postre-fresco-de-mango",
    title: "Postre fresco de mango",
    image: postre,
    description: "Postre ligero y muy sencillo para disfrutar la fruta de temporada.",
    minutes: 10,
    servings: 4,
    difficulty: "Fácil",
    costPerServing: 10,
    categories: ["postres", "comunidad"],
    ingredients: [
      { amount: 500, unit: "g", name: "mango maduro pelado y picado" },
      { amount: 200, unit: "g", name: "lechera o yogurt" },
      { amount: 2, unit: "cda", name: "azúcar (opcional)" },
      { amount: 1, unit: "unidad", name: "limón (jugo)" },
    ],
    steps: [],
    tips: [],
    swaps: [],
  },
  {
    slug: "sopa-verde-de-temporada",
    title: "Sopa verde de temporada",
    image: sopa,
    description: "Verduras de temporada convertidas en una crema aterciopelada en menos de 25 minutos.",
    minutes: 25,
    servings: 4,
    difficulty: "Fácil",
    costPerServing: 12,
    categories: ["saludables", "rapidas"],
    ingredients: [
      { amount: 1, unit: "unidad", name: "cebolla" },
      { amount: 300, unit: "g", name: "brócoli" },
      { amount: 200, unit: "g", name: "espinaca" },
      { amount: 1, unit: "unidad", name: "papa" },
      { amount: 700, unit: "g", name: "caldo de verduras" },
    ],
    steps: [
      { text: "Trocea la cebolla.", settings: "5 seg · Velocidad 5" },
      { text: "Sofríe con un poco de aceite.", settings: "3 min · 120 °C · Velocidad 1" },
      { text: "Añade verduras y caldo. Cocina.", settings: "15 min · 100 °C · Velocidad 1" },
      { text: "Tritura hasta obtener una crema fina.", settings: "1 min · Velocidad 8" },
    ],
    tips: ["Añade la espinaca al final para conservar el color verde intenso."],
    swaps: ["Papa → coliflor para una versión más ligera"],
  },
  {
    slug: "mousse-de-chocolate",
    title: "Mousse de chocolate en 15 minutos",
    image: postre,
    description: "Aireada, intensa y con solo cuatro ingredientes. El postre que siempre salva la cena.",
    minutes: 15,
    servings: 4,
    difficulty: "Fácil",
    costPerServing: 9,
    categories: ["postres", "rapidas", "comunidad"],
    ingredients: [
      { amount: 200, unit: "g", name: "chocolate semiamargo" },
      { amount: 300, unit: "g", name: "crema para batir fría" },
      { amount: 3, unit: "unidades", name: "huevos" },
      { amount: 40, unit: "g", name: "azúcar" },
    ],
    steps: [
      { text: "Ralla el chocolate.", settings: "10 seg · Velocidad 8" },
      { text: "Derrite el chocolate.", settings: "3 min · 50 °C · Velocidad 2" },
      { text: "Con la mariposa, monta la crema fría.", settings: "1 min · Velocidad 3.5" },
      { text: "Integra chocolate y huevos con movimientos envolventes y refrigera 2 horas." },
    ],
    tips: ["Usa huevos muy frescos o pasteurizados."],
    swaps: ["Chocolate semiamargo → chocolate con leche (reduce el azúcar)"],
  },
];

export function getRecipe(slug: string) {
  return recipes.find((r) => r.slug === slug);
}
