import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatQ, track } from "@/lib/site";
import { Chip, Disclaimer } from "@/components/site/ui-bits";
import { WhatsAppLink } from "@/components/site/whatsapp-link";

export const Route = createFileRoute("/ai-kitchen/ahorro")({
  head: () => ({
    meta: [
      { title: "Calcula tu ahorro cocinando en casa | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "Estima cuánto podrías ahorrar cocinando más en casa en Guatemala. Resultados estimados según tus hábitos.",
      },
      { property: "og:title", content: "Calcula tu ahorro | Yo Uso Thermomix" },
      {
        property: "og:description",
        content: "Una estimación simple de tu gasto en comida fuera y productos preparados.",
      },
    ],
  }),
  component: Ahorro,
});

const personas = ["1", "2", "3", "4", "5+"];
const frecuencias = [
  { label: "0", value: 0 },
  { label: "1–2", value: 1.5 },
  { label: "3–4", value: 3.5 },
  { label: "5+", value: 5.5 },
];
const productos = [
  "Pan",
  "Yogurt",
  "Pizza",
  "Mayonesa",
  "Mermelada",
  "Salsas",
  "Hummus",
  "Leche vegetal",
  "Postres",
  "Helado",
  "Masas",
  "Caldos",
  "Otro",
];

function Ahorro() {
  const [personasSel, setPersonas] = useState("4");
  const [frecuencia, setFrecuencia] = useState(3.5);
  const [gasto, setGasto] = useState(180);
  const [sel, setSel] = useState<string[]>(["Pan", "Yogurt", "Salsas"]);
  const [done, setDone] = useState(false);

  const calc = useMemo(() => {
    const fuera = frecuencia * gasto * 4.3;
    const preparados = sel.length * 95 * (personasSel === "5+" ? 1.6 : Number(personasSel) / 3 + 0.6);
    const actual = fuera + preparados;
    const encasa = fuera * 0.45 + preparados * 0.4;
    const ahorro = Math.max(actual - encasa, 0);
    return { fuera, preparados, actual, encasa, ahorro };
  }, [frecuencia, gasto, sel, personasSel]);

  const chartData = [
    { periodo: "1 mes", ahorro: Math.round(calc.ahorro) },
    { periodo: "6 meses", ahorro: Math.round(calc.ahorro * 6) },
    { periodo: "1 año", ahorro: Math.round(calc.ahorro * 12) },
    { periodo: "3 años", ahorro: Math.round(calc.ahorro * 36) },
  ];

  return (
    <div className="container-page py-10 md:py-16">
      <Link
        to="/ai-kitchen"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> ¿Qué cocinamos?
      </Link>

      <h1 className="mt-6 max-w-2xl text-3xl md:text-[2.6rem]">
        ¿Cuánto podrías ahorrar cocinando más en casa?
      </h1>
      <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
        Responde cuatro preguntas rápidas. Todo lo que verás son estimaciones.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-8 rounded-[1.5rem] border border-border bg-card p-6 md:p-8">
          <Block title="¿Cuántas personas viven en casa?">
            {personas.map((p) => (
              <Chip key={p} active={personasSel === p} onClick={() => setPersonas(p)}>
                {p}
              </Chip>
            ))}
          </Block>

          <Block title="¿Cuántas veces comen fuera o piden comida por semana?">
            {frecuencias.map((f) => (
              <Chip key={f.label} active={frecuencia === f.value} onClick={() => setFrecuencia(f.value)}>
                {f.label}
              </Chip>
            ))}
          </Block>

          <div>
            <p className="font-display text-xl">¿Cuánto gastan aproximadamente cada vez?</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-muted-foreground">Q</span>
              <input
                type="number"
                min={0}
                value={gasto}
                onChange={(e) => setGasto(Number(e.target.value))}
                className="h-12 w-40 rounded-full border border-border bg-background px-5 text-sm outline-none focus:border-primary"
              />
              <span className="text-sm text-muted-foreground">por ocasión</span>
            </div>
          </div>

          <Block title="¿Cuáles de estos productos compras regularmente?">
            {productos.map((p) => (
              <Chip
                key={p}
                active={sel.includes(p)}
                onClick={() => setSel((s) => (s.includes(p) ? s.filter((x) => x !== p) : [...s, p]))}
              >
                {p}
              </Chip>
            ))}
          </Block>

          <button
            onClick={() => {
              setDone(true);
              track("savings_calculated", { personas: personasSel, frecuencia, gasto, productos: sel.length });
            }}
            className="h-13 w-full rounded-full bg-primary text-base font-medium text-primary-foreground"
          >
            Ver mi estimación
          </button>
        </div>

        <div className="space-y-5">
          <div className="rounded-[1.5rem] border border-border bg-card p-6 md:p-8">
            <p className="eyebrow">Tu estimación</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Stat label="Gasto actual" value={`${formatQ(calc.actual)} / mes`} big />
              <Stat label="Cocinando más en casa" value={`${formatQ(calc.encasa)} / mes`} big />
              <Stat label="Restaurantes / delivery" value={formatQ(calc.fuera)} />
              <Stat label="Productos preparados del súper" value={formatQ(calc.preparados)} />
            </div>
            <div className="mt-6 rounded-2xl bg-primary p-6 text-primary-foreground">
              <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/70">
                Ahorro potencial estimado
              </p>
              <p className="mt-2 font-display text-4xl">{formatQ(calc.ahorro)} / mes</p>
              <p className="mt-1 text-sm text-primary-foreground/80">
                {formatQ(calc.ahorro * 12)} al año
              </p>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-border bg-card p-6 md:p-8">
            <p className="eyebrow">Proyección estimada</p>
            <div className="mt-5 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                  <XAxis dataKey="periodo" tickLine={false} axisLine={false} fontSize={12} />
                  <YAxis tickLine={false} axisLine={false} fontSize={12} width={60} />
                  <Tooltip
                    cursor={{ fill: "var(--color-secondary)" }}
                    formatter={(v: number) => formatQ(v)}
                  />
                  <Bar dataKey="ahorro" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <Disclaimer>
            Estimación únicamente. Los costos reales dependen de ingredientes, establecimientos,
            hábitos y precios locales. Los resultados son estimaciones basadas en la información
            proporcionada y pueden variar.
          </Disclaimer>

          <div className="rounded-[1.5rem] bg-secondary/70 p-6 md:p-8">
            <p className="font-display text-2xl">
              ¿Quieres saber cómo Thermomix podría encajar en tu cocina?
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Habla conmigo directamente.</p>
            <WhatsAppLink source="savings_calculator" className="mt-5" size="lg">
              Consultar por WhatsApp
            </WhatsAppLink>
          </div>
          {done && <span className="sr-only">Estimación calculada</span>}
        </div>
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-display text-xl">{title}</p>
      <div className="mt-4 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Stat({ label, value, big }: { label: string; value: string; big?: boolean }) {
  return (
    <div className="rounded-2xl bg-secondary/70 p-5">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className={big ? "mt-2 font-display text-2xl" : "mt-2 font-display text-xl"}>{value}</p>
    </div>
  );
}
