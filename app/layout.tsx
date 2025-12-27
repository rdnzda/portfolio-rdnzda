import type { Metadata } from "next";
import { Geist, Geist_Mono, Syncopate} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const switzer = localFont({
  src: "../public/fonts/Switzer-Variable.woff2", // Vérifie bien le chemin !
  display: "swap",
  variable: "--font-switzer", // On crée une variable CSS
});

const syncopate = Syncopate({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-syncopate',
});

export const metadata: Metadata = {
  title: "Akunzada Redean | Portfolio",
  description: "Portfolio de Akunzada Redean - Développeur & Créateur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${switzer.variable} ${geistMono.variable} ${syncopate.variable} antialiased text-white`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}