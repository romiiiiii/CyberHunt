import { CafeWalls, Plant } from './scenery.jsx';

/* View 3: the exit, with the glass door, the parking lot outside, and a late student. */
export default function ExitView({ doorOpen = false, locksOpen = 0 }) {
  return (
    <g>
      <CafeWalls floorY={236} />

      {/* Window onto the rainy parking lot */}
      <g>
        <rect x="20" y="70" width="110" height="100" fill="#aebccb" />
        <rect x="20" y="136" width="110" height="34" fill="#8d9590" />
        <g stroke="#e8e4dc" strokeWidth="1.5">
          <line x1="40" y1="160" x2="52" y2="160" />
          <line x1="96" y1="160" x2="108" y2="160" />
        </g>
        {/* The loud car, rattling a little */}
        <g className="scene-rattle">
          <path d="M50 140 L58 128 H84 L94 140 Z" fill="#c4473d" />
          <rect x="46" y="138" width="54" height="10" rx="3" fill="#c4473d" />
          <path d="M60 138 L64 131 H76 V138 Z M80 138 V131 H84 L90 138 Z" fill="#cfe0e8" />
          <circle cx="58" cy="149" r="4" fill="#2e3b45" />
          <circle cx="88" cy="149" r="4" fill="#2e3b45" />
          <g stroke="#2e3b45" strokeWidth="1.2" strokeLinecap="round">
            <line x1="40" y1="140" x2="34" y2="138" />
            <line x1="40" y1="145" x2="33" y2="146" />
          </g>
        </g>
        <g stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1" strokeLinecap="round">
          {[30, 54, 78, 102, 120].map((x, i) => (
            <line key={x} x1={x} y1={80 + (i % 3) * 14} x2={x - 2} y2={88 + (i % 3) * 14} />
          ))}
        </g>
        <rect x="20" y="70" width="110" height="100" fill="none" stroke="#fff6e6" strokeWidth="5" />
        <line x1="75" y1="70" x2="75" y2="170" stroke="#fff6e6" strokeWidth="3" />
      </g>

      {/* Exit sign */}
      <rect x="182" y="72" width="36" height="14" rx="2" fill="#3f8f5a" />
      <text x="200" y="82.5" textAnchor="middle" fontSize="9" fontWeight="800" fill="#ffffff" fontFamily="Nunito, sans-serif">EXIT</text>

      {/* Arched glass door in a stone frame, like the campus buildings */}
      <path d="M160 238 V128 a40 40 0 0 1 80 0 V238 Z" fill="#e7e1d4" />
      <path d="M170 238 V132 a30 30 0 0 1 60 0 V238 Z" className={doorOpen ? 'exit-door exit-door--open' : 'exit-door'} />
      <line x1="200" y1="102" x2="200" y2="238" stroke="#e8f1ef" strokeWidth="2" />
      <rect x="192" y="170" width="3" height="16" rx="1" fill="#e8f1ef" />
      <rect x="205" y="170" width="3" height="16" rx="1" fill="#e8f1ef" />

      {/* Lock panel beside the door: one light per lock, green when open. */}
      <rect x="244" y="138" width="14" height="40" rx="3" fill="#4a5863" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx="251" cy={146 + i * 12} r="3.5" fill={i < locksOpen ? '#5cc47a' : '#d9534a'} />
      ))}

      <Plant x={272} y={214} />

      {/* Late student rushing in with a dripping umbrella */}
      <g transform="translate(312 230)">
        <g className="scene-student scene-student--running">
          <path d="M-16 -50 Q0 -68 16 -50 Z" fill="#3f6b8f" />
          <line x1="0" y1="-50" x2="0" y2="-36" stroke="#3a3a3a" strokeWidth="1.5" />
          <circle cx="0" cy="-30" r="8" fill="#6b4a36" />
          <rect x="-8" y="-22" width="16" height="20" rx="6" fill="#8fb3d9" />
          <rect x="-7" y="-3" width="6" height="10" fill="#2e3b45" />
          <rect x="1" y="-3" width="6" height="10" fill="#2e3b45" />
          <g stroke="#cfe0e8" strokeWidth="1.2" strokeLinecap="round">
            <line x1="-14" y1="-46" x2="-14" y2="-41" />
            <line x1="14" y1="-46" x2="14" y2="-40" />
          </g>
        </g>
      </g>
    </g>
  );
}
