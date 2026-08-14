import Header from '@/components/Header';
import Link from 'next/link';

export default function MaintenancePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-brand-dark">
      <Header />
      
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div>
          <h1 className="text-4xl font-bold mb-8 font-urbanist text-brand-dark dark:text-white">
            Maintenance & Support
          </h1>

          <section className="mb-8">
            <p className="text-gray-600 dark:text-gray-400 mb-4 font-kanit leading-relaxed">
              Assurez la continuité et la performance de vos applications avec nos services de maintenance et support.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-kanit leading-relaxed">
              De la correction de bugs aux mises à jour sécurité, nous prenons soin de vos solutions pour qu'elles fonctionnent sans interruption.
            </p>
          </section>

          <section className="mb-8 mt-12">
            <h2 className="text-2xl font-bold mb-4 font-urbanist text-brand-dark dark:text-white">
              Services Inclus
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-kanit">
              <li className="flex items-start gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Monitoring et alertes 24/7</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Corrections de bugs en priorité</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Mises à jour de sécurité</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Optimisation des performances</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Support technique réactif</span>
              </li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link 
              href="/contact?solution=maintenance" 
              className="inline-block px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-red-600 transition-colors font-kanit font-bold"
            >
              Demander un devis
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
