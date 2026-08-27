import { MessageCircle } from "lucide-react";
import { track, whatsappUrl } from "@/lib/site";

/**
 * Sitewide WhatsApp presence: a small floating action on desktop,
 * a full-width sticky bar on mobile (where most traffic lands from Instagram).
 */
export function WhatsAppFloating() {
  return (
    <>
      <a
        href={whatsappUrl("nav")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("whatsapp_clicked", { whatsapp_clicked_source: "floating_desktop" })}
        aria-label="Hablar con María Regina por WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden size-14 items-center justify-center rounded-full bg-whatsapp text-warm-white shadow-lift transition-transform duration-300 hover:-translate-y-1 sm:inline-flex"
      >
        <MessageCircle className="size-6" />
      </a>

      <a
        href={whatsappUrl("homepage")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("whatsapp_clicked", { whatsapp_clicked_source: "sticky_mobile" })}
        className="fixed inset-x-0 bottom-0 z-40 flex h-14 items-center justify-center gap-2 bg-ink text-[0.78rem] font-medium uppercase tracking-[0.2em] text-warm-white sm:hidden"
      >
        <MessageCircle className="size-4" aria-hidden />
        Agendar demostración
      </a>
    </>
  );
}
