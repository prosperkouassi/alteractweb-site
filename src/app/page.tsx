// src/app/page.tsx
import { GraphQLClient, gql } from 'graphql-request';
import Header from '@/components/Header';
import Link from 'next/link';
import type { Metadata } from 'next';

// --- Configuration GraphQL ---
const client = new GraphQLClient(process.env.NEXT_PUBLIC_WORDPRESS_URL || '');

// ✅ REQUÊTE CORRIGÉE : utilise "solutions" au lieu de "produits"
const GET_SOLUTIONS = gql`
  query GetSolutions {
    solutions {
      nodes {
        title
        slug
        infosProduitSaas {
          accroche
          problemeResolu
          statut
          fonctionnalites
        }
      }
    }
  }
`;

export const metadata: Metadata = {
  title: "HoplaTech - Logiciels Métiers & SaaS en Côte d'Ivoire",
  description: "Solutions de gestion locative, scolaire et développement sur mesure. Digitalisez votre activité avec des logiciels pensés pour la réalité africaine.",
  keywords: ["logiciel immobilier abidjan", "saas afrique", "gestion locative", "développement web côte d'ivoire", "hoplatech"],
  openGraph: {
    title: "HoplaTech - La gestion métier simplifiée",
    description: "Logiciels métiers accessibles pour l'Afrique. Immobilier, Éducation, Sur-mesure.",
    url: "https://alteractweb.com",
    siteName: "HoplaTech",
    locale: "fr_CI",
    type: "website",
    images: [
      {
        url: "/images/og-home.png",
        width: 1200,
        height: 630,
        alt: "HoplaTech - Solutions logicielles pour l'Afrique"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "HoplaTech - La gestion métier simplifiée",
    description: "Logiciels métiers accessibles pour l'Afrique.",
    images: ["/images/og-home.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default async function Home() {
  let solutions: any[] = [];
  let error = null;

  try {
    const data = await client.request(GET_SOLUTIONS);
    solutions = data.solutions.nodes; // ✅ Utilise "solutions" au lieu de "produits"
  } catch (e) {
    error = e;
    console.error("Erreur GraphQL:", e);
  }

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-brand-dark text-brand-dark dark:text-white transition-colors duration-300">
      
      {/* --- HEADER DYNAMIQUE --- */}
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-red-50 dark:bg-red-900/20 text-brand-primary text-xs font-bold tracking-wider uppercase mb-6 border border-red-100 dark:border-red-800">
            Solutions SaaS pour l'Afrique
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto font-urbanist">
            <span className="block text-brand-dark dark:text-white">La gestion métier,</span>
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              simplifiée et augmentée.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-white mb-10 max-w-2xl mx-auto font-kanit font-light leading-relaxed">
            HoplaTech conçoit des logiciels accessibles, pensés pour la réalité des entreprises en Côte d'Ivoire. Immobilier, Éducation, Associations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solutions" className="px-8 py-4 bg-brand-dark dark:bg-white text-white dark:text-brand-dark font-bold rounded-lg hover:scale-105 transition-transform shadow-lg">
              Découvrir nos solutions
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 font-bold rounded-lg hover:border-brand-primary hover:text-brand-primary transition-colors bg-white/50 dark:bg-transparent backdrop-blur-sm">
              Parler à un expert
            </Link>
          </div>
        </div>
        
        {/* Effet de fond décoratif (Grille subtile) */}
        <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
      </section>

      {/* --- LISTE DES SOLUTIONS (DYNAMIQUE) --- */}
      <section className="py-20 bg-gray-50 dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-urbanist bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent inline-block">
              Nos Solutions Logicielles
            </h2>
            <p className="text-gray-700 dark:text-white font-kanit">Des outils robustes pour digitaliser votre activité.</p>
          </div>

          {error ? (
            <div className="text-center text-red-500 p-8 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/10">
              Impossible de charger les solutions depuis WordPress. Vérifiez la connexion.
            </div>
          ) : solutions.length === 0 ? (
            <div className="text-center text-gray-500 dark:text-gray-400">Aucune solution trouvée pour le moment.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <div key={solution.slug} className="group relative bg-white dark:bg-brand-dark rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  
                  {/* Badge Statut */}
                  <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                      ${solution.infosProduitSaas?.statut?.includes('disponible') 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'}`}>
                      {solution.infosProduitSaas?.statut?.[0] || 'Info'}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-primary transition-colors font-urbanist text-brand-dark dark:text-white">
                    {solution.title}
                  </h3>
                  
                  <p className="text-brand-primary font-medium mb-4 text-sm uppercase tracking-wider font-kanit">
                    {solution.infosProduitSaas?.accroche}
                  </p>

                  <div className="prose prose-sm dark:prose-invert text-gray-700 dark:text-gray-300 mb-6 line-clamp-3 font-kanit flex-grow" 
                       dangerouslySetInnerHTML={{ __html: solution.infosProduitSaas?.problemeResolu }} />

                  <Link href={`/solutions/${solution.slug}`} className="inline-flex items-center text-sm font-bold text-brand-dark dark:text-white group-hover:text-brand-primary transition-colors mt-auto font-kanit">
                    Voir les détails
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- FOOTER SIMPLE --- */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-brand-dark">
        <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm font-kanit">
          <p>&copy; {new Date().getFullYear()} HoplaTech. Tous droits réservés.</p>
          <p className="mt-2">Conçu avec Next.js & WordPress Headless.</p>
        </div>
      </footer>

    </main>
  );
}