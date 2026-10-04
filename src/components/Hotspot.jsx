/*
  One clickable object inside a scene.

  It's drawn inside the scene's SVG, so it stays exactly on top of the object
  at any screen size. The visible marker is small, but the invisible hit area
  is large enough for a thumb. Works with mouse, touch and keyboard.
*/
export default function Hotspot({ hotspot, visited, onActivate }) {
  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onActivate(hotspot);
    }
  }

  return (
    <g
      className={visited ? 'hotspot hotspot--visited' : 'hotspot'}
      transform={`translate(${hotspot.x} ${hotspot.y})`}
      role="button"
      tabIndex={0}
      aria-label={visited ? `${hotspot.label} (checked)` : hotspot.label}
      onClick={() => onActivate(hotspot)}
      onKeyDown={handleKeyDown}
    >
      <circle className="hotspot__hit" r="20" />
      <circle className="hotspot__halo" r="8" />
      <circle className="hotspot__ring" r="6" />
      <circle className="hotspot__dot" r="2" />
    </g>
  );
}
