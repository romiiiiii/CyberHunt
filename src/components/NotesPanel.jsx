import Sheet from './Sheet.jsx';
import './NotesPanel.css';

/*
  The player's notebook: everything they've noticed, in order.
  Deliberately neutral — no highlighting of "important" notes.
  Deciding what matters is the player's job.
*/
export default function NotesPanel({ allNotes, notes, onClose }) {
  return (
    <Sheet title="Your notes" onClose={onClose}>
      {notes.length === 0 ? (
        <p className="notes__empty">
          Nothing yet. Tap anything in the cafeteria that looks interesting — people, objects,
          your phone.
        </p>
      ) : (
        <>
          <p className="notes__intro">Not everything here matters. Which of these explain what’s going on?</p>
          <ol className="notes">
            {notes.map((id) => (
              <li key={id} className="note">
                {allNotes[id].text}
              </li>
            ))}
          </ol>
        </>
      )}
    </Sheet>
  );
}
