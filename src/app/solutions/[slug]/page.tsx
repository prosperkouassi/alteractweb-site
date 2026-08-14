// src/app/solutions/[slug]/page.tsx - VERSION STATIQUE FINALE
import Link from 'next/link';
import Header from '@/components/Header';
// Par celle-ci (remonte de 3 niveaux depuis src/app/solutions/[slug]) :
import { solutions } from '../../../../data/solutions';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Fonction utilitaire pour trouver une solution par son slug
const getSolutionBySlug = (slug: string) => {
  return solutions.find((sol) => sol.slug === slug);
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  
  if (!solution) return { title: 'Solution non trouvée | HoplaTech' };
  
  return {
    title: `${solution.title} - HoplaTech`,
    description: solution.accroche || `Découvrez ${solution.title}.`
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) return notFound();

  // Parser les fonctionnalités HTML (<p>...</p>) comme avant
  const rawFeatures = solution.fonctionnalites || '';
  const features = rawFeatures
    .split('</p>')
    .filter(Boolean)
    .map((p: string) => p.replace(/<\/?p>/g, '').trim())
    .filter((f: string) => f.length > 0);

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-brand-dark text-brand-dark dark:text-white">
      <Header />
      
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <Link href="/solutions" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand-primary mb-8 transition-colors">
            ← Retour aux solutions
          </Link>
          
          {/* Badge Statut */}
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4
            ${solution.statut?.includes('disponible') 
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
              : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'}`}>
            {solution.statut?.[0] || 'Info'}
          </span>
          
          {/* Titre & Accroche */}
          <h1 className="text-4xl md:text-5xl font-bold font-urbanist mb-4">{solution.title}</h1>
          <p className="text-xl text-brand-primary font-kanit mb-8">{solution.accroche}</p>
          
          {/* Problème Résolu (WYSIWYG) */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12 font-kanit" 
               dangerouslySetInnerHTML={{ __html: solution.problemeResolu }} />
          
          {/* Fonctionnalités Clés */}
          {features.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-urbanist mb-6">Fonctionnalités clés</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feat: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#1a1a1a] rounded-lg">
                    <svg className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-kanit">{feat.trim()}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Tarification & Public Cible */}
          {(solution.tarif || solution.publicCible) && (
            <div className="bg-brand-primary/5 dark:bg-brand-primary/10 rounded-2xl p-8 mb-12 border border-brand-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solution.tarif && (
                  <div>
                    <h3 className="font-bold font-urbanist mb-2">Tarification</h3>
                    <p className="font-kanit">{solution.tarif}</p>
                  </div>
                )}
                {solution.publicCible && (
                  <div>
                    <h3 className="font-bold font-urbanist mb-2">Public Cible</h3>
                    <div 
                      className="font-kanit prose prose-sm dark:prose-invert max-w-none [&_p]:mb-2 last:[&_p]:mb-0"
                      dangerouslySetInnerHTML={{ __html: solution.publicCible }} 
                    />
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Call-to-Action */}
          <div className="text-center">
            <Link 
              href={`/contact?solution=${solution.slug}`} 
              className="inline-block px-8 py-4 bg-brand-dark dark:bg-white text-white dark:text-brand-dark font-bold rounded-lg hover:scale-105 transition-transform shadow-lg"
            >
              Demander une démo de {solution.title}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400 font-kanit">
        &copy; {new Date().getFullYear()} HoplaTech. Tous droits réservés.
      </footer>
    </main>
  );
}