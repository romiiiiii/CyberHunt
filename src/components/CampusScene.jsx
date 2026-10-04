import './CampusScene.css';

/*
  Illustrated campus on a rainy morning, inspired by the architecture of a
  hillside Lebanese university: white stone buildings with terracotta roofs,
  tall arched glass windows, a concrete arcade with a central arch, busts on
  pedestals, umbrella pines and bougainvillea. No real logos or names.

  PLACEHOLDER ART: hand-built SVG until proper illustrations exist.
  The one "odd" detail is the pink Wi-Fi signal in the right-hand glass arch.
*/

// Small square windows on each wing: [x, y, isLit]. Rainy morning, so some lights are on.
const LEFT_WINDOWS = [
  [76, 136, true], [92, 136, false], [76, 154, false], [92, 154, true],
  [76, 172, true], [92, 172, true], [76, 190, false], [92, 190, false],
];
const RIGHT_WINDOWS = [
  [298, 136, false], [314, 136, true], [298, 154, true], [314, 154, false],
  [298, 172, false], [314, 172, true], [298, 190, true], [314, 190, false],
];

// Rain streaks: fixed positions so the picture is the same on every render.
const RAIN = Array.from({ length: 46 }, (_, i) => ({
  x: (i * 53) % 420,
  y: (i * 37) % 300,
  delay: `${(i % 7) * -0.17}s`,
}));

function Wing({ x, roofPeak, windows, glassX }) {
  return (
    <g>
      <rect x={x} y="122" width="86" height="96" fill="#f3efe6" />
      <rect x={x} y="122" width="86" height="96" fill="url(#stone-shade)" />
      <path d={`M${x - 6} 124 L${roofPeak} 98 L${x + 92} 124 Z`} fill="#c96f4a" />
      <path d={`M${x - 6} 124 L${roofPeak} 98 L${x + 92} 124`} fill="none" stroke="#a6543a" strokeWidth="2" />
      {windows.map(([wx, wy, lit]) => (
        <rect key={`${wx}-${wy}`} x={wx} y={wy} width="10" height="11" rx="1"
          className={lit ? 'scene-window scene-window--lit' : 'scene-window'} />
      ))}
      {/* Tall arched glass window */}
      <path d={`M${glassX} 216 V146 a12 12 0 0 1 24 0 V216 Z`} className="scene-glass" />
      <path d={`M${glassX + 12} 136 V216 M${glassX} 176 H${glassX + 24}`} stroke="#e8f1ef" strokeWidth="1.2" />
    </g>
  );
}

function Bust({ x }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <rect x="-5" y="236" width="10" height="30" fill="#f6f2ea" />
      <rect x="-6" y="234" width="12" height="3" fill="#ddd6c8" />
      <path d="M-4 234 Q0 226 4 234 Z" fill="#9aa09c" />
      <circle cx="0" cy="224" r="3.6" fill="#8c938f" />
    </g>
  );
}

function Student({ x, y, shirt, umbrella, running, delay }) {
  return (
    // Outer <g> positions the student; inner <g> bobs, so the two transforms don't clash.
    <g transform={`translate(${x} ${y})`}>
      <g className={running ? 'scene-student scene-student--running' : 'scene-student'} style={{ animationDelay: delay }}>
        {umbrella && (
          <g>
            <path d="M-10 -20 Q0 -32 10 -20 Z" fill={umbrella} />
            <line x1="0" y1="-20" x2="0" y2="-12" stroke="#3a3a3a" strokeWidth="1" />
          </g>
        )}
        <circle cx="0" cy="-15" r="4" fill="#6b4a36" />
        <rect x="-4" y="-11" width="8" height="10" rx="3" fill={shirt} />
        <rect x="-3.5" y="-2" width="3" height="5" fill="#2e3b45" />
        <rect x="0.5" y="-2" width="3" height="5" fill="#2e3b45" />
        {running && (
          <g className="scene-speedlines" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round">
            <line x1="-9" y1="-12" x2="-16" y2="-12" />
            <line x1="-9" y1="-7" x2="-14" y2="-7" />
          </g>
        )}
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
      aria-label="Illustrated hillside campus on a rainy morning: white stone buildings with red roofs and arched glass windows, a plaza with busts, pine trees and pink flowers, and students with umbrellas."
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#aebccb" />
          <stop offset="0.7" stopColor="#dcd8cf" />
          <stop offset="1" stopColor="#ebe1cf" />
        </linearGradient>
        <linearGradient id="stone-shade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.06" />
        </linearGradient>
      </defs>

      <rect width="400" height="300" fill="url(#sky)" />

      {/* Soft rain clouds */}
      <g fill="#f1efea" opacity="0.75">
        <ellipse cx="70" cy="46" rx="60" ry="14" />
        <ellipse cx="110" cy="38" rx="40" ry="12" />
        <ellipse cx="300" cy="58" rx="70" ry="15" />
        <ellipse cx="345" cy="48" rx="40" ry="12" />
      </g>

      {/* Distant hills with houses, and the sea on the right */}
      <path d="M0 150 Q60 120 130 138 T260 132 T400 128 V200 H0 Z" fill="#a8b6ae" />
      <rect x="330" y="134" width="70" height="6" fill="#b9cbd6" />
      <g fill="#e8e4dc" opacity="0.8">
        {[20, 34, 52, 70, 210, 226, 244, 262, 360, 376].map((x, i) => (
          <rect key={x} x={x} y={142 - (i % 3) * 4} width="7" height="5" />
        ))}
      </g>
      {/* Pine-covered hill behind campus */}
      <path d="M0 176 Q90 140 200 160 T400 150 V230 H0 Z" fill="#5f8565" />

      {/* Back building between the wings */}
      <rect x="150" y="150" width="100" height="68" fill="#ece6da" />

      <Wing x={64} roofPeak={107} windows={LEFT_WINDOWS} glassX={116} />
      <Wing x={250} roofPeak={293} windows={RIGHT_WINDOWS} glassX={260} />

      {/* The odd thing: a signal glowing in the right glass arch */}
      <g className="scene-signal" transform="translate(272 166)">
        <path d="M-9 -6 a13 13 0 0 1 18 0" />
        <path d="M-5 -2 a7 7 0 0 1 10 0" />
        <circle cx="0" cy="2" r="1.7" />
      </g>

      {/* Concrete arcade with the central arch */}
      <g fill="#d9d4ca">
        <rect x="140" y="170" width="120" height="8" />
        {[146, 164, 230, 248].map((x) => (
          <rect key={x} x={x} y="178" width="6" height="40" />
        ))}
        <path d="M176 218 V160 a24 24 0 0 1 48 0 V218 H214 V164 a14 14 0 0 0 -28 0 V218 Z" />
      </g>
      <path d="M186 218 V172 a14 14 0 0 1 28 0 V218 Z" className="scene-glass" />
      <rect x="196" y="204" width="8" height="14" fill="#c4473d" />

      {/* Wide stairs */}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={150 - i * 8} y={218 + i * 4} width={100 + i * 16} height="4"
          fill={i % 2 ? '#e4ddd0' : '#d6cfc1'} />
      ))}

      {/* Plaza */}
      <rect x="0" y="234" width="400" height="66" fill="#e8dfcf" />
      <g stroke="#d8cdb9" strokeWidth="0.8">
        {[250, 268, 288].map((y) => <line key={y} x1="0" y1={y} x2="400" y2={y} />)}
      </g>
      <rect x="0" y="230" width="120" height="8" rx="4" fill="#4f7a55" />
      <rect x="282" y="230" width="118" height="8" rx="4" fill="#4f7a55" />

      <Bust x={128} />
      <Bust x={272} />
      <path d="M100 262 h20 v6 h-3 v-3 h-14 v3 h-3 Z" fill="#f6f2ea" />
      <path d="M282 262 h20 v6 h-3 v-3 h-14 v3 h-3 Z" fill="#f6f2ea" />

      {/* Globe lamp post */}
      <g>
        <rect x="333" y="200" width="3" height="66" fill="#4a4f4c" />
        <circle cx="328" cy="200" r="5" className="scene-lamp" />
        <circle cx="341" cy="200" r="5" className="scene-lamp" />
        <circle cx="334.5" cy="193" r="5" className="scene-lamp" />
      </g>

      {/* Umbrella pine on the left */}
      <path d="M46 300 C50 260 44 230 60 200" stroke="#6b5444" strokeWidth="6" fill="none" />
      <g fill="#2f5a45">
        <ellipse cx="54" cy="192" rx="52" ry="13" />
        <ellipse cx="34" cy="184" rx="30" ry="10" />
        <ellipse cx="78" cy="185" rx="28" ry="9" />
      </g>

      {/* Olive tree with bougainvillea on the right */}
      <g transform="translate(-12 0)">
        <path d="M372 300 C368 276 380 262 370 244" stroke="#8a7d6c" strokeWidth="7" fill="none" />
        <circle cx="366" cy="232" r="22" fill="#d24f92" />
        <circle cx="386" cy="244" r="16" fill="#b8407c" />
        <circle cx="350" cy="246" r="13" fill="#e374ad" />
        <circle cx="392" cy="222" r="12" fill="#5a8452" />
      </g>

      {/* Students: two under umbrellas, one running late */}
      <Student x={160} y={284} shirt="#f2a65a" umbrella="#e9665b" delay="0s" />
      <Student x={238} y={276} shirt="#8fb3d9" umbrella="#3f6b8f" delay="0.8s" />
      <Student x={206} y={256} shirt="#c8457a" running delay="0s" />

      {/* Rain */}
      <g className="scene-rain" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="1" strokeLinecap="round">
        {RAIN.map((drop, i) => (
          <line key={i} x1={drop.x} y1={drop.y} x2={drop.x - 3} y2={drop.y + 9} style={{ animationDelay: drop.delay }} />
        ))}
      </g>
    </svg>
  );
}
