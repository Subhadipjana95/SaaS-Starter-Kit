import React from 'react';

export default function AutonomousAgents() {
  return (
    <svg className="w-full h-full max-h-64" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes float-cube {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .anim-cube-1 { animation: float-cube 4s ease-in-out infinite; }
        .anim-cube-2 { animation: float-cube 5s ease-in-out infinite 1s; }
        .anim-cube-3 { animation: float-cube 4.5s ease-in-out infinite 2s; }
        .anim-cube-4 { animation: float-cube 5.5s ease-in-out infinite 0.5s; }
        .anim-glow { animation: pulse-glow 3s ease-in-out infinite; }
      `}</style>

      <g transform="translate(200, 220)">
        <polygon points="0,0 120,-60 0,-120 -120,-60" className="fill-foreground/5 stroke-foreground/20" strokeWidth="1" strokeLinejoin="round" />
        <polygon points="-120,-60 0,-120 -120,-120" className="stroke-foreground/10" strokeDasharray="4 4" strokeWidth="1" />
      </g>

      <g transform="translate(200, 160)">
        <g className="anim-cube-1" transform="translate(0, -60)">
          <polygon points="0,0 40,20 0,40 -40,20" className="fill-background stroke-foreground/40" strokeWidth="1" strokeLinejoin="round" />
          <polygon points="-40,20 0,40 0,70 -40,50" className="fill-foreground/5 stroke-foreground/40" strokeWidth="1" strokeLinejoin="round" />
          <polygon points="0,40 40,20 40,50 0,70" className="fill-foreground/10 stroke-foreground/40" strokeWidth="1" strokeLinejoin="round" />
          <polygon points="0,15 10,20 0,25 -10,20" className="fill-current text-brand-color-3 dark:text-brand-color-1 anim-glow" />
        </g>

        <g className="anim-cube-2" transform="translate(-50, -35)">
          <polygon points="0,0 40,20 0,40 -40,20" className="fill-background stroke-foreground/40" strokeWidth="1" strokeLinejoin="round" />
          <polygon points="-40,20 0,40 0,70 -40,50" className="fill-foreground/5 stroke-foreground/40" strokeWidth="1" strokeLinejoin="round" />
          <polygon points="0,40 40,20 40,50 0,70" className="fill-foreground/10 stroke-foreground/40" strokeWidth="1" strokeLinejoin="round" />
          <polygon points="0,15 10,20 0,25 -10,20" className="fill-current text-brand-color-3 dark:text-brand-color-1 anim-glow" />
        </g>

        <g className="anim-cube-3" transform="translate(50, -35)">
          <polygon points="0,0 40,20 0,40 -40,20" className="fill-background stroke-foreground/40" strokeWidth="1" strokeLinejoin="round" />
          <polygon points="-40,20 0,40 0,70 -40,50" className="fill-foreground/5 stroke-foreground/40" strokeWidth="1" strokeLinejoin="round" />
          <polygon points="0,40 40,20 40,50 0,70" className="fill-foreground/10 stroke-foreground/40" strokeWidth="1" strokeLinejoin="round" />
          <polygon points="0,15 10,20 0,25 -10,20" className="fill-current text-brand-color-3 dark:text-brand-color-1 anim-glow" />
        </g>

        <g className="anim-cube-4" transform="translate(0, -10)">
          <polygon points="0,0 40,20 0,40 -40,20" className="fill-background stroke-foreground/40" strokeWidth="1" strokeLinejoin="round" />
          <polygon points="-40,20 0,40 0,70 -40,50" className="fill-foreground/5 stroke-foreground/40" strokeWidth="1" strokeLinejoin="round" />
          <polygon points="0,40 40,20 40,50 0,70" className="fill-foreground/10 stroke-foreground/40" strokeWidth="1" strokeLinejoin="round" />
          <polygon points="0,15 10,20 0,25 -10,20" className="fill-current text-brand-color-3 dark:text-brand-color-1 anim-glow" />
        </g>
      </g>
    </svg>
  );
}
