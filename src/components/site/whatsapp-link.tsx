import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { track, whatsappUrl, type WhatsAppSource } from "@/lib/site";

type Props = {
  source: WhatsAppSource;
  extra?: string;
  children?: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
};

const variants = {
  solid: "bg-ink text-warm-white hover:bg-espresso",
  light: "bg-warm-white text-ink hover:bg-ivory",
  outline: "border border-ink/25 text-foreground hover:border-ink",
  ghost: "text-foreground hover:text-cognac",
};

const sizes = {
  sm: "h-10 px-4 text-[0.7rem]",
  md: "h-12 px-6 text-[0.76rem]",
  lg: "h-14 px-8 text-[0.8rem]",
};

export function WhatsAppLink({
  source,
  extra,
  children = "Hablar con María Regina",
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
        "inline-flex items-center justify-center gap-2 rounded-sm font-medium uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0",
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
