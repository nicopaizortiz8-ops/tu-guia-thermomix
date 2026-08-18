/**
 * Central site configuration and lead/analytics plumbing.
 * Placeholder values are marked and meant to be replaced with real data.
 */

export const site = {
  name: "Yo Uso Thermomix",
  signature: "con María Regina",
  consultant: {
    name: "María Regina",
    fullName: "María Regina",
    location: "Ciudad de Guatemala",
  },
  // PLACEHOLDER: número de WhatsApp real (formato internacional, sin +)
  whatsappNumber: "50200000000",
  social: {
    instagramHandle: "@yousothermomix",
    instagram: "https://instagram.com/yousothermomix", // PLACEHOLDER
    tiktok: "https://tiktok.com/", // PLACEHOLDER
    youtube: "https://youtube.com/", // PLACEHOLDER
  },
  currency: "Q",
} as const;

export type WhatsAppSource =
  | "homepage"
  | "nav"
  | "footer"
  | "savings_calculator"
  | "recipe"
  | "recipe_generator"
  | "thermomix_quiz"
  | "thermomix_page"
  | "lives"
  | "about"
  | "meal_planner"
  | "hazlo_en_casa"
  | "vacia_mi_refri"
  | "acompanamiento"
  | "financing"
  | "demonstration"
  | "purchase_interest"
  | "perspectiva"
  | "time_calculator";

const messages: Record<WhatsAppSource, string> = {
  homepage: "Hola María Regina, vi tu página y me gustaría conocer más sobre Thermomix.",
  nav: "Hola María Regina, me gustaría hacerte una consulta.",
  footer: "Hola María Regina, tengo una duda sobre Thermomix.",
  savings_calculator: "Hola María Regina, quiero entender dónde podría optimizar mi gasto cocinando más en casa.",
  recipe: "Hola María Regina, quiero saber cómo preparar esta receta.",
  recipe_generator: "Hola María Regina, estuve buscando ideas para cocinar y tengo una duda.",
  thermomix_quiz: "Hola María Regina, hice el test y quiero ver la Thermomix funcionando.",
  thermomix_page: "Hola María Regina, quiero una demostración de Thermomix.",
  lives: "Hola María Regina, quiero saber más sobre los próximos Lives.",
  about: "Hola María Regina, me gustaría platicar contigo.",
  meal_planner: "Hola María Regina, quiero ayuda para planear el menú de mi semana.",
  hazlo_en_casa: "Hola María Regina, quiero saber qué me conviene hacer en casa.",
  vacia_mi_refri: "Hola María Regina, quiero ideas para aprovechar lo que tengo en el refri.",
  acompanamiento: "Hola María Regina, quiero saber cómo acompañas después de la compra.",
  time_calculator: "Hola María Regina, quiero simplificar mi tiempo en la cocina.",
  financing:
    "Hola María Regina, quisiera conocer las opciones actuales de financiamiento para Thermomix.",
  demonstration: "Hola María Regina, quiero verla funcionando y vivir la experiencia.",
  purchase_interest: "Hola María Regina, quiero conocer el proceso para llevarme una Thermomix.",
  perspectiva:
    "Hola María Regina, hice la comparación de gastos en tu página y quisiera conocer las opciones actuales de financiamiento para Thermomix.",
};

export function whatsappUrl(source: WhatsAppSource, extra?: string) {
  const base = messages[source] ?? messages.homepage;
  const text = extra ? `${base} ${extra}` : base;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/** Analytics events — currently logged, ready to forward to a provider later. */
export type AnalyticsEvent =
  | "ai_tool_opened"
  | "recipe_generated"
  | "recipe_saved"
  | "savings_calculated"
  | "meal_plan_generated"
  | "thermomix_quiz_completed"
  | "whatsapp_clicked"
  | "instagram_clicked"
  | "live_clicked"
  | "cooking_mode_started"
  | "account_created"
  | "plus_viewed"
  | "newsletter_signup";

export function track(event: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...payload });
  if (import.meta.env.DEV) console.debug("[analytics]", event, payload);
}

export function formatQ(value: number) {
  return `Q${Math.round(value).toLocaleString("es-GT")}`;
}
