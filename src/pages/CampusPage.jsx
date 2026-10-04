import { Link } from 'react-router-dom';
import LocationNode from '../components/LocationNode.jsx';
import { locations } from '../game/data/locations.js';
import './CampusPage.css';

export default function CampusPage() {
  return (
    <main className="campus">
      <header className="campus__header">
        <Link to="/" className="btn btn--quiet campus__back">
          ‹ Back
        </Link>
        <h1 className="campus__title">Your campus</h1>
        <p className="campus__intro">
          Every building hides a different kind of mystery. Start at the
          cafeteria — the rest of campus opens as you solve them.
        </p>
      </header>

      <ol className="campus__path">
        {locations.map((location, index) => (
          <LocationNode
            key={location.id}
            location={location}
            previous={locations[index - 1]}
          />
        ))}
      </ol>
    </main>
  );
}
