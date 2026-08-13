"use client";

import { useTransition } from 'react';

interface StatusSelectProps {
  leadId: number;
  currentStatus: string;
  updateAction: (id: number, status: string) => Promise<void>;
}

export default function StatusSelect({ leadId, currentStatus, updateAction }: StatusSelectProps) {
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    startTransition(async () => {
      await updateAction(leadId, newStatus);
    });
  };

  return (
    <select 
      name="status" 
      defaultValue={currentStatus}
      onChange={handleChange}
      disabled={isPending}
      className={`px-3 py-1 rounded-full text-xs font-bold border-0 cursor-pointer focus:ring-2 focus:ring-brand-primary outline-none transition-opacity ${isPending ? 'opacity-50' : ''}
        ${currentStatus === 'new' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : ''}
        ${currentStatus === 'contacted' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' : ''}
        ${currentStatus === 'qualified' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : ''}
        ${currentStatus === 'lost' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : ''}
      `}
    >
      <option value="new">Nouveau</option>
      <option value="contacted">Contacté</option>
      <option value="qualified">Qualifié</option>
      <option value="lost">Perdu</option>
    </select>
  );
}