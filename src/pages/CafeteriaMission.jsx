import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MissionIntro from '../components/MissionIntro.jsx';
import MissionHeader from '../components/MissionHeader.jsx';
import GameScene from '../components/GameScene.jsx';
import Sheet from '../components/Sheet.jsx';
import DialogueBox from '../components/DialogueBox.jsx';
import PhoneWifi from '../components/PhoneWifi.jsx';
import CluePanel from '../components/CluePanel.jsx';
import Toast from '../components/Toast.jsx';
import FinalQuestion from '../components/FinalQuestion.jsx';
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
      game.findClue(action.clue);
    } else if (action.type === 'dialogue') {
      setOverlay({ type: 'dialogue', id: action.dialogue });
    } else if (action.type === 'door') {
      setOverlay({ type: game.readyToSolve ? 'question' : 'door-locked' });
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
        cluesFound={game.foundClues.length}
        totalClues={Object.keys(mission.clues).length}
        onPlayAgain={onPlayAgain}
      />
    );
  }

  return (
    <main className="mission">
      <MissionHeader number={mission.number} title={mission.title} cluesFound={game.foundClues.length}>
        <Link to="/campus" className="mission__leave">Leave</Link>
      </MissionHeader>

      <GameScene
        views={mission.views}
        viewIndex={viewIndex}
        onChangeView={setViewIndex}
        illustrations={cafeteriaViews}
        viewProps={{ doorOpen }}
        visited={game.visited}
        onHotspot={handleHotspot}
      />

      <nav className="mission__toolbar" aria-label="Mission tools">
        <button className="mission__tool" onClick={() => setOverlay({ type: 'clues' })}>
          Clues <span className="mission__count">{game.foundClues.length}</span>
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
        </Sheet>
      )}

      {overlay?.type === 'dialogue' && (
        <DialogueBox dialogue={mission.dialogues[overlay.id]} onClue={game.findClue} onClose={close} />
      )}

      {overlay?.type === 'phone' && <PhoneWifi networks={mission.networks} onClue={game.findClue} onClose={close} />}

      {overlay?.type === 'clues' && (
        <CluePanel
          clues={mission.clues}
          foundClues={game.foundClues}
          requiredCount={mission.requiredClues.length}
          requiredFound={game.requiredFound}
          onClose={close}
        />
      )}

      {overlay?.type === 'hint' && (
        <Sheet title="Hint" onClose={close}>
          <p>
            {game.nextHint
              ? game.nextHint.text
              : 'You have enough evidence. Head to the exit and decide what’s going on.'}
          </p>
        </Sheet>
      )}

      {overlay?.type === 'door-locked' && (
        <Sheet title="The exit" onClose={close}>
          <p>
            You reach for the door, then stop. If you leave now, more students will lose their
            accounts. Work out what’s happening first.
          </p>
          <p className="mission__evidence">
            Key evidence: {game.requiredFound} of {mission.requiredClues.length}
          </p>
          <button className="btn btn--quiet" onClick={() => setOverlay({ type: 'hint' })}>
            Give me a hint
          </button>
        </Sheet>
      )}

      {overlay?.type === 'question' && (
        <FinalQuestion
          question={mission.finalQuestion}
          onSolved={unlockDoor}
          onClose={close}
          onOpenClues={() => setOverlay({ type: 'clues' })}
        />
      )}

      {doorOpen && <p className="mission__unlocked" role="status">Door unlocked</p>}

      {game.toast && <Toast toast={game.toast} onDone={game.clearToast} />}
    </main>
  );
}
