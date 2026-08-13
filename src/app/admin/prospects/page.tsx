import { logout } from '@/app/admin/actions/logout'; // ✅ Chemin absolu
import { pool } from '@/lib/db';
import Link from 'next/link';
import StatusSelect from '@/components/StatusSelect';
import LeadDetailsModal from '@/components/LeadDetailsModal';

async function getLeads() {
  const [rows] = await pool.query(`
    SELECT id, first_name, last_name, company_name, email, phone, whatsapp, 
           sector, solution_slug, message, status, created_at 
    FROM hopla_leads 
    ORDER BY created_at DESC
  `);
  return rows as any[];
}

async function updateLeadStatus(id: number, newStatus: string) {
  'use server';
  await pool.execute(
    'UPDATE hopla_leads SET status = ? WHERE id = ?',
    [newStatus, id]
  );
}

export default async function ProspectsPage({ searchParams }: { searchParams: Promise<{ view?: string }> }) {
  const params = await searchParams;
  const viewLeadId = params?.view ? Number(params.view) : null;
  
  const leads = await getLeads();
  const activeLead = viewLeadId ? leads.find((l: any) => l.id === viewLeadId) : null;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0f0f0f] text-brand-dark dark:text-white">
      <header className="bg-white dark:bg-brand-dark border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div>
          <h1 className="text-2xl font-bold font-urbanist">Gestion des Prospects</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-kanit">{leads.length} lead(s) enregistré(s)</p>
        </div>
        
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm font-medium text-brand-primary hover:underline">
            ← Retour au site
          </Link>
          
          <form action={logout}>
            <button type="submit" className="text-sm font-medium text-red-500 hover:text-red-400 transition-colors cursor-pointer bg-transparent border-none p-0">
              Déconnexion
            </button>
          </form>
        </div>
      </header>

      <section className="p-6">
        <div className="bg-white dark:bg-brand-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-gray-800">
                <tr>
                  <th className="px-6 py-4 font-semibold">Nom</th>
                  <th className="px-6 py-4 font-semibold">Email</th>
                  <th className="px-6 py-4 font-semibold">Secteur</th>
                  <th className="px-6 py-4 font-semibold">Statut</th>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {leads.length === 0 ? (
                  <tr><td colSpan={6} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400 font-kanit">Aucun prospect pour le moment.</td></tr>
                ) : (
                  leads.map((lead: any) => (
                    <tr key={lead.id} className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium">{lead.first_name} {lead.last_name}</div>
                        {lead.company_name && <div className="text-xs text-gray-500">{lead.company_name}</div>}
                      </td>
                      <td className="px-6 py-4 text-brand-primary">{lead.email}</td>
                      <td className="px-6 py-4 capitalize">{lead.sector || '-'}</td>
                      <td className="px-6 py-4"><StatusSelect leadId={lead.id} currentStatus={lead.status} updateAction={updateLeadStatus} /></td>
                      <td className="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">{new Date(lead.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}</td>
                      <td className="px-6 py-4"><Link href={`/admin/prospects?view=${lead.id}`} className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold bg-brand-primary/10 text-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition-colors">👁️ Voir</Link></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {activeLead && <LeadDetailsModal lead={activeLead} />}
    </main>
  );
}