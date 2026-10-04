import { useEffect } from 'react';
import './Toast.css';

/*
  Short banner when something is added to the player's notes.
  It's the same for every note — it doesn't say whether the note matters.
  Disappears by itself after a few seconds, or when tapped.
*/
export default function Toast({ toast, onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 3500);
    return () => clearTimeout(timer);
    // Restart the timer only when a different note appears.
  }, [toast.id]);

  return (
    <div className="toast-layer" aria-live="polite">
      <button className="toast" onClick={onDone}>
        <span className="toast__label">Added to your notes</span>
        <span className="toast__text">{toast.text}</span>
      </button>
    </div>
  );
}
