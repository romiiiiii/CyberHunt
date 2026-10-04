import { useEffect, useRef, useState } from 'react';
import Sheet from './Sheet.jsx';
import './DoorLockPanel.css';

/*
  The exit door's lock panel.

  Shows all locks at once so the player can see the goal from the start.
  Tapping a closed lock shows its question:
    - 'choice' locks list fixed options
    - 'note' locks list the player's own notes, so they must have found the proof
  The last row shows whether the hidden box is still running.
*/
export default function DoorLockPanel({ locks, openLocks, allNotes, notes, deviceOff, canEscape, onOpenLock, onEscape, onClose }) {
  const [activeId, setActiveId] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const escapeRef = useRef(null);

  // When everything is solved, bring the "Open the door" button into view.
  useEffect(() => {
    if (canEscape) escapeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [canEscape]);

  function toggle(lock) {
    if (openLocks.includes(lock.id)) return;
    setActiveId(activeId === lock.id ? null : lock.id);
    setFeedback(null);
  }

  function answer(lock, isCorrect, wrongText) {
    if (isCorrect) {
      onOpenLock(lock.id);
      setActiveId(null);
      setFeedback(null);
    } else {
      setFeedback(wrongText);
    }
  }

  return (
    <Sheet title="The exit door" onClose={onClose}>
      <p className="locks__intro">
        Campus IT locked the doors while they investigate. Prove what’s going on to open them.
      </p>

      <ol className="locks">
        {locks.map((lock, index) => {
          const isOpen = openLocks.includes(lock.id);
          const isActive = activeId === lock.id;
          return (
            <li key={lock.id} className={isOpen ? 'lock lock--open' : 'lock'}>
              <button className="lock__header" onClick={() => toggle(lock)} aria-expanded={isActive} disabled={isOpen}>
                <span className="lock__light" aria-hidden="true" />
                <span className="lock__text">
                  <span className="lock__number">Lock {index + 1} · {isOpen ? 'open' : 'locked'}</span>
                  <span className="lock__question">{lock.question}</span>
                </span>
              </button>

              {isOpen && <p className="lock__solved">{lock.solved}</p>}

              {isActive && (
                <div className="lock__answers">
                  {lock.kind === 'choice' &&
                    lock.options.map((option) => (
                      <button key={option.id} className="lock__option" onClick={() => answer(lock, option.correct, option.feedback)}>
                        {option.label}
                      </button>
                    ))}

                  {lock.kind === 'note' && notes.length === 0 && (
                    <p className="lock__empty">You don’t have any notes yet. Look around first.</p>
                  )}
                  {lock.kind === 'note' &&
                    notes.map((noteId) => (
                      <button key={noteId} className="lock__option lock__option--note" onClick={() => answer(lock, noteId === lock.answer, lock.wrong)}>
                        {allNotes[noteId].text}
                      </button>
                    ))}

                  {feedback && <p className="lock__feedback" aria-live="polite">{feedback}</p>}
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <p className={deviceOff ? 'locks__device locks__device--off' : 'locks__device'}>
        {deviceOff
          ? 'The hidden box is switched off.'
          : 'Something in the café is still broadcasting the fake network. Leaving it running isn’t an option.'}
      </p>

      {canEscape && (
        <button className="btn" onClick={onEscape} ref={escapeRef}>
          Open the door
        </button>
      )}
    </Sheet>
  );
}
