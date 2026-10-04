import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MissionIntro from '../components/MissionIntro.jsx';
import MissionHeader from '../components/MissionHeader.jsx';
import GameScene from '../components/GameScene.jsx';
import Sheet from '../components/Sheet.jsx';
import DialogueBox from '../components/DialogueBox.jsx';
import PhoneWifi from '../components/PhoneWifi.jsx';
import NotesPanel from '../components/NotesPanel.jsx';
import Toast from '../components/Toast.jsx';
import DoorLockPanel from '../components/DoorLockPanel.jsx';
import ComboLock from '../components/ComboLock.jsx';
import CareerReveal from '../components/CareerReveal.jsx';
import { useMission } from '../game/useMission.js';
import { cafeteriaViews } from '../game/scenes/cafeteria/index.js';
import { cafeteriaMission as mission } from '../game/data/cafeteriaMission.js';
import './CafeteriaMission.css';

const EXIT_VIEW = mission.views.findIndex((view) => view.id === 'exit');

/*
  Mission 01 page. First the story card, then the investigation.
  "Play again" remounts the investigation with a new key, which resets all its state.
*/
export default function CafeteriaMission() {
  const [started, setStarted] = useState(false);
  const [attempt, setAttempt] = useState(0);

  if (!started) {
    return <MissionIntro mission={mission} onStart={() => setStarted(true)} />;
  }
  return <Investigation key={attempt} onPlayAgain={() => setAttempt(attempt + 1)} />;
}

function Investigation({ onPlayAgain }) {
  const game = useMission(mission);
  const [viewIndex, setViewIndex] = useState(0);
  // Which pop-up is open, e.g. { type: 'inspect', hotspot } or { type: 'phone' }. null = none.
  const [overlay, setOverlay] = useState(null);
  const [doorOpen, setDoorOpen] = useState(false);
  const [complete, setComplete] = useState(false);
  // Clickable spots are hidden until the player asks for help in the Hint menu.
  const [highlightHotspots, setHighlightHotspots] = useState(false);

  // After the door opens, wait a moment so the player sees it, then show the reveal.
  useEffect(() => {
    if (!doorOpen) return;
    const timer = setTimeout(() => setComplete(true), 1400);
    return () => clearTimeout(timer);
  }, [doorOpen]);

  const close = () => setOverlay(null);

  function handleHotspot(hotspot) {
    game.markVisited(hotspot.id);
    const { action } = hotspot;

    if (action.type === 'inspect') {
      setOverlay({ type: 'inspect', hotspot });
      game.addNote(action.note);
    } else if (action.type === 'dialogue') {
      setOverlay({ type: 'dialogue', id: action.dialogue });
    } else if (action.type === 'door') {
      setOverlay({ type: 'door' });
    }
  }

  function unlockDoor() {
    setOverlay(null);
    setViewIndex(EXIT_VIEW);
    setDoorOpen(true);
  }

  if (complete) {
    return (
      <CareerReveal
        reveal={mission.reveal}
        notesCount={game.notes.length}
        onPlayAgain={onPlayAgain}
      />
    );
  }

  return (
    <main className="mission">
      <MissionHeader number={mission.number} title={mission.title} notesCount={game.notes.length}>
        <Link to="/campus" className="mission__leave">Leave</Link>
      </MissionHeader>

      <GameScene
        views={mission.views}
        viewIndex={viewIndex}
        onChangeView={setViewIndex}
        illustrations={cafeteriaViews}
        viewProps={{ doorOpen, locksOpen: game.openLocks.length, deviceOff: game.deviceOff }}
        visited={game.visited}
        highlightHotspots={highlightHotspots}
        onHotspot={handleHotspot}
      />

      <nav className="mission__toolbar" aria-label="Mission tools">
        <button className="mission__tool" onClick={() => setOverlay({ type: 'notes' })}>
          Notes <span className="mission__count">{game.notes.length}</span>
        </button>
        <button className="mission__tool" onClick={() => setOverlay({ type: 'phone' })}>
          Phone
        </button>
        <button className="mission__tool" onClick={() => setOverlay({ type: 'hint' })}>
          Hint
        </button>
      </nav>

      {overlay?.type === 'inspect' && (
        <Sheet title={overlay.hotspot.action.title} onClose={close}>
          {overlay.hotspot.action.text.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {overlay.hotspot.action.opensDeviceLock && (
            <button className="btn" onClick={() => setOverlay({ type: 'combo' })}>
              {game.deviceOff ? 'Check the switch' : 'Try the lock'}
            </button>
          )}
        </Sheet>
      )}

      {overlay?.type === 'dialogue' && (
        <DialogueBox dialogue={mission.dialogues[overlay.id]} onNote={game.addNote} onClose={close} />
      )}

      {overlay?.type === 'phone' && <PhoneWifi networks={mission.networks} onNote={game.addNote} onClose={close} />}

      {overlay?.type === 'notes' && (
        <NotesPanel allNotes={mission.notes} notes={game.notes} onClose={close} />
      )}

      {overlay?.type === 'hint' && (
        <Sheet title="Hint" onClose={close}>
          <p>
            {game.nextHint
              ? game.nextHint.text
              : 'Everything is solved. Head to the exit door and open it.'}
          </p>
          <button className="btn btn--quiet mission__highlight" onClick={() => setHighlightHotspots(!highlightHotspots)}>
            {highlightHotspots ? 'Hide highlights' : 'Highlight things I can tap'}
          </button>
        </Sheet>
      )}

      {overlay?.type === 'door' && (
        <DoorLockPanel
          locks={mission.exitLocks}
          openLocks={game.openLocks}
          allNotes={mission.notes}
          notes={game.notes}
          deviceOff={game.deviceOff}
          canEscape={game.canEscape}
          onOpenLock={game.openLock}
          onEscape={unlockDoor}
          onClose={close}
        />
      )}

      {overlay?.type === 'combo' && (
        <ComboLock
          device={mission.device}
          solved={game.deviceOff}
          onSolved={game.switchOffDevice}
          onClose={close}
        />
      )}

      {doorOpen && <p className="mission__unlocked" role="status">Door unlocked</p>}

      {game.toast && <Toast toast={game.toast} onDone={game.clearToast} />}
    </main>
  );
}
