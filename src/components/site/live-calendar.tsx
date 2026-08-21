import { useMemo } from "react";
import { lives, type LiveEvent } from "@/data/lives";
import { EditorialButton } from "./ui-bits";
import { cn } from "@/lib/utils";

function toGoogleCalendarUrl(e: LiveEvent) {
  const start = encodeURIComponent(e.start.replace(/-|:$/g, "").replace(/:/g, ""));
  // Google Calendar expects timestamps like 20260902T190000Z or with timezone; keep a simple RFC format
  const dates = `${e.start.replace(/-|:00/g, "")}/${(e.end || e.start).replace(/-|:00/g, "")}`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: e.title,
    details: e.description || "",
    location: e.location || "",
    // use the raw ISO for start/end — Google tolerates this in many clients
    dates: `${e.start.replace(/-|:00/g, "")}/${(e.end || e.start).replace(/-|:00/g, "")}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function makeICS(event: LiveEvent) {
  const uid = `${event.id}@yousothermomix`;
  const dtstamp = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const dtstart = event.start.replace(/-|:00/g, "") .replace(/:/g, "");
  const dtend = (event.end || event.start).replace(/-|:00/g, "").replace(/:/g, "");
  const description = (event.description || "").replace(/\n/g, "\\n");
  return `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Yo Uso Thermomix//EN\nBEGIN:VEVENT\nUID:${uid}\nDTSTAMP:${dtstamp}\nDTSTART:${dtstart}\nDTEND:${dtend}\nSUMMARY:${event.title}\nDESCRIPTION:${description}\nLOCATION:${event.location || ""}\nEND:VEVENT\nEND:VCALENDAR`;
}

export default function LiveCalendar({ className }: { className?: string }) {
  const items = useMemo(() => lives, []);

  return (
    <div className={cn("space-y-6", className)}>
      {items.map((e) => (
        <article key={e.id} className="grid gap-3 rounded-lg border border-border p-4 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-[0.66rem] uppercase tracking-[0.28em] text-champagne">Próximo Live</p>
            <h3 className="mt-2 font-display text-2xl leading-tight">{e.title}</h3>
            {e.description && <p className="mt-2 text-sm text-muted-foreground">{e.description}</p>}
            <p className="mt-2 text-xs text-muted-foreground">{new Date(e.start).toLocaleString("es-GT", { dateStyle: "long", timeStyle: "short" })} · {e.location}</p>
          </div>

          <div className="mt-3 flex items-center gap-3 md:mt-0">
            <a
              href={toGoogleCalendarUrl(e)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            >
              Añadir a Google Calendar
            </a>
            <a
              href={`data:text/calendar;charset=utf8,${encodeURIComponent(makeICS(e))}`}
              download={`${e.id}.ics`}
              className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm font-medium hover:bg-secondary transition-all duration-200"
            >
              Descargar .ics
            </a>
            <a
              href={`data:text/calendar;charset=utf8,${encodeURIComponent(makeICS(e))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-1 ml-2"
            >
              Añadir a Apple Calendar
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
