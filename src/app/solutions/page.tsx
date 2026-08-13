// src/app/solutions/page.tsx
import { GraphQLClient, gql } from 'graphql-request';
import Link from 'next/link';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nos Solutions SaaS - HoplaTech",
  description: "Gestion locative, gestion scolaire et gestion d'association. Des logiciels métiers pour l'Afrique.",
};

const client = new GraphQLClient(process.env.NEXT_PUBLIC_WORDPRESS_URL || '');

const GET_SOLUTIONS = gql`
  query GetSolutions {
    solutions {
      nodes {
        title
        slug
        infosProduitSaas {
          accroche
          statut
        }
      }
    }
  }
`;

export default async function SolutionsPage() {
  let solutions: any[] = [];
  
  try {
    const data = await client.request(GET_SOLUTIONS);
    solutions = data.solutions.nodes;
  } catch (e) {
    console.error('Erreur GraphQL:', e);
  }

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-brand-dark text-brand-dark dark:text-white">
      <Header />
      
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold font-urbanist mb-6 text-center">
            Nos <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-kanit mb-16 text-center max-w-2xl mx-auto">
            Des logiciels métiers conçus pour digitaliser votre activité en toute simplicité.
          </p>

          {solutions.length === 0 ? (
            <p className="text-center text-gray-500">Aucune solution disponible.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((sol: any) => (
                <Link 
                  key={sol.slug} 
                  href={`/solutions/${sol.slug}`}
                  className="group relative bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-brand-primary transition-colors"
                >
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4
                    ${sol.infosProduitSaas?.statut?.includes('disponible') 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'}`}>
                    {sol.infosProduitSaas?.statut?.[0] || 'Info'}
                  </span>
                  
                  <h3 className="text-2xl font-bold font-urbanist mb-3 group-hover:text-brand-primary transition-colors">
                    {sol.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 font-kanit line-clamp-3">
                    {sol.infosProduitSaas?.accroche}
                  </p>
                  
                  <div className="mt-6 flex items-center text-sm font-bold text-brand-primary">
                    Voir les détails
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400 font-kanit">
        &copy; {new Date().getFullYear()} HoplaTech. Tous droits réservés.
      </footer>
    </main>
  );
}