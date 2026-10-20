import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: boolean;
  as?: "button" | "a";
  href?: string;
}

const base =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden font-mono text-[12px] uppercase tracking-widest2 btn-press tap-target px-7 py-4 focus-visible:outline-2 focus-visible:outline-sky-500 focus-visible:outline-offset-2";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-sky-500 text-white hover:bg-sky-500 hover:shadow-[0_10px_30px_-12px_rgba(243,198,35,0.45)]",
  secondary:
    "border border-bg-blue-700 text-bone hover:border-sky-500 hover:text-sky-500",
  ghost: "text-bone hover:text-sky-500",
};

export function Button({
  children,
  variant = "primary",
  icon = true,
  as = "button",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const content = (
    <>
      <span className="relative">
        {children}
        {variant !== "primary" && (
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-sky-500 transition-all duration-300 ease-premium group-hover:w-full" />
        )}
      </span>
      {icon && (
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-300 ease-premium group-hover:translate-x-1"
          strokeWidth={2.5}
        />
      )}
    </>
  );

  if (as === "a" && href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {content}
    </button>
  );
}
