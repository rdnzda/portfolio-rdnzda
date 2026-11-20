"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface BackgroundLayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

const NAV_LINKS = [
  { id: "projets", label: "Projets" },
  { id: "services", label: "Compétences" },
  { id: "biographie", label: "Biographie" },
  { id: "contact", label: "Contact" },
];

export default function BackgroundLayout({ children, showNav = true }: BackgroundLayoutProps) {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-clip font-sans">
      {showNav && (
        <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-[var(--nav-bg)] backdrop-blur-md">
          <div className="max-w-6xl mx-auto h-14 px-4 sm:px-8 flex items-center justify-between">
            <Link href="#home" className="font-mono text-sm font-medium text-foreground">
              rdnzda<span className="text-accent">_</span>
            </Link>

            {/* Desktop */}
            <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.id}
                    href={`#${link.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`text-sm transition-colors underline-offset-[6px] ${
                      isActive ? "text-foreground underline decoration-accent decoration-2" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="/CV_Redean_Akunzada.pdf"
                download
                className="text-sm text-foreground border border-foreground px-3 py-1.5 hover:bg-foreground hover:text-background transition-colors"
              >
                CV (PDF)
              </a>
            </nav>

            {/* Mobile trigger */}
            <button
              onClick={() => setIsMobileNavOpen((open) => !open)}
              className="md:hidden text-sm text-foreground border border-border px-3 py-1.5"
              aria-expanded={isMobileNavOpen}
              aria-controls="mobile-nav"
            >
              {isMobileNavOpen ? "Fermer" : "Menu"}
            </button>
          </div>

          {/* Mobile menu */}
          <nav
            id="mobile-nav"
            aria-label="Navigation mobile"
            className={`md:hidden border-t border-border bg-background ${isMobileNavOpen ? "block" : "hidden"}`}
          >
            <ul className="px-4 py-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id} className="border-b border-border last:border-b-0">
                  <Link
                    href={`#${link.id}`}
                    onClick={() => setIsMobileNavOpen(false)}
                    className={`block py-3 text-lg ${
                      activeSection === link.id ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      )}

      {/* Quadrillage de fond, façon papier millimétré */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "center top",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
