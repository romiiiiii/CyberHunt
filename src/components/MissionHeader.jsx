import './MissionHeader.css';

/* Slim bar at the top of an investigation. `children` holds small actions like "Leave". */
export default function MissionHeader({ number, title, notesCount, children }) {
  return (
    <header className="mission-header">
      <div className="mission-header__titles">
        <p className="mission-header__number">{number}</p>
        <h1 className="mission-header__title">{title}</h1>
      </div>
      <p className="mission-header__progress">
        {notesCount} {notesCount === 1 ? 'note' : 'notes'}
      </p>
      {children}
    </header>
  );
}
