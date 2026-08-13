import Header from '@/components/Header';
import Link from 'next/link';

// Données du parcours (pourraient être gérées via ACF plus tard)
const steps = [
  {
    num: "01",
    title: "Découverte & Audit",
    desc: "Nous analysons vos processus actuels (Excel, papier, outils existants) pour identifier les points de friction et les opportunités d'automatisation."
  },
  {
    num: "02",
    title: "Cadrage Fonctionnel",
    desc: "Rédaction d'un cahier des charges précis. Nous définissons ensemble les fonctionnalités prioritaires pour votre MVP."
  },
  {
    num: "03",
    title: "UX/UI & Maquettes Figma",
    desc: "Conception d'une interface adaptée à vos utilisateurs non-techniques. Validation visuelle avant tout développement."
  },
  {
    num: "04",
    title: "Développement du MVP",
    desc: "Itérations courtes et transparentes. Vous testez le logiciel au fur et à mesure pour garantir qu'il correspond exactement à votre besoin."
  },
  {
    num: "05",
    title: "Tests & Déploiement",
    desc: "Validation technique rigoureuse et mise en production sécurisée sur nos serveurs ou les vôtres."
  },
  {
    num: "06",
    title: "Maintenance & Évolutions",
    desc: "Accompagnement continu, corrections, formations et ajout de nouvelles fonctionnalités selon votre croissance."
  }
];

export default function SurMesurePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-brand-dark text-brand-dark dark:text-white transition-colors duration-300">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 border-b border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <span className="inline-block py-1 px-3 rounded-full bg-red-50 dark:bg-red-900/20 text-brand-primary text-xs font-bold tracking-wider uppercase mb-6 border border-red-100 dark:border-red-800">
            Service Premium
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-urbanist">
            Votre logiciel, <br/>
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              conçu sur mesure.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-kanit font-light leading-relaxed">
            Nos solutions SaaS ne correspondent pas exactement à votre métier ? HoplaTech conçoit des applications web et mobiles adaptées à vos processus uniques, de la PME à la startup.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-red-500/20 text-center">
              Demander un devis personnalisé
            </Link>
            <Link href="/solutions" className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 font-bold rounded-lg hover:border-brand-primary hover:text-brand-primary transition-colors text-center">
              Voir nos solutions standards
            </Link>
          </div>
        </div>
        
        {/* Grille décorative */}
        <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
      </section>

      {/* --- PARCOURS EN 6 ÉTAPES --- */}
      <section className="py-24 bg-gray-50 dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-urbanist">Notre méthode de travail</h2>
            <p className="text-gray-600 dark:text-gray-400 font-kanit">Transparence totale à chaque étape du projet.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="bg-white dark:bg-brand-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                {/* Numéro de fond décoratif */}
                <span className="absolute -top-4 -right-4 text-8xl font-bold text-gray-50 dark:text-gray-800/50 font-urbanist select-none group-hover:text-red-50/10 dark:group-hover:text-red-900/10 transition-colors">
                  {step.num}
                </span>
                
                <div className="relative z-10">
                  <span className="inline-block py-1 px-3 rounded-md bg-red-50 dark:bg-red-900/20 text-brand-primary text-xs font-bold mb-4">
                    Étape {step.num}
                  </span>
                  <h3 className="text-xl font-bold mb-3 font-urbanist">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-kanit leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- POUR QUI ? --- */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-urbanist">Idéal pour...</h2>
              <ul className="space-y-4 font-kanit">
                {[
                  "Les entreprises avec des processus complexes non couverts par le marché",
                  "Les startups voulant valider leur idée rapidement (MVP)",
                  "Les associations cherchant à digitaliser leur gestion interne",
                  "Les PME souhaitant remplacer Excel par un vrai outil sécurisé"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 font-urbanist">Technologies maîtrisées</h3>
              <div className="flex flex-wrap gap-3">
                {["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "MySQL", "AWS", "Figma"].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-400 font-kanit">
                Nous choisissons la stack technique la plus adaptée à votre projet, sans vous enfermer dans une solution propriétaire.
              </p>
            </div>
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