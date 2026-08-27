import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import mariaRegina from "@/assets/maria-regina.png";
import liveImg from "@/assets/live-italiana.jpg";
import funcionesCompletas from "@/assets/image0.jpeg";
import despieceTM7 from "@/assets/image0 (1).jpeg";
import { formatQ } from "@/lib/site";
import { WhatsAppLink } from "@/components/site/whatsapp-link";
import { ScrollVideo } from "@/components/site/scroll-video";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AnimatedNumber,
  ArrowLink,
  Label,
  Reveal,
  SectionHeading,
} from "@/components/site/ui-bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thermomix TM7 — Agenda tu demostración con María Regina | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "Descubre qué hace Thermomix TM7, cómo simplifica tu cocina y por qué la mejor forma de entenderla es verla funcionando con María Regina, en Guatemala.",
      },
      { property: "og:title", content: "Hay que verla para entenderla | Yo Uso Thermomix" },
      {
        property: "og:description",
        content: "Descubre Thermomix TM7 y agenda una demostración con María Regina.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <ScrollVideo />
      <QueEsThermomix />
      <TM7Highlights />
      <ValueNumbers />
      <MariaReginaSection />
      <LiveSection />
      <FinalCta />
    </>
  );
}

/* 01 — HERO */
function Hero() {
  return (
    <section className="border-b border-border">
      <div className="container-wide grid items-stretch gap-10 py-8 md:grid-cols-[45fr_55fr] md:gap-14 md:py-14">
        <div className="flex flex-col justify-center animate-rise">
          <Label tone="champagne">Yo Uso Thermomix</Label>
          <h1 className="mt-8 text-[2.9rem] leading-[0.95] tracking-tight md:text-[5.2rem]">
            Hay que verla
            <br />
            <span className="italic text-cognac">para entenderla.</span>
          </h1>
          <p className="mt-8 max-w-md text-[1.02rem] leading-relaxed text-muted-foreground">
            Descubre qué hace Thermomix TM7, cómo puede simplificar tu cocina y por qué la mejor
            forma de entenderla es verla funcionando.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <WhatsAppLink source="homepage" size="lg" showIcon={false}>
              Agendar demostración
            </WhatsAppLink>
            <a
              href="#scroll-video"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-sm border border-ink/25 px-8 text-[0.8rem] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:-translate-y-[2px] hover:border-ink"
            >
              Ver cómo funciona
            </a>
          </div>
          <p className="signature mt-12 text-3xl">María Regina</p>
        </div>

        <div className="relative">
          <img
            src={mariaRegina}
            alt="María Regina con su Thermomix TM7"
            width={1129}
            height={1425}
            className="h-full max-h-[42rem] w-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}

/* 03 — ¿QUÉ ES THERMOMIX? */
function QueEsThermomix() {
  const palabras = ["Pesa", "Corta", "Mezcla", "Amasa", "Cocina", "Vapor", "Guía"];
  return (
    <section className="container-wide py-20 md:py-32">
      <Reveal>
        <Label index="02" tone="champagne">
          Todo en uno
        </Label>
        <h2 className="mt-6 max-w-2xl text-[2.6rem] leading-[0.95] md:text-[4.4rem]">
          Todo esto,
          <br />
          <span className="italic">en una sola máquina.</span>
        </h2>
        <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground">
          Thermomix reúne preparación, cocción, báscula, temperatura y cocina guiada en un solo
          equipo.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-16 border-t border-border pt-14">
        <p className="font-display text-[2.3rem] uppercase leading-[1.15] tracking-tight md:text-[5rem]">
          {palabras.map((p, i) => (
            <span key={p}>
              {p}
              {i < palabras.length - 1 && <span className="text-champagne"> · </span>}
            </span>
          ))}
        </p>
      </Reveal>
    </section>
  );
}

/* 04 — TM7 HIGHLIGHTS */
const highlights = [
  { n: "10\"", l: "Pantalla multitáctil" },
  { n: "20+", l: "Modos de cocción" },
  { n: "100,000+", l: "Recetas guiadas en Cookidoo" },
  { n: "6.8 L", l: "Capacidad de cocción al vapor" },
];

function TM7Highlights() {
  const [open, setOpen] = useState(false);
  return (
    <section className="bg-espresso py-20 text-warm-white md:py-32">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Thermomix TM7"
            index="03"
            title={
              <>
                Lo esencial
                <br />
                <span className="italic">de un vistazo.</span>
              </>
            }
            aside={
              <button
                onClick={() => setOpen(true)}
                className="editorial-link text-[0.78rem] font-medium uppercase tracking-[0.2em] text-champagne"
              >
                Ver todas las funciones →
              </button>
            }
          />
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-14 border-t border-warm-white/15 pt-14 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.l} delay={i * 60}>
              <p className="font-display text-[3.2rem] leading-none text-champagne md:text-[4rem]">
                {h.n}
              </p>
              <p className="mt-3 text-[0.72rem] uppercase tracking-[0.2em] text-warm-white/70">
                {h.l}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-x-12 gap-y-3 border-t border-warm-white/15 pt-10 text-[0.76rem] uppercase tracking-[0.18em] text-warm-white/60">
          <span>Báscula integrada</span>
          <span>Motor más silencioso</span>
          <span>Vaso con aislamiento térmico</span>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto bg-warm-white p-4">
          <DialogTitle className="sr-only">Todas las funciones de Thermomix TM7</DialogTitle>
          <img src={funcionesCompletas} alt="Más de 20 funciones de Thermomix TM7" className="w-full" />
          <img src={despieceTM7} alt="Componentes de Thermomix TM7" className="mt-4 w-full" />
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* 05 — VALUE / NUMBERS */
const REF_CUOTA = 395.83;
const q = (n: number) =>
  `Q${n.toLocaleString("es-GT", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const comparaciones: [string, string, string, string][] = [
  ["Yogurt", "~Q180", "~Q65", "~Q115"],
  ["Pan", "precio pendiente", "precio pendiente", "estimación parcial"],
  ["Salsa de tomate", "precio pendiente", "precio pendiente", "estimación parcial"],
  ["Masa de pizza", "precio pendiente", "precio pendiente", "estimación parcial"],
];

function ValueNumbers() {
  const [cenas, setCenas] = useState(600);
  const [delivery, setDelivery] = useState(300);
  const [preparados, setPreparados] = useState(200);

  const totalMes = Math.max(cenas, 0) + Math.max(delivery, 0) + Math.max(preparados, 0);
  const totalAno = totalMes * 12;
  const pct = totalMes > 0 ? (REF_CUOTA / totalMes) * 100 : 0;

  const campos: [string, number, (n: number) => void][] = [
    ["Cenas fuera al mes", cenas, setCenas],
    ["Delivery al mes", delivery, setDelivery],
    ["Comida preparada / súper al mes", preparados, setPreparados],
  ];

  return (
    <section className="container-wide py-20 md:py-32">
      <Reveal>
        <Label index="04" tone="champagne">
          Tu cocina en números
        </Label>
        <h2 className="mt-6 max-w-2xl text-[2.6rem] leading-[0.95] md:text-[4.4rem]">
          Ponlo
          <br />
          <span className="italic">en perspectiva.</span>
        </h2>
        <p className="mt-7 max-w-lg leading-relaxed text-muted-foreground">
          Ingresa lo que gastas hoy y compáralo con una cuota de referencia de Thermomix.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <Reveal className="space-y-9">
          {campos.map(([label, val, set]) => (
            <label key={label} className="block border-b border-border pb-4">
              <span className="text-[0.66rem] uppercase tracking-[0.28em] text-muted-foreground">
                {label}
              </span>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-display text-2xl text-muted-foreground">Q</span>
                <input
                  type="number"
                  min={0}
                  value={val}
                  onChange={(e) => set(Number(e.target.value))}
                  className="w-full bg-transparent font-display text-[2.6rem] leading-none outline-none md:text-[3.2rem]"
                  aria-label={label}
                />
              </div>
            </label>
          ))}
        </Reveal>

        <Reveal delay={100} className="border-t border-ink/20 pt-10">
          <p className="text-[0.66rem] uppercase tracking-[0.28em] text-muted-foreground">
            Tu gasto actual
          </p>
          <p className="mt-3 font-display text-[3.4rem] leading-[0.9] md:text-[5.2rem]">
            <AnimatedNumber value={totalMes} format={(n) => formatQ(n)} />{" "}
            <span className="text-lg text-muted-foreground">/ mes</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{formatQ(totalAno)} / año</p>

          <div className="mt-10 border-t border-border pt-8">
            <p className="text-[0.62rem] uppercase tracking-[0.28em] text-champagne">
              Thermomix · referencia
            </p>
            <p className="mt-2 font-display text-[2.6rem] leading-[0.9] text-espresso md:text-[3.4rem]">
              {q(REF_CUOTA)} <span className="text-lg text-muted-foreground">/ mes*</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">hasta 48 cuotas</p>
            <div className="mt-5 h-px w-full bg-ink/70">
              <div
                className="h-px bg-champagne transition-all duration-700"
                style={{ width: `${totalMes > 0 ? Math.min(pct, 100) : 4}%` }}
              />
            </div>
            {totalMes > 0 && (
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Una cuota de referencia equivaldría aproximadamente al{" "}
                <span className="text-foreground">{pct.toFixed(1)}%</span> del gasto mensual que
                ingresaste.
              </p>
            )}
          </div>

          <div className="mt-10">
            <WhatsAppLink source="perspectiva" extra={`Mi gasto: ${formatQ(totalMes)} al mes.`}>
              Consultar con María Regina
            </WhatsAppLink>
          </div>

          <p className="mt-8 text-[0.7rem] leading-relaxed text-muted-foreground">
            Comparación orientativa basada en tus datos. No representa ahorro garantizado.
          </p>
        </Reveal>
      </div>

      {/* comparison table */}
      <div className="mt-24 border-t border-border pt-16">
        <Reveal>
          <Label tone="champagne">Comparación</Label>
          <h3 className="mt-5 max-w-2xl text-[2rem] leading-[0.98] md:text-[3rem]">
            Cosas que hoy compras
            <br />
            <span className="italic">y también puedes hacer en casa.</span>
          </h3>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-ink/20 text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
                  <th className="py-4 font-normal">Producto</th>
                  <th className="py-4 font-normal">Comprado</th>
                  <th className="py-4 font-normal">Hecho en casa</th>
                  <th className="py-4 font-normal">Diferencia estimada</th>
                </tr>
              </thead>
              <tbody>
                {comparaciones.map((row) => (
                  <tr key={row[0]} className="border-b border-border">
                    <td className="py-5 font-display text-xl">{row[0]}</td>
                    <td className="py-5 text-sm text-muted-foreground">{row[1]}</td>
                    <td className="py-5 text-sm text-muted-foreground">{row[2]}</td>
                    <td className="py-5 text-sm text-cognac">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[0.7rem] leading-relaxed text-muted-foreground">
            Valores estimados donde se indica. Los costos reales varían según ingredientes, marcas
            y establecimientos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* 06 — MARÍA REGINA */
function MariaReginaSection() {
  return (
    <section className="bg-ink py-20 text-warm-white md:py-32">
      <div className="container-wide grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-20">
        <Reveal className="hover-zoom order-2 md:order-1">
          <img
            src={mariaRegina}
            alt="María Regina"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </Reveal>
        <Reveal delay={100} className="order-1 md:order-2">
          <Label index="05" tone="champagne">
            María Regina
          </Label>
          <h2 className="mt-6 text-[2.4rem] leading-[0.95] text-warm-white md:text-[3.8rem]">
            Yo tampoco entendí
            <br />
            <span className="italic text-champagne">Thermomix hasta probarla.</span>
          </h2>
          <p className="mt-8 max-w-md leading-[1.85] text-warm-white/70">
            Había escuchado hablar de Thermomix, pero no fue hasta que cociné con ella que
            entendí por qué podía hacer tanta diferencia.
          </p>
          <p className="mt-4 max-w-md font-display text-xl italic text-champagne">
            Por eso prefiero enseñártela primero.
          </p>
          <div className="mt-10">
            <WhatsAppLink source="demonstration" variant="light" size="lg" showIcon={false}>
              Quiero una demostración
            </WhatsAppLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 07 — LIVE */
function LiveSection() {
  return (
    <section className="relative bg-espresso py-20 text-warm-white md:py-32">
      <div className="container-wide">
        <Reveal>
          <Label index="06" tone="champagne">
            Cocina conmigo
          </Label>
          <h2 className="mt-6 max-w-2xl text-[2.6rem] leading-[0.95] text-warm-white md:text-[4.4rem]">
            Nos vemos
            <br />
            <span className="italic">en la cocina.</span>
          </h2>
          <p className="mt-7 max-w-lg leading-relaxed text-warm-white/65">
            En los Lives puedes verla funcionando de verdad, ver cómo cocino con ella y hacer
            preguntas.
          </p>
        </Reveal>

        <Reveal
          delay={100}
          className="mt-16 grid gap-10 border-t border-warm-white/15 pt-14 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16"
        >
          <div className="hover-zoom">
            <img
              src={liveImg}
              alt="Próximo live: Noche italiana"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-[0.66rem] uppercase tracking-[0.28em] text-champagne">
              Próximo live
            </p>
            <h3 className="mt-4 font-display text-[2.4rem] leading-[0.95] text-warm-white md:text-[3.4rem]">
              Noche italiana
            </h3>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.72rem] uppercase tracking-[0.2em] text-warm-white/70">
              <span>Jueves</span>
              <span>7:00 PM</span>
              <span className="text-champagne">con María Regina</span>
            </div>
            <div className="mt-9">
              <WhatsAppLink source="lives" variant="light" showIcon={false}>
                Quiero recibir el enlace
              </WhatsAppLink>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-warm-white/15 pt-8 text-[0.7rem] uppercase tracking-[0.2em] text-warm-white/40">
          <span>Lives anteriores</span>
          <span className="text-warm-white/25">·</span>
          <ArrowLink to="/lives" tone="light">
            Ver todos
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}

/* 08 — FINAL CTA */
function FinalCta() {
  return (
    <section className="relative bg-ink text-warm-white">
      <div className="container-wide grid gap-12 py-20 md:grid-cols-[1fr_0.85fr] md:items-center md:py-28">
        <div>
          <h2 className="text-[2.8rem] leading-[0.95] text-warm-white md:text-[5rem]">
            No necesitas
            <br />
            que te lo expliquen más.
            <br />
            <span className="italic text-champagne">Necesitas verla.</span>
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-warm-white/65">
            María Regina te enseña cómo funciona, responde tus dudas y te ayuda a entender si
            Thermomix tiene sentido para tu cocina.
          </p>
          <div className="mt-10">
            <WhatsAppLink source="homepage" variant="light" size="lg" showIcon={false}>
              Agendar demostración
            </WhatsAppLink>
          </div>
          <p className="signature mt-12 text-4xl text-champagne">María Regina</p>
        </div>
        <div className="hover-zoom">
          <img
            src={mariaRegina}
            alt="María Regina"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
