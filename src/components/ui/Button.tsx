import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "gold" | "outlineLight" | "outlineDark" | "ghostLight";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 ease-brand focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest-800 text-cream-50 shadow-soft hover:bg-forest-900 hover:-translate-y-0.5",
  gold: "bg-gold-400 text-forest-900 shadow-soft hover:bg-gold-300 hover:-translate-y-0.5",
  outlineDark:
    "border border-forest-700/40 text-forest-800 hover:bg-forest-800 hover:text-cream-50",
  outlineLight:
    "border border-cream-100/40 text-cream-50 hover:bg-cream-50 hover:text-forest-900",
  ghostLight: "text-cream-50/90 hover:text-gold-300",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
  } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const external = /^https?:\/\//.test(props.href);
    if (external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
