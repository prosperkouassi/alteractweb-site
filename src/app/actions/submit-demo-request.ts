// src/app/actions/submit-demo-request.ts
'use server';

import { redirect } from 'next/navigation';
import { pool } from '@/lib/db';
import { revalidatePath } from 'next/cache';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  whatsapp: string;
  sector: string;
  solution: string;
  message: string;
  consent: boolean;
}

export async function submitDemoRequest(data: FormData) {
  // Validation des champs obligatoires
  if (!data.firstName || !data.lastName || !data.email || !data.consent) {
    throw new Error('Les champs obligatoires sont manquants.');
  }
  
  if (!data.email.includes('@')) {
    throw new Error('Adresse email invalide.');
  }

  try {
    const query = `
      INSERT INTO hopla_leads 
        (first_name, last_name, company_name, email, phone, whatsapp, sector, solution_slug, message, status, source, consent_at, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'new', 'website_contact_form', NOW(), NOW())
    `;

    const values = [
      data.firstName,
      data.lastName,
      data.company || null,
      data.email,
      data.phone || null,
      data.whatsapp || null,
      data.sector || null,
      data.solution || null,
      data.message || null
    ];

    // Exécution de l'insertion
    await pool.execute(query, values);
    
    // Rafraîchissement du dashboard admin
    revalidatePath('/admin/prospects'); 
    
    // ✅ Redirection vers la page merci après succès
    redirect('/merci'); 
    
  } catch (error: any) {
    // ⚠️ CRITIQUE : Si c'est une redirection Next.js, on ne doit PAS l'attraper !
    // On laisse Next.js gérer la redirection nativement
    if (error?.digest?.startsWith('NEXT_REDIRECT')) {
      throw error;
    }

    console.error('Erreur lors de l\'enregistrement du prospect:', error);
    throw new Error('Impossible d\'enregistrer votre demande. Veuillez réessayer plus tard.');
  }
}