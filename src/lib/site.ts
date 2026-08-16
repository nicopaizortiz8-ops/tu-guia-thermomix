/**
 * Central site configuration and lead/analytics plumbing.
 * Placeholder values are marked and meant to be replaced with real data.
 */

export const site = {
  name: "Yo Uso Thermomix",
  consultant: {
    // PLACEHOLDER: nombre real de la consultora
    name: "Ana",
    fullName: "Ana [Apellido]",
    location: "Ciudad de Guatemala",
  },
  // PLACEHOLDER: número de WhatsApp real (formato internacional, sin +)
  whatsappNumber: "50200000000",
  social: {
    instagram: "https://instagram.com/", // PLACEHOLDER
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
  | "time_calculator";

const messages: Record<WhatsAppSource, string> = {
  homepage: "Hola, vi tu página y me gustaría conocer más sobre Thermomix.",
  nav: "Hola, me gustaría hacerte una consulta sobre Thermomix.",
  footer: "Hola, tengo una duda sobre Thermomix.",
  savings_calculator: "Hola, quiero entender cuánto podría ahorrar cocinando más en casa.",
  recipe: "Hola, quiero saber cómo preparar esta receta con Thermomix.",
  recipe_generator: "Hola, estuve usando el generador de recetas y tengo una duda.",
  thermomix_quiz: "Hola, hice el quiz y quiero probar Thermomix.",
  thermomix_page: "Hola, quiero una demostración de Thermomix.",
  lives: "Hola, quiero saber más sobre los próximos Lives de cocina.",
  about: "Hola, me gustaría platicar contigo sobre Thermomix.",
  meal_planner: "Hola, quiero ayuda para planear el menú de mi semana.",
  hazlo_en_casa: "Hola, quiero saber qué puedo preparar en casa con Thermomix.",
  time_calculator: "Hola, quiero saber cómo simplificar mi tiempo en la cocina.",
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
