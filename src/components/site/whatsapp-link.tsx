import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { track, whatsappUrl, type WhatsAppSource } from "@/lib/site";

type Props = {
  source: WhatsAppSource;
  extra?: string;
  children?: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
};

const variants = {
  solid: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
  outline: "border border-border bg-card text-foreground hover:bg-secondary",
  ghost: "text-foreground hover:bg-secondary",
};

const sizes = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export function WhatsAppLink({
  source,
  extra,
  children = "Hablar por WhatsApp",
  className,
  variant = "solid",
  size = "md",
  showIcon = true,
}: Props) {
  return (
    <a
      href={whatsappUrl(source, extra)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_clicked", { whatsapp_clicked_source: source })}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {showIcon && <MessageCircle className="size-4" aria-hidden />}
      {children}
    </a>
  );
}
