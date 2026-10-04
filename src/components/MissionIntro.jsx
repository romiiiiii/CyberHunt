import { Link } from 'react-router-dom';
import './MissionIntro.css';

/* The story card shown before a mission begins. Content comes from game/data. */
export default function MissionIntro({ mission, onStart }) {
  return (
    <main className="intro">
      <article className="intro__card">
        <p className="intro__number">{mission.number}</p>
        <h1 className="intro__title">{mission.title}</h1>
        <p className="intro__time">{mission.timeLimitMinutes} minutes until your next class</p>

        <div className="intro__story">
          {mission.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {mission.howToPlay && <p className="intro__how">{mission.howToPlay}</p>}

        <div className="intro__actions">
          <button className="btn" onClick={onStart}>
            {mission.startLabel}
          </button>
          <Link to="/campus" className="btn btn--quiet">
            Back to campus
          </Link>
        </div>
      </article>
    </main>
  );
}
