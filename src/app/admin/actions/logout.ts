// src/app/admin/actions/logout.ts
'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_password');
  
  // Redirection vers l'accueil après suppression du cookie
  redirect('/');
}