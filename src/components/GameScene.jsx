import { useEffect, useRef, useState } from 'react';
import Hotspot from './Hotspot.jsx';
import './GameScene.css';

/*
  Shows one view of a location, its hotspots, and arrows to the other views.

  The illustration keeps its 4:3 shape. On a narrow phone screen it's wider
  than the screen, so the player swipes sideways to look around — like
  turning their head in the room. On a wide screen it fits with space around it.
*/
export default function GameScene({ views, viewIndex, onChangeView, illustrations, viewProps, visited, highlightHotspots, onHotspot }) {
  const view = views[viewIndex];
  const Illustration = illustrations[view.id];
  const previous = views[viewIndex - 1];
  const next = views[viewIndex + 1];

  const viewportRef = useRef(null);
  const [canSwipe, setCanSwipe] = useState(false);

  // When the view changes, start in the middle of the picture.
  useEffect(() => {
    const viewport = viewportRef.current;
    viewport.scrollLeft = (viewport.scrollWidth - viewport.clientWidth) / 2;
    setCanSwipe(viewport.scrollWidth > viewport.clientWidth + 4);
  }, [viewIndex]);

  // Wall above, floor below — split at the same height as the picture's floor.
  const floorPercent = ((Illustration.floorY ?? 205) / 300) * 100;

  return (
    <div className="scene" style={{ '--floor': `${floorPercent}%` }}>
      {/* The tip hides once the player touches or scrolls the scene themselves. */}
      <div
        className="scene__viewport"
        ref={viewportRef}
        onPointerDown={() => setCanSwipe(false)}
        onWheel={() => setCanSwipe(false)}
      >
        <svg className="scene__canvas" viewBox="0 0 400 300" role="group" aria-label={view.name}>
          <Illustration {...viewProps} />
          {view.hotspots.map((hotspot) => (
            <Hotspot
              key={hotspot.id}
              hotspot={hotspot}
              visited={visited.includes(hotspot.id)}
              highlighted={highlightHotspots}
              onActivate={onHotspot}
            />
          ))}
        </svg>
      </div>

      <p className="scene__place" aria-live="polite">
        {view.name} <span className="scene__step">{viewIndex + 1}/{views.length}</span>
      </p>

      {canSwipe && <p className="scene__swipe">Swipe to look around</p>}

      {previous && (
        <button className="scene__nav scene__nav--prev" onClick={() => onChangeView(viewIndex - 1)}>
          <span aria-hidden="true">‹</span>
          {previous.name}
        </button>
      )}
      {next && (
        <button className="scene__nav scene__nav--next" onClick={() => onChangeView(viewIndex + 1)}>
          <span aria-hidden="true">›</span>
          {next.name}
        </button>
      )}
    </div>
  );
}
