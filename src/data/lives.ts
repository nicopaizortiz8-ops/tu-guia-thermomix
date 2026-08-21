// Seeded list of upcoming live events (Phase 1)
// These are editable and intended as friendly defaults for the Live calendar.

export type LiveEvent = {
  id: string;
  title: string;
  description?: string;
  start: string; // ISO 8601
  end?: string; // ISO 8601
  location?: string;
};

export const lives: LiveEvent[] = [
  {
    id: "live-2026-09-02-pan",
    title: "Live: Pan casero de todos los días",
    description: "Acompáñame en vivo para preparar pan casero fácil y delicioso. Preguntas en vivo y trucos prácticos.",
    start: "2026-09-02T19:00:00-06:00", // 7:00 PM Guatemala
    end: "2026-09-02T20:15:00-06:00",
    location: "Instagram Live @yousothermomix",
  },
];
