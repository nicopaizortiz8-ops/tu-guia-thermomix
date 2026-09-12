import { cn } from "@/lib/utils";
import { Tm7Icon } from "./tm7-icon";

/** Shared TM7 illustration used throughout the site. */
export function MachineDrawing({ className }: { className?: string }) {
  return <Tm7Icon className={cn("machine-drawing", className)} />;
}
