import { CafeWalls, Plant, RainyWindow, Table } from './scenery.jsx';

/* View 2: the seating area, with Maya, a student on a laptop, and the corner table. */
export default function SeatingView() {
  return (
    <g>
      <CafeWalls />
      <RainyWindow x={40} y={60} w={80} h={90} />
      <RainyWindow x={240} y={60} w={80} h={90} />

      {/* Pendant lamps */}
      {[150, 280].map((x) => (
        <g key={x}>
          <line x1={x} y1="0" x2={x} y2="30" stroke="#6b5444" strokeWidth="1.5" />
          <path d={`M${x - 10} 40 Q${x} 24 ${x + 10} 40 Z`} fill="#e3a64e" />
          <circle cx={x} cy="42" r="3" fill="#fff2cf" />
        </g>
      ))}

      {/* Maya, sitting at a table, looking at her phone */}
      <g>
        <rect x="128" y="196" width="44" height="40" rx="6" fill="#7a4a35" />
        <path d="M134 152 Q150 136 166 152 L168 186 H132 Z" fill="#3b2a24" />
        <rect x="134" y="168" width="32" height="36" rx="12" fill="#e5a93b" />
        <circle cx="150" cy="158" r="12" fill="#c98e6a" />
        <path d="M137 156 Q150 138 163 156 Q156 148 150 149 Q144 148 137 156 Z" fill="#3b2a24" />
        <circle cx="146" cy="160" r="1.3" fill="#3b2a24" />
        <circle cx="155" cy="160" r="1.3" fill="#3b2a24" />
        <path d="M147 166 Q150 164 154 166" stroke="#3b2a24" strokeWidth="1.2" fill="none" />
        <rect x="153" y="184" width="8" height="13" rx="2" fill="#2e3b45" />
      </g>
      <Table x={150} y={214} rx={44} />
      <rect x="120" y="204" width="9" height="10" rx="2" fill="#fff6e6" />

      {/* Student with a laptop, seen from behind */}
      <g>
        <rect x="294" y="172" width="34" height="34" rx="12" fill="#6d8fb3" />
        <circle cx="311" cy="162" r="11" fill="#4a3328" />
      </g>
      <Table x={290} y={220} rx={40} />
      <path d="M266 216 L272 196 H296 L290 216 Z" fill="#b9c4cc" />
      <rect x="260" y="215" width="40" height="4" rx="2" fill="#8d99a2" />

      <Plant x={30} y={196} />

      {/* Corner table — something is hidden underneath */}
      <Table x={352} y={250} rx={42} />
      <g>
        <rect x="340" y="256" width="20" height="10" rx="2" fill="#2e3b45" />
        <line x1="356" y1="256" x2="364" y2="246" stroke="#2e3b45" strokeWidth="1.5" />
        <rect x="336" y="266" width="14" height="8" rx="2" fill="#4a4f4c" />
        <circle cx="345" cy="261" r="1.8" className="scene-blink" />
      </g>
    </g>
  );
}
