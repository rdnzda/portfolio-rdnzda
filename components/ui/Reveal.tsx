"use client";

import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article" | "header";
}

/** Apparition discrète (opacité + 12px) à la première entrée dans le viewport. */
export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: RevealProps) {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
