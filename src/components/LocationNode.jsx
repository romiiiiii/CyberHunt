import { Link } from 'react-router-dom';
import './LocationNode.css';

/*
  One stop on the campus path.
  Available locations are links; locked ones are plain, non-interactive cards.
*/
export default function LocationNode({ location, previous }) {
  const isAvailable = location.status === 'available';

  const body = (
    <>
      <span className="location__icon" aria-hidden="true">{location.icon}</span>
      <span className="location__text">
        <span className="location__mission">{location.mission}</span>
        <span className="location__name">{location.name}</span>
        <span className="location__teaser">{location.teaser}</span>
        {isAvailable ? (
          <span className="location__cta">Start mission</span>
        ) : (
          <span className="location__lock">
            Opens after {previous ? previous.name : 'the previous mission'}
          </span>
        )}
      </span>
    </>
  );

  return (
    <li className={`location location--${location.status}`}>
      <span className="location__dot" aria-hidden="true" />
      {isAvailable ? (
        <Link className="location__card" to={location.route}>
          {body}
        </Link>
      ) : (
        <div className="location__card" aria-label={`${location.name}, locked`}>
          {body}
        </div>
      )}
    </li>
  );
}
