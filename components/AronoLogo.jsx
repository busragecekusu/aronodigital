export default function AronoLogo({ className = "h-16 w-16" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Main gradient */}
        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="50%" stopColor="#64748B" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        
        {/* Accent gradient */}
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        
        {/* Glow effect */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Background hexagon */}
      <path 
        d="M50 8 L78 23 L78 53 L50 68 L22 53 L22 23 Z" 
        fill="url(#mainGradient)"
        opacity="0.15"
      />
      
      {/* Main geometric A structure */}
      <g filter="url(#glow)">
        {/* Left pillar */}
        <path 
          d="M35 70 L42 40 L48 40 L48 70 Z" 
          fill="url(#mainGradient)"
        />
        
        {/* Right pillar */}
        <path 
          d="M52 40 L58 40 L65 70 L52 70 Z" 
          fill="url(#mainGradient)"
        />
        
        {/* Top triangle/peak */}
        <path 
          d="M42 40 L50 20 L58 40 Z" 
          fill="url(#accentGradient)"
        />
        
        {/* Crossbar with tech detail */}
        <rect 
          x="42" 
          y="50" 
          width="16" 
          height="6" 
          fill="url(#accentGradient)"
        />
      </g>
      
      {/* Circuit nodes - left side */}
      <circle cx="28" cy="35" r="2.5" fill="#0EA5E9" opacity="0.8"/>
      <line x1="30.5" y1="35" x2="38" y2="35" stroke="#0EA5E9" strokeWidth="1.5" opacity="0.6"/>
      
      <circle cx="25" cy="50" r="2.5" fill="#64748B" opacity="0.8"/>
      <line x1="27.5" y1="50" x2="35" y2="50" stroke="#64748B" strokeWidth="1.5" opacity="0.6"/>
      
      {/* Circuit nodes - right side */}
      <circle cx="72" cy="35" r="2.5" fill="#0EA5E9" opacity="0.8"/>
      <line x1="62" y1="35" x2="69.5" y2="35" stroke="#0EA5E9" strokeWidth="1.5" opacity="0.6"/>
      
      <circle cx="75" cy="50" r="2.5" fill="#64748B" opacity="0.8"/>
      <line x1="65" y1="50" x2="72.5" y2="50" stroke="#64748B" strokeWidth="1.5" opacity="0.6"/>
      
      {/* Data flow lines - animated effect suggestion */}
      <path 
        d="M50 72 L50 78" 
        stroke="url(#accentGradient)" 
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="50" cy="80" r="2" fill="#0EA5E9" opacity="0.9"/>
      
      {/* Corner accents for depth */}
      <path d="M20 20 L25 20 L25 25" stroke="#64748B" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
      <path d="M80 20 L75 20 L75 25" stroke="#64748B" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
      <path d="M20 80 L25 80 L25 75" stroke="#64748B" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
      <path d="M80 80 L75 80 L75 75" stroke="#64748B" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
    </svg>
  );
}
