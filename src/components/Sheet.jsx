import { useEffect, useRef } from 'react';
import './Sheet.css';

/*
  A panel that slides up from the bottom (centered on desktop).
  Used for inspecting objects, the clue list, the phone and the final question.
  Closes with the close button, by tapping outside, or with Escape.
*/
export default function Sheet({ title, onClose, children }) {
  const panelRef = useRef(null);
  // Keep the latest onClose in a ref, so the effect below only runs once
  // (otherwise focus would jump back to the panel on every re-render).
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    panelRef.current.focus();
    function onKey(event) {
      if (event.key === 'Escape') closeRef.current();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <section
        className="sheet"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        ref={panelRef}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="sheet__header">
          <h2 className="sheet__title">{title}</h2>
          <button className="sheet__close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </header>
        <div className="sheet__body">{children}</div>
      </section>
    </div>
  );
}
