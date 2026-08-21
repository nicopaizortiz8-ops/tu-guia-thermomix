import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram } from "lucide-react";
import mariaRegina from "@/assets/maria-regina.png";
import mesa from "@/assets/mesa-editorial.jpg";
import refri from "@/assets/ingredientes-refri.jpg";
import liveImg from "@/assets/live-italiana.jpg";
import cocina from "@/assets/cocina-mediterranea.jpg";
import { recipes } from "@/data/recipes";
import { formatQ, site, track } from "@/lib/site";
import { WhatsAppLink } from "@/components/site/whatsapp-link";
import {
  AnimatedNumber,
  ArrowLink,
  EditorialButton,
  Label,
  RecipeCard,
  Reveal,
  SectionHeading,
} from "@/components/site/ui-bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yo Uso Thermomix — Cocina conmigo, con María Regina" },
      {
        name: "description",
        content:
          "Recetas, ideas y herramientas de María Regina para cocinar mejor, aprovechar lo que ya tienes y disfrutar más tu cocina en Guatemala.",
      },
      { property: "og:title", content: "Yo Uso Thermomix — Cocina conmigo" },
      {
        property: "og:description",
        content: "Recetas, Lives e ideas de María Regina para cocinar mejor en casa.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="page-snap">
      <div className="snap-section"><Hero /></div>
      <div className="snap-section"><Paths /></div>
      <div className="snap-section"><QueCocinamos /></div>
      <div className="snap-section"><HoyConMariaRegina /></div>
      <div className="snap-section"><VaciaMiRefri /></div>
      <div className="snap-section"><Recetas /></div>
      <div className="snap-section"><ComproOHago /></div>
      <div className="snap-section"><EnNumeros /></div>
      <div className="snap-section"><LiveSection /></div>
      <div className="snap-section"><ThermomixEnTuVida /></div>
      <div className="snap-section"><QuizTeaser /></div>
      <div className="snap-section"><Acompanamiento /></div>
      <div className="snap-section"><PrimerosDias /></div>
      <div className="snap-section"><InstagramSection /></div>
      <div className="snap-section"><FinalCta /></div>
      <div className="snap-section"><Newsletter /></div>
    </div>
  );
}

/* 01 — HERO */
function Hero() {
  return (
    <section className="border-b border-border">
      <div className="container-wide grid items-stretch gap-10 py-8 md:grid-cols-[45fr_55fr] md:gap-14 md:py-14">
        <div className="flex flex-col justify-center animate-rise">
          <Label tone="champagne">Yo Uso Thermomix</Label>
          <h1 className="mt-8 text-[3.4rem] leading-[0.88] tracking-tight md:text-[5.6rem]">
            Cocina
            <br />
            conmigo.
            <span className="mt-2 block italic text-cognac">Disfruta más.</span>
          </h1>
          <p className="mt-8 max-w-md text-[1.02rem] leading-relaxed text-muted-foreground">
            Recetas, ideas y herramientas para cocinar mejor, aprovechar lo que ya tienes y
            descubrir todo lo que puedes hacer en tu cocina.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <EditorialButton
              to="/ai-kitchen"
              onClick={() => track("ai_tool_opened", { tool: "que_cocinamos", from: "hero" })}
            >
              ¿Qué cocinamos hoy?
            </EditorialButton>
            <EditorialButton to="/thermomix" variant="outline">
              Quiero conocer Thermomix
            </EditorialButton>
          </div>
          <p className="signature mt-12 text-3xl">María Regina</p>
        </div>

        <div className="relative">
          <img
            src={mariaRegina}
            alt="María Regina en su cocina con Thermomix"
            width={1129}
            height={1425}
            className="h-full max-h-[42rem] w-full object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 hidden -translate-x-6 translate-y-4 bg-ink px-6 py-4 md:block">
            <p className="text-[0.62rem] uppercase tracking-[0.28em] text-champagne">Guatemala</p>
            <p className="mt-1 text-[0.72rem] uppercase tracking-[0.2em] text-warm-white">
              Recetas · Lives · Comunidad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 02 — ¿QUÉ TE TRAE POR AQUÍ? */
function Paths() {
  return (
    <section className="container-wide py-20 md:py-32">
      <Reveal>
        <SectionHeading eyebrow="Empecemos" title="¿Qué te trae por aquí?" />
      </Reveal>

      <div className="mt-14 grid gap-px border-t border-border md:grid-cols-2">
        <Reveal className="group border-b border-border py-12 md:border-r md:pr-14">
          <span className="num-index">01</span>
          <h3 className="mt-6 font-display text-[2.4rem] uppercase leading-[0.95] tracking-tight md:text-[3.2rem]">
            Ya tengo
            <br />
            Thermomix
          </h3>
          <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
            Quiero nuevas recetas, ideas y formas de aprovecharla mejor.
          </p>
          <div className="mt-8">
            <ArrowLink to="/recetas">Inspirarme</ArrowLink>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative border-b border-border py-12 md:pl-14">
          <div className="hover-zoom mb-8 md:absolute md:inset-y-8 md:right-0 md:mb-0 md:w-40">
            <img
              src={mesa}
              alt="Mesa mediterránea servida"
              loading="lazy"
              className="h-48 w-full object-cover md:h-full"
            />
          </div>
          <div className="md:pr-48">
            <span className="num-index">02</span>
            <h3 className="mt-6 font-display text-[2.4rem] italic leading-[0.95] tracking-tight md:text-[3.2rem]">
              Quiero
              <br />
              conocerla
            </h3>
            <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
              Quiero entender cómo funciona y descubrir si encaja conmigo.
            </p>
            <div className="mt-8">
              <ArrowLink to="/thermomix">Descubrir Thermomix</ArrowLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 03 — ¿QUÉ COCINAMOS? */
function QueCocinamos() {
  return (
    <section className="bg-espresso py-20 text-warm-white md:py-32">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Tu cocina"
            index="03"
            tone="light"
            title="¿Qué cocinamos?"
            description="Empieza por lo que necesitas hoy."
            aside={<ArrowLink to="/ai-kitchen" tone="light">Ver todo</ArrowLink>}
          />
        </Reveal>

        <div className="mt-14 grid gap-px bg-warm-white/12 md:grid-cols-3">
          <ToolTile
            className="md:col-span-2"
            index="01"
            title="Tengo estos ingredientes"
            desc="Dime qué tienes en casa y encontremos qué cocinar."
            cta="Dame ideas"
            to="/ai-kitchen/crear-receta"
            image={mesa}
            large
          />
          <ToolTile
            index="02"
            title="Vacía mi refri"
            desc="Antes de tirarlo, cocinémoslo."
            cta="Aprovechar ingredientes"
            to="/ai-kitchen/vacia-mi-refri"
            image={refri}
          />
          <ToolTile index="03" title="Planea mi semana" desc="Un menú que sí puedas cumplir." cta="Planear" to="/ai-kitchen/plan-semanal" />
          <ToolTile index="04" title="Calcula mi ahorro" desc="Dónde se va tu presupuesto de comida." cta="Calcular" to="/ai-kitchen/ahorro" />
          <ToolTile index="05" title="¿Lo compro o lo hago?" desc="Compara lo del súper con lo hecho en casa." cta="Comparar" to="/ai-kitchen/hazlo-en-casa" />
          <ToolTile
            className="md:col-span-2"
            index="06"
            title="Preguntar"
            desc="Dudas de recetas, ingredientes y técnicas."
            cta="Preguntar"
            to="/ai-kitchen/preguntame"
          />
        </div>
      </div>
    </section>
  );
}

function ToolTile({
  index,
  title,
  desc,
  cta,
  to,
  image,
  large,
  className,
}: {
  index: string;
  title: string;
  desc: string;
  cta: string;
  to: string;
  image?: string;
  large?: boolean;
  className?: string;
}) {
  return (
    <Link
      to={to}
      onClick={() => track("ai_tool_opened", { tool: to, from: "home" })}
      className={`group relative flex min-h-[15rem] flex-col justify-between overflow-hidden bg-espresso p-8 transition-colors duration-500 hover:bg-ink ${large ? "md:min-h-[26rem]" : ""} ${className ?? ""}`}
    >
      {image && (
        <img
          src={image}
          alt=""
          loading="lazy"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-35"
        />
      )}
      <span className="relative num-index">{index}</span>
      <div className="relative mt-16">
        <h3
          className={`font-display uppercase leading-[0.98] tracking-tight text-warm-white ${large ? "text-[2.4rem] md:text-[3.4rem]" : "text-[1.7rem]"}`}
        >
          {title}
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-warm-white/60">{desc}</p>
        <span className="editorial-link mt-6 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.2em] text-champagne">
          {cta} <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}

/* 04 — HOY CON MARÍA REGINA */
function HoyConMariaRegina() {
  const r = recipes[0]!;
  return (
    <section className="container-wide py-20 md:py-32">
      <div className="grid gap-10 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-16">
        <Reveal className="hover-zoom">
          <img src={r.image} alt={r.title} loading="lazy" className="aspect-[5/4] w-full object-cover" />
        </Reveal>
        <Reveal delay={100}>
          <Label index="04" tone="champagne">Hoy con María Regina</Label>
          <h2 className="mt-6 text-[2.8rem] leading-[0.94] md:text-[4rem]">
            Risotto
            <br />
            <span className="italic">cremoso de hongos</span>
          </h2>
          <p className="mt-8 border-l border-champagne pl-6 text-lg italic leading-relaxed text-foreground/80">
            “Esta es una de esas recetas que parece mucho más complicada de lo que realmente es.”
          </p>
          <p className="mt-6 text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
            {r.minutes} min · {r.servings} personas
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <EditorialButton to="/recetas/risotto-cremoso-de-hongos">Cocinar</EditorialButton>
            <EditorialButton to="/lives" variant="outline">
              Ver video
            </EditorialButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 05 — VACÍA MI REFRI */
function VaciaMiRefri() {
  const ejemplos = ["3 tomates", "pollo cocido", "½ cebolla", "aguacate maduro"];
  return (
    <section className="border-y border-border bg-warm-white py-20 md:py-32">
      <div className="container-wide grid gap-12 md:grid-cols-[1fr_0.85fr] md:items-center md:gap-20">
        <Reveal>
          <Label index="05" tone="champagne">Vacía mi refri</Label>
          <h2 className="mt-6 text-[2.6rem] leading-[0.95] md:text-[4rem]">
            Antes de tirarlo,
            <br />
            <span className="italic">cocinémoslo.</span>
          </h2>
          <p className="mt-7 max-w-md leading-relaxed text-muted-foreground">
            Dime qué necesitas usar pronto y encontramos algo que valga la pena cocinar hoy.
          </p>

          <div className="mt-10 border-t border-border pt-8">
            <p className="label-xs">¿Qué necesitas usar pronto?</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {ejemplos.map((e, i) => (
                <span
                  key={e}
                  style={{ animationDelay: `${i * 90}ms` }}
                  className="animate-rise border border-border px-4 py-2 text-sm"
                >
                  {e}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-[0.66rem] uppercase tracking-[0.24em]">
              <span className="text-olive">Tienes todo</span>
              <span className="text-champagne">Te falta 1 ingrediente</span>
              <span className="text-cognac">Usa esto primero</span>
            </div>
            <div className="mt-10">
              <EditorialButton to="/ai-kitchen/vacia-mi-refri">Aprovechar ingredientes</EditorialButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="hover-zoom">
          <img src={refri} alt="Ingredientes por aprovechar" loading="lazy" className="aspect-[4/5] w-full object-cover" />
        </Reveal>
      </div>
    </section>
  );
}

/* 06 — RECETAS */
function Recetas() {
  const [featured, ...rest] = recipes;
  const two = rest.slice(0, 2);
  const strip = rest.slice(2, 6);
  return (
    <section className="container-wide py-20 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Recetario"
          index="06"
          title={
            <>
              Recetas
              <br />
              <span className="italic">para disfrutar.</span>
            </>
          }
          description="Las que realmente cocino, comparto y vuelvo a preparar."
          aside={<ArrowLink to="/recetas">Ver el recetario</ArrowLink>}
        />
      </Reveal>

      <div className="mt-14 grid gap-10 md:grid-cols-[3fr_2fr] md:gap-14">
        {featured && (
          <Reveal>
            <RecipeCard recipe={featured} size="lg" />
          </Reveal>
        )}
        <div className="grid gap-10">
          {two.map((r, i) => (
            <Reveal key={r.slug} delay={80 * (i + 1)}>
              <RecipeCard recipe={r} size="md" />
            </Reveal>
          ))}
        </div>
      </div>

      {strip.length > 0 && (
        <div className="no-scrollbar mt-16 flex snap-x gap-8 overflow-x-auto border-t border-border pt-10">
          {strip.map((r) => (
            <div key={r.slug} className="w-[16rem] shrink-0 snap-start">
              <RecipeCard recipe={r} size="sm" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

/* 07 — ¿LO COMPRO O LO HAGO? */
function ComproOHago() {
  return (
    <section className="bg-ink py-20 text-warm-white md:py-32">
      <div className="container-wide grid gap-14 md:grid-cols-[1fr_0.9fr] md:items-end">
        <Reveal>
          <Label index="07" tone="champagne">Compara</Label>
          <h2 className="mt-6 text-[2.8rem] leading-[0.92] text-warm-white md:text-[4.6rem]">
            ¿Lo compro
            <br />
            <span className="italic">o lo hago?</span>
          </h2>
          <p className="mt-8 max-w-md leading-relaxed text-warm-white/60">
            No todo conviene hacerlo en casa. Compara con calma y decide con números, no con
            promesas.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-[0.66rem] uppercase tracking-[0.28em] text-champagne">Yogurt</p>
          <dl className="mt-6 divide-y divide-warm-white/15 border-y border-warm-white/15">
            <Row label="Supermercado" value={`~${formatQ(180)}`} />
            <Row label="Hecho en casa" value={`~${formatQ(65)}`} />
            <Row label="Diferencia" value={`~${formatQ(115)}`} accent />
          </dl>
          <p className="mt-6 text-[0.7rem] leading-relaxed text-warm-white/45">
            Valores estimados. Los costos reales varían según ingredientes, marcas, establecimientos
            y cantidades.
          </p>
          <div className="mt-8">
            <ArrowLink to="/ai-kitchen/hazlo-en-casa" tone="light">
              Comparar productos
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-baseline justify-between py-5">
      <dt className="text-[0.7rem] uppercase tracking-[0.24em] text-warm-white/55">{label}</dt>
      <dd className={`font-display text-3xl ${accent ? "text-champagne" : "text-warm-white"}`}>
        {value}
      </dd>
    </div>
  );
}

/* 08 — TU COCINA EN NÚMEROS */
const gastos = [
  { key: "Comer fuera", value: 900 },
  { key: "Delivery", value: 520 },
  { key: "Productos preparados", value: 380 },
  { key: "Compras que podrías hacer en casa", value: 260 },
];

function EnNumeros() {
  const total = gastos.reduce((a, b) => a + b.value, 0);
  const max = Math.max(...gastos.map((g) => g.value));
  return (
    <section className="container-wide py-20 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Tu cocina en números"
          index="08"
          title={
            <>
              ¿Dónde se va
              <br />
              <span className="italic">tu presupuesto?</span>
            </>
          }
          aside={<ArrowLink to="/ai-kitchen/ahorro">Calcular el mío</ArrowLink>}
        />
      </Reveal>

      <div className="mt-14 grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="label-xs">Tu cocina este mes</p>
          <p className="mt-4 font-display text-[4.5rem] leading-none md:text-[6rem]">
            <AnimatedNumber value={total} format={(n) => formatQ(n)} />
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Estimación de ejemplo, basada en hábitos frecuentes. Calcula el tuyo para ver tu propio
            escenario.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="border-t border-border">
            {gastos.map((g, i) => (
              <li key={g.key} className="border-b border-border py-6">
                <div className="flex items-baseline justify-between gap-6">
                  <span className="flex items-baseline gap-4">
                    <span className="num-index">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[0.78rem] uppercase tracking-[0.16em]">{g.key}</span>
                  </span>
                  <span className="font-display text-2xl">~{formatQ(g.value)}</span>
                </div>
                <div className="mt-4 h-px w-full bg-border">
                  <div
                    className="h-px bg-cognac transition-all duration-1000"
                    style={{ width: `${(g.value / max) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="label-xs">Dónde podrías optimizar</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Estas son las áreas donde cocinar más en casa podría ayudarte a reducir gastos. Todos
              los montos son estimaciones y varían según tus hábitos.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 09 — LIVE */
function LiveSection() {
  return (
    <section className="relative">
      <div className="relative min-h-[38rem] overflow-hidden">
        <img
          src={liveImg}
          alt="Pasta fresca y tomates para el Live de noche italiana"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="container-wide relative flex min-h-[38rem] flex-col justify-center py-20 text-warm-white">
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <Label index="09" tone="champagne">Cocina conmigo</Label>
              <h2 className="mt-6 text-[3rem] leading-[0.9] text-warm-white md:text-[5.2rem]">
                Noche
                <br />
                <span className="italic">italiana.</span>
              </h2>
              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 text-[0.7rem] uppercase tracking-[0.24em]">
                <span className="border border-cognac px-3 py-1 text-cognac">Live</span>
                <span>Jueves · 7:00 PM</span>
                <span className="text-warm-white/60">con María Regina</span>
              </div>
            </div>
            <div>
              <p className="label-xs text-champagne">Menú</p>
              <ul className="mt-5 space-y-3 font-display text-2xl">
                <li>Pasta fresca</li>
                <li>Pomodoro</li>
                <li>Tiramisú</li>
              </ul>
              <div className="mt-9 flex flex-wrap gap-3">
                <EditorialButton
                  to="/lives"
                  variant="light"
                  onClick={() => track("live_clicked", { source: "home" })}
                >
                  Quiero verlo
                </EditorialButton>
                <Link
                  to="/lives"
                  className="inline-flex h-12 items-center justify-center rounded-sm border border-warm-white/35 px-7 text-[0.78rem] uppercase tracking-[0.2em] text-warm-white transition-colors hover:border-warm-white"
                >
                  Recordármelo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 10 — THERMOMIX EN TU VIDA */
function ThermomixEnTuVida() {
  return (
    <section className="container-wide py-20 md:py-32">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-20">
        <Reveal className="hover-zoom order-2 md:order-1">
          <img src={cocina} alt="Cocina mediterránea contemporánea" loading="lazy" className="aspect-[4/5] w-full object-cover" />
        </Reveal>
        <Reveal delay={100} className="order-1 md:order-2">
          <Label index="10" tone="champagne">Conoce Thermomix</Label>
          <h2 className="mt-6 text-[2.8rem] leading-[0.94] md:text-[4.2rem]">
            Thermomix
            <br />
            <span className="italic">en tu vida.</span>
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            No quiero enseñarte una lista de funciones. Quiero enseñarte qué cambia en una cocina
            real.
          </p>
          <ul className="mt-10 border-t border-border">
            {[
              ["Lunes · 7:30 PM", "Llegaste tarde y hay cuatro personas esperando cena."],
              ["Sábado", "Hoy sí quieres hacer algo especial."],
              ["Domingo en casa", "Pan, masa, salsa, postre."],
              ["Amigos en casa", "Disfruta la cena, no pases toda la noche preparándola."],
            ].map(([k, v]) => (
              <li key={k} className="border-b border-border py-5">
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-champagne">{k}</p>
                <p className="mt-2 font-display text-xl leading-snug">{v}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ArrowLink to="/thermomix">Ver los escenarios</ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 11 — ¿ES PARA MÍ? */
function QuizTeaser() {
  return (
    <section className="border-y border-border bg-warm-white py-20 md:py-28">
      <div className="container-wide grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <Reveal>
          <Label index="11" tone="champagne">6 preguntas</Label>
          <h2 className="mt-6 text-[2.6rem] leading-[0.95] md:text-[3.8rem]">
            ¿Es para mí?
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            Responde con calma y te digo qué áreas de tu cocina podrías aprovechar más. Sin promesas
            exageradas.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <EditorialButton to="/thermomix">Hacer el test</EditorialButton>
        </Reveal>
      </div>
    </section>
  );
}

/* 12 — COMPRAR ES SOLO EL COMIENZO */
const antes = [
  ["01", "Resolvemos tus dudas"],
  ["02", "La ves funcionando"],
  ["03", "Descubrimos si encaja contigo"],
];
const despues = [
  ["04", "Primeros pasos"],
  ["05", "Recetas e ideas"],
  ["06", "Lives y acompañamiento"],
];

function Acompanamiento() {
  return (
    <section className="container-wide py-20 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Con María Regina"
          index="12"
          title={
            <>
              Comprar es
              <br />
              <span className="italic">solo el comienzo.</span>
            </>
          }
          description="Quiero que realmente uses tu Thermomix. Por eso mi acompañamiento no termina cuando la recibes."
        />
      </Reveal>

      <div className="mt-16 grid gap-14 md:grid-cols-2">
        <Reveal>
          <p className="label-xs">Antes</p>
          <ol className="mt-6 border-t border-border">
            {antes.map(([n, t]) => (
              <li key={n} className="flex items-baseline gap-6 border-b border-border py-6">
                <span className="num-index">{n}</span>
                <span className="font-display text-2xl">{t}</span>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={100}>
          <p className="label-xs">Después</p>
          <ol className="mt-6 border-t border-border">
            {despues.map(([n, t]) => (
              <li key={n} className="flex items-baseline gap-6 border-b border-border py-6">
                <span className="num-index">{n}</span>
                <span className="font-display text-2xl">{t}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <div className="mt-12">
        <WhatsAppLink source="acompanamiento" showIcon={false}>
          Conoce cómo te acompaño
        </WhatsAppLink>
      </div>
    </section>
  );
}

/* 13 — PRIMEROS 30 DÍAS */
function PrimerosDias() {
  const semanas = [
    ["Semana 01", "Empecemos"],
    ["Semana 02", "Domina tus básicos"],
    ["Semana 03", "Prueba algo nuevo"],
    ["Semana 04", "Hazla tuya"],
  ];
  return (
    <section className="bg-espresso py-20 text-warm-white md:py-28">
      <div className="container-wide">
        <Reveal>
          <Label index="13" tone="champagne">Después de comprar</Label>
          <h2 className="mt-6 max-w-2xl text-[2.6rem] leading-[0.95] text-warm-white md:text-[4rem]">
            Tus primeros
            <br />
            <span className="italic">30 días conmigo.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-warm-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {semanas.map(([w, t], i) => (
            <Reveal key={w} delay={i * 80} className="bg-espresso p-8">
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-champagne">{w}</p>
              <p className="mt-6 font-display text-2xl uppercase leading-tight">{t}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-[0.7rem] uppercase tracking-[0.22em] text-warm-white/40">
          Próximamente
        </p>
      </div>
    </section>
  );
}

/* 14 — INSTAGRAM */
function InstagramSection() {
  const tiles = [
    { src: recipes[1]?.image, ratio: "aspect-[4/5]", label: "Receta" },
    { src: mesa, ratio: "aspect-square", label: "Mesa" },
    { src: mariaRegina, ratio: "aspect-[3/4]", label: "María Regina" },
    { src: liveImg, ratio: "aspect-[4/3]", label: "Live" },
    { src: recipes[2]?.image, ratio: "aspect-square", label: "Receta" },
    { src: refri, ratio: "aspect-[3/4]", label: "Tips" },
  ];
  return (
    <section className="container-wide py-20 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Comunidad"
          index="14"
          title={
            <>
              Sígueme
              <br />
              <span className="italic">en la cocina.</span>
            </>
          }
          aside={
            <ArrowLink
              href={site.social.instagram}
              onClick={() => track("instagram_clicked", { source: "home_grid" })}
            >
              {site.social.instagramHandle}
            </ArrowLink>
          }
        />
      </Reveal>

      <div className="mt-14 columns-2 gap-4 md:columns-3 lg:columns-3 [&>*]:mb-4">
        {tiles.map((t, i) => (
          <a
            key={i}
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("instagram_clicked", { source: "home_grid" })}
            className="hover-zoom relative block break-inside-avoid bg-secondary"
          >
            {t.src ? (
              <img src={t.src} alt={t.label} loading="lazy" className={`w-full object-cover ${t.ratio}`} />
            ) : (
              <span className={`block w-full ${t.ratio}`} />
            )}
            <span className="absolute bottom-3 left-3 flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.22em] text-warm-white">
              <Instagram className="size-3.5" /> {t.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* 15 — ¿COCINAMOS? */
function FinalCta() {
  return (
    <section className="relative bg-ink text-warm-white">
      <div className="container-wide grid gap-12 py-20 md:grid-cols-[1fr_0.85fr] md:items-center md:py-28">
        <div>
          <Label index="15" tone="champagne">María Regina</Label>
          <h2 className="mt-8 text-[3.6rem] leading-[0.9] text-warm-white md:text-[6rem]">
            ¿Cocinamos?
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-warm-white/65">
            Ya tengas Thermomix o apenas estés descubriéndola, estoy aquí para ayudarte.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <WhatsAppLink source="homepage" variant="light" showIcon={false}>
              Hablar con María Regina
            </WhatsAppLink>
            <Link
              to="/recetas"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-warm-white/35 px-7 text-[0.78rem] uppercase tracking-[0.2em] transition-colors hover:border-warm-white"
            >
              Ver recetas
            </Link>
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

/* 16 — NEWSLETTER */
function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="container-wide py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <h2 className="text-[2.4rem] leading-[0.98] md:text-[3.6rem]">
            Una receta nueva
            <br />
            <span className="italic">puede alegrar un martes.</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Recibe mis nuevas recetas, próximos Lives e ideas para tu cocina.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            track("newsletter_signup", { source: "home" });
          }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end"
        >
          <label className="flex-1">
            <span className="label-xs">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className="mt-3 h-12 w-full border-b border-ink/30 bg-transparent text-base outline-none transition-colors focus:border-ink"
            />
          </label>
          <EditorialButton type="submit">
            {sent ? "¡Gracias!" : "Quiero recibirlas"}
          </EditorialButton>
        </form>
      </div>
    </section>
  );
}
