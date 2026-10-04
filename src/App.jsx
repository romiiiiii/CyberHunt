import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import CampusPage from './pages/CampusPage.jsx';
import CafeteriaMission from './pages/CafeteriaMission.jsx';

/*
  Each screen has its own URL. This matters for the long-term idea:
  a QR code on campus can link straight to /mission/cafeteria.
*/
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/campus" element={<CampusPage />} />
      <Route path="/mission/cafeteria" element={<CafeteriaMission />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
