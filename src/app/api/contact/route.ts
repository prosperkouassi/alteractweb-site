// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'srv1795.hstgr.io',
  user: process.env.DB_USER || 'u486119168_hopla_app1',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'u486119168_hopla_db',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

export async function POST(request: NextRequest) {
  let connection;
  
  try {
    const body = await request.json();
    
    // Mapping exact des champs du formulaire vers la BDD
    const { 
      prenom,        // Prénom *
      nom,           // Nom *
      email,         // Email professionnel *
      telephone,     // Téléphone
      entreprise,    // Entreprise / Établissement
      secteur,       // Secteur d'activité
      solution,      // Solution qui vous intéresse
      message,       // Votre message
      consent        // Checkbox RGPD (boolean)
    } = body;

    // Validation des champs obligatoires
    if (!prenom || !nom || !email || !message || !consent) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires et accepter la politique de confidentialité.' },
        { status: 400 }
      );
    }

    // Connexion MySQL
    connection = await mysql.createConnection(dbConfig);

    // Insertion dans hopla_leads avec les noms de colonnes EXACTS
    const [result] = await connection.execute(
      `INSERT INTO hopla_leads 
        (first_name, last_name, email, phone, company_name, sector, solution_slug, message, consent_at, created_at, updated_at) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), NOW())`,
      [
        prenom,
        nom,
        email,
        telephone || null,
        entreprise || null,
        secteur || null,
        solution || null,
        message
      ]
    );

    return NextResponse.json(
      { success: true, id: result.insertId },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Erreur insertion lead:', error);
    
    if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      return NextResponse.json(
        { error: 'Erreur de connexion base de données.' },
        { status: 500 }
      );
    }
    
    if (error.code === 'ER_NO_SUCH_TABLE') {
      return NextResponse.json(
        { error: 'Table hopla_leads introuvable.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi. Veuillez réessayer.' },
      { status: 500 }
    );
  } finally {
    if (connection) await connection.end();
  }
}