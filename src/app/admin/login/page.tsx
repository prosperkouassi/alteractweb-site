"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const res = await fetch('/admin/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      
      if (res.ok) {
        router.push('/admin/prospects');
        router.refresh();
      } else {
        setError('Mot de passe incorrect');
      }
    } catch (err) {
      setError('Erreur de connexion. Réessayez.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0f0f0f] p-4">
      <div className="bg-white dark:bg-brand-dark rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold font-urbanist mb-2 text-center">Accès Administrateur</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6 font-kanit">Entrez votre mot de passe pour accéder au dashboard</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            required
            autoFocus
            disabled={loading}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] focus:ring-2 focus:ring-brand-primary outline-none disabled:opacity-50"
          />
          
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          
          <button 
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Connexion...
              </>
            ) : (
              'Se connecter'
            )}
          </button>
        </form>
        
        <p className="text-xs text-gray-400 text-center mt-6 font-kanit">
          Zone réservée - HoplaTech
        </p>
      </div>
    </main>
  );
}