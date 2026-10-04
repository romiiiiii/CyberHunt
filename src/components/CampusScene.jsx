import './CampusScene.css';

/*
  Hand-built SVG illustration of a hillside campus at golden hour.
  PLACEHOLDER ART: this stands in until real illustrated backgrounds exist.
  The one "odd" detail is the window with the pink Wi-Fi signal — the
  first hint that something on this cozy campus isn't quite right.
*/

// Arched windows on the main building: [x, y, isLit]
const WINDOWS = [
  [118, 168, true], [148, 168, false], [178, 168, true], [222, 168, true], [252, 168, false],
  [118, 206, false], [148, 206, true], [222, 206, true], [252, 206, true],
];

function ArchWindow({ x, y, lit }) {
  return (
    <path
      d={`M${x} ${y + 22} V${y + 8} a9 9 0 0 1 18 0 V${y + 22} Z`}
      className={lit ? 'scene-window scene-window--lit' : 'scene-window'}
    />
  );
}

function Cedar({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} className="scene-cedar">
      <rect x="-2" y="0" width="4" height="14" fill="#5a4636" />
      <path d="M0 -40 L18 -20 H8 L22 -6 H-22 L-8 -20 H-18 Z" />
      <path d="M0 -30 L12 -16 H-12 Z" opacity="0.35" fill="#fff" />
    </g>
  );
}

function Student({ x, y, shirt, delay }) {
  return (
    // Outer <g> positions the student; inner <g> bobs, so the two transforms don't clash.
    <g transform={`translate(${x} ${y})`}>
      <g className="scene-student" style={{ animationDelay: delay }}>
      <circle cx="0" cy="-15" r="4" fill="#6b4a36" />
      <rect x="-4" y="-11" width="8" height="10" rx="3" fill={shirt} />
      <rect x="-3.5" y="-2" width="3" height="5" fill="#2e3b45" />
      <rect x="0.5" y="-2" width="3" height="5" fill="#2e3b45" />
      </g>
    </g>
  );
}

export default function CampusScene() {
  return (
    <svg
      className="campus-scene"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMax slice"
      role="img"
      aria-label="An illustrated hillside university campus at sunset, with students walking toward a stone building."
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9fc0dc" />
          <stop offset="0.55" stopColor="#f6d3b0" />
          <stop offset="1" stopColor="#f7b58a" />
        </linearGradient>
        <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff3d6" />
          <stop offset="1" stopColor="#ffd9a0" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="300" fill="url(#sky)" />
      <circle cx="318" cy="132" r="60" fill="url(#sun)" />
      <circle cx="318" cy="132" r="20" fill="#fff1cf" />

      {/* Far mountains and the sea line */}
      <path d="M0 170 L50 132 L95 158 L150 118 L210 156 L260 128 L330 160 L400 136 V300 H0 Z" fill="#b9b5c9" opacity="0.7" />
      <path d="M0 192 Q100 160 200 186 T400 176 V300 H0 Z" fill="#8fae95" />

      {/* Main building: limestone with a red-tiled roof */}
      <g>
        <rect x="104" y="150" width="182" height="92" fill="#efe1c6" />
        <rect x="104" y="150" width="182" height="6" fill="#e2cfae" />
        <path d="M96 152 L195 118 L294 152 Z" fill="#b5533c" />
        <path d="M96 152 L195 118 L294 152 Z" fill="none" stroke="#933f2d" strokeWidth="2" />
        {WINDOWS.map(([x, y, lit]) => (
          <ArchWindow key={`${x}-${y}`} x={x} y={y} lit={lit} />
        ))}

        {/* The odd window: a signal that shouldn't be there */}
        <path d="M178 228 V214 a9 9 0 0 1 18 0 V228 Z" className="scene-window scene-window--odd" />
        <g className="scene-signal" transform="translate(187 222)">
          <path d="M-10 -8 a14 14 0 0 1 20 0" />
          <path d="M-6 -4 a8 8 0 0 1 12 0" />
          <circle cx="0" cy="0" r="1.6" />
        </g>

        {/* Entrance arch */}
        <path d="M200 242 V222 a8 8 0 0 1 16 0 V242 Z" fill="#7a5841" />
      </g>

      {/* Side building */}
      <rect x="290" y="186" width="70" height="56" fill="#e7d6b8" />
      <path d="M286 188 L325 168 L364 188 Z" fill="#a84a35" />
      <rect x="302" y="200" width="14" height="16" rx="2" className="scene-window scene-window--lit" />
      <rect x="334" y="200" width="14" height="16" rx="2" className="scene-window" />

      <Cedar x={62} y={232} s={1.3} />
      <Cedar x={84} y={242} s={0.9} />
      <Cedar x={372} y={238} s={1.1} />

      {/* Foreground hill and footpath */}
      <path d="M0 236 Q120 220 210 240 T400 232 V300 H0 Z" fill="#7d9f78" />
      <path d="M208 242 C200 262 150 270 130 300 H190 C200 280 222 262 218 242 Z" fill="#e9d7b5" />

      <Student x={170} y={284} shirt="#f2a65a" delay="0s" />
      <Student x={190} y={268} shirt="#8fb3d9" delay="1.2s" />
      <Student x={206} y={256} shirt="#c8457a" delay="0.6s" />
    </svg>
  );
}
