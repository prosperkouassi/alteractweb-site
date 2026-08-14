// Marquer le segment /contact comme dynamique pour éviter les erreurs de prerendering
export const dynamic = 'force-dynamic';

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
