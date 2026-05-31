import React from 'react';

export default function RealtimeProcessing() {
  return (
    <svg className="w-full h-full max-h-64" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes float-layer {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes process-glow {
          0%, 100% { fill-opacity: 0.1; }
          50% { fill-opacity: 0.8; }
        }
        .anim-layer-1 { animation: float-layer 5s ease-in-out infinite; }
        .anim-layer-2 { animation: float-layer 5s ease-in-out infinite 1.25s; }
        .anim-layer-3 { animation: float-layer 5s ease-in-out infinite 2.5s; }
        .glow-1 { animation: process-glow 2s ease-in-out infinite; }
        .glow-2 { animation: process-glow 2s ease-in-out infinite 0.6s; }
        .glow-3 { animation: process-glow 2s ease-in-out infinite 1.2s; }
      `}</style>

      <g transform="translate(200, 180)">
        <g className="anim-layer-1">
          <polygon points="0,0 80,-40 0,-80 -80,-40" className="fill-background stroke-foreground/40" strokeWidth="1.5" strokeLinejoin="round" />
          <polygon points="-80,-40 0,0 0,15 -80,-25" className="fill-foreground/5 stroke-foreground/40" strokeWidth="1.5" strokeLinejoin="round" />
          <polygon points="0,0 80,-40 80,-25 0,15" className="fill-foreground/10 stroke-foreground/40" strokeWidth="1.5" strokeLinejoin="round" />
          <polygon points="0,-20 40,-40 0,-60 -40,-40" className="fill-current text-brand-color-3 dark:text-brand-color-1 glow-1" />
        </g>

        <g className="anim-layer-2" transform="translate(0, -60)">
          <polygon points="0,0 80,-40 0,-80 -80,-40" className="fill-background stroke-foreground/40" strokeWidth="1.5" strokeLinejoin="round" />
          <polygon points="-80,-40 0,0 0,15 -80,-25" className="fill-foreground/5 stroke-foreground/40" strokeWidth="1.5" strokeLinejoin="round" />
          <polygon points="0,0 80,-40 80,-25 0,15" className="fill-foreground/10 stroke-foreground/40" strokeWidth="1.5" strokeLinejoin="round" />
          <polygon points="0,-20 40,-40 0,-60 -40,-40" className="fill-current text-brand-color-3 dark:text-brand-color-1 glow-2" />
        </g>

        <g className="anim-layer-3" transform="translate(0, -120)">
          <polygon points="0,0 80,-40 0,-80 -80,-40" className="fill-background stroke-foreground/40" strokeWidth="1.5" strokeLinejoin="round" />
          <polygon points="-80,-40 0,0 0,15 -80,-25" className="fill-foreground/5 stroke-foreground/40" strokeWidth="1.5" strokeLinejoin="round" />
          <polygon points="0,0 80,-40 80,-25 0,15" className="fill-foreground/10 stroke-foreground/40" strokeWidth="1.5" strokeLinejoin="round" />
          
          <path d="M-40,-20 L40,-60 M-40,-60 L40,-20" className="stroke-foreground/20" strokeWidth="1" />
          <path d="M-20,-10 L60,-50 M-60,-50 L20,-10" className="stroke-foreground/20" strokeWidth="1" />
          <path d="M-20,-70 L60,-30 M-60,-30 L20,-70" className="stroke-foreground/20" strokeWidth="1" />
          
          <polygon points="0,-20 40,-40 0,-60 -40,-40" className="fill-current text-brand-color-3 dark:text-brand-color-1 glow-3" />
        </g>
        
        <path d="M-80,-40 L-80,-160 M80,-40 L80,-160 M0,0 L0,-120 M0,-80 L0,-200" className="stroke-foreground/20" strokeWidth="1" strokeDasharray="4 4" />
      </g>
    </svg>
  );
}
