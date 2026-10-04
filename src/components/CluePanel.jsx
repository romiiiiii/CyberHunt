import Sheet from './Sheet.jsx';
import './CluePanel.css';

/* Everything the player has found so far, in the order they found it. */
export default function CluePanel({ clues, foundClues, requiredCount, requiredFound, onClose }) {
  return (
    <Sheet title="Your clues" onClose={onClose}>
      <p className="clues__progress">
        Key evidence: {requiredFound} of {requiredCount}
      </p>

      {foundClues.length === 0 ? (
        <p className="clues__empty">
          Nothing yet. Tap the glowing circles in the cafeteria to look at things and talk to people.
        </p>
      ) : (
        <ol className="clues">
          {foundClues.map((id) => (
            <li key={id} className={clues[id].kind === 'threat' ? 'clue clue--threat' : 'clue'}>
              {clues[id].text}
            </li>
          ))}
        </ol>
      )}
    </Sheet>
  );
}
