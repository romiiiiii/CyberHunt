import './MissionHeader.css';

/*
  Slim bar at the top of an investigation.
  The progress pill is static for now; it will read from mission state later.
*/
export default function MissionHeader({ number, title }) {
  return (
    <header className="mission-header">
      <div>
        <p className="mission-header__number">{number}</p>
        <h1 className="mission-header__title">{title}</h1>
      </div>
      <p className="mission-header__progress">0 clues found</p>
    </header>
  );
}
