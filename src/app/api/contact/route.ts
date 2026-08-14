// src/app/api/contact/route.ts - VERSION TEST AVEC IDENTIFIANTS EN DUR

import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  // ✅ FORCER LES VALEURS ICI POUR LE TEST
  host: 'srv1795.hstgr.io', 
  user: 'u486119168_hopla_app1',
  password: 'HoplaTech2026!Secure', // Remplace par ton VRAI mot de passe MySQL
  database: 'u486119168_hopla_app',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

export async function POST(request: NextRequest) {
  let connection;
  
  try {
    const body = await request.json();
    
    const { prenom, nom, email, telephone, entreprise, secteur, solution, message, consent } = body;

    if (!prenom || !nom || !email || !message || !consent) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      );
    }

    connection = await mysql.createConnection(dbConfig);

    const [result] = await connection.execute(
      `INSERT INTO hopla_leads 
        (first_name, last_name, email, phone, company_name, sector, solution_slug, message, consent_at, created_at, updated_at) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), NOW())`,
      [prenom, nom, email, telephone || null, entreprise || null, secteur || null, solution || null, message]
    ) as [mysql.ResultSetHeader, any];

    return NextResponse.json({ success: true, id: result.insertId }, { status: 201 });

  } catch (error: any) {
    console.error('Erreur insertion lead:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi.' },
      { status: 500 }
    );
  } finally {
    if (connection) await connection.end();
  }
}