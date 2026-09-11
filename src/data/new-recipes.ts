import type { Recipe } from "./recipes";

export const newRecipes: Recipe[] = [
  {
    slug: "focaccia-de-romero",
    title: "Focaccia de romero y aceite de oliva",
    image: "/images/recipes/focaccia.jpg",
    description:
      "Dorada por fuera, esponjosa por dentro. Un pan para llevar al centro de la mesa y compartir todavía tibio.",
    minutes: 150,
    servings: 8,
    difficulty: "Fácil",
    costPerServing: 5,
    categories: ["familia"],
    ingredients: [
      { amount: 500, unit: "g", name: "harina de trigo" },
      { amount: 380, unit: "g", name: "agua" },
      { amount: 7, unit: "g", name: "levadura seca" },
      { amount: 50, unit: "g", name: "aceite de oliva" },
      { amount: 10, unit: "g", name: "sal" },
      { amount: 2, unit: "ramitas", name: "romero" },
    ],
    steps: [
      { text: "Mezcla agua, levadura, harina, sal y la mitad del aceite; amasa hasta integrar." },
      { text: "Pasa a un recipiente aceitado y deja levar hasta duplicar el volumen." },
      {
        text: "Extiende en una bandeja aceitada y deja levar de nuevo. Marca hoyuelos con los dedos y reparte el aceite restante y el romero.",
      },
      {
        text: "Hornea a 220 °C durante 20–25 minutos, hasta que esté dorada y cocida en el centro.",
      },
    ],
    tips: [
      "El tiempo incluye reposos aproximados; la fermentación depende de la temperatura de la cocina.",
    ],
    swaps: ["Romero → tomillo"],
  },
  {
    slug: "crema-de-tomates-asados",
    title: "Crema de tomates asados",
    image: "/images/recipes/tomato-soup.jpg",
    description:
      "Tomates al horno, albahaca y una textura sedosa. De esas sopas que piden pan y una sobremesa larga.",
    minutes: 50,
    servings: 4,
    difficulty: "Fácil",
    costPerServing: 12,
    categories: ["familia", "saludables"],
    ingredients: [
      { amount: 800, unit: "g", name: "tomates maduros" },
      { amount: 100, unit: "g", name: "cebolla" },
      { amount: 2, unit: "dientes", name: "ajo" },
      { amount: 25, unit: "g", name: "aceite de oliva" },
      { amount: 400, unit: "ml", name: "caldo de verduras" },
      { amount: 60, unit: "ml", name: "crema" },
      { amount: 6, unit: "hojas", name: "albahaca" },
    ],
    steps: [
      { text: "Asa tomates, cebolla y ajo con aceite a 200 °C durante 30 minutos." },
      {
        text: "Pasa las verduras al vaso con el caldo y cocina hasta que estén tiernas, sin superar la capacidad máxima.",
      },
      {
        text: "Deja bajar la temperatura y tritura progresivamente siguiendo las indicaciones de tu modelo para líquidos calientes. Incorpora la crema y sirve con albahaca.",
      },
    ],
    tips: ["Reserva un poco de caldo para ajustar el espesor al final."],
    swaps: ["Crema → más caldo para una versión sin lácteos"],
  },
  {
    slug: "rollos-de-canela",
    title: "Rollos de canela recién horneados",
    image: "/images/recipes/cinnamon-rolls.jpg",
    description:
      "Masa suave, espirales de canela y un glaseado ligero. El aroma que convierte cualquier tarde en una ocasión especial.",
    minutes: 150,
    servings: 9,
    difficulty: "Media",
    costPerServing: 7,
    categories: ["postres", "familia"],
    ingredients: [
      { amount: 450, unit: "g", name: "harina" },
      { amount: 220, unit: "ml", name: "leche" },
      { amount: 7, unit: "g", name: "levadura seca" },
      { amount: 1, unit: "unidad", name: "huevo" },
      { amount: 100, unit: "g", name: "mantequilla blanda" },
      { amount: 130, unit: "g", name: "azúcar" },
      { amount: 10, unit: "g", name: "canela molida" },
      { amount: 80, unit: "g", name: "azúcar glas" },
      { amount: 15, unit: "ml", name: "leche para el glaseado" },
    ],
    steps: [
      {
        text: "Mezcla harina, leche, levadura, huevo, 50 g de mantequilla y 50 g de azúcar. Amasa y deja levar hasta duplicar el volumen.",
      },
      {
        text: "Estira en un rectángulo; unta la mantequilla restante y espolvorea el azúcar restante con la canela.",
      },
      {
        text: "Enrolla, corta nueve piezas y coloca en un molde. Deja levar otra vez y hornea a 180 °C durante 25–30 minutos.",
      },
      { text: "Mezcla azúcar glas y leche del glaseado y reparte sobre los rollos tibios." },
    ],
    tips: ["Deja espacio entre los rollos para el segundo levado."],
    swaps: [],
  },
  {
    slug: "pastel-de-limon-y-yogurt",
    title: "Pastel de limón y yogurt",
    image: "/images/recipes/lemon-cake.jpg",
    description:
      "Una miga tierna, el perfume del limón y un glaseado delicado. Perfecto para servir con café en tu taza favorita.",
    minutes: 65,
    servings: 8,
    difficulty: "Fácil",
    costPerServing: 6,
    categories: ["postres", "familia"],
    ingredients: [
      { amount: 200, unit: "g", name: "harina" },
      { amount: 125, unit: "g", name: "yogurt natural" },
      { amount: 150, unit: "g", name: "azúcar" },
      { amount: 3, unit: "unidades", name: "huevos" },
      { amount: 80, unit: "g", name: "aceite suave" },
      { amount: 10, unit: "g", name: "polvo para hornear" },
      { amount: 1, unit: "unidad", name: "limón, jugo y ralladura" },
      { amount: 70, unit: "g", name: "azúcar glas" },
    ],
    steps: [
      { text: "Mezcla huevos, azúcar, yogurt, aceite y ralladura de limón." },
      {
        text: "Incorpora harina y polvo para hornear sin batir en exceso. Vierte en un molde para panqué engrasado.",
      },
      {
        text: "Hornea a 175 °C durante 40–45 minutos, hasta que un palillo salga limpio. Deja enfriar.",
      },
      { text: "Mezcla azúcar glas con jugo de limón, poco a poco, y vierte sobre el pastel frío." },
    ],
    tips: ["Ralla solo la parte amarilla del limón."],
    swaps: ["Limón → naranja"],
  },
];
