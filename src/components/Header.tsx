// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from './Logo';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setIsDarkMode(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    document.documentElement.classList.toggle('dark', nextMode);
    localStorage.setItem('theme', nextMode ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 py-2 shadow-sm backdrop-blur-md dark:bg-brand-dark/95'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Logo className="gap-3" />
        </div>

        <ul className="hidden h-10 items-center gap-8 md:flex">
          <li className="flex h-full items-center">
            <Link
              href="/"
              className="flex h-full items-center font-kanit text-sm font-medium text-brand-dark transition-colors hover:text-brand-primary dark:text-white"
            >
              Accueil
            </Link>
          </li>

          <li className="group relative flex h-full items-center">
            <Link
              href="/solutions"
              className="flex h-full items-center gap-1 border-none bg-transparent p-0 font-kanit text-sm font-medium leading-none text-brand-dark transition-colors hover:text-brand-primary dark:text-white"
            >
              <span className="inline-flex items-center">Services Tech</span>
              <svg className="h-3 w-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div className="invisible absolute left-1/2 top-full pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 -translate-x-1/2">
              <div className="grid w-[600px] grid-cols-2 gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-gray-700 dark:bg-[#1a1a1a]">
                <div>
                  <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-primary font-urbanist">Solutions SaaS</h4>
                  <div className="space-y-3">
                    <Link href="/solutions/gestion-locative" className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                        <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-brand-dark font-urbanist dark:text-white">Gestion Locative</span>
                        <span className="text-xs text-gray-500 font-kanit">Immobilier & Patrimoine</span>
                      </div>
                    </Link>

                    <Link href="/solutions/gestion-scolaire" className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                        <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-brand-dark font-urbanist dark:text-white">Gestion Scolaire</span>
                        <span className="text-xs text-gray-500 font-kanit">Éducation & Établissements</span>
                      </div>
                    </Link>

                    <Link href="/solutions/gestion-asso" className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                        <svg className="h-4 w-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-brand-dark font-urbanist dark:text-white">Gestion Asso</span>
                        <span className="text-xs text-gray-500 font-kanit">Associations & ONG</span>
                      </div>
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-primary font-urbanist">Services Tech</h4>
                  <div className="space-y-3">
                    <Link href="/services/developpement-sur-mesure" className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30">
                        <svg className="h-4 w-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-brand-dark font-urbanist dark:text-white">Développement Sur Mesure</span>
                        <span className="text-xs text-gray-500 font-kanit">Applications web & mobile</span>
                      </div>
                    </Link>

                    <Link href="/services/integration-api" className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30">
                        <svg className="h-4 w-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-brand-dark font-urbanist dark:text-white">Intégration API</span>
                        <span className="text-xs text-gray-500 font-kanit">Connecteurs & automatisations</span>
                      </div>
                    </Link>

                    <Link href="/services/maintenance" className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/30">
                        <svg className="h-4 w-4 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-brand-dark font-urbanist dark:text-white">Maintenance & Support</span>
                        <span className="text-xs text-gray-500 font-kanit">Suivi technique continu</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/* Dans le <ul> principal du Header, après le li "Services Tech" */}
<li>
  <Link href="/methode" className="font-kanit text-sm font-medium text-brand-dark dark:text-white hover:text-brand-primary transition-colors">
    Méthode
  </Link>
</li>

          <li className="flex h-full items-center">
            <Link href="/a-propos" className="flex h-full items-center font-kanit text-sm font-medium text-brand-dark transition-colors hover:text-brand-primary dark:text-white">
              À propos
            </Link>
          </li>

          <li className="flex h-full items-center">
            <Link href="/contact" className="flex h-full items-center font-kanit text-sm font-medium text-brand-dark transition-colors hover:text-brand-primary dark:text-white">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="relative h-6 w-12 rounded-full bg-gray-200 transition-colors focus:outline-none dark:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            <div
              className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                isDarkMode ? 'translate-x-6' : 'translate-x-0'
              }`}
            >
              {isDarkMode ? (
                <svg className="absolute left-1 top-1 h-3 w-3 text-gray-800" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="absolute left-1 top-1 h-3 w-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </button>

          <Link
            href="/contact?demo=true"
            className="rounded-lg bg-brand-primary px-5 py-2 text-sm font-bold text-white shadow-md transition-colors hover:bg-brand-primary/90 hover:shadow-lg"
          >
            Demander une démo
          </Link>
        </div>
      </nav>
    </header>
  );
}