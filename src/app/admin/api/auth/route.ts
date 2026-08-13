// src/app/api/admin/auth/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { password } = await request.json();
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'HoplaTech2026!';
  
  if (password === ADMIN_PASSWORD) {
    const response = NextResponse.json({ success: true });
    // Définir un cookie HTTP-only sécurisé
    response.cookies.set('admin_password', password, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 heures
      path: '/',
    });
    return response;
  }
  
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}