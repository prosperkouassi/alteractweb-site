import Header from '@/components/Header';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-brand-dark text-brand-dark dark:text-white transition-colors duration-300">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-red-50 dark:bg-red-900/20 text-brand-primary text-xs font-bold tracking-wider uppercase mb-6 border border-red-100 dark:border-red-800">
            Notre histoire
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-3xl font-urbanist">
            <span className="block text-brand-dark dark:text-white">HoplaTech,</span>
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              la technologie au service du réel.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl font-kanit font-light leading-relaxed">
            Nous sommes la branche technologique de HoplaGroupe. Notre mission est simple : transformer les processus métiers complexes des entreprises africaines en logiciels simples, accessibles et adaptés à leur réalité.
          </p>
        </div>
        
        {/* Grille décorative */}
        <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
      </section>

      {/* --- NOTRE ADN --- */}
      <section className="py-20 bg-gray-50 dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-urbanist">Pourquoi HoplaTech ?</h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 font-kanit leading-relaxed">
                <p>
                  En Côte d'Ivoire et en Afrique francophone, de nombreuses entreprises gèrent encore leurs activités critiques (immobilier, éducation, RH) avec Excel ou du papier. Ces outils ne sont pas adaptés à la croissance et créent des erreurs coûteuses.
                </p>
                <p>
                  HoplaTech n'est pas une agence web classique. Nous concevons des <strong>logiciels métiers</strong>. Nous comprenons vos processus avant d'écrire une seule ligne de code. Notre approche par MVP nous permet de vous livrer rapidement un outil fonctionnel qui évolue avec vous.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm font-bold text-brand-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Expertise locale
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-brand-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Accompagnement humain
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-brand-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Technologie accessible
                </div>
              </div>
            </div>

            {/* Carte visuelle / Statut */}
            <div className="bg-white dark:bg-brand-dark p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-4 font-urbanist">Notre engagement</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0 text-brand-primary font-bold">1</div>
                  <div>
                    <p className="font-bold text-brand-dark dark:text-white">Écoute active</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Nous analysons vos besoins réels, pas vos envies théoriques.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0 text-brand-primary font-bold">2</div>
                  <div>
                    <p className="font-bold text-brand-dark dark:text-white">Transparence totale</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Pas de jargon technique inutile. Vous savez ce que vous achetez.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0 text-brand-primary font-bold">3</div>
                  <div>
                    <p className="font-bold text-brand-dark dark:text-white">Pérennité</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Des solutions conçues pour durer et évoluer avec votre structure.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-urbanist">Prêt à digitaliser votre activité ?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-kanit">
            Discutons de vos enjeux métier. Que ce soit pour un logiciel SaaS existant ou un développement sur mesure, nous avons l'expertise pour vous accompagner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-red-500/20">
              Parler à un expert
            </Link>
            <Link href="/solutions" className="px-8 py-4 border border-gray-600 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
              Découvrir nos solutions
            </Link>
          </div>
        </div>
        
        {/* Effet de fond */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-brand-dark">
        <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm font-kanit">
          <p>&copy; {new Date().getFullYear()} HoplaTech. Tous droits réservés.</p>
          <p className="mt-2">Conçu avec Next.js & WordPress Headless.</p>
        </div>
      </footer>
    </main>
  );
}