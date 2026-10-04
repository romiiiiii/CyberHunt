import { Link } from 'react-router-dom';
import './CareerReveal.css';

/*
  Mission complete. This is the first time the player sees the real terms:
  what they found, what it means, and which job they just did.
  Content comes from `mission.reveal` in the data file.
*/
export default function CareerReveal({ reveal, notesCount, onPlayAgain }) {
  return (
    <main className="reveal">
      <section className="reveal__card reveal__card--escape">
        <p className="reveal__kicker">Mission complete</p>
        <h1 className="reveal__headline">You made it out of the cafeteria.</h1>
        <p>
          You noticed {notesCount} things, worked out which ones mattered, and still have time to make it to class.
        </p>
      </section>

      <section className="reveal__card">
        <p className="reveal__kicker">What you found</p>
        <h2 className="reveal__term">{reveal.term}</h2>
        <p className="reveal__lead">{reveal.discovery}</p>
        {reveal.explanation.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="reveal__card reveal__card--field">
        <p className="reveal__kicker">Field discovered</p>
        <h2 className="reveal__term">{reveal.field}</h2>
        <p className="reveal__lead">You just worked like a {reveal.role}.</p>
        <p>{reveal.roleIntro}</p>
        <ul className="reveal__duties">
          {reveal.duties.map((duty) => (
            <li key={duty}>{duty}</li>
          ))}
        </ul>
      </section>

      <div className="reveal__actions">
        <Link to="/campus" className="btn">
          Back to campus
        </Link>
        <button className="btn btn--quiet" onClick={onPlayAgain}>
          Play again
        </button>
      </div>
    </main>
  );
}
