import React from 'react';

export default function SecureInfrastructure() {
  return (
    <svg className="w-full h-full max-h-64" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes scan {
          0%, 100% { transform: translateY(-30px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          50% { transform: translateY(30px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.5); opacity: 0.8; stroke-width: 2px; }
          100% { transform: scale(1.5); opacity: 0; stroke-width: 0.5px; }
        }
        .anim-scan { animation: scan 3s linear infinite; }
        .anim-ring {
          animation: pulse-ring 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          transform-origin: center;
        }
      `}</style>

      <g transform="translate(200, 160)">
        <g transform="translate(0, 40)">
          <polygon points="0,0 100,-50 0,-100 -100,-50" className="fill-foreground/5 stroke-foreground/20" strokeWidth="1" />
          
          <g transform="translate(0, -50)">
            <ellipse cx="0" cy="0" rx="80" ry="40" className="stroke-current text-brand-color-3 dark:text-brand-color-1 anim-ring" fill="none" />
          </g>
        </g>
        
        <g transform="translate(0, -20)">
           <polygon points="0,40 50,15 50,-35 0,-60 -50,-35 -50,15" className="fill-background stroke-foreground/40" strokeWidth="2" strokeLinejoin="round" />
           <polygon points="-50,15 0,40 0,-10 -50,-35" className="fill-foreground/5 stroke-foreground/40" strokeWidth="1.5" strokeLinejoin="round" />
           <polygon points="0,40 50,15 50,-35 0,-10" className="fill-foreground/10 stroke-foreground/40" strokeWidth="1.5" strokeLinejoin="round" />
           <polygon points="0,-10 50,-35 0,-60 -50,-35" className="fill-foreground/15 stroke-foreground/40" strokeWidth="1.5" strokeLinejoin="round" />
           
           <polygon points="0,-20 20,-30 0,-40 -20,-30" className="fill-current text-brand-color-3 dark:text-brand-color-1 opacity-80" />
           
           <g className="anim-scan">
             <polygon points="-60,10 60,-50 70,-45 -50,15" className="fill-current text-brand-color-3 dark:text-brand-color-1 opacity-10" />
             <line x1="-60" y1="10" x2="60" y2="-50" className="stroke-current text-brand-color-3 dark:text-brand-color-1" strokeWidth="2" />
           </g>
        </g>
        
        <circle cx="-70" cy="-60" r="3" className="fill-current text-brand-color-3 dark:text-brand-color-1" />
        <circle cx="70" cy="-30" r="2" className="fill-current text-brand-color-3 dark:text-brand-color-1" />
        <circle cx="0" cy="-110" r="4" className="fill-current text-brand-color-3 dark:text-brand-color-1" />
        <circle cx="-40" cy="30" r="2" className="fill-current text-brand-color-3 dark:text-brand-color-1" />
      </g>
    </svg>
  );
}
