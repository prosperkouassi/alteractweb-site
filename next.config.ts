import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // ✅ OBLIGATOIRE pour Hostinger
  images: {
    unoptimized: true, // ✅ Hostinger ne supporte pas l'optimisation d'images par défaut
  },
  typedRoutes: true, // ✅ ACTIVE LA VÉRIFICATION DES ROUTES TYPÉES (syntaxe Next.js 16)
};

export default nextConfig;