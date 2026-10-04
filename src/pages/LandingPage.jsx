import { useNavigate } from 'react-router-dom';
import CampusScene from '../components/CampusScene.jsx';
import './LandingPage.css';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="landing">
      <div className="landing__scene">
        <CampusScene />
      </div>

      <section className="landing__panel">
        <h1 className="landing__title">CyberHunt</h1>
        <p className="landing__tagline">
          Explore the campus. Solve the threats. Discover your path.
        </p>
        <p className="landing__pitch">
          Short mysteries set around a university campus. No cybersecurity
          knowledge needed — just curiosity.
        </p>
        <button className="btn landing__start" onClick={() => navigate('/campus')}>
          Start game
        </button>
      </section>
    </main>
  );
}
