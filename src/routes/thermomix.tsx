import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import mariaRegina from "@/assets/maria-regina.png";
import enUso from "@/assets/thermomix-en-uso.jpg";
import amigos from "@/assets/amigos-en-casa.jpg";
import cocina from "@/assets/cocina-mediterranea.jpg";
import pan from "@/assets/receta-pan.jpg";
import mesa from "@/assets/mesa-editorial.jpg";
import {
  ArrowLink,
  Chip,
  Disclaimer,
  EditorialButton,
  Label,
  Reveal,
} from "@/components/site/ui-bits";
import { WhatsAppLink } from "@/components/site/whatsapp-link";
import { track } from "@/lib/site";

export const Route = createFileRoute("/thermomix")({
  head: () => ({
    meta: [
      { title: "Conoce Thermomix — La historia de María Regina | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "No me enamoré de una máquina. Me enamoré de lo que podía hacer con ella. La historia de María Regina, qué es Thermomix TM7 y cómo vivir la experiencia en Guatemala.",
      },
      { property: "og:title", content: "No me enamoré de una máquina | Yo Uso Thermomix" },
      {
        property: "og:description",
        content: "La historia de María Regina y una forma distinta de descubrir Thermomix.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ThermomixPage,
});

const REF_CUOTA = 395.83;

const q = (n: number) =>
  `Q${n.toLocaleString("es-GT", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const q0 = (n: number) => `Q${Math.round(n).toLocaleString("es-GT")}`;

function ThermomixPage() {
  return (
    <div>
      <Hero />
      <MiHistoria />
      <PorQueYoUso />
      <QueEs />
      <Tecnologia />
      <Cookidoo />
      <LoQuePensaba />
      <QueCambia />
      <Experiencia />
      <Quiz />
      <Financiamiento />
      <Perspectiva />
      <DespuesDeComprar />
      <Cierre />
    </div>
  );
}

/* 01 — HERO */
function Hero() {
  return (
    <section className="bg-warm-white">
      <div className="container-wide grid items-center gap-10 py-14 md:grid-cols-[1.05fr_0.95fr] md:gap-20 md:py-24">
        <div>
          <Label tone="champagne">Conoce Thermomix</Label>
          <h1 className="mt-7 text-[2.7rem] leading-[0.92] md:text-[4.6rem]">
            No me enamoré
            <br />
            de una máquina.
          </h1>
          <p className="mt-7 max-w-lg font-display text-[1.5rem] leading-snug italic text-espresso md:text-[2rem]">
            Me enamoré de lo que podía hacer con ella.
          </p>
          <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
            “Había escuchado hablar de Thermomix muchas veces. Pero una cosa es que te la cuenten y
            otra muy diferente es vivirla.”
          </p>
          <p className="mt-3 signature text-2xl">María Regina</p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#mi-historia"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-ink px-7 text-[0.78rem] font-medium uppercase tracking-[0.2em] text-warm-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-espresso"
            >
              Conoce mi historia ↓
            </a>
            <a
              href="#que-es"
              className="editorial-link text-[0.78rem] font-medium uppercase tracking-[0.2em]"
            >
              Quiero ver qué hace
            </a>
          </div>
        </div>
        <div className="hover-zoom">
          <img
            src={mariaRegina.url}
            alt="María Regina en su cocina con su Thermomix"
            width={1200}
            height={1500}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* 02 — MI HISTORIA */
function MiHistoria() {
  return (
    <section id="mi-historia" className="container-wide py-20 md:py-32">
      <Reveal>
        <Label index="02" tone="champagne">Mi historia</Label>
        <h2 className="mt-6 max-w-3xl text-[2.4rem] leading-[0.95] md:text-[4rem]">
          Yo también cocinaba
          <br />
          <span className="italic">“a la antigua”.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-12 md:grid-cols-[1fr_0.85fr] md:gap-20">
        <Reveal className="max-w-2xl space-y-6 text-[1.05rem] leading-[1.85] text-muted-foreground">
          <p>
            Cocinar siempre ha sido parte de mi vida. Durante años cociné como había aprendido a
            hacerlo: ollas, sartenes, cuchillos y recetas hechas a mi manera.
          </p>
          <p>
            Había oído hablar de Thermomix, pero sinceramente no sentía que la necesitara. Me
            gustaba cocinar de la forma tradicional.
          </p>
          <p className="text-foreground">
            Hasta que un día dejé de escuchar lo que otros decían de ella y la probé.
          </p>
        </Reveal>
        <Reveal delay={100} className="hover-zoom">
          <img
            src={enUso}
            alt="Cocinando con Thermomix rodeada de ingredientes frescos"
            loading="lazy"
            width={1408}
            height={1008}
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
      </div>

      <Reveal className="mt-20 border-y border-border py-16 text-center md:py-24">
        <p className="mx-auto max-w-3xl font-display text-[2.2rem] leading-[1.05] italic md:text-[3.6rem]">
          “Tuve que vivirlo para entenderlo.”
        </p>
        <p className="mt-6 text-[0.66rem] uppercase tracking-[0.28em] text-champagne">
          María Regina
        </p>
      </Reveal>

      <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-20">
        <Reveal className="space-y-6 text-[1.05rem] leading-[1.85] text-muted-foreground">
          <p>
            Cuando empecé a cocinar con Thermomix entendí que no se trataba de dejar de cocinar. Era
            otra forma de hacerlo.
          </p>
          <p>
            Seguía escogiendo mis ingredientes. Seguía probando. Seguía creando. Seguía siendo mi
            cocina. Pero muchas de las tareas que antes requerían varios utensilios, atención
            constante o más tiempo podían hacerse de una forma mucho más sencilla.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="font-display text-[1.8rem] leading-tight md:text-[2.6rem]">
            Y poco a poco ocurrió algo que no esperaba:{" "}
            <span className="italic text-cognac">me enamoré de cocinar con ella.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* 03 — POR QUÉ ME VOLVÍ CONSULTORA */
function PorQueYoUso() {
  return (
    <section className="bg-ink py-20 text-warm-white md:py-32">
      <div className="container-wide grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
        <div>
          <Label index="03" tone="light">Por qué Yo Uso Thermomix</Label>
          <h2 className="mt-7 text-[2.3rem] leading-[0.95] text-warm-white md:text-[3.8rem]">
            No empecé
            <br />
            queriendo venderla.
            <br />
            <span className="italic text-champagne">Empecé queriendo contarlo.</span>
          </h2>
        </div>
        <div className="space-y-7">
          <p className="text-[1.05rem] leading-[1.85] text-warm-white/70">
            Cuando algo cambia genuinamente tu experiencia, quieres compartirlo. Eso es lo que
            quiero hacer con Yo Uso Thermomix.
          </p>
          <p className="text-[1.05rem] leading-[1.85] text-warm-white/70">
            No quiero convencerte con una lista de funciones. Quiero enseñarte cómo la uso, cocinar
            contigo, responder tus preguntas y dejar que tú decidas si tiene sentido para tu cocina.
          </p>
          <div className="border-t border-warm-white/15 pt-8">
            <Label tone="light">La filosofía</Label>
            <p className="mt-5 font-display text-[2rem] leading-[1.05] text-warm-white md:text-[2.8rem]">
              Primero vívela.
              <br />
              <span className="italic text-champagne">Después decide.</span>
            </p>
          </div>
          <WhatsAppLink source="demonstration" variant="light" size="lg">
            Quiero vivir la experiencia
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}

/* 04 — ¿QUÉ ES THERMOMIX? */
const funciones = [
  ["Prepara", "Pesa, corta, tritura y mezcla los ingredientes en el mismo vaso."],
  ["Cocina", "Controla tiempo, temperatura y velocidad en cada paso de la receta."],
  ["Amasa", "Masas de pan, pizza y repostería sin amasar a mano."],
  ["Emulsiona", "Salsas, aderezos y cremas con textura estable."],
  ["Cocina al vapor", "Varias preparaciones al mismo tiempo con el Varoma."],
  ["Cocina guiada", "La receta aparece en pantalla y te acompaña paso a paso."],
];

function QueEs() {
  const [open, setOpen] = useState(false);
  return (
    <section id="que-es" className="container-wide py-20 md:py-32">
      <Reveal>
        <Label index="04" tone="champagne">Ahora sí</Label>
        <h2 className="mt-6 text-[2.4rem] leading-[0.95] md:text-[4rem]">
          ¿Qué es
          <br />
          <span className="italic">Thermomix?</span>
        </h2>
        <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground">
          Thermomix TM7 es un sistema de cocina todo-en-uno que combina preparación, cocción,
          precisión y cocina guiada en un solo equipo.
        </p>
      </Reveal>

      <Reveal className="mt-16">
        <p className="font-display text-[2.4rem] leading-[1] tracking-tight md:text-[5rem]">
          Pesa. Corta. Mezcla. Amasa.
          <br />
          <span className="text-muted-foreground">Cocina. Vapor.</span>{" "}
          <span className="italic text-cognac">Y mucho más.</span>
        </p>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Un solo equipo. Muchas formas de cocinar.
          <span className="ml-2 text-[0.68rem] uppercase tracking-[0.2em] text-champagne">
            [Confirmar número exacto de funciones con Thermomix Guatemala]
          </span>
        </p>
      </Reveal>

      <div className="mt-12">
        <button
          onClick={() => setOpen((v) => !v)}
          className="editorial-link text-[0.78rem] font-medium uppercase tracking-[0.2em]"
        >
          {open ? "Ocultar funciones" : "Ver todas las funciones →"}
        </button>
        {open && (
          <ul className="mt-10 grid gap-x-16 border-t border-border sm:grid-cols-2">
            {funciones.map(([t, d]) => (
              <li key={t} className="border-b border-border py-6">
                <p className="text-[0.66rem] uppercase tracking-[0.28em] text-champagne">{t}</p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

/* 05 — TECNOLOGÍA (dark) */
const tech = [
  ["Pantalla multi-touch 10\"", "Pantalla grande de 10 pulgadas para navegar recetas y controles."],
  ["Motor más silencioso", "El TM7 introduce un funcionamiento notablemente más silencioso."],
  ["Vaso con aislamiento", "Vaso de mezcla rediseñado con aislamiento térmico."],
  ["Cookidoo integrado", "La experiencia de cocina guiada llega directo al equipo."],
  ["Conectividad Wi-Fi", "Recetas conectadas y actualizaciones del sistema."],
  ["Báscula integrada", "Pesa los ingredientes directamente mientras preparas."],
  ["Varoma 45% más amplio", "Aproximadamente 45% más espacio de cocción al vapor que la generación anterior."],
  ["Cocina guiada", "Ingredientes, tiempo, temperatura y velocidad, paso a paso."],
  ["Cocción en varios niveles", "Prepara varios componentes de una comida a la vez cuando la receta lo permite."],
];

function Tecnologia() {
  return (
    <section className="bg-espresso py-20 text-warm-white md:py-32">
      <div className="container-wide">
        <Label index="05" tone="light">
          <span className="text-champagne">Por dentro</span>
        </Label>
        <h2 className="mt-7 max-w-3xl text-[2.3rem] leading-[0.95] text-warm-white md:text-[4rem]">
          Tecnología que casi desaparece
          <br />
          <span className="italic text-champagne">mientras cocinas.</span>
        </h2>

        <ul className="mt-16 grid gap-x-16 border-t border-warm-white/15 md:grid-cols-2">
          {tech.map(([t, d], i) => (
            <li key={t} className="border-b border-warm-white/15 py-7">
              <p className="num-index">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-3 font-display text-xl text-warm-white md:text-2xl">{t}</p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-warm-white/60">{d}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-[0.68rem] uppercase tracking-[0.2em] text-champagne/80">
          [Verificar con Thermomix Guatemala las especificaciones del modelo disponible]
        </p>

        <div className="mt-16 border-t border-warm-white/15 pt-14">
          <Label tone="light">Una cocina real</Label>
          <p className="mt-6 max-w-3xl font-display text-[2rem] leading-[1.05] text-warm-white md:text-[3.4rem]">
            No necesitas 25 funciones.
            <br />
            <span className="italic text-champagne">
              Necesitas saber cuáles usarías tú.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* 06 — COOKIDOO */
function Cookidoo() {
  return (
    <section className="container-wide grid items-center gap-12 py-20 md:grid-cols-[0.95fr_1.05fr] md:gap-20 md:py-32">
      <Reveal className="hover-zoom">
        <img
          src={mesa}
          alt="Mesa editorial con platos preparados en casa"
          loading="lazy"
          className="aspect-[4/5] w-full object-cover"
        />
      </Reveal>
      <Reveal delay={100}>
        <Label index="06" tone="champagne">Cocina guiada</Label>
        <h2 className="mt-6 text-[2.3rem] leading-[0.95] md:text-[3.8rem]">
          No tienes que
          <br />
          <span className="italic">saberte la receta.</span>
        </h2>
        <p className="mt-7 max-w-lg leading-relaxed text-muted-foreground">
          Cookidoo es la plataforma oficial de recetas guiadas de Thermomix. La receta aparece en la
          pantalla del equipo y tú sigues los pasos: ingredientes, cantidades, tiempo, temperatura y
          velocidad.
        </p>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Las fuentes oficiales de Thermomix hacen referencia a más de 100,000 recetas a nivel
          global.
          <span className="ml-2 text-[0.68rem] uppercase tracking-[0.2em] text-champagne">
            [Verificar con Thermomix Guatemala]
          </span>
        </p>
        <div className="mt-9">
          <WhatsAppLink source="demonstration" variant="outline">
            Conocer Cookidoo
          </WhatsAppLink>
        </div>
      </Reveal>
    </section>
  );
}

/* 07 — LO QUE YO PENSABA */
function LoQuePensaba() {
  return (
    <section className="border-y border-border bg-warm-white py-20 md:py-32">
      <div className="container-wide">
        <Reveal>
          <Label index="07" tone="champagne">Lo que yo pensaba</Label>
          <h2 className="mt-6 max-w-2xl text-[2.3rem] leading-[0.95] md:text-[3.8rem]">
            “Pero a mí me gusta cocinar.”
          </h2>
          <p className="mt-8 font-display text-[2rem] italic text-cognac md:text-[3rem]">
            A mí también.
          </p>
          <p className="mt-2 text-[0.66rem] uppercase tracking-[0.28em] text-champagne">
            María Regina
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-24">
          <Reveal>
            <p className="text-[0.66rem] uppercase tracking-[0.28em] text-muted-foreground">
              Cocina tradicional
            </p>
            <ul className="mt-6 border-t border-border">
              {[
                "Tabla y cuchillo",
                "Báscula",
                "Licuadora",
                "Batidora",
                "Ollas y sartenes",
                "Vaporera",
                "Atención constante",
              ].map((i) => (
                <li key={i} className="border-b border-border py-3.5 text-sm">
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-[0.66rem] uppercase tracking-[0.28em] text-champagne">Con Thermomix</p>
            <p className="mt-6 leading-[1.85] text-muted-foreground">
              Muchos de esos procesos pueden ocurrir dentro de un mismo sistema de cocción
              integrado, con tiempo, temperatura y velocidad controlados desde la misma receta.
            </p>
            <p className="mt-10 font-display text-[1.8rem] leading-tight md:text-[2.6rem]">
              Menos herramientas.
              <br />
              Menos pasos.
              <br />
              <span className="italic text-cognac">Pero sigue siendo tu cocina.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 08 — QUÉ CAMBIA EN LA VIDA REAL */
const escenas = [
  {
    k: "Martes · 7:15 PM",
    t: "No sabes qué hacer de cena.",
    d: "La cocina guiada reduce la fricción de decidir: eliges una receta y la sigues paso a paso.",
    img: cocina,
  },
  {
    k: "Domingo",
    t: "Quieres hacer pan.",
    d: "Amasado dentro del vaso, sin harina por toda la mesa.",
    img: pan,
  },
  {
    k: "Amigos en casa",
    t: "Quieres estar en la mesa, no pendiente de cuatro ollas.",
    d: "Preparación por etapas mientras tú sirves la primera copa.",
    img: amigos,
    dark: true,
  },
  {
    k: "Algo nuevo",
    t: "Nunca has hecho risotto.",
    d: "Las recetas guiadas hacen más abordable lo que nunca has cocinado.",
    img: mesa,
  },
];

function QueCambia() {
  return (
    <section className="py-20 md:py-32">
      <div className="container-wide">
        <Reveal>
          <Label index="08" tone="champagne">Qué cambia en la vida real</Label>
          <h2 className="mt-6 max-w-2xl text-[2.3rem] leading-[0.95] md:text-[3.8rem]">
            No son funciones.
            <br />
            <span className="italic">Son momentos.</span>
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 space-y-6 md:space-y-10">
        {escenas.map((s, i) => (
          <Reveal key={s.t}>
            <div
              className={
                s.dark
                  ? "bg-ink py-14 text-warm-white md:py-20"
                  : i % 2 === 0
                    ? "bg-transparent"
                    : "bg-warm-white py-14 md:py-20"
              }
            >
              <div
                className={`container-wide grid items-center gap-8 md:gap-16 ${
                  i % 2 === 0 ? "md:grid-cols-[1.2fr_0.8fr]" : "md:grid-cols-[0.8fr_1.2fr]"
                }`}
              >
                <div className={`hover-zoom ${i % 2 === 0 ? "" : "md:order-2"}`}>
                  <img
                    src={s.img}
                    alt={s.t}
                    loading="lazy"
                    className={`w-full object-cover ${i % 2 === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`}
                  />
                </div>
                <div className={i % 2 === 0 ? "" : "md:order-1"}>
                  <p
                    className={`text-[0.62rem] uppercase tracking-[0.28em] ${
                      s.dark ? "text-champagne" : "text-champagne"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")} · {s.k}
                  </p>
                  <p
                    className={`mt-4 font-display text-[1.7rem] leading-tight md:text-[2.6rem] ${
                      s.dark ? "text-warm-white" : ""
                    }`}
                  >
                    {s.t}
                  </p>
                  <p
                    className={`mt-4 max-w-md text-sm leading-relaxed ${
                      s.dark ? "text-warm-white/60" : "text-muted-foreground"
                    }`}
                  >
                    {s.d}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="container-wide mt-12">
        <Disclaimer>
          Las capacidades del equipo y las indicaciones de limpieza deben confirmarse con la
          información oficial. [Verificar con Thermomix Guatemala]
        </Disclaimer>
      </div>
    </section>
  );
}

/* 09 — EXPERIÉNCIALA */
function Experiencia() {
  return (
    <section className="bg-ink py-20 text-warm-white md:py-32">
      <div className="container-wide grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
        <div>
          <Label index="09" tone="light">La parte que cambió todo para mí</Label>
          <h2 className="mt-7 text-[2.4rem] leading-[0.92] text-warm-white md:text-[4.2rem]">
            No te pido
            <br />
            que me creas.
            <br />
            <span className="italic text-champagne">Pruébala.</span>
          </h2>
        </div>
        <div className="flex flex-col justify-end gap-8">
          <p className="max-w-md text-[1.05rem] leading-[1.85] text-warm-white/70">
            Yo tampoco entendí Thermomix hasta que cociné con ella. Por eso prefiero enseñártela
            funcionando y dejar que tú saques tus propias conclusiones.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <WhatsAppLink source="demonstration" variant="light" size="lg">
              Quiero vivir la experiencia
            </WhatsAppLink>
            <WhatsAppLink source="nav" variant="ghost" showIcon={false} className="text-warm-white">
              Tengo una pregunta
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 10 — QUIZ */
const quizQuestions = [
  { q: "¿Cuántas personas viven en casa?", options: ["1", "2", "3–4", "5+"] },
  { q: "¿Con qué frecuencia cocinas?", options: ["Casi nunca", "2–3 veces por semana", "Casi a diario", "Siempre"] },
  { q: "¿Cuánto tiempo tienes para cocinar?", options: ["Menos de 20 min", "30 min", "1 hora", "El que haga falta"] },
  { q: "¿Qué cocinas más?", options: ["Comida rápida", "Comida de casa", "Saludable", "Postres y repostería"] },
  { q: "¿Qué te frustra de cocinar?", options: ["El tiempo", "Lavar trastes", "No saber qué hacer", "Que no me sale igual"] },
  { q: "¿Qué te gustaría mejorar?", options: ["Comer más en casa", "Ahorrar", "Variedad", "Cocinar más sano"] },
];

const perfiles = [
  "Familia práctica",
  "Cocinero ocupado",
  "Foodie creativo",
  "Meal-prep planner",
  "Principiante",
];

function Quiz() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [done, setDone] = useState(false);
  const perfil = perfiles[Object.keys(answers).length % perfiles.length] ?? perfiles[0];

  return (
    <section id="quiz" className="border-y border-border py-20 md:py-32">
      <div className="container-wide">
        <Label index="10" tone="champagne">¿Es para mí?</Label>
        <h2 className="mt-6 max-w-2xl text-[2.3rem] leading-[0.95] md:text-[3.8rem]">
          Decide tú,
          <br />
          <span className="italic">con calma.</span>
        </h2>
        <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
          Seis preguntas. Al final te digo qué funciones podrían serte útiles según cómo cocinas.
        </p>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-9">
            {quizQuestions.map((item, idx) => (
              <div key={item.q} className="border-b border-border pb-7">
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-champagne">
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-xl md:text-2xl">{item.q}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.options.map((o) => (
                    <Chip
                      key={o}
                      active={answers[idx] === o}
                      onClick={() => setAnswers((a) => ({ ...a, [idx]: o }))}
                    >
                      {o}
                    </Chip>
                  ))}
                </div>
              </div>
            ))}
            <EditorialButton
              onClick={() => {
                setDone(true);
                track("thermomix_quiz_completed", { answers });
              }}
            >
              Ver mi resultado
            </EditorialButton>
          </div>

          <div className="lg:sticky lg:top-28 lg:h-fit">
            {done ? (
              <>
                <Label tone="champagne">Tu perfil</Label>
                <h3 className="mt-4 font-display text-[2.4rem] leading-tight">{perfil}</h3>
                <ul className="mt-8 border-t border-border">
                  {[
                    "Recetas guiadas para resolver la cena entre semana",
                    "Cocción mientras remueve, para dejar de estar pendiente",
                    "Masas y pan sin amasar a mano",
                    "Preparar en un mismo vaso y lavar menos",
                  ].map((f) => (
                    <li key={f} className="border-b border-border py-4 text-sm leading-relaxed">
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <WhatsAppLink source="demonstration">Quiero verla funcionando</WhatsAppLink>
                </div>
              </>
            ) : (
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Responde las preguntas y aquí aparecerá tu perfil de cocina.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 11 — FINANCIAMIENTO */
const plazos = ["Contado", "12 cuotas", "18 cuotas", "24 cuotas", "36 cuotas", "48 cuotas"];

export const financiamientoDisclaimer =
  "Desde Q395.83 al mes en planes elegibles de hasta 48 cuotas. Condiciones, promociones y disponibilidad sujetas a cambio. Consulta las opciones vigentes con María Regina.";

function Financiamiento() {
  const [plazo, setPlazo] = useState<string | null>(null);
  const [bancos, setBancos] = useState(false);

  return (
    <section id="financiamiento" className="bg-warm-white py-20 md:py-32">
      <div className="container-wide">
        <Label index="11" tone="champagne">Si después te enamora…</Label>
        <h2 className="mt-6 max-w-2xl text-[2.4rem] leading-[0.95] md:text-[4rem]">
          Veamos cómo
          <br />
          <span className="italic">llevarla a casa.</span>
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-[55%_45%] md:gap-16">
          <div className="border-t border-ink/20 pt-8">
            <p className="text-[0.66rem] uppercase tracking-[0.28em] text-muted-foreground">Desde</p>
            <p className="mt-2 font-display text-[4.2rem] leading-[0.85] tracking-tight md:text-[8rem]">
              Q395.83
            </p>
            <p className="mt-4 text-[0.66rem] uppercase tracking-[0.28em] text-muted-foreground">
              Al mes
            </p>
            <p className="mt-6 font-display text-xl italic text-cognac">hasta 48 cuotas</p>
            <p className="mt-6 text-[0.62rem] uppercase tracking-[0.22em] text-champagne">
              [Verificar promoción vigente]
            </p>
          </div>

          <div className="flex flex-col justify-end gap-7">
            <p className="max-w-md leading-[1.85] text-muted-foreground">
              “Si después de conocerla sientes que Thermomix encaja contigo, también puedo ayudarte a
              encontrar una forma de pago que tenga sentido para ti.”
            </p>
            <Disclaimer>
              Las cuotas, promociones, bancos participantes y condiciones pueden variar. Consulta con
              María Regina la opción disponible al momento de tu compra.
            </Disclaimer>
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <Label tone="champagne">¿Cómo prefieres pagar?</Label>
          <div className="mt-6 flex flex-wrap gap-2">
            {plazos.map((p) => (
              <Chip key={p} active={plazo === p} onClick={() => setPlazo(p)}>
                {p}
              </Chip>
            ))}
          </div>
          {plazo && (
            <div className="mt-8 max-w-2xl border-l border-champagne pl-5">
              {plazo === "48 cuotas" ? (
                <p className="font-display text-xl leading-snug">
                  48 cuotas → desde Q395.83 al mes en planes elegibles.
                </p>
              ) : (
                <p className="font-display text-xl leading-snug">
                  Consulta con María Regina la disponibilidad y condiciones actuales para este plazo.
                </p>
              )}
              <p className="mt-3 text-[0.72rem] leading-relaxed text-muted-foreground">
                {financiamientoDisclaimer}
              </p>
            </div>
          )}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <button
            onClick={() => setBancos((v) => !v)}
            className="editorial-link text-[0.78rem] font-medium uppercase tracking-[0.2em]"
          >
            {bancos ? "Ocultar opciones de financiamiento" : "Ver opciones de financiamiento"}
          </button>
          {bancos && (
            <div className="mt-7 max-w-2xl space-y-4">
              <p className="leading-relaxed text-muted-foreground">
                Dependiendo de las condiciones vigentes, pueden existir opciones con entidades
                financieras participantes.
              </p>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-champagne">
                [Verificar entidades participantes vigentes antes de publicar]
              </p>
            </div>
          )}
        </div>

        <div className="mt-16 border-t border-ink/20 pt-12">
          <h3 className="max-w-xl font-display text-[1.8rem] leading-tight md:text-[2.6rem]">
            ¿Quieres conocer tus opciones?
          </h3>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            Las condiciones dependen del banco, tarjeta, promoción y plazo disponible.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <WhatsAppLink source="financing" size="lg">
              Consultar opciones con María Regina
            </WhatsAppLink>
            <WhatsAppLink source="demonstration" variant="ghost" showIcon={false}>
              Quiero verla primero
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 12 — PONLO EN PERSPECTIVA */
function Perspectiva() {
  const [porCena, setPorCena] = useState(600);
  const [veces, setVeces] = useState(4);
  const [avanzado, setAvanzado] = useState(false);
  const [delivery, setDelivery] = useState(0);
  const [preparados, setPreparados] = useState(0);
  const [reemplazadas, setReemplazadas] = useState(0);

  const mensual = Math.max(porCena, 0) * Math.max(veces, 0);
  const totalComida = mensual + delivery + preparados;
  const pct = mensual > 0 ? (REF_CUOTA / mensual) * 100 : 0;
  const cenas = porCena > 0 ? REF_CUOTA / porCena : 0;
  const evitado = Math.min(reemplazadas, veces) * porCena;

  const frase = useMemo(() => {
    if (porCena <= 0) return null;
    if (cenas < 1)
      return "Una cuota mensual sería menor que el gasto aproximado que indicas para una sola cena fuera.";
    return `Una cuota mensual equivale aproximadamente a ${cenas.toFixed(1)} de tus cenas habituales.`;
  }, [cenas, porCena]);

  return (
    <section id="perspectiva" className="py-20 md:py-32">
      <div className="container-wide">
        <Label index="12" tone="champagne">Ponlo en perspectiva</Label>
        <h2 className="mt-6 max-w-3xl text-[2.4rem] leading-[0.92] md:text-[4.4rem]">
          ¿Cuánto se va
          <br />
          <span className="italic">en salir a comer?</span>
        </h2>
        <p className="mt-7 max-w-lg leading-relaxed text-muted-foreground">
          Haz una comparación sencilla entre lo que gastas actualmente en restaurantes y una cuota
          mensual de Thermomix.
        </p>

        <div className="mt-16 grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          {/* inputs */}
          <div className="space-y-12">
            <div>
              <p className="font-display text-xl">¿Cuánto gastan normalmente en una cena fuera?</p>
              <div className="mt-5 flex items-baseline gap-3 border-b border-ink/30 pb-2">
                <span className="font-display text-3xl text-muted-foreground">Q</span>
                <input
                  type="number"
                  min={0}
                  value={porCena}
                  onChange={(e) => setPorCena(Number(e.target.value))}
                  className="w-full bg-transparent font-display text-[3rem] leading-none outline-none md:text-[4rem]"
                  aria-label="Gasto por cena fuera"
                />
              </div>
              <p className="mt-3 text-[0.72rem] leading-relaxed text-muted-foreground">
                Incluye aproximadamente comida, bebidas y propina de toda la mesa o familia.
              </p>
            </div>

            <div>
              <p className="font-display text-xl">¿Cuántas veces salen a cenar al mes?</p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <Chip key={n} active={veces === n} onClick={() => setVeces(n)}>
                    {n === 6 ? "6+" : n}
                  </Chip>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-5">
                <button
                  onClick={() => setVeces((v) => Math.max(v - 1, 0))}
                  className="size-9 border border-border text-lg"
                  aria-label="Menos salidas"
                >
                  –
                </button>
                <span className="font-display text-3xl">{veces}</span>
                <button
                  onClick={() => setVeces((v) => v + 1)}
                  className="size-9 border border-border text-lg"
                  aria-label="Más salidas"
                >
                  +
                </button>
                <span className="text-[0.66rem] uppercase tracking-[0.28em] text-muted-foreground">
                  veces al mes
                </span>
              </div>
            </div>

            <div>
              <button
                onClick={() => setAvanzado((v) => !v)}
                className="editorial-link text-[0.78rem] font-medium uppercase tracking-[0.2em]"
              >
                {avanzado ? "Ocultar más gastos" : "Agregar delivery y preparados"}
              </button>
              {avanzado && (
                <div className="mt-6 space-y-5">
                  {[
                    ["Delivery al mes", delivery, setDelivery] as const,
                    ["Productos preparados al mes", preparados, setPreparados] as const,
                  ].map(([label, val, set]) => (
                    <label key={label} className="block">
                      <span className="text-[0.66rem] uppercase tracking-[0.28em] text-muted-foreground">
                        {label}
                      </span>
                      <div className="mt-2 flex items-baseline gap-2 border-b border-border pb-1">
                        <span className="text-muted-foreground">Q</span>
                        <input
                          type="number"
                          min={0}
                          value={val}
                          onChange={(e) => set(Number(e.target.value))}
                          className="w-full bg-transparent font-display text-2xl outline-none"
                        />
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* results */}
          <div className="border-t border-ink/20 pt-10">
            <p className="text-[0.66rem] uppercase tracking-[0.28em] text-muted-foreground">Tu mes</p>

            <div className="mt-8">
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-champagne">
                Restaurantes
              </p>
              <p className="mt-2 font-display text-[3.4rem] leading-[0.9] md:text-[5.5rem]">
                {q0(mensual)}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {q0(porCena)} por salida × {veces} al mes
              </p>
              <div className="mt-5 h-px w-full bg-ink/70" />
            </div>

            <div className="mt-10">
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-champagne">
                Thermomix · referencia
              </p>
              <p className="mt-2 font-display text-[2.6rem] leading-[0.9] text-espresso md:text-[3.6rem]">
                {q(REF_CUOTA)}
                <span className="ml-2 text-lg text-muted-foreground">/ mes*</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">hasta 48 cuotas</p>
              <div
                className="mt-5 h-px bg-champagne transition-all duration-700"
                style={{ width: `${mensual > 0 ? Math.min(pct, 100) : 4}%` }}
              />
            </div>

            {mensual > 0 && (
              <div className="mt-10 space-y-4 border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
                <p>
                  En este ejemplo, una cuota desde {q(REF_CUOTA)} equivale aproximadamente al{" "}
                  <span className="text-foreground">{pct.toFixed(1)}%</span> de lo que indicas que
                  gastas al mes en cenas fuera.
                </p>
                {frase && <p>{frase}</p>}
              </div>
            )}

            {avanzado && totalComida > 0 && (
              <div className="mt-10 border-t border-border pt-8">
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
                  Tu gasto actual alrededor de la comida
                </p>
                <p className="mt-2 font-display text-[2.4rem] leading-none">{q0(totalComida)}</p>
                <p className="mt-1 text-sm text-muted-foreground">al mes, según tus datos</p>
              </div>
            )}

            <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
                  Restaurantes al año
                </p>
                <p className="mt-2 font-display text-3xl">{q0(mensual * 12)}</p>
              </div>
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
                  12 cuotas de referencia
                </p>
                <p className="mt-2 font-display text-3xl">{q(REF_CUOTA * 12)}</p>
              </div>
              <p className="text-[0.72rem] leading-relaxed text-muted-foreground sm:col-span-2">
                Son dos categorías de gasto distintas. Esto no significa que dejarías de salir a
                comer. La comparación simplemente pone ambos gastos en perspectiva.
              </p>
            </div>
          </div>
        </div>

        {/* replaced meals */}
        <div className="mt-20 border-t border-border pt-14">
          <h3 className="max-w-xl font-display text-[1.9rem] leading-tight md:text-[2.8rem]">
            ¿Y si cocinaras en casa
            <br />
            <span className="italic">una vez más al mes?</span>
          </h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {[1, 2, 3].map((n) => (
              <Chip key={n} active={reemplazadas === n} onClick={() => setReemplazadas(n)}>
                {n} {n === 1 ? "cena en casa" : "cenas en casa"}
              </Chip>
            ))}
          </div>
          {reemplazadas > 0 && (
            <div className="mt-10 grid gap-8 sm:grid-cols-2 md:max-w-3xl">
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
                  Gasto estimado actual
                </p>
                <p className="mt-2 font-display text-[2.6rem] leading-none">{q0(mensual)}</p>
              </div>
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-champagne">
                  Gasto potencialmente evitado en restaurantes
                </p>
                <p className="mt-2 font-display text-[2.6rem] leading-none text-cognac">
                  {q0(evitado)}
                </p>
              </div>
              <p className="text-[0.72rem] leading-relaxed text-muted-foreground sm:col-span-2">
                No incluye el costo de los ingredientes necesarios para cocinar en casa.
              </p>
            </div>
          )}
        </div>

        <div className="mt-20 border-t border-ink/20 pt-12">
          <h3 className="max-w-xl font-display text-[1.9rem] leading-tight md:text-[2.8rem]">
            ¿Quieres saber qué opciones
            <br />
            <span className="italic">hay disponibles para ti?</span>
          </h3>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <WhatsAppLink
              source="perspectiva"
              size="lg"
              extra={`Mi comparación: ${q0(mensual)} al mes en restaurantes.`}
            >
              Consultar con María Regina
            </WhatsAppLink>
            <WhatsAppLink source="demonstration" variant="ghost" showIcon={false}>
              Quiero verla funcionando
            </WhatsAppLink>
          </div>
          <div className="mt-10 max-w-3xl">
            <Disclaimer>
              Comparación ilustrativa basada en los datos ingresados por el usuario. No representa
              ahorro garantizado. Cocinar en casa también implica costos de ingredientes y otros
              gastos. La cuota de Q395.83 es una referencia de financiamiento proporcionada para
              planes elegibles de hasta 48 cuotas y puede estar sujeta a promociones, condiciones,
              disponibilidad y cambios. Consulta las condiciones vigentes con María Regina.
            </Disclaimer>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 13 — DESPUÉS DE COMPRAR */
const semanas = [
  ["Semana 1", "Empecemos"],
  ["Semana 2", "Tus básicos"],
  ["Semana 3", "Prueba algo nuevo"],
  ["Semana 4", "Hazla tuya"],
];

function DespuesDeComprar() {
  return (
    <section className="bg-espresso py-20 text-warm-white md:py-32">
      <div className="container-wide">
        <Label index="13" tone="light">Y si decides comprarla…</Label>
        <h2 className="mt-7 max-w-2xl text-[2.3rem] leading-[0.95] text-warm-white md:text-[3.8rem]">
          Ahí no termina
          <br />
          <span className="italic text-champagne">mi trabajo.</span>
        </h2>
        <p className="mt-7 max-w-lg leading-relaxed text-warm-white/70">
          De hecho, ahí empieza otra parte que me encanta.
        </p>

        <ul className="mt-14 grid gap-x-16 border-t border-warm-white/15 sm:grid-cols-2 md:grid-cols-3">
          {["Primeros pasos", "Recetas para empezar", "Dudas", "Ideas", "Lives", "Acompañamiento"].map(
            (i) => (
              <li
                key={i}
                className="border-b border-warm-white/15 py-5 font-display text-xl text-warm-white"
              >
                {i}
              </li>
            ),
          )}
        </ul>

        <div className="mt-16">
          <Label tone="light">Tus primeros 30 días conmigo</Label>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {semanas.map(([w, t]) => (
              <div key={w} className="border-t border-champagne/50 pt-5">
                <p className="num-index">{w}</p>
                <p className="mt-3 font-display text-2xl text-warm-white">{t}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <WhatsAppLink source="purchase_interest" variant="light">
            Quiero conocer el proceso
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}

/* 14 — CIERRE */
function Cierre() {
  return (
    <section className="container-wide grid items-center gap-12 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:py-32">
      <div className="hover-zoom">
        <img
          src={mariaRegina.url}
          alt="María Regina"
          loading="lazy"
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
      <div>
        <Label tone="champagne">Yo Uso Thermomix</Label>
        <h2 className="mt-6 text-[2.4rem] leading-[0.92] md:text-[4rem]">
          Yo ya viví
          <br />
          la experiencia.
          <br />
          <span className="italic text-cognac">Ahora quiero compartirla contigo.</span>
        </h2>
        <p className="mt-8 max-w-md leading-[1.85] text-muted-foreground">
          “Si tienes curiosidad, escríbeme. No tienes que decidir nada. Primero cocinamos.”
        </p>
        <p className="mt-3 signature text-2xl">María Regina</p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <WhatsAppLink source="demonstration" size="lg">
            Cocinemos juntos
          </WhatsAppLink>
          <ArrowLink to="/recetas">Ver recetas</ArrowLink>
        </div>
      </div>
    </section>
  );
}
