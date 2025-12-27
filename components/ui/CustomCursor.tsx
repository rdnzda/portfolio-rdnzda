"use client";

import { useEffect, useRef } from "react";

// --- CONFIGURATION ---
const CIRCLE_COUNT = 3;
const DELAY_FACTOR = 0.12;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circlesRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const positions = useRef(Array(CIRCLE_COUNT).fill({ x: 0, y: 0 }));
  const mouse = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const manageMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
            isHovering.current = true;
        } else {
            isHovering.current = false;
        }
    };

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
      }

      positions.current[0] = { x: mouse.current.x, y: mouse.current.y };

      for (let i = 1; i < CIRCLE_COUNT; i++) {
        const leader = positions.current[i - 1];
        const follower = positions.current[i];
        
        positions.current[i] = {
            x: follower.x + (leader.x - follower.x) * DELAY_FACTOR,
            y: follower.y + (leader.y - follower.y) * DELAY_FACTOR
        };
      }

      circlesRefs.current.forEach((circle, i) => {
         if (circle) {
           const { x, y } = positions.current[i];
           const scale = isHovering.current ? 1.5 : 1;
           circle.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
         }
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const getCircleStyle = (index: number) => {
    const size = 20 + (index * 15); 
    const opacity = 1 - (index * 0.35);

    return {
      width: `${size}px`,
      height: `${size}px`,
      opacity: opacity,
      zIndex: 9990 - index,
    };
  };

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999]">
      
      {/* 1. LE POINT CENTRAL (DOT) */}
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999]"
        style={{
            transform: 'translate3d(-100px, -100px, 0)'
        }}
      />

      {/* 2. LES 3 ANNEAUX (RINGS) */}
      {[...Array(CIRCLE_COUNT)].map((_, i) => {
        const style = getCircleStyle(i);
        return (
          <div
            key={i}
            // --- CORRECTION ICI ---
            // On utilise des accolades { } pour ne rien retourner (void)
            ref={(el) => { circlesRefs.current[i] = el; }} 
            className="fixed top-0 left-0 rounded-full border border-white bg-transparent mix-blend-difference pointer-events-none transition-opacity duration-300"
            style={{
              width: style.width,
              height: style.height,
              opacity: style.opacity,
              zIndex: style.zIndex,
              borderWidth: '1px',
              transform: 'translate3d(-100px, -100px, 0)'
            }}
          />
        );
      })}
    </div>
  );
}