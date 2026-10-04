import { CafeWalls, Plant, RainyWindow, Table } from './scenery.jsx';

/* View 1: the counter, with the café's router, a coffee corner and a club poster. */
export default function CounterView() {
  return (
    <g>
      <CafeWalls />
      <RainyWindow x={30} />
      <RainyWindow x={110} />

      {/* Club poster with a QR code */}
      <g>
        <rect x="180" y="140" width="34" height="46" rx="2" fill="#fff6e6" stroke="#d9c7a6" />
        <rect x="185" y="146" width="24" height="5" rx="1" fill="#3f6b8f" />
        <rect x="185" y="154" width="18" height="3" rx="1" fill="#c8a882" />
        <rect x="189" y="162" width="16" height="16" fill="#33463c" />
        <rect x="192" y="165" width="4" height="4" fill="#fff6e6" />
        <rect x="198" y="171" width="4" height="4" fill="#fff6e6" />
        <rect x="192" y="172" width="3" height="3" fill="#fff6e6" />
      </g>

      {/* Menu board */}
      <rect x="290" y="44" width="96" height="52" rx="6" fill="#33463c" />
      <rect x="302" y="56" width="44" height="4" rx="2" fill="#f4ecdd" opacity="0.8" />
      <rect x="302" y="68" width="62" height="4" rx="2" fill="#f4ecdd" opacity="0.6" />
      <rect x="302" y="80" width="36" height="4" rx="2" fill="#f4ecdd" opacity="0.6" />

      {/* Router with a steady green light and an IT sticker */}
      <rect x="326" y="114" width="40" height="13" rx="4" fill="#e9e4da" stroke="#b9b0a0" />
      <rect x="331" y="118" width="12" height="5" rx="1" fill="#8fb3d9" />
      <circle cx="358" cy="120.5" r="2.5" fill="#7bc47f" />

      {/* Counter */}
      <rect x="282" y="160" width="118" height="62" fill="#a8674a" />
      <rect x="276" y="154" width="124" height="10" rx="3" fill="#7a4a35" />

      {/* Coffee machine and a box of 3-in-1 sachets */}
      <rect x="300" y="128" width="28" height="26" rx="4" fill="#556a74" />
      <rect x="308" y="144" width="10" height="10" fill="#fff6e6" />
      <rect x="356" y="140" width="26" height="14" rx="2" fill="#f6efe2" />
      <g fill="#c4372f">
        <rect x="360" y="134" width="3" height="10" rx="1" transform="rotate(-8 361 139)" />
        <rect x="366" y="133" width="3" height="10" rx="1" />
        <rect x="372" y="134" width="3" height="10" rx="1" transform="rotate(10 373 139)" />
      </g>

      <Plant x={250} y={186} />
      <Table x={110} y={240} rx={56} number={1} />
      <rect x="100" y="226" width="10" height="11" rx="2" fill="#fff6e6" />
    </g>
  );
}
