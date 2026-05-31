import React from 'react';

export default function SeamlessIntegrations() {
  return (
    <svg className="w-full h-full" viewBox="0 0 520 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        {/* Gradient for the card faces - soft lavender */}
        <linearGradient id="si-card-face" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8e0f4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#d4c8ec" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="si-card-side-l" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d8cee8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#c4b8dc" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="si-card-side-r" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cec4de" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#b8acd0" stopOpacity="0.3" />
        </linearGradient>
        {/* Shadow gradient - purple/pink to blue */}
        <linearGradient id="si-shadow-1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e8a0c0" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#c0a8e0" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#a0b8f0" stopOpacity="0.35" />
        </linearGradient>
        {/* Server pillar gradient */}
        <linearGradient id="si-pillar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d0d0e0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#b0b0c8" stopOpacity="0.15" />
        </linearGradient>
        {/* Icon gradient */}
        <linearGradient id="si-icon-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c8b8e8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#a8a0d8" stopOpacity="0.7" />
        </linearGradient>
        {/* Server top gradient */}
        <linearGradient id="si-server-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0ecf8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e0d8f0" stopOpacity="0.7" />
        </linearGradient>
        {/* Indicator dots */}
        <radialGradient id="si-dot-blue" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#6080f0" />
          <stop offset="100%" stopColor="#4060d0" />
        </radialGradient>
        <radialGradient id="si-dot-purple" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#c080e0" />
          <stop offset="100%" stopColor="#a060c0" />
        </radialGradient>
        <radialGradient id="si-dot-pink" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#e080c0" />
          <stop offset="100%" stopColor="#c060a0" />
        </radialGradient>
      </defs>

      <style>{`
        @keyframes si-float-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes si-float-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes si-float-3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes si-float-hub {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes si-dash-flow {
          to { stroke-dashoffset: -24; }
        }
        @keyframes si-pulse-dot {
          0%, 100% { opacity: 0.6; r: 2.5; }
          50% { opacity: 1; r: 3.5; }
        }
        @keyframes si-pillar-line {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.35; }
        }
        .si-node-1 { animation: si-float-1 4s ease-in-out infinite; }
        .si-node-2 { animation: si-float-2 4.5s ease-in-out infinite 0.8s; }
        .si-node-3 { animation: si-float-3 5s ease-in-out infinite 1.6s; }
        .si-hub { animation: si-float-hub 5s ease-in-out infinite 0.4s; }
        .si-dash { 
          stroke-dasharray: 6 6; 
          animation: si-dash-flow 2s linear infinite; 
        }
        .si-dot-pulse { animation: si-pulse-dot 2s ease-in-out infinite; }
        .si-pillar-anim { animation: si-pillar-line 3s ease-in-out infinite; }
      `}</style>

      {/* ===== Connection Lines from hub base to each card ===== */}
      <g className="stroke-foreground/15">
        {/* Hub center (260, 175) to Left card (130, 285) */}
        <line x1="260" y1="195" x2="150" y2="265" strokeWidth="1.5" />
        {/* Hub center to Bottom card (260, 330) */}
        <line x1="260" y1="195" x2="260" y2="305" strokeWidth="1.5" />
        {/* Hub center to Right card (390, 285) */}
        <line x1="260" y1="195" x2="370" y2="265" strokeWidth="1.5" />
      </g>
      {/* Animated flowing dashes on connections */}
      <g className="stroke-current text-brand-color-3 dark:text-brand-color-1" strokeWidth="1.5">
        <line x1="260" y1="195" x2="150" y2="265" className="si-dash" />
        <line x1="260" y1="195" x2="260" y2="305" className="si-dash" />
        <line x1="260" y1="195" x2="370" y2="265" className="si-dash" />
      </g>

      {/* ===== LEFT CARD — Starburst icon ===== */}
      <g className="si-node-1">
        {/* Shadow */}
        <polygon points="130,320 200,355 130,390 60,355" fill="url(#si-shadow-1)" opacity="0.4" />
        {/* Card body */}
        <polygon points="130,265 200,298 130,331 60,298" className="fill-background stroke-foreground/25" strokeWidth="1" strokeLinejoin="round" />
        {/* Left side */}
        <polygon points="60,298 130,331 130,345 60,312" fill="url(#si-card-side-l)" className="stroke-foreground/25" strokeWidth="1" strokeLinejoin="round" />
        {/* Right side */}
        <polygon points="130,331 200,298 200,312 130,345" fill="url(#si-card-side-r)" className="stroke-foreground/25" strokeWidth="1" strokeLinejoin="round" />
        {/* Card face fill with gradient */}
        <polygon points="130,265 200,298 130,331 60,298" fill="url(#si-card-face)" />
        {/* Starburst icon */}
        <g transform="translate(130, 295)">
          {/* 8-pointed starburst */}
          <line x1="0" y1="-16" x2="0" y2="16" className="stroke-foreground/60" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="-16" y1="0" x2="16" y2="0" className="stroke-foreground/60" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="-11" y1="-11" x2="11" y2="11" className="stroke-foreground/60" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="11" y1="-11" x2="-11" y2="11" className="stroke-foreground/60" strokeWidth="1.5" strokeLinecap="round" />
          {/* Center dot */}
          <circle cx="0" cy="0" r="3" className="fill-foreground/40" />
        </g>
      </g>

      {/* ===== BOTTOM CENTER CARD — 4-point star/sparkle ===== */}
      <g className="si-node-2">
        {/* Shadow */}
        <polygon points="260,355 330,390 260,425 190,390" fill="url(#si-shadow-1)" opacity="0.4" />
        {/* Card body */}
        <polygon points="260,300 330,333 260,366 190,333" className="fill-background stroke-foreground/25" strokeWidth="1" strokeLinejoin="round" />
        {/* Left side */}
        <polygon points="190,333 260,366 260,380 190,347" fill="url(#si-card-side-l)" className="stroke-foreground/25" strokeWidth="1" strokeLinejoin="round" />
        {/* Right side */}
        <polygon points="260,366 330,333 330,347 260,380" fill="url(#si-card-side-r)" className="stroke-foreground/25" strokeWidth="1" strokeLinejoin="round" />
        {/* Card face gradient */}
        <polygon points="260,300 330,333 260,366 190,333" fill="url(#si-card-face)" />
        {/* 4-Point Star / Sparkle icon */}
        <g transform="translate(260, 330)">
          <path d="M0,-16 C3,-6 6,-3 16,0 C6,3 3,6 0,16 C-3,6 -6,3 -16,0 C-6,-3 -3,-6 0,-16Z" className="fill-foreground/50" />
        </g>
      </g>

      {/* ===== RIGHT CARD — Interlocking knot (ChatGPT-like) ===== */}
      <g className="si-node-3">
        {/* Shadow */}
        <polygon points="390,320 460,355 390,390 320,355" fill="url(#si-shadow-1)" opacity="0.4" />
        {/* Card body */}
        <polygon points="390,265 460,298 390,331 320,298" className="fill-background stroke-foreground/25" strokeWidth="1" strokeLinejoin="round" />
        {/* Left side */}
        <polygon points="320,298 390,331 390,345 320,312" fill="url(#si-card-side-l)" className="stroke-foreground/25" strokeWidth="1" strokeLinejoin="round" />
        {/* Right side */}
        <polygon points="390,331 460,298 460,312 390,345" fill="url(#si-card-side-r)" className="stroke-foreground/25" strokeWidth="1" strokeLinejoin="round" />
        {/* Card face gradient */}
        <polygon points="390,265 460,298 390,331 320,298" fill="url(#si-card-face)" />
        {/* Interlocking loops icon */}
        <g transform="translate(390, 295)" className="stroke-foreground/55" strokeWidth="1.5" fill="none">
          <ellipse cx="-6" cy="-4" rx="10" ry="7" />
          <ellipse cx="6" cy="-4" rx="10" ry="7" />
          <ellipse cx="-6" cy="4" rx="10" ry="7" />
          <ellipse cx="6" cy="4" rx="10" ry="7" />
        </g>
      </g>

      {/* ===== CENTRAL SERVER HUB ===== */}
      <g className="si-hub">
        {/* Pillar / connection lines from server bottom to base */}
        <g className="stroke-foreground/15 si-pillar-anim">
          <line x1="235" y1="175" x2="235" y2="195" strokeWidth="1" />
          <line x1="245" y1="175" x2="245" y2="195" strokeWidth="1" />
          <line x1="255" y1="175" x2="255" y2="195" strokeWidth="1" />
          <line x1="265" y1="175" x2="265" y2="195" strokeWidth="1" />
          <line x1="275" y1="175" x2="275" y2="195" strokeWidth="1" />
          <line x1="285" y1="175" x2="285" y2="195" strokeWidth="1" />
        </g>

        {/* Server base box */}
        {/* Top face */}
        <polygon points="260,120 325,152 260,184 195,152" className="fill-background stroke-foreground/30" strokeWidth="1.2" strokeLinejoin="round" />
        <polygon points="260,120 325,152 260,184 195,152" fill="url(#si-server-top)" />
        {/* Left side */}
        <polygon points="195,152 260,184 260,198 195,166" fill="url(#si-card-side-l)" className="stroke-foreground/25" strokeWidth="1" strokeLinejoin="round" />
        {/* Right side */}
        <polygon points="260,184 325,152 325,166 260,198" fill="url(#si-card-side-r)" className="stroke-foreground/25" strokeWidth="1" strokeLinejoin="round" />
        {/* Indicator stripe on front-left face */}
        <line x1="213" y1="157" x2="246" y2="174" className="stroke-foreground/10" strokeWidth="8" strokeLinecap="round" />
        {/* Status dots on the stripe */}
        <circle cx="220" cy="160" r="2.5" fill="url(#si-dot-purple)" className="si-dot-pulse" />
        <circle cx="228" cy="164" r="2.5" fill="url(#si-dot-pink)" className="si-dot-pulse" style={{ animationDelay: '0.3s' }} />
        <circle cx="236" cy="168" r="2.5" fill="url(#si-dot-blue)" className="si-dot-pulse" style={{ animationDelay: '0.6s' }} />

        {/* Upper server block (stacked on top) */}
        {/* Top face */}
        <polygon points="260,90 320,120 260,150 200,120" className="fill-background stroke-foreground/30" strokeWidth="1.2" strokeLinejoin="round" />
        <polygon points="260,90 320,120 260,150 200,120" fill="url(#si-server-top)" />
        {/* Left side */}
        <polygon points="200,120 260,150 260,156 200,126" fill="url(#si-card-side-l)" className="stroke-foreground/25" strokeWidth="1" strokeLinejoin="round" />
        {/* Right side */}
        <polygon points="260,150 320,120 320,126 260,156" fill="url(#si-card-side-r)" className="stroke-foreground/25" strokeWidth="1" strokeLinejoin="round" />

        {/* Top cap — rounded-ish top */}
        <polygon points="260,70 315,98 260,126 205,98" className="fill-background stroke-foreground/30" strokeWidth="1.2" strokeLinejoin="round" rx="6" />
        <polygon points="260,70 315,98 260,126 205,98" fill="url(#si-server-top)" opacity="0.7" />
      </g>
    </svg>
  );
}
