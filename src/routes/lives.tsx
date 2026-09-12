import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Play, ArrowUpRight } from "lucide-react";
import liveImg from "@/assets/receta-pan.jpg";
import { MachineDrawing } from "@/components/site/machine-drawing";
import { recipes } from "@/data/recipes";
import { site, track } from "@/lib/site";
import { SectionHeading } from "@/components/site/ui-bits";
import { WhatsAppLink } from "@/components/site/whatsapp-link";

export const Route = createFileRoute("/lives")({
  head: () => ({
    meta: [
      { title: "Cocina conmigo — Lives de cocina | Yo Uso Thermomix" },
      {
        name: "description",
        content:
          "Cocinamos en vivo los martes cada 15 días a las 6:00 p. m., hora de Guatemala. La receta varía según la semana.",
      },
      { property: "og:title", content: "Cocina conmigo — Lives | Yo Uso Thermomix" },
      { property: "og:description", content: "Lives de cocina en vivo y grabados." },
    ],
  }),
  component: Lives,
});

function Lives() {
  return (
    <div className="lives-page container-page py-12 md:py-20">
      <div className="lives-heading">
        <SectionHeading
          eyebrow="Cocina conmigo"
          title="Nos vemos en la cocina."
          description={`${site.liveSchedule}, hora de Guatemala. Cocinamos una receta diferente en cada encuentro y respondo dudas mientras avanzamos.`}
        />
        <MachineDrawing className="lives-heading-drawing" />
      </div>

      <div className="live-feature mt-12">
        <div className="live-feature-image relative overflow-hidden">
          <img src={liveImg} alt="Próximo live" loading="lazy" className="w-full object-cover" />
          <span className="live-status absolute left-4 top-4 rounded-full bg-accent px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.15em] text-accent-foreground">
            ● Próximo live
          </span>
        </div>
        <div className="live-feature-copy">
          <p className="eyebrow">Cocina en vivo · hora de Guatemala</p>
          <h2 className="mt-3 text-3xl">{site.liveSchedule}</h2>
          <p className="mt-3 text-muted-foreground">
            {site.liveRecipe}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("live_clicked", { source: "lives_page" })}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground"
            >
              <Instagram className="size-4" /> Quiero verlo
            </a>
            <WhatsAppLink source="lives" variant="outline">
              Recordármelo
            </WhatsAppLink>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Los Lives se transmiten en Instagram {site.social.instagramHandle}.
          </p>
        </div>
      </div>

      <div className="live-archive-heading mt-20">
        <h2 className="text-2xl md:text-3xl">Lives anteriores</h2>
        <span aria-hidden="true" />
      </div>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.slice(1, 7).map((r) => (
          <a
            key={r.slug}
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("instagram_clicked", { source: "lives_past" })}
            className="live-archive-card group block"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={r.image}
                alt={r.title}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="live-play inline-flex size-14 items-center justify-center rounded-full bg-background/85 backdrop-blur">
                  <Play className="size-5" />
                </span>
              </span>
            </div>
            <h3 className="mt-4 font-display text-xl">Live: {r.title}</h3>
            <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary">
              <Instagram className="size-4" /> Ver en Instagram{" "}
              <ArrowUpRight className="ml-auto size-4" />
            </p>
          </a>
        ))}
      </div>

      <div className="live-invitation mt-20 rounded-[1.5rem] bg-secondary/70 p-8 md:p-12">
        <MachineDrawing className="live-invitation-drawing" />
        <h2 className="max-w-xl text-2xl md:text-3xl">
          ¿Quieres que cocinemos algo específico en el próximo Live?
        </h2>
        <WhatsAppLink source="lives" className="mt-6" size="lg">
          Escríbeme tu idea
        </WhatsAppLink>
      </div>
    </div>
  );
}
