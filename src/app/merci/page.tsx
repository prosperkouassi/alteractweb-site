// src/app/merci/page.tsx
import Link from 'next/link';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Demande reçue - HoplaTech",
  description: "Merci de nous avoir contactés. Notre équipe commerciale vous recontactera sous 24 à 48 heures.",
};

export default function MerciPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-brand-dark text-brand-dark dark:text-white">
      <Header />
      
      <section className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
          {/* Icône de succès animée */}
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <svg 
              className="w-12 h-12 text-green-600 dark:text-green-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-urbanist mb-6">
            Demande reçue !
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 font-kanit mb-8 leading-relaxed">
            Merci de nous avoir contactés. Notre équipe commerciale va étudier votre demande et vous recontactera sous{' '}
            <span className="font-bold text-brand-primary">24 à 48 heures</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/solutions" 
              className="px-8 py-4 bg-brand-dark dark:bg-white text-white dark:text-brand-dark font-bold rounded-lg hover:scale-105 transition-transform shadow-lg"
            >
              Découvrir nos solutions
            </Link>
            <Link 
              href="/" 
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 font-bold rounded-lg hover:border-brand-primary hover:text-brand-primary transition-colors"
            >
              Retour à l'accueil
            </Link>
          </div>
          
          <p className="mt-8 text-sm text-gray-500 dark:text-gray-400 font-kanit">
            En attendant, n'hésitez pas à consulter notre blog ou nos études de cas.
          </p>
        </div>
      </section>
      
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400 font-kanit">
        &copy; {new Date().getFullYear()} HoplaTech. Tous droits réservés.
      </footer>
    </main>
  );
}