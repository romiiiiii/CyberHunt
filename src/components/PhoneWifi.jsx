import { useState } from 'react';
import Sheet from './Sheet.jsx';
import './PhoneWifi.css';

function SignalBars({ bars }) {
  return (
    <svg className="wifi__bars" viewBox="0 0 20 16" aria-hidden="true">
      {[1, 2, 3, 4].map((level) => (
        <rect key={level} x={(level - 1) * 5} y={16 - level * 4} width="3.5" height={level * 4} rx="1"
          className={level <= bars ? 'wifi__bar wifi__bar--on' : 'wifi__bar'} />
      ))}
    </svg>
  );
}

/*
  The player's own phone, showing nearby Wi-Fi networks.
  Tapping a network shows a little more detail about it (and may add a clue).
*/
export default function PhoneWifi({ networks, onClue, onClose }) {
  const [openNetwork, setOpenNetwork] = useState(null);

  return (
    <Sheet title="Your phone" onClose={onClose}>
      <div className="phone">
        <div className="phone__status">
          <span>08:47</span>
          <span>Wi-Fi</span>
        </div>
        <p className="phone__heading">Networks nearby</p>
        <ul className="wifi">
          {networks.map((network) => {
            const isOpen = openNetwork === network.name;
            const strength = ['', 'Weak', 'Fair', 'Good', 'Excellent'][network.bars];
            return (
              <li key={network.name}>
                <button
                  className="wifi__row"
                  aria-expanded={isOpen}
                  onClick={() => {
                    setOpenNetwork(isOpen ? null : network.name);
                    onClue(network.clue);
                  }}
                >
                  <span className="wifi__name">{network.name}</span>
                  <span className="wifi__meta">
                    {network.secured ? 'Password' : 'Open'}
                    <SignalBars bars={network.bars} />
                    <span className="visually-hidden">{strength} signal</span>
                  </span>
                </button>
                {isOpen && <p className="wifi__detail">{network.detail}</p>}
              </li>
            );
          })}
        </ul>
      </div>
    </Sheet>
  );
}
