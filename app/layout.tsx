import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Syncopate } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import { Analytics } from "@vercel/analytics/next"

// --- CONFIGURATION DES FONTS ---
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syncopate = Syncopate({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-syncopate',
});

const switzer = localFont({
  src: "../public/fonts/Switzer-Variable.woff2", 
  display: "swap",
  variable: "--font-switzer",
});

// --- SEO & METADATA ---
export const metadata: Metadata = {
  metadataBase: new URL('https://rdnzda.com'),
  title: {
    default: "Redean Akunzada | RDNZDA - Étudiant en informatique, cap sur la cybersécurité",
    template: "%s | RDNZDA"
  },
  description: "Étudiant en L3 Informatique à l'Université d'Orléans, en route vers la cybersécurité. Recherche un stage en cybersécurité dès mai 2027, puis une alternance bac+5.",
  keywords: ["Akunzada Redean", "RDNZDA", "Redean Akunzada", "Étudiant informatique Orléans", "Stage cybersécurité", "Alternance cybersécurité", "Licence informatique"],
  authors: [{ name: "Redean Akunzada", url: "https://rdnzda.com" }],
  creator: "Redean Akunzada",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "Akunzada Redean | RDNZDA",
    description: "Étudiant en L3 Informatique à Orléans, en route vers la cybersécurité.",
    url: "https://rdnzda.com",
    siteName: "RDNZDA Portfolio",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png", 
        width: 1200,
        height: 630,
        alt: "RDNZDA Portfolio Cover",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// --- CONFIGURATION MOBILE (Theme Color) ---
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Redean Akunzada",
  "alternateName": "RDNZDA",
  "url": "https://rdnzda.com",
  "jobTitle": "Creative Developer",
  "image": "https://rdnzda.com/opengraph-image.png",
  "sameAs": [
    "https://www.linkedin.com/in/redean-akunzada/",
    "https://github.com/rdnzda"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${switzer.variable} ${geistMono.variable} ${syncopate.variable} antialiased selection:bg-[#C084FC] selection:text-black`}
      >
        {/* Script JSON-LD pour le SEO Sémantique */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}