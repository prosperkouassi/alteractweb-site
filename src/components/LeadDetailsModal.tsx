"use client";

import { useState } from 'react';

interface Lead {
  id: number;
  first_name: string;
  last_name: string;
  company_name: string | null;
  email: string;
  phone: string | null;
  whatsapp: string | null;
  sector: string | null;
  solution_slug: string | null;
  message: string | null;
  status: string;
  created_at: string;
}

// ✅ Plus de prop onClose, on utilise window.history.back() directement
export default function LeadDetailsModal({ lead }: { lead: Lead }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    window.history.back();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" 
      onClick={handleClose}
    >
      <div 
        className="bg-white dark:bg-brand-dark rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-brand-dark border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold font-urbanist">Détails du prospect</h2>
          <button 
            onClick={handleClose} 
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contenu */}
        <div className="p-6 space-y-6">
          {/* Identité */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Nom complet</label>
              <p className="text-lg font-medium mt-1">{lead.first_name} {lead.last_name}</p>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Entreprise</label>
              <p className="text-lg font-medium mt-1">{lead.company_name || '-'}</p>
            </div>
          </div>

          {/* Coordonnées */}
          <div className="bg-gray-50 dark:bg-[#1a1a1a] rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Email</label>
                <p className="font-medium text-brand-primary">{lead.email}</p>
              </div>
              <button 
                onClick={() => copyToClipboard(lead.email)}
                className="text-xs px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {copied ? '✓ Copié' : 'Copier'}
              </button>
            </div>
            
            {(lead.phone || lead.whatsapp) && (
              <>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Téléphone</label>
                  <p className="font-medium">{lead.phone || '-'}</p>
                </div>
                {lead.whatsapp && (
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                    <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">WhatsApp</label>
                    <a 
                      href={`https://wa.me/${lead.whatsapp.replace(/\D/g, '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-medium text-green-600 dark:text-green-400 hover:underline"
                    >
                      {lead.whatsapp} ↗
                    </a>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Contexte */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Secteur</label>
              <p className="font-medium capitalize mt-1">{lead.sector || '-'}</p>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Solution</label>
              <p className="font-medium mt-1">{lead.solution_slug || '-'}</p>
            </div>
          </div>

          {/* Message */}
          {lead.message && (
            <div>
              <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 block">Message</label>
              <div className="bg-gray-50 dark:bg-[#1a1a1a] rounded-xl p-4 text-sm leading-relaxed whitespace-pre-wrap border border-gray-200 dark:border-gray-700">
                {lead.message}
              </div>
            </div>
          )}

          {/* Métadonnées */}
          <div className="text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
            Reçu le {new Date(lead.created_at).toLocaleDateString('fr-FR', { 
              day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' 
            })}
          </div>
        </div>
      </div>
    </div>
  );
}