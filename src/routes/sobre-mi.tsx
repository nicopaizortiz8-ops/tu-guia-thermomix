import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import mariaReginaImg from "@/assets/maria-regina.png";
import { site, track } from "@/lib/site";
import { WhatsAppLink } from "@/components/site/whatsapp-link";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: `Sobre mí — ${site.consultant.name}, consultora Thermomix | Yo Uso Thermomix` },
      {
        name: "description",
        content:
          "Conoce a la consultora independiente detrás de Yo Uso Thermomix: cómo cocina, por qué comparte recetas y cómo acompaña a quienes quieren aprender.",
      },
      { property: "og:title", content: "Sobre mí | Yo Uso Thermomix" },
      { property: "og:description", content: "La persona detrás de las recetas y los Lives." },
    ],
  }),
  component: SobreMi,
});

function SobreMi() {
  return (
    <div className="container-page py-12 md:py-20">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1fr] md:gap-16">
        <img
          src={mariaReginaImg}
          alt={`${site.consultant.name}, consultora independiente de Thermomix`}
          loading="lazy"
          className="w-full rounded-[1.5rem] object-cover"
        />
        <div>
          <p className="eyebrow">Sobre mí</p>
          <h1 className="mt-3 text-[2.2rem] leading-tight md:text-[3rem]">
            Hola, soy {site.consultant.name} 👋
          </h1>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Soy consultora independiente de Thermomix en {site.consultant.location}. Empecé
              compartiendo en Instagram lo que cocinaba en casa y hoy es una comunidad que cocina
              conmigo cada semana.
            </p>
            <p>[Placeholder: historia personal, años cocinando y por qué empezó todo.]</p>
            <p>
              Me gusta la cocina de todos los días: la que se resuelve rápido, sabe a casa y no
              obliga a lavar media cocina. Comparto recetas, trucos y Lives donde probamos ideas
              nuevas y resolvemos dudas en vivo.
            </p>
            <p>
              Si estás considerando una Thermomix, mi trabajo no es convencerte: es enseñarte cómo
              funciona de verdad para que decidas con calma.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("instagram_clicked", { source: "about" })}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground"
            >
              <Instagram className="size-4" /> Sígueme en Instagram
            </a>
            <WhatsAppLink source="about" variant="outline">
              Escríbeme
            </WhatsAppLink>
            <Link
              to="/lives"
              className="inline-flex h-11 items-center rounded-full border border-border bg-card px-5 text-sm font-medium"
            >
              Ver mis Lives
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
