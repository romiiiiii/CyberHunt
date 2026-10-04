/*
  Shared bits of scenery used by more than one cafeteria view.
  Each view is an SVG <g> drawn inside a 400×300 canvas (see GameScene).
*/

export function RainyWindow({ x, y = 70, w = 70, h = 80 }) {
  const r = w / 2;
  const outline = `M${x} ${y + h} V${y + r} a${r} ${r} 0 0 1 ${w} 0 V${y + h} Z`;
  return (
    <g>
      <path d={outline} fill="url(#caf-outside)" />
      <path d={`M${x} ${y + h - 10} Q${x + w * 0.35} ${y + h - 30} ${x + w} ${y + h - 18} V${y + h} H${x} Z`} fill="#5f8565" />
      <ellipse cx={x + w * 0.3} cy={y + h - 28} rx={w * 0.28} ry="5" fill="#2f5a45" />
      <line x1={x + w * 0.3} y1={y + h - 28} x2={x + w * 0.32} y2={y + h - 10} stroke="#6b5444" strokeWidth="2" />
      <g stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1" strokeLinecap="round">
        {[0.15, 0.35, 0.6, 0.8].map((f, i) => (
          <line key={f} x1={x + w * f} y1={y + r * 0.6 + i * 10} x2={x + w * f - 2} y2={y + r * 0.6 + i * 10 + 8} />
        ))}
      </g>
      <path d={outline} fill="none" stroke="#fff6e6" strokeWidth="5" />
      <line x1={x + r} y1={y} x2={x + r} y2={y + h} stroke="#fff6e6" strokeWidth="3" />
    </g>
  );
}

export function CafeWalls({ floorY = 205 }) {
  return (
    <g>
      <defs>
        <linearGradient id="caf-outside" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#aebccb" />
          <stop offset="1" stopColor="#d6dbd6" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#f0dcbc" />
      <rect y={floorY} width="400" height={300 - floorY} fill="#c99a6e" />
      <rect y={floorY} width="400" height="5" fill="#b5875c" />
    </g>
  );
}

export function Table({ x, y, rx = 50 }) {
  return (
    <g>
      <rect x={x - 4} y={y} width="8" height={300 - y} fill="#6e4532" />
      <ellipse cx={x} cy={y} rx={rx} ry="13" fill="#8a5a3f" />
      <ellipse cx={x} cy={y - 2} rx={rx} ry="11" fill="#e9c9a0" />
    </g>
  );
}

export function Plant({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-12" y="0" width="24" height="24" rx="4" fill="#b5533c" />
      <path d="M0 0 C-16 -16 -14 -36 -6 -40 C-2 -26 0 -16 0 0 C2 -20 8 -36 16 -36 C18 -22 10 -8 0 0" fill="#3f7a55" />
    </g>
  );
}
