import { useState } from 'react';
import Sheet from './Sheet.jsx';
import './FinalQuestion.css';

/*
  The question that unlocks the exit.
  A wrong answer explains why it's wrong and lets the player try again;
  the goal is reasoning from notes, not punishing guesses.
*/
export default function FinalQuestion({ question, onSolved, onClose, onOpenNotes }) {
  const [picked, setPicked] = useState(null);
  const pickedOption = question.options.find((option) => option.id === picked);
  const solved = pickedOption?.correct;

  return (
    <Sheet title="Before you leave" onClose={onClose}>
      <p className="question__prompt">{question.prompt}</p>

      <div className="question__options">
        {question.options.map((option) => {
          let state = '';
          if (option.id === picked) state = option.correct ? ' question__option--right' : ' question__option--wrong';
          return (
            <button
              key={option.id}
              className={`question__option${state}`}
              onClick={() => setPicked(option.id)}
              disabled={solved}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {pickedOption && (
        <p className={solved ? 'question__feedback question__feedback--right' : 'question__feedback'} aria-live="polite">
          {solved ? 'That’s it. ' : 'Not quite. '}
          {pickedOption.feedback}
        </p>
      )}

      {solved ? (
        <button className="btn" onClick={onSolved}>
          Unlock the door
        </button>
      ) : (
        <button className="btn btn--quiet question__review" onClick={onOpenNotes}>
          Review my notes
        </button>
      )}
    </Sheet>
  );
}
