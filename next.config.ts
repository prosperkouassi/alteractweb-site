import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // ✅ OBLIGATOIRE pour Hostinger
  images: {
    unoptimized: true, // ✅ Hostinger ne supporte pas l'optimisation d'images par défaut
  },
  experimental: {
    typedRoutes: false, // ✅ DÉSACTIVE LA GÉNÉRATION DE TYPES QUI BLOQUE LE BUILD
  },
};

export default nextConfig;