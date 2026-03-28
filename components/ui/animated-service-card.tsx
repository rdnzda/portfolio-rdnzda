"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { forwardRef, useRef, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { CheckCircle2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

// ---------- Service Card Body ----------

export interface ServiceCardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  badge?: string;
  scheme?: "plain" | "accented";
  cardCss?: React.CSSProperties;
}

export const ServiceCardBody = forwardRef<HTMLDivElement, ServiceCardBodyProps>(
  ({ icon: Icon, title, description, features, badge, scheme = "plain", cardCss, className, ...rest }, ref) => {
    const isAccent = scheme === "accented";

    return (
      <Card
        ref={ref}
        style={cardCss}
        className={cn(
          "flex flex-col h-full rounded-3xl border-0 p-8",
          isAccent ? "" : "bg-card text-card-foreground",
          className
        )}
        {...rest}
      >
        <CardHeader className="p-0">
          {/* Icon */}
          <div
            className={cn(
              "w-11 h-11 flex items-center justify-center mb-5 rounded-xl transition-all duration-300",
              isAccent ? "bg-white/15" : "border border-foreground/20"
            )}
          >
            <Icon
              className="w-5 h-5"
              style={{ color: isAccent ? "var(--on-accent-foreground)" : "var(--foreground)" }}
            />
          </div>

          {/* Badge */}
          {badge && (
            <p
              className="text-[10px] uppercase tracking-widest font-bold mb-1"
              style={{ color: isAccent ? "var(--on-accent-muted)" : "var(--foreground)", opacity: isAccent ? 0.6 : 0.4 }}
            >
              {badge}
            </p>
          )}

          {/* Title */}
          <CardTitle
            className="text-lg text-left font-syncopate uppercase tracking-wide leading-snug"
            style={{ color: isAccent ? "var(--on-accent-foreground)" : "var(--foreground)" }}
          >
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="mt-4 p-0">
          <p
            className="text-sm leading-relaxed text-left"
            style={{
              color: isAccent ? "var(--on-accent-foreground)" : "var(--foreground)",
              opacity: isAccent ? 0.65 : 0.55,
            }}
          >
            {description}
          </p>
        </CardContent>

        <CardFooter className="p-0 mt-auto pt-6">
          <ul className="space-y-2.5 w-full">
            {features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm"
                style={{
                  color: isAccent ? "var(--on-accent-foreground)" : "var(--foreground)",
                  opacity: isAccent ? 0.85 : 0.5,
                }}
              >
                <CheckCircle2
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: isAccent ? "var(--on-accent-foreground)" : "var(--foreground)", opacity: isAccent ? 1 : 0.4 }}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardFooter>
      </Card>
    );
  }
);
ServiceCardBody.displayName = "ServiceCardBody";

// ---------- Reveal Container ----------

export interface RevealServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  base: React.ReactNode;
  overlay: React.ReactNode;
}

export const RevealServiceCard = forwardRef<HTMLDivElement, RevealServiceCardProps>(
  ({ base, overlay, className, ...rest }, ref) => {
    const holderRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const assignRef = useCallback(
      (el: HTMLDivElement | null) => {
        holderRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
      },
      [ref]
    );

    // Start fully hidden — no visible circle at rest
    const startClip = "circle(0px at 56px 56px)";
    const expandClip = "circle(160% at 56px 56px)";

    useGSAP(() => {
      gsap.set(overlayRef.current, { clipPath: startClip });
    }, { scope: holderRef });

    const reveal = () => {
      gsap.to(overlayRef.current, { clipPath: expandClip, duration: 0.75, ease: "expo.inOut" });
    };
    const conceal = () => {
      gsap.to(overlayRef.current, { clipPath: startClip, duration: 0.9, ease: "power4.out" });
    };

    return (
      <div
        ref={assignRef}
        onMouseEnter={reveal}
        onMouseLeave={conceal}
        className={cn(
          "relative w-full h-full overflow-hidden rounded-3xl border border-foreground/10 cursor-pointer",
          "hover:border-foreground/30 transition-colors duration-300",
          className
        )}
        {...rest}
      >
        {/* Base layer */}
        <div className="h-full">{base}</div>

        {/* Overlay — fully hidden until hover */}
        <div ref={overlayRef} className="absolute inset-0 h-full w-full">
          {overlay}
        </div>
      </div>
    );
  }
);
RevealServiceCard.displayName = "RevealServiceCard";
