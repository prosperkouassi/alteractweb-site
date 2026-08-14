import Header from '@/components/Header';
import Link from 'next/link';

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-brand-dark">
      <Header />
      
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="prose dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8 font-urbanist text-brand-dark dark:text-white">
            Politique de Confidentialité
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-urbanist text-brand-dark dark:text-white">
              1. Collecte des Données
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 font-kanit leading-relaxed">
              Nous collectons les données personnelles que vous nous fournissez volontairement via nos formulaires de contact et demandes de devis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-urbanist text-brand-dark dark:text-white">
              2. Utilisation des Données
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 font-kanit leading-relaxed">
              Vos données sont utilisées pour vous recontacter concernant votre demande et vous proposer nos services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-urbanist text-brand-dark dark:text-white">
              3. Protection des Données
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 font-kanit leading-relaxed">
              Nous nous engageons à protéger vos données personnelles conformément aux lois en vigueur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-urbanist text-brand-dark dark:text-white">
              4. Droits d'Accès
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 font-kanit leading-relaxed">
              Vous avez le droit d'accéder, de modifier ou de supprimer vos données personnelles.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link 
              href="/contact" 
              className="inline-block px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-red-600 transition-colors font-kanit font-bold"
            >
              Retour au contact
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400 font-kanit mt-auto">
        &copy; {new Date().getFullYear()} HoplaTech. Tous droits réservés.
      </footer>
    </div>
  );
}
