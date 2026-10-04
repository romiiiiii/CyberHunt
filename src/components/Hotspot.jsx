/*
  One clickable object inside a scene.

  It's drawn inside the scene's SVG, so it stays exactly on top of the object
  at any screen size. The hit area is large enough for a thumb.
  Works with mouse, touch and keyboard.

  The marker is hidden by default so players have to notice things
  themselves. It appears on hover, on keyboard focus, or when the player
  turns on highlights from the Hint menu (`highlighted`).
*/
export default function Hotspot({ hotspot, visited, highlighted, onActivate }) {
  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onActivate(hotspot);
    }
  }

  let className = 'hotspot';
  if (visited) className += ' hotspot--visited';
  if (highlighted) className += ' hotspot--highlighted';

  return (
    <g
      className={className}
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
