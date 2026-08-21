import { WhatsAppLink } from "./whatsapp-link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export default function HotspotCTA({
  message = "Quiero mi Thermomix",
  className,
  children,
}: {
  message?: string;
  className?: string;
  children?: ReactNode;
}) {
  // small badge that can be placed absolutely over images or inline
  return (
    <div className={cn("hotspot-cta", className)}>
      <WhatsAppLink source="purchase_interest" extra={message} variant="solid" size="sm">
        {children ?? "Quiero mi Thermomix"}
      </WhatsAppLink>
      <style>{`
        .hotspot-cta { position: relative; display: inline-block; }
        .hotspot-cta > a { position: relative; z-index: 10; }
        .hotspot-cta.fixed-badge { position: absolute; right: 10px; bottom: 10px; }
        .hotspot-cta .badge { box-shadow: 0 6px 18px rgba(28,27,25,0.12); }
        @media (max-width: 640px) { .hotspot-cta.fixed-badge { right: 8px; bottom: 8px; } }
      `}</style>
    </div>
  );
}
