import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type ButtonSize = "icon-sm" | "sm" | "md" | "lg";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children?: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#4F6F52] text-white hover:bg-[#3E5A41] shadow-sm",
  secondary:
    "bg-[#B08D57] text-white hover:bg-[#9B7A47] shadow-sm",
  outline:
    "border border-[#D8D8D8] bg-white text-[#1B1B1B] hover:bg-gray-50",
  ghost:
    "bg-transparent text-[#1B1B1B] hover:bg-neutral-100",
};

const sizes: Record<ButtonSize, string> = {
  "icon-sm": "h-9 w-9 px-0 py-0",
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4F6F52] focus:ring-offset-2",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}