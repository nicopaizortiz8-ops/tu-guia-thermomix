import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  ChefHat,
  Scale,
  CookingPot,
  Wheat,
  Play,
  Instagram,
} from "lucide-react";
import maria from "@/assets/maria-regina.png";
import live from "@/assets/live-italiana.jpg";
import functionsImage from "@/assets/image0.jpeg";
import partsImage from "@/assets/image0 (1).jpeg";
import { newRecipes } from "@/data/new-recipes";
import { site, track } from "@/lib/site";
import { WhatsAppLink } from "./whatsapp-link";
import { ScrollVideo } from "./scroll-video";
import { HomeValueNumbers } from "./home-value";
import { MachineDrawing } from "./machine-drawing";
import { Reveal } from "./ui-bits";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const highlights = [
  { value: '10"', label: "Pantalla multitáctil" },
  { value: "20+", label: "Modos de cocción" },
  { value: "110,000+", label: "Recetas guiadas en Cookidoo" },
  { value: "2.2 L", label: "Capacidad de cocción en el vaso" },
];

export function HomePage() {
  return (
    <div className="lux-home">
      <HomeHero />
      <HomeMachine />
      <section className="lux-film" aria-label="Thermomix en funcionamiento">
        <div className="lux-film-heading">
          <p className="lux-kicker">Thermomix TM7</p>
          <h2>
            Hay que verla <em>para entenderla.</em>
          </h2>
          <ArrowDown aria-hidden="true" />
        </div>
        <ScrollVideo />
      </section>
      <HomeRecipes />
      <HomeStory />
      <HomeValueNumbers />
      <HomeLive />
      <HomeInvitation />
    </div>
  );
}

function HomeHero() {
  return (
    <section className="lux-hero">
      <div className="lux-hero-copy">
        <p className="lux-kicker">
          Yo Uso Thermomix <span aria-hidden="true">—</span> con María Regina
        </p>
        <h1>
          Hay que verla
          <br />
          <em>para entenderla.</em>
        </h1>
        <p className="lux-hero-description">
          Descubre qué hace Thermomix TM7, cómo puede simplificar tu cocina y por qué la mejor forma
          de entenderla es verla funcionando.
        </p>
        <div className="lux-actions">
          <WhatsAppLink source="homepage" size="lg" showIcon={false}>
            Agendar demostración
          </WhatsAppLink>
          <a href="#scroll-video" className="lux-text-link">
            <Play aria-hidden="true" size={14} /> Ver cómo funciona
          </a>
        </div>
        <p className="signature lux-hero-signature">María Regina</p>
      </div>
      <div className="lux-hero-image lux-hero-portrait">
        <img
          src={maria}
          alt="María Regina con su Thermomix TM7"
          width={1129}
          height={1425}
          fetchPriority="high"
        />
        <a href="#home-machine" className="lux-image-caption">
          <span>Thermomix TM7</span>
          <span>
            Todo en uno <ArrowDown size={15} aria-hidden="true" />
          </span>
        </a>
      </div>
      <nav className="lux-hero-nav" aria-label="Explorar Inicio">
        <a href="#home-machine">
          <span>01</span> Conoce Thermomix <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <a href="#home-recipes">
          <span>02</span> Recetas para disfrutar <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <a href="#home-savings">
          <span>03</span> Tu cocina en números <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </nav>
    </section>
  );
}

function HomeMachine() {
  const [open, setOpen] = useState(false);
  return (
    <section id="home-machine" className="lux-machine lux-section">
      <div className="lux-section-heading">
        <div>
          <p className="lux-kicker">Todo en uno</p>
          <h2>
            Todo esto,
            <br />
            <em>en una sola máquina.</em>
          </h2>
        </div>
        <p>
          Thermomix reúne preparación, cocción, báscula, temperatura, cocina guiada, entre otras
          cosas, en un solo equipo.
        </p>
      </div>
      <div className="lux-functions">
        {[
          { icon: Scale, text: "Pesa" },
          { icon: ChefHat, text: "Corta · Mezcla" },
          { icon: Wheat, text: "Amasa" },
          { icon: CookingPot, text: "Cocina · Vapor · Guía" },
        ].map(({ icon: Icon, text }) => (
          <div key={text}>
            <Icon size={28} strokeWidth={1.2} aria-hidden="true" />
            <span>{text}</span>
          </div>
        ))}
      </div>
      <div className="lux-function-details">
        {[
          ["Prepara", "Pesa, corta, tritura y mezcla los ingredientes en el mismo vaso."],
          ["Cocina", "Controla tiempo, temperatura y velocidad en cada paso de la receta."],
          ["Amasa", "Masas de pan, pizza y repostería sin amasar a mano."],
          ["Emulsiona", "Salsas, aderezos y cremas con textura estable."],
          ["Cocina al vapor", "Varias preparaciones al mismo tiempo con el Varoma."],
          ["Cocina guiada", "La receta aparece en pantalla y te acompaña paso a paso."],
        ].map(([title, description]) => (
          <div key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
      <div className="lux-specs-panel">
        <div className="lux-specs-title">
          <MachineDrawing className="h-20 w-16" />
          <div>
            <p className="lux-kicker">Thermomix TM7</p>
            <h3>
              Lo esencial <em>de un vistazo.</em>
            </h3>
          </div>
          <button onClick={() => setOpen(true)} className="lux-text-link">
            Ver todas las funciones <ArrowUpRight size={15} aria-hidden="true" />
          </button>
        </div>
        <div className="lux-specs">
          {highlights.map((item) => (
            <div key={item.label}>
              <p>{item.value}</p>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="lux-specs-foot">
          <span>Báscula integrada</span>
          <span>Motor más silencioso</span>
          <span>Vaso con aislamiento térmico</span>
        </div>
      </div>
      <div className="lux-function-graphics">
        <figure>
          <figcaption>Más de 20 funciones de Thermomix TM7</figcaption>
          <img
            src={functionsImage}
            alt="Funciones de Thermomix TM7: pesa, amasa, turbo, prelavado, tritura, cocina huevos y arroz, hierve, controla la temperatura, espesa, fermenta, cocción lenta, carameliza, cocina al vacío, pela, trocea, ralla, rebana, espiraliza, cocina al vapor, cocina sin tapa, altas temperaturas, modo manual y velocidad cuchara."
            loading="lazy"
            width={1206}
            height={1497}
          />
        </figure>
        <figure>
          <figcaption>Componentes de Thermomix TM7</figcaption>
          <img
            src={partsImage}
            alt="Despiece de Thermomix TM7 con tapa, Varoma, cestillo, cuchillas, vaso y base con pantalla, junto a sus funciones."
            loading="lazy"
            width={1206}
            height={1509}
          />
        </figure>
      </div>
      <div id="home-how-it-works" className="lux-guided-cooking">
        <div>
          <p className="lux-kicker">Cocina guiada</p>
          <h3>
            No tienes que
            <br />
            <em>saberte la receta.</em>
          </h3>
        </div>
        <div>
          <p>
            Cookidoo es la plataforma oficial de recetas guiadas de Thermomix. La receta aparece en
            la pantalla del equipo y tú sigues los pasos: ingredientes, cantidades, tiempo,
            temperatura y velocidad.
          </p>
          <WhatsAppLink source="demonstration" variant="outline" className="mt-6">
            Conocer Cookidoo
          </WhatsAppLink>
          <a href="#scroll-video" className="lux-text-link mt-4">
            Ver cómo funciona <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto bg-warm-white p-4">
          <DialogTitle className="sr-only">Todas las funciones de Thermomix TM7</DialogTitle>
          <img src={functionsImage} alt="Más de 20 funciones de Thermomix TM7" className="w-full" />
          <img src={partsImage} alt="Componentes de Thermomix TM7" className="mt-4 w-full" />
        </DialogContent>
      </Dialog>
    </section>
  );
}

function HomeRecipes() {
  return (
    <section id="home-recipes" className="lux-recipes lux-section">
      <div className="lux-section-heading">
        <div>
          <p className="lux-kicker">Recetario</p>
          <h2>
            Recetas <em>para disfrutar.</em>
          </h2>
        </div>
        <Link to="/recetas" className="lux-text-link">
          Ver recetas <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <div className="lux-recipe-grid">
        {newRecipes.map((recipe, index) => (
          <Link
            key={recipe.slug}
            to="/recetas/$slug"
            params={{ slug: recipe.slug }}
            className="lux-recipe"
          >
            <div className="lux-recipe-image">
              <img
                src={recipe.image}
                alt={recipe.title}
                width={1536}
                height={1024}
                loading="lazy"
              />
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="lux-recipe-title">
              <h3>{recipe.title}</h3>
              <ArrowUpRight size={19} aria-hidden="true" />
            </div>
            <p>{recipe.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function HomeStory() {
  return (
    <section className="lux-story">
      <div className="lux-story-photo">
        <img
          src={maria}
          alt="María Regina con Thermomix"
          width={1129}
          height={1425}
          loading="lazy"
        />
      </div>
      <Reveal className="lux-story-copy">
        <p className="lux-kicker">María Regina</p>
        <h2>
          Yo tampoco entendia
          <br />
          <em>Thermomix hasta probarla.</em>
        </h2>
        <p>
          Había escuchado hablar de Thermomix, pero no fue hasta que cociné con ella que entendí por
          qué podía hacer tanta diferencia.
        </p>
        <blockquote>Por eso prefiero enseñártela primero.</blockquote>
        <WhatsAppLink source="demonstration" size="lg" showIcon={false}>
          Quiero una demostración
        </WhatsAppLink>
      </Reveal>
    </section>
  );
}

function HomeLive() {
  return (
    <section className="lux-live lux-section">
      <div className="lux-section-heading">
        <div>
          <p className="lux-kicker">Cocina conmigo</p>
          <h2>
            Nos vemos <em>en la cocina.</em>
          </h2>
        </div>
        <p>
          En los Lives puedes verla funcionando de verdad, ver cómo cocino con ella y hacer
          preguntas.
        </p>
      </div>
      <div className="lux-live-card">
        <a
          href={site.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="lux-live-image"
          aria-label="Verlo en Instagram"
          onClick={() => track("instagram_clicked", { source: "home_live_hero" })}
        >
          <img
            src={live}
            alt="Cocina italiana preparada en casa"
            width={1456}
            height={1088}
            loading="lazy"
          />
          <span>
            <Play size={22} aria-hidden="true" />
          </span>
        </a>
        <div className="lux-live-copy">
          <p className="lux-kicker">Próximo live</p>
          <h3>Consulta en mi pagina de instagram</h3>
          <div className="lux-live-time">
            <span>Martes</span>
            <span>6:00 PM</span>
            <span>con María Regina</span>
          </div>
          <div className="lux-actions">
            <WhatsAppLink source="lives" showIcon={false}>
              Quiero recibir el enlace
            </WhatsAppLink>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="lux-text-link"
              onClick={() => track("instagram_clicked", { source: "home_live_hero" })}
            >
              <Instagram size={16} aria-hidden="true" /> Verlo en Instagram
            </a>
          </div>
          <div className="lux-live-archive">
            <span>Lives anteriores</span>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("instagram_clicked", { source: "home_lives" })}
              className="lux-text-link"
            >
              Ver en Instagram <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeInvitation() {
  return (
    <section className="lux-invitation">
      <MachineDrawing className="h-24 w-20" />
      <p className="lux-kicker">con María Regina</p>
      <h2>
        No necesitas que te lo expliquen más.
        <br />
        <em>Necesitas verla.</em>
      </h2>
      <p>
        María Regina te enseña cómo funciona, responde tus dudas y te ayuda a entender si Thermomix
        tiene sentido para tu cocina.
      </p>
      <WhatsAppLink source="homepage" size="lg" showIcon={false}>
        Agendar demostración
      </WhatsAppLink>
      <p className="signature">María Regina</p>
    </section>
  );
}
