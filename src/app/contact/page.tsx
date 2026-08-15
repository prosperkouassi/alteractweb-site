"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Link from 'next/link';
import { submitDemoRequest } from '@/app/actions/submit-demo-request'; // Import UNIQUE ici

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    whatsapp: '',
    sector: '',
    solution: '',
    message: '',
    consent: false
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  // Fonction handleSubmit CORRIGÉE (sans doublon)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await submitDemoRequest(formData);
      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Une erreur est survenue.');
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-brand-dark text-brand-dark dark:text-white transition-colors duration-300">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 border-b border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-red-50 dark:bg-red-900/20 text-brand-primary text-xs font-bold tracking-wider uppercase mb-6 border border-red-100 dark:border-red-800">
            Parlons de votre projet
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-urbanist">
            Contactez <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">HoplaTech</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-kanit font-light leading-relaxed">
            Une question sur nos solutions SaaS ? Un besoin spécifique ? Remplissez le formulaire ci-dessous et notre équipe vous répondra sous 24h ouvrées.
          </p>
        </div>
        
        {/* Grille décorative */}
        <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
      </section>

      {/* --- FORMULAIRE DE CONTACT --- */}
      <section className="py-20 bg-gray-50 dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white dark:bg-brand-dark rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 md:p-12">
            
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-urbanist">Message envoyé !</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 font-kanit">
                  Merci pour votre intérêt. Notre équipe commerciale vous contactera très prochainement.
                </p>
                <Link href="/" className="text-brand-primary font-bold hover:underline">
                  Retour à l'accueil
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Nom & Prénom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-bold mb-2">Prénom *</label>
                    <input 
                      type="text" id="firstName" name="firstName" required
                      value={formData.firstName} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      placeholder="Jean"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-bold mb-2">Nom *</label>
                    <input 
                      type="text" id="lastName" name="lastName" required
                      value={formData.lastName} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      placeholder="Dupont"
                    />
                  </div>
                </div>

                {/* Email & Téléphone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold mb-2">Email professionnel *</label>
                    <input 
                      type="email" id="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      placeholder="jean@entreprise.ci"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold mb-2">Téléphone</label>
                    <input 
                      type="tel" id="phone" name="phone"
                      value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      placeholder="+225 07 XX XX XX XX"
                    />
                  </div>
                </div>

                {/* Entreprise & Secteur */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold mb-2">Entreprise / Établissement</label>
                    <input 
                      type="text" id="company" name="company"
                      value={formData.company} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      placeholder="Nom de votre structure"
                    />
                  </div>
                  <div>
                    <label htmlFor="sector" className="block text-sm font-bold mb-2">Secteur d'activité</label>
                    <select 
                      id="sector" name="sector"
                      value={formData.sector} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all appearance-none"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="immobilier">Immobilier / Gestion locative</option>
                      <option value="education">Éducation / Scolaire</option>
                      <option value="association">Association / ONG</option>
                      <option value="pme">PME / Commerce</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                {/* Solution recherchée */}
                <div>
                  <label htmlFor="solution" className="block text-sm font-bold mb-2">Solution qui vous intéresse</label>
                  <select 
                    id="solution" name="solution"
                    value={formData.solution} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all appearance-none"
                  >
                    <option value="">Sélectionnez une option...</option>
                    <option value="gestion-locative">Logiciel Gestion Locative</option>
                    <option value="gestion-scolaire">Logiciel Gestion Scolaire</option>
                    <option value="sur-mesure">Développement Sur Mesure</option>
                    <option value="autre">Autre / Je ne sais pas encore</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2">Votre message</label>
                  <textarea 
                    id="message" name="message" rows={4}
                    value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Décrivez brièvement votre besoin..."
                  ></textarea>
                </div>

                {/* Consentement */}
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" id="consent" name="consent" required
                    checked={formData.consent} onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600 dark:text-gray-400 font-kanit">
                    J'accepte la <Link href="/politique-confidentialite" className="text-brand-primary hover:underline">politique de confidentialité</Link> et j'autorise HoplaTech à me recontacter concernant ma demande. *
                  </label>
                </div>

                {/* Bouton Submit */}
                <button 
                  type="submit" disabled={status === 'loading'}
                  className="w-full py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer ma demande'
                  )}
                </button>

                {status === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm">
                    {errorMessage}
                  </div>
                )}
              </form>
            )}
          </div>
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