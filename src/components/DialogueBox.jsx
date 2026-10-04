import { useEffect, useRef, useState } from 'react';
import './DialogueBox.css';

/*
  Visual-novel style conversation.
  The character says a line; the player picks a question. Some answers
  reveal clues (reported through onClue). Asked questions stay available
  but are marked, so the player can re-read them.
*/
export default function DialogueBox({ dialogue, onClue, onClose }) {
  const [line, setLine] = useState(dialogue.opening);
  const [asked, setAsked] = useState([]);

  // Escape also ends the conversation, like the other pop-ups.
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape') closeRef.current();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const hasAsked = asked.length > 0;

  function choose(choice) {
    setLine(choice.reply);
    if (!asked.includes(choice.id)) setAsked([...asked, choice.id]);
    onClue(choice.clue);
  }

  return (
    <div className="dialogue-layer">
      <section className="dialogue" role="dialog" aria-label={`Talking to ${dialogue.speaker}`}>
        <p className="dialogue__speaker">{dialogue.speaker}</p>
        <button className="dialogue__close" onClick={onClose} aria-label="End conversation">
          ×
        </button>
        <p className="dialogue__line" aria-live="polite">{line}</p>

        <div className="dialogue__choices">
          {dialogue.choices.map((choice) => (
            <button
              key={choice.id}
              className={asked.includes(choice.id) ? 'dialogue__choice dialogue__choice--asked' : 'dialogue__choice'}
              onClick={() => choose(choice)}
            >
              {choice.prompt}
            </button>
          ))}
          {/* After asking something, leaving becomes the highlighted option. */}
          <button
            className={hasAsked ? 'dialogue__choice dialogue__choice--done' : 'dialogue__choice dialogue__choice--leave'}
            onClick={onClose}
          >
            {hasAsked ? dialogue.leaveAfter : dialogue.leave}
          </button>
        </div>
      </section>
    </div>
  );
}
