// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white dark:bg-brand-dark border-b border-gray-200 dark:border-gray-800 px-6 py-4 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-urbanist text-brand-primary hover:opacity-80 transition-opacity">
          HoplaTech
        </Link>

        {/* MEGA MENU STATIQUE - Stable & Sans GraphQL */}
        <ul className="hidden md:flex gap-8 items-center">
          
          {/* Groupe Solutions avec sous-menu */}
          <li className="group relative">
            <button className="font-kanit text-sm font-medium hover:text-brand-primary transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-none p-0">
              Solutions
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            
            {/* Dropdown Mega Menu */}
            <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 min-w-[240px]">
                <Link href="/solutions/gestion-locative" className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <span className="font-bold font-urbanist text-brand-dark dark:text-white block">Gestion Locative</span>
                  <span className="text-xs text-gray-500 font-kanit">Immobilier & Patrimoine</span>
                </Link>
                <Link href="/solutions/gestion-scolaire" className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <span className="font-bold font-urbanist text-brand-dark dark:text-white block">Gestion Scolaire</span>
                  <span className="text-xs text-gray-500 font-kanit">Éducation & Établissements</span>
                </Link>
                <Link href="/solutions/gestion-asso" className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <span className="font-bold font-urbanist text-brand-dark dark:text-white block">Gestion Asso</span>
                  <span className="text-xs text-gray-500 font-kanit">Associations & ONG</span>
                </Link>
              </div>
            </div>
          </li>

          <li><Link href="/methode" className="font-kanit text-sm font-medium hover:text-brand-primary transition-colors">Méthode</Link></li>
          <li><Link href="/a-propos" className="font-kanit text-sm font-medium hover:text-brand-primary transition-colors">À propos</Link></li>
        </ul>

        {/* CTA */}
        <Link 
          href="/contact" 
          className="px-5 py-2 bg-brand-dark dark:bg-white text-white dark:text-brand-dark text-sm font-bold rounded-lg hover:scale-105 transition-transform"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}