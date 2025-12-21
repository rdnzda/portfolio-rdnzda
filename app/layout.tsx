import type { Metadata } from "next";
import { Geist, Geist_Mono, Syncopate} from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "RDNZDA | Portfolio",
  description: "Portfolio de RDNZDA - Développeur & Créateur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syncopate.variable} antialiased bg-[#050505] text-white`}
      >
        {children}
      </body>
    </html>
  );
}