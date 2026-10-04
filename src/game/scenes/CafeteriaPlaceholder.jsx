/*
  PLACEHOLDER ART for the cafeteria's main view.
  Nothing here is interactive yet. In the next milestone this becomes a
  real scene with hotspots (Maya, a laptop, the router, a QR poster...).
*/
export default function CafeteriaPlaceholder() {
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Placeholder illustration of a warm university cafeteria with a counter, tables and big arched windows."
    >
      <defs>
        <linearGradient id="caf-outside" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6c79a" />
          <stop offset="1" stopColor="#f29b7a" />
        </linearGradient>
      </defs>

      {/* Back wall and floor */}
      <rect width="400" height="300" fill="#f0dcbc" />
      <rect y="205" width="400" height="95" fill="#c99a6e" />
      <rect y="205" width="400" height="5" fill="#b5875c" />

      {/* Arched windows with sunset outside */}
      {[40, 130, 220].map((x) => (
        <g key={x}>
          <path d={`M${x} 150 V70 a35 35 0 0 1 70 0 V150 Z`} fill="url(#caf-outside)" />
          <path d={`M${x} 150 V70 a35 35 0 0 1 70 0 V150 Z`} fill="none" stroke="#fff6e6" strokeWidth="5" />
          <line x1={x + 35} y1="36" x2={x + 35} y2="150" stroke="#fff6e6" strokeWidth="3" />
          <path d={`M${x} 140 Q${x + 25} 120 ${x + 70} 132 V150 H${x} Z`} fill="#7d9f78" opacity="0.8" />
        </g>
      ))}

      {/* Menu board */}
      <rect x="310" y="48" width="76" height="52" rx="6" fill="#33463c" />
      <rect x="320" y="60" width="40" height="4" rx="2" fill="#f4ecdd" opacity="0.8" />
      <rect x="320" y="72" width="52" height="4" rx="2" fill="#f4ecdd" opacity="0.6" />
      <rect x="320" y="84" width="30" height="4" rx="2" fill="#f4ecdd" opacity="0.6" />

      {/* Wall router with a small light */}
      <rect x="326" y="118" width="40" height="12" rx="4" fill="#e9e4da" stroke="#b9b0a0" />
      <circle cx="358" cy="124" r="2.5" fill="#7bc47f" />

      {/* Counter with a coffee machine */}
      <rect x="296" y="160" width="104" height="60" fill="#a8674a" />
      <rect x="290" y="154" width="110" height="10" rx="3" fill="#7a4a35" />
      <rect x="318" y="128" width="30" height="26" rx="4" fill="#556a74" />
      <rect x="326" y="146" width="10" height="8" fill="#fff6e6" />

      {/* Plant */}
      <rect x="14" y="186" width="24" height="24" rx="4" fill="#b5533c" />
      <path d="M26 186 C10 170 12 150 20 146 C24 160 26 170 26 186 C28 166 34 150 42 150 C44 164 36 178 26 186" fill="#3f7a55" />

      {/* Tables */}
      {[[90, 232], [220, 246]].map(([x, y]) => (
        <g key={x}>
          <ellipse cx={x} cy={y} rx="56" ry="14" fill="#8a5a3f" />
          <rect x={x - 4} y={y} width="8" height="40" fill="#6e4532" />
          <ellipse cx={x} cy={y - 2} rx="56" ry="12" fill="#e9c9a0" />
        </g>
      ))}

      {/* Laptop + coffee cup on the first table */}
      <path d="M70 226 L76 206 H104 L98 226 Z" fill="#8fb3d9" />
      <rect x="64" y="225" width="44" height="4" rx="2" fill="#6d8fb3" />
      <rect x="116" y="220" width="10" height="10" rx="2" fill="#fff6e6" />

      {/* Backpack leaning on the second table */}
      <rect x="262" y="250" width="22" height="28" rx="7" fill="#c8457a" />
      <rect x="266" y="262" width="14" height="8" rx="3" fill="#a8365f" />
    </svg>
  );
}
