const HUBS = [
  { id: 'usa', label: 'USA', x: 205, y: 155, region: 'North America' },
  { id: 'canada', label: 'Canada', x: 225, y: 112, region: 'North America' },
  { id: 'uk', label: 'UK', x: 472, y: 118, region: 'Europe' },
  { id: 'uae', label: 'UAE', x: 618, y: 196, region: 'Middle East' },
  { id: 'pk', label: 'PK', x: 672, y: 184, region: 'South Asia' },
  { id: 'au', label: 'Australia', x: 832, y: 325, region: 'Asia-Pacific' },
];

const LINKS: [number, number][] = [
  [0, 1],
  [0, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [2, 4],
  [0, 3],
];

export function GlobalNetworkGraphic() {
  return (
    <div className="relative w-full rounded-xl border border-[#292638] bg-[#101019] p-4 sm:p-6 overflow-hidden">
      <svg
        viewBox="0 0 1000 440"
        className="w-full h-auto block"
        role="img"
        aria-label="Global agency service network connecting USA, Canada, UK, UAE, PK, Australia, and clients worldwide"
      >
        <defs>
          <radialGradient id="digiserv-map-glow" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#762BFF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#08080D" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="digiserv-arc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#762BFF" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#A855F7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#762BFF" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        <rect width="1000" height="440" fill="url(#digiserv-map-glow)" />

        {/* Subtle latitude / longitude grid */}
        <g stroke="#292638" strokeWidth="0.75" strokeDasharray="3 5" opacity="0.7">
          <line x1="0" y1="110" x2="1000" y2="110" />
          <line x1="0" y1="220" x2="1000" y2="220" />
          <line x1="0" y1="330" x2="1000" y2="330" />
          <line x1="200" y1="0" x2="200" y2="440" />
          <line x1="400" y1="0" x2="400" y2="440" />
          <line x1="600" y1="0" x2="600" y2="440" />
          <line x1="800" y1="0" x2="800" y2="440" />
        </g>

        {/* Stylized continent silhouettes */}
        <g fill="#191827" stroke="#292638" strokeWidth="1.2">
          {/* North America */}
          <path d="M95,90 L280,68 L325,112 L270,188 L195,215 L145,175 Z" />
          {/* South America */}
          <path d="M235,232 L305,248 L335,310 L282,390 L248,375 L230,295 Z" />
          {/* Europe */}
          <path d="M445,86 L555,78 L585,126 L530,152 L455,146 Z" />
          {/* Africa */}
          <path d="M452,172 L555,168 L602,226 L565,332 L505,342 L462,250 Z" />
          {/* Middle East & Asia */}
          <path d="M575,135 L780,98 L875,145 L830,225 L715,242 L605,212 Z" />
          {/* Australia */}
          <path d="M775,286 L882,282 L904,344 L840,368 L772,340 Z" />
        </g>

        {/* Connection arcs */}
        {LINKS.map(([fromIdx, toIdx], i) => {
          const from = HUBS[fromIdx];
          const to = HUBS[toIdx];
          const midX = (from.x + to.x) / 2;
          const midY = Math.min(from.y, to.y) - 42;
          return (
            <path
              key={i}
              d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
              fill="none"
              stroke="url(#digiserv-arc)"
              strokeWidth="1.6"
            />
          );
        })}

        {/* Market nodes */}
        {HUBS.map((hub) => (
          <g key={hub.id}>
            <circle cx={hub.x} cy={hub.y} r="11" fill="#762BFF" fillOpacity="0.18" />
            <circle cx={hub.x} cy={hub.y} r="4.5" fill="#A855F7" stroke="#FFFFFF" strokeWidth="1.5" />
            <text
              x={hub.x}
              y={hub.y - 16}
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="12"
              fontWeight="600"
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              {hub.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
