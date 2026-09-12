import risotto from "@/assets/receta-risotto.jpg";
import pan from "@/assets/receta-pan.jpg";
import polloLimon from "@/assets/receta-pollo-limon.jpg";
import pepian from "@/assets/receta-pepian.jpg";
import yogurt from "@/assets/receta-yogurt.jpg";
import sopa from "@/assets/receta-sopa.jpg";
import postre from "@/assets/receta-postre.jpg";
import { newRecipes } from "./new-recipes";

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
      {
        text: "Agrega el parmesano rallado y mezcla.",
        settings: "20 seg · Velocidad 1 · Giro inverso",
      },
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
    description:
      "Una salsa ligera de limón y hierbas sobre pollo jugoso. Perfecto para un día entre semana.",
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
      {
        text: "Añade el aceite y el romero al vaso y calienta.",
        settings: "2 min · 120 °C · Velocidad 1",
      },
      {
        text: "Coloca el pollo en el Varoma y cocina al vapor.",
        settings: "18 min · Varoma · Velocidad 1",
      },
      {
        text: "Añade crema, jugo y ralladura de limón. Mezcla.",
        settings: "2 min · 90 °C · Velocidad 2",
      },
      { text: "Baña el pollo con la salsa y sirve." },
    ],
    tips: ["Corta las pechugas en filetes parejos para una cocción uniforme."],
    swaps: ["Crema → leche evaporada", "Romero → tomillo o albahaca"],
  },
  {
    slug: "pan-casero",
    title: "Pan casero de todos los días",
    image: pan,
    description:
      "Miga suave, corteza dorada y una masa que se amasa sola. El pan que reemplaza al del súper.",
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
    description:
      "El clásico de casa, con su recado tostado y molido en el vaso hasta quedar perfectamente terso.",
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
      {
        text: "Añade tomate, miltomate y chile. Cocina.",
        settings: "10 min · 100 °C · Velocidad 1",
      },
      { text: "Tritura el recado hasta que quede terso.", settings: "1 min · Velocidad 8" },
      {
        text: "Agrega pollo y caldo y cocina.",
        settings: "30 min · 100 °C · Velocidad 1 · Giro inverso",
      },
      { text: "Sirve con arroz y tortillas." },
    ],
    tips: ["Cuela el recado si lo prefieres aún más fino."],
    swaps: ["Pollo → res para una versión más profunda"],
  },
  {
    slug: "yogurt-natural-casero",
    title: "Yogurt natural casero",
    image: yogurt,
    description:
      "Cremoso, sin azúcares añadidos y a una fracción del costo del yogurt del supermercado.",
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
    swaps: ["Leche entera → leche deslactosada (textura más suave)"],
  },
  {
    slug: "sopa-verde-de-temporada",
    title: "Sopa verde de temporada",
    image: sopa,
    description:
      "Verduras de temporada convertidas en una crema aterciopelada en menos de 25 minutos.",
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
    description:
      "Aireada, intensa y con solo cuatro ingredientes. El postre que siempre salva la cena.",
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
  {
    slug: "hummus-de-garbanzos",
    title: "Hummus de garbanzos",
    image: "/images/recipes/hummus.jpg",
    description:
      "Un dip cremoso de garbanzos, limón y tahini para acompañar verduras o pan recién hecho.",
    minutes: 10,
    servings: 6,
    difficulty: "Fácil",
    costPerServing: 4,
    categories: ["saludables", "rapidas", "familia"],
    ingredients: [
      { amount: 300, unit: "g", name: "garbanzos cocidos y escurridos" },
      { amount: 30, unit: "g", name: "tahini" },
      { amount: 25, unit: "g", name: "jugo de limón" },
      { amount: 20, unit: "g", name: "aceite de oliva" },
      { amount: 60, unit: "g", name: "agua fría" },
      { amount: 1, unit: "diente", name: "ajo" },
    ],
    steps: [
      { text: "Tritura todos los ingredientes hasta obtener una crema suave." },
      { text: "Ajusta el agua poco a poco y sirve con aceite de oliva." },
    ],
    tips: [
      "Las cantidades y los costos son orientativos; consulta el paso a paso con María Regina.",
    ],
    swaps: [],
  },
  {
    slug: "salsa-de-tomate-casera",
    title: "Salsa de tomate casera",
    image: "/images/recipes/salsa-tomate.jpg",
    description:
      "Tomate, ajo y albahaca en una salsa sencilla para pasta, pizza y las comidas de la semana.",
    minutes: 30,
    servings: 6,
    difficulty: "Fácil",
    costPerServing: 3,
    categories: ["familia", "comunidad"],
    ingredients: [
      { amount: 800, unit: "g", name: "tomates maduros" },
      { amount: 80, unit: "g", name: "cebolla" },
      { amount: 20, unit: "g", name: "aceite de oliva" },
      { amount: 1, unit: "diente", name: "ajo" },
      { amount: 5, unit: "hojas", name: "albahaca" },
    ],
    steps: [
      { text: "Trocea la cebolla y el ajo. Sofríe con el aceite." },
      { text: "Añade el tomate troceado y cocina hasta que la salsa espese." },
      { text: "Agrega la albahaca y ajusta la sazón." },
    ],
    tips: [
      "Las cantidades y los costos son orientativos; consulta el paso a paso con María Regina.",
    ],
    swaps: [],
  },
  {
    slug: "bebida-de-avena",
    title: "Bebida de avena",
    image: "/images/recipes/bebida-avena.jpg",
    description:
      "Una bebida suave con avena y agua, lista para acompañar el café o preparar un desayuno.",
    minutes: 10,
    servings: 4,
    difficulty: "Fácil",
    costPerServing: 2,
    categories: ["saludables", "rapidas", "comunidad"],
    ingredients: [
      { amount: 95, unit: "g", name: "avena en hojuelas" },
      { amount: 1000, unit: "ml", name: "agua fría" },
    ],
    steps: [
      { text: "Tritura la avena con agua bien fría durante unos segundos." },
      { text: "Filtra sin apretar demasiado y refrigera. Agita antes de servir." },
    ],
    tips: [
      "Las cantidades y los costos son orientativos; consulta el paso a paso con María Regina.",
    ],
    swaps: [],
  },
  {
    slug: "mantequilla-de-mani",
    title: "Mantequilla de maní",
    image: "/images/recipes/mantequilla-mani.jpg",
    description:
      "Maní tostado convertido en una crema para tostadas, fruta y meriendas hechas en casa.",
    minutes: 15,
    servings: 12,
    difficulty: "Fácil",
    costPerServing: 6,
    categories: ["rapidas", "familia"],
    ingredients: [{ amount: 500, unit: "g", name: "maní tostado sin sal" }],
    steps: [
      { text: "Tritura el maní en tandas cortas, bajando los restos de las paredes entre tandas." },
      { text: "Continúa hasta que libere sus aceites y alcance una textura untable." },
    ],
    tips: [
      "Las cantidades y los costos son orientativos; consulta el paso a paso con María Regina.",
    ],
    swaps: [],
  },
  {
    slug: "pesto-de-albahaca",
    title: "Pesto de albahaca y maní",
    image: "/images/recipes/pesto.jpg",
    description:
      "Albahaca fresca, queso y maní en una salsa aromática que transforma una pasta sencilla.",
    minutes: 10,
    servings: 4,
    difficulty: "Fácil",
    costPerServing: 7,
    categories: ["rapidas", "familia", "comunidad"],
    ingredients: [
      { amount: 30, unit: "g", name: "albahaca fresca" },
      { amount: 40, unit: "g", name: "maní tostado" },
      { amount: 40, unit: "g", name: "queso parmesano" },
      { amount: 70, unit: "g", name: "aceite de oliva" },
      { amount: 1, unit: "diente", name: "ajo" },
    ],
    steps: [
      { text: "Tritura el queso y el maní." },
      { text: "Añade la albahaca, el ajo y el aceite; mezcla hasta conseguir la textura deseada." },
    ],
    tips: [
      "Las cantidades y los costos son orientativos; consulta el paso a paso con María Regina.",
    ],
    swaps: [],
  },
  {
    slug: "panqueques-de-avena",
    title: "Panqueques de avena y banano",
    image: "/images/recipes/panqueques-avena.jpg",
    description: "Suaves y doraditos, con una mezcla de avena y banano que se prepara en el vaso.",
    minutes: 20,
    servings: 4,
    difficulty: "Fácil",
    costPerServing: 5,
    categories: ["rapidas", "familia", "postres"],
    ingredients: [
      { amount: 150, unit: "g", name: "avena" },
      { amount: 1, unit: "unidad", name: "banano maduro" },
      { amount: 2, unit: "unidades", name: "huevos" },
      { amount: 150, unit: "ml", name: "leche" },
      { amount: 1, unit: "cdta", name: "polvo para hornear" },
      { amount: 10, unit: "g", name: "aceite" },
    ],
    steps: [
      {
        text: "Muele la avena e incorpora banano, huevos, leche y polvo para hornear. Mezcla y deja reposar 5 minutos.",
      },
      {
        text: "Engrasa una sartén y cocina porciones pequeñas a fuego medio, por ambos lados, hasta que el centro esté cocido.",
      },
    ],
    tips: [
      "Las cantidades y los costos son orientativos; consulta el paso a paso con María Regina.",
    ],
    swaps: [],
  },
  ...newRecipes,
];

export function getRecipe(slug: string) {
  return recipes.find((r) => r.slug === slug);
}
