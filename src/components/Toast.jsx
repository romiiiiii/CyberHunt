import { useEffect } from 'react';
import './Toast.css';

/*
  Short banner for important moments ("Clue found", "Something's wrong").
  Disappears by itself after a few seconds, or when tapped.
*/
export default function Toast({ toast, onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 4500);
    return () => clearTimeout(timer);
    // Restart the timer only when a different toast appears.
  }, [toast.id]);

  const isThreat = toast.kind === 'threat';

  return (
    <div className="toast-layer" aria-live="assertive">
      <button className={isThreat ? 'toast toast--threat' : 'toast'} onClick={onDone}>
        <span className="toast__label">{isThreat ? 'Something’s wrong' : 'Clue found'}</span>
        <span className="toast__text">{toast.text}</span>
      </button>
    </div>
  );
}
