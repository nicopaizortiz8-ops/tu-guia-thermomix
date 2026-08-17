import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Disclaimer } from "@/components/site/ui-bits";
import { WhatsAppLink } from "@/components/site/whatsapp-link";

export const Route = createFileRoute("/ai-kitchen/tiempo")({
  head: () => ({
    meta: [
      { title: "¿Cuánto tiempo pasas en la cocina? | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "Estima cuántas horas dedicas a cocinar cada semana y descubre qué tareas podrías simplificar.",
      },
      { property: "og:title", content: "Tu tiempo en la cocina | Yo Uso Thermomix" },
      { property: "og:description", content: "Una estimación de tus horas semanales cocinando." },
    ],
  }),
  component: Tiempo,
});

function Tiempo() {
  const [dias, setDias] = useState(5);
  const [cocina, setCocina] = useState(40);
  const [prep, setPrep] = useState(15);
  const [limpieza, setLimpieza] = useState(15);

  const semana = (dias * (cocina + prep + limpieza)) / 60;

  return (
    <div className="container-page py-10 md:py-16">
      <Link
        to="/ai-kitchen"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> ¿Qué cocinamos?
      </Link>
      <h1 className="mt-6 max-w-xl text-3xl md:text-[2.6rem]">¿Cuánto tiempo pasas en la cocina?</h1>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="space-y-7 rounded-[1.5rem] border border-border bg-card p-6 md:p-8">
          <Slider label="Días que cocinas por semana" value={dias} setValue={setDias} min={0} max={7} unit="días" />
          <Slider label="Tiempo promedio cocinando" value={cocina} setValue={setCocina} min={5} max={120} unit="min" />
          <Slider label="Tiempo de preparación" value={prep} setValue={setPrep} min={0} max={60} unit="min" />
          <Slider label="Tiempo de limpieza" value={limpieza} setValue={setLimpieza} min={0} max={60} unit="min" />
        </div>

        <div className="space-y-5">
          <div className="rounded-[1.5rem] bg-primary p-8 text-primary-foreground">
            <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/70">
              Tu semana en la cocina
            </p>
            <p className="mt-3 font-display text-5xl">{semana.toFixed(1)} horas</p>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Aproximadamente {Math.round(semana * 52)} horas al año
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-border bg-card p-6 md:p-8">
            <p className="font-display text-xl">Tareas que suelen combinarse</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {[
                "Picar, moler y triturar en un solo vaso",
                "Cocinar mientras remueve, sin estar pendiente",
                "Pesar los ingredientes directamente en el vaso",
                "Cocinar al vapor mientras se prepara otra cosa abajo",
                "Menos utensilios sucios al final",
              ].map((t) => (
                <li key={t}>· {t}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Cuánto tiempo se ahorra depende de qué cocines y cómo lo hagas hoy. No prometo un
              número exacto de horas.
            </p>
          </div>
          <Disclaimer>
            Estimación únicamente, basada en la información que proporcionaste.
          </Disclaimer>
          <div className="rounded-[1.5rem] bg-secondary/70 p-6">
            <p className="font-display text-xl">Descubre cómo funciona</p>
            <WhatsAppLink source="time_calculator" className="mt-4" size="sm">
              Hablar conmigo
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  setValue,
  min,
  max,
  unit,
}: {
  label: string;
  value: number;
  setValue: (v: number) => void;
  min: number;
  max: number;
  unit: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="font-display text-lg">{label}</p>
        <span className="text-sm text-muted-foreground">
          {value} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="mt-3 w-full accent-[var(--color-primary)]"
      />
    </div>
  );
}
