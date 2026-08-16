import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChefHat,
  Clock,
  Instagram,
  MessageSquareHeart,
  Play,
  ShoppingBasket,
  Sparkles,
  Wallet,
} from "lucide-react";
import heroImg from "@/assets/hero-cocina.jpg";
import retrato from "@/assets/retrato-consultora.jpg";
import liveImg from "@/assets/live-cocina.jpg";
import { recipes } from "@/data/recipes";
import { site, track } from "@/lib/site";
import { WhatsAppLink } from "@/components/site/whatsapp-link";
import { SectionHeading, RecipeCard, Chip } from "@/components/site/ui-bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yo Uso Thermomix — Cocina mejor. Disfruta más." },
      {
        name: "description",
        content:
          "Recetas, inspiración y herramientas inteligentes para aprovechar cada ingrediente y descubrir todo lo que puedes hacer con Thermomix en Guatemala.",
      },
      { property: "og:title", content: "Yo Uso Thermomix — Cocina mejor. Disfruta más." },
      {
        property: "og:description",
        content: "Recetas, Lives y herramientas para cocinar mejor en casa.",
      },
    ],
  }),
  component: Home,
});

const tools = [
  {
    icon: ChefHat,
    title: "¿Qué cocino hoy?",
    desc: "Dime qué ingredientes tienes y descubre qué puedes preparar.",
    cta: "Crear receta",
    to: "/ai-kitchen/crear-receta",
  },
  {
    icon: Wallet,
    title: "Calcula tu ahorro",
    desc: "Descubre cuánto podrías ahorrar cocinando más en casa.",
    cta: "Calcular",
    to: "/ai-kitchen/ahorro",
  },
  {
    icon: ShoppingBasket,
    title: "Hazlo en casa",
    desc: "Descubre qué productos del supermercado puedes preparar tú mismo.",
    cta: "Descubrir",
    to: "/ai-kitchen/hazlo-en-casa",
  },
  {
    icon: CalendarDays,
    title: "Planea mi semana",
    desc: "Crea un menú semanal adaptado a tu familia, presupuesto y preferencias.",
    cta: "Crear plan",
    to: "/ai-kitchen/plan-semanal",
  },
  {
    icon: Clock,
    title: "Tu tiempo en la cocina",
    desc: "Descubre qué tareas puedes simplificar con Thermomix.",
    cta: "Calcular",
    to: "/ai-kitchen/tiempo",
  },
  {
    icon: Sparkles,
    title: "Pregúntame",
    desc: "Resuelve dudas sobre recetas, funciones y cocina con Thermomix.",
    cta: "Preguntar",
    to: "/ai-kitchen/preguntame",
  },
] as const;

function Home() {
  return (
    <>
      <Hero />
      <Consultora />
      <AiKitchen />
      <Featured />
      <HazloEnCasa />
      <AhorroTeaser />
      <ProximoLive />
      <Colecciones />
      <QuizTeaser />
      <ThermomixIntro />
      <Testimonios />
      <InstagramGrid />
      <FinalCta />
      <Newsletter />
    </>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="container-page pt-6 md:pt-10">
        <div className="relative overflow-hidden rounded-[2rem]">
          <img
            src={heroImg}
            alt="Consultora cocinando con Thermomix en su cocina"
            width={1600}
            height={1008}
            className="h-[78vh] max-h-[760px] min-h-[520px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 pb-10 md:p-14">
            <div className="max-w-2xl animate-rise">
              <h1 className="font-display text-[2.6rem] leading-[1.02] text-cream md:text-[4.4rem]">
                Cocina mejor.
                <br />
                Disfruta más.
              </h1>
              <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-cream/85 md:text-lg">
                Recetas, inspiración y herramientas inteligentes para ayudarte a aprovechar cada
                ingrediente y descubrir todo lo que puedes hacer con Thermomix.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/ai-kitchen/crear-receta"
                  onClick={() => track("ai_tool_opened", { tool: "recipe_generator", from: "hero" })}
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-cream px-7 text-base font-medium text-ink transition-transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  ¿Qué cocino hoy?
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/thermomix"
                  className="inline-flex h-13 items-center justify-center rounded-full border border-cream/45 px-7 text-base font-medium text-cream transition-colors hover:bg-cream/10"
                >
                  Conoce Thermomix
                </Link>
              </div>
              <p className="mt-7 text-xs uppercase tracking-[0.22em] text-cream/65">
                Recetas · Lives · Herramientas · Comunidad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Consultora() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1fr] md:gap-16">
        <div className="relative">
          <img
            src={retrato}
            alt={`${site.consultant.name}, consultora independiente de Thermomix`}
            loading="lazy"
            width={912}
            height={1104}
            className="w-full rounded-[1.5rem] object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">Detrás de la cocina</p>
          <h2 className="mt-3 text-3xl md:text-[2.6rem]">Hola, soy {site.consultant.name} 👋</h2>
          <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-muted-foreground">
            <p>
              Soy consultora independiente de Thermomix en {site.consultant.location}. Cocino todos
              los días para mi familia y llevo [X] años usando Thermomix en mi propia cocina.
              [Placeholder: historia personal por confirmar].
            </p>
            <p>
              Cada semana comparto recetas, trucos y Lives donde cocinamos juntos, resolvemos dudas
              y probamos ideas nuevas —desde lo más guatemalteco hasta pan, yogurt o postres.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("instagram_clicked", { source: "home_about" })}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Instagram className="size-4" /> Sígueme en Instagram
            </a>
            <Link
              to="/sobre-mi"
              className="inline-flex h-11 items-center rounded-full border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Conoce mi historia
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AiKitchen() {
  return (
    <section className="border-y border-border bg-secondary/50 py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="AI Kitchen"
          title="Tu cocina, un poco más inteligente."
          description="Dime qué necesitas y empezamos."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <Link
              key={t.title}
              to={t.to}
              onClick={() => track("ai_tool_opened", { tool: t.to, from: "home" })}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-sage-soft text-primary">
                <t.icon className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-xl">{t.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                {t.cta}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          5 generaciones gratuitas al mes. Las recetas y cálculos generados son sugerencias y pueden
          requerir ajustes.
        </p>
      </div>
    </section>
  );
}

function Featured() {
  const r = recipes[0]!;
  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
        <img
          src={r.image}
          alt={r.title}
          loading="lazy"
          className="w-full rounded-[1.5rem] object-cover md:aspect-[5/4]"
        />
        <div>
          <p className="eyebrow">Receta de la semana</p>
          <h2 className="mt-3 text-3xl md:text-[2.6rem]">{r.title}</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {r.minutes} min · {r.difficulty} · {r.servings} personas
          </p>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-muted-foreground">
            {r.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/recetas/$slug"
              params={{ slug: r.slug }}
              className="inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ver receta
            </Link>
            <Link
              to="/lives"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Play className="size-4" /> Ver video
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const hazloItems = ["Pan", "Yogurt", "Mermelada", "Mayonesa", "Hummus", "Leche vegetal", "Helado", "Masas"];

function HazloEnCasa() {
  const [selected, setSelected] = useState<string[]>(["Pan", "Yogurt"]);
  const toggle = (i: string) =>
    setSelected((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));

  return (
    <section className="container-page py-16 md:py-20">
      <div className="rounded-[1.75rem] border border-border bg-card p-7 md:p-12">
        <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:gap-14">
          <div>
            <p className="eyebrow">Hazlo en casa</p>
            <h2 className="mt-3 text-3xl md:text-[2.3rem]">¿Qué podrías preparar en casa?</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Marca lo que sueles comprar hecho y te muestro recetas para prepararlo tú mismo.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {hazloItems.map((i) => (
                <Chip key={i} active={selected.includes(i)} onClick={() => toggle(i)}>
                  {i}
                </Chip>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-secondary/70 p-6">
            <p className="eyebrow">Tus mejores oportunidades</p>
            <ul className="mt-4 space-y-3">
              {(selected.length ? selected : ["Pan"]).slice(0, 3).map((s) => (
                <li
                  key={s}
                  className="flex items-center justify-between rounded-xl bg-card px-4 py-3 text-sm"
                >
                  <span>{s} casero</span>
                  <span className="text-muted-foreground">Estimación pendiente</span>
                </li>
              ))}
            </ul>
            <Link
              to="/ai-kitchen/hazlo-en-casa"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground"
            >
              Ver la herramienta completa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AhorroTeaser() {
  return (
    <section className="container-page py-16 md:py-20">
      <div className="grid items-center gap-8 rounded-[1.75rem] bg-primary p-8 text-primary-foreground md:grid-cols-2 md:p-14">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-primary-foreground/70">
            Calculadora
          </p>
          <h2 className="mt-3 text-3xl leading-tight md:text-[2.4rem]">
            ¿Cuánto podrías ahorrar cocinando más en casa?
          </h2>
          <p className="mt-4 leading-relaxed text-primary-foreground/80">
            Responde cuatro preguntas y obtén una estimación de tu gasto actual frente a cocinar en
            casa. Los resultados son estimaciones y pueden variar.
          </p>
          <Link
            to="/ai-kitchen/ahorro"
            onClick={() => track("ai_tool_opened", { tool: "savings", from: "home" })}
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-cream px-6 text-sm font-medium text-ink"
          >
            Calcular mi estimación <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Gasto actual", "Q3,850 / mes"],
            ["Cocinando en casa", "Q2,350 / mes"],
            ["Ahorro estimado", "Q1,500 / mes"],
            ["Al año", "Q18,000"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl bg-cream/10 p-5">
              <p className="text-xs text-primary-foreground/70">{k}</p>
              <p className="mt-2 font-display text-2xl">{v}</p>
            </div>
          ))}
          <p className="col-span-full text-[0.7rem] text-primary-foreground/60">
            Ejemplo ilustrativo. Estimación únicamente.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProximoLive() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-14">
        <div className="relative overflow-hidden rounded-[1.5rem]">
          <img src={liveImg} alt="Próximo live de cocina" loading="lazy" className="w-full object-cover" />
          <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.15em] text-accent-foreground">
            ● Próximo live
          </span>
        </div>
        <div>
          <p className="eyebrow">Cocina conmigo</p>
          <h2 className="mt-3 text-3xl md:text-[2.4rem]">Jueves · 7:00 p.m.</h2>
          <p className="mt-3 text-muted-foreground">
            Preparamos: <span className="text-foreground">Pan casero de todos los días</span>{" "}
            [fecha por confirmar]
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Cocinamos en vivo, paso a paso, y respondo tus dudas mientras tanto.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/lives"
              onClick={() => track("live_clicked", { source: "home" })}
              className="inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground"
            >
              Quiero verlo
            </Link>
            <Link
              to="/lives"
              className="inline-flex h-11 items-center rounded-full border border-border bg-card px-5 text-sm font-medium"
            >
              Recordármelo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Colecciones() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Recetario"
          title="Recetas para disfrutar."
          description="Del pepián de casa al pan de cada día."
        />
        <Link to="/recetas" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
          Ver todas <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.slice(1, 4).map((r) => (
          <RecipeCard key={r.slug} recipe={r} />
        ))}
      </div>
    </section>
  );
}

function QuizTeaser() {
  return (
    <section className="container-page py-16">
      <div className="rounded-[1.75rem] border border-border bg-terracotta-soft p-8 md:p-14">
        <div className="max-w-2xl">
          <p className="eyebrow">6 preguntas</p>
          <h2 className="mt-3 text-3xl md:text-[2.4rem]">¿Thermomix es para mí?</h2>
          <p className="mt-4 leading-relaxed text-foreground/70">
            Cuéntame cómo cocinas y te digo qué funciones podrían serte realmente útiles —o si
            todavía no es el momento.
          </p>
          <Link
            to="/thermomix"
            hash="quiz"
            className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background"
          >
            Hacer el quiz <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ThermomixIntro() {
  return (
    <section className="container-page py-16 md:py-24">
      <SectionHeading
        eyebrow="Conoce Thermomix"
        title="Una sola máquina, muchas tareas de la cocina."
        description="Pesa, tritura, amasa, cocina y remueve. Aquí te explico qué hace y para quién puede tener sentido, sin promesas exageradas."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Qué es", "Un aparato de cocina que combina varias funciones en un solo vaso."],
          ["Qué puedes hacer", "Sopas, masas, salsas, postres, lácteos, comida guatemalteca."],
          ["Cómo se cocina", "Recetas guiadas con tiempo, temperatura y velocidad."],
          ["Para quién", "Depende de cómo cocinas hoy. Eso lo vemos juntos."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border bg-card p-6">
            <p className="font-display text-lg">{t}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
      <Link
        to="/thermomix"
        className="mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium"
      >
        Quiero verla funcionando <ArrowRight className="size-4" />
      </Link>
    </section>
  );
}

function Testimonios() {
  return (
    <section className="container-page py-16">
      <p className="eyebrow">Lo que dicen quienes cocinan conmigo</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-2xl border border-dashed border-border p-6">
            <MessageSquareHeart className="size-5 text-muted-foreground" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              [Espacio reservado para un testimonio real. Pendiente de recibir texto y autorización
              de la persona.]
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function InstagramGrid() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="Instagram" title="Sígueme en la cocina" />
        <a
          href={site.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("instagram_clicked", { source: "home_grid" })}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary"
        >
          <Instagram className="size-4" /> @yousothermomix
        </a>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        {["Receta", "Reel", "Live", "Tip", "Receta", "Reel", "Live", "Tip"].map((label, i) => (
          <div
            key={i}
            className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-border bg-secondary/60 text-xs text-muted-foreground"
          >
            {label} · placeholder
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="grid items-center gap-8 overflow-hidden rounded-[1.75rem] border border-border bg-card md:grid-cols-[0.8fr_1fr]">
        <img
          src={retrato}
          alt={`${site.consultant.name} en su cocina`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="p-8 md:p-12">
          <h2 className="text-3xl leading-tight md:text-[2.4rem]">
            ¿Quieres conocer Thermomix de verdad?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            La mejor forma de entenderla es verla cocinar. Escríbeme y con gusto te enseño cómo
            funciona y resolvemos tus dudas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppLink source="homepage" size="lg">
              Hablemos por WhatsApp
            </WhatsAppLink>
            <Link
              to="/thermomix"
              className="inline-flex h-13 items-center rounded-full border border-border px-6 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Conoce más sobre Thermomix
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="container-page pb-8">
      <div className="rounded-[1.75rem] bg-secondary/70 p-8 text-center md:p-14">
        <h2 className="mx-auto max-w-xl text-3xl md:text-[2.2rem]">
          Una receta nueva puede llegar a tu inbox.
        </h2>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-muted-foreground">
          Recibe nuevas recetas, próximos Lives y trucos para aprovechar mejor tu cocina.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            track("newsletter_signup", { email_provided: Boolean(email) });
            setSent(true);
          }}
          className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            className="h-12 flex-1 rounded-full border border-border bg-card px-5 text-sm outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
          >
            Quiero recibirlas
          </button>
        </form>
        {sent && (
          <p className="mt-4 text-sm text-primary">
            ¡Gracias! Te escribiré cuando publique la próxima receta.
          </p>
        )}
      </div>
    </section>
  );
}
