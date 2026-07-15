import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

const titleSizes = {
  sm: "text-3xl sm:text-4xl",
  md: "text-4xl sm:text-5xl",
  lg: "text-5xl sm:text-6xl",
  xl: "text-6xl sm:text-7xl",
};

type TitleSize = keyof typeof titleSizes;

type TitleProps<T extends ElementType = "h1"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  size?: TitleSize;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Title<T extends ElementType = "h1">({
  as,
  children,
  className,
  size = "md",
  ...props
}: TitleProps<T>) {
  const Component = as ?? "h1";

  return (
    <Component
      className={cn(
        "font-normal leading-none tracking-normal text-neutral-950",
        titleSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
