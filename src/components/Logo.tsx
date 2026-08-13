import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-1 group ${className}`}>
      
      {/* --- PARTIE 1 : Le SVG Animé (Icône HG) --- */}
      <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
        <svg 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            {/* Dégradé HoplaTech */}
            <linearGradient id="gradHG" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#fe5d0d', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#f32c57', stopOpacity: 1 }} />
            </linearGradient>
            
            {/* Ombre portée pour le texte HG */}
            <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="3" dy="3" stdDeviation="2" floodColor="#000" floodOpacity="0.25"/>
            </filter>
          </defs>

          {/* Styles CSS intégrés au SVG pour l'animation */}
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@800&display=swap');
            
            .animate-bell-sequence {
              animation: bellSwing 10s ease-in-out infinite;
              transform-origin: 50% 40%;
              transform-box: fill-box;
              font-family: 'Outfit', sans-serif;
              font-weight: 800;
            }

            @keyframes bellSwing {
              0% { transform: rotate(0deg); }
              5% { transform: rotate(15deg); }
              10% { transform: rotate(-12deg); }
              15% { transform: rotate(10deg); }
              20% { transform: rotate(-8deg); }
              25% { transform: rotate(5deg); }
              30% { transform: rotate(-3deg); }
              35% { transform: rotate(1deg); }
              40% { transform: rotate(0deg); }
              50%, 100% { transform: rotate(0deg); }
            }
          `}</style>

          {/* Fond Carré Fixe (Dégradé Orange/Rose) */}
          <rect x="0" y="0" width="200" height="200" rx="25" ry="25" fill="url(#gradHG)" />
          
          {/* Texte HG Animé (Effet Cloche) */}
          <text 
            className="animate-bell-sequence"
            x="50%" 
            y="50%" 
            dominantBaseline="central" 
            textAnchor="middle" 
            fill="#ffffff" 
            fontSize="110" 
            letterSpacing="-18"
            filter="url(#textShadow)"
          >
            HG
          </text>
        </svg>
      </div>

      {/* --- PARTIE 2 : Le Texte "Hopla Groupe" (Image PNG) --- */}
      {/* Ajustement de la hauteur et suppression de la marge négative pour coller à la référence */}
      <div className="h-8 md:h-10 relative aspect-[3/2]">
        <Image 
          src="/images/logo-full.png" 
          alt="Hopla Groupe"
          fill
          className="object-contain"
          priority
        />
      </div>

    </Link>
  );
}