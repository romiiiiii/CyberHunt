import { useState } from 'react';
import { Link } from 'react-router-dom';
import MissionIntro from '../components/MissionIntro.jsx';
import MissionHeader from '../components/MissionHeader.jsx';
import CafeteriaPlaceholder from '../game/scenes/CafeteriaPlaceholder.jsx';
import { cafeteriaMission } from '../game/data/cafeteriaMission.js';
import './CafeteriaMission.css';

/*
  Mission 01 has two phases for now:
    'intro' — the story card
    'scene' — the cafeteria itself (currently a placeholder)
  Later phases (final puzzle, escape, career reveal) will be added here.
*/
export default function CafeteriaMission() {
  const [phase, setPhase] = useState('intro');

  if (phase === 'intro') {
    return <MissionIntro mission={cafeteriaMission} onStart={() => setPhase('scene')} />;
  }

  return (
    <main className="mission">
      <MissionHeader title={cafeteriaMission.title} number={cafeteriaMission.number} />

      <div className="mission__stage">
        <CafeteriaPlaceholder />
        <p className="mission__notice placeholder-tag">
          Placeholder scene — clickable objects, Maya and the Wi-Fi investigation
          come in the next milestone.
        </p>
      </div>

      {/* Bottom toolbar: visible so the layout is real, disabled until clues exist. */}
      <nav className="mission__toolbar" aria-label="Mission tools">
        <button className="mission__tool" disabled>
          Clues <span className="mission__count">0</span>
        </button>
        <button className="mission__tool" disabled>
          Hint
        </button>
        <Link className="mission__tool mission__tool--leave" to="/campus">
          Campus
        </Link>
      </nav>
    </main>
  );
}
