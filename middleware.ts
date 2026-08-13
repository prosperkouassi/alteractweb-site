// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Vérifier si on accède à une route admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const password = request.cookies.get('admin_password')?.value;
    
    // Mot de passe sécurisé (à changer en production !)
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'HoplaTech2026!';
    
    if (password !== ADMIN_PASSWORD) {
      // Rediriger vers la page de login si pas authentifié
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  return NextResponse.next();
}

// Configurer les routes protégées
export const config = {
  matcher: ['/admin/:path*'],
};