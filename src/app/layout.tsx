// src/app/layout.tsx
import type { Metadata } from "next";
import { Urbanist, Kanit, Outfit } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ 
  subsets: ["latin"], 
  variable: "--font-urbanist",
  display: 'swap',
});

const kanit = Kanit({ 
  subsets: ["latin"], 
  weight: ['300', '400', '500', '600'],
  variable: "--font-kanit",
  display: 'swap',
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  weight: ['800'],
  variable: "--font-outfit",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "HoplaTech - Logiciels Métiers & SaaS",
    template: "%s | HoplaTech" // Ajoute automatiquement "| HoplaTech" aux titres des pages enfants
  },
  description: "Solutions de gestion locative, scolaire et développement sur mesure en Côte d'Ivoire.",
  metadataBase: new URL('https://alteractweb.com'), // ✅ Base URL pour les liens canoniques et OG absolus
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    siteName: "HoplaTech",
    locale: "fr_CI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${urbanist.variable} ${kanit.variable} ${outfit.variable} antialiased bg-white dark:bg-brand-dark text-brand-dark dark:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}