import { useState } from 'react';
import Sheet from './Sheet.jsx';
import './ComboLock.css';

/*
  A 3-digit combination lock, like on a suitcase.
  Each digit has up/down buttons (big enough for thumbs, no typing needed).
*/
export default function ComboLock({ device, solved, onSolved, onClose }) {
  const [digits, setDigits] = useState([0, 0, 0]);
  const [message, setMessage] = useState(null);

  function change(index, amount) {
    const next = [...digits];
    next[index] = (next[index] + amount + 10) % 10; // wraps 9 → 0 and 0 → 9
    setDigits(next);
    setMessage(null);
  }

  function tryCode() {
    if (digits.join('') === device.code) {
      onSolved();
    } else {
      setMessage(device.wrong);
    }
  }

  return (
    <Sheet title="The box’s power switch" onClose={onClose}>
      {solved ? (
        <p className="combo__done">{device.solved}</p>
      ) : (
        <>
          <p className="combo__tape">{device.reminder}</p>

          <div className="combo" role="group" aria-label="3-digit lock">
            {digits.map((digit, index) => (
              <div key={index} className="combo__wheel">
                <button className="combo__step" onClick={() => change(index, 1)} aria-label={`Digit ${index + 1} up`}>
                  ▲
                </button>
                <span className="combo__digit" aria-live="polite" aria-label={`Digit ${index + 1}: ${digit}`}>
                  {digit}
                </span>
                <button className="combo__step" onClick={() => change(index, -1)} aria-label={`Digit ${index + 1} down`}>
                  ▼
                </button>
              </div>
            ))}
          </div>

          {message && <p className="combo__message" aria-live="polite">{message}</p>}

          <button className="btn" onClick={tryCode}>
            Try the code
          </button>
        </>
      )}
    </Sheet>
  );
}
