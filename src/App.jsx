import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Ristoranti from './pages/Ristoranti.jsx';
import Spiagge from './pages/Spiagge.jsx';
import Mappa from './pages/Mappa'; //importo la mappa
import VitaNotturna from './pages/VitaNotturna'; //importo la vita notturna
import VicinoCasa from './pages/VicinoCasa.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ristoranti" element={<Ristoranti />} />
          <Route path="/spiagge" element={<Spiagge />} />
          <Route path="/vita-notturna" element={<VitaNotturna />} />
          <Route path="/vicino-casa" element={<VicinoCasa />} />
          {/* Aggiungi altre rotte se necessario */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
