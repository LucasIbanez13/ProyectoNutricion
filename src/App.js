import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import DetailCard from './components/body/card/vistaCard/DetailCard';
import LostAnimals from './components/body/Perdidos/LostAnimals';
import Publicar from './components/cruds/Publicar';
import CreatePublic from './components/cruds/forms/CreatePublic';
import CreatePerdidos from './components/cruds/forms/CreatePerdidos';
import HelpSection from './components/footer/ayuda/Ayuda';
import Blog from './components/footer/blog/Blog';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/details/:id" element={<DetailCard />} /> {/* Ruta dinámica */}
        <Route path="/perdidos" element={<LostAnimals />} />
        <Route path="/publicar" element={<Publicar />} />
        <Route path="/createPublic" element={<CreatePublic />} />
        <Route path="/createPerdidos" element={<CreatePerdidos />} />
        <Route path="/ayuda" element={<HelpSection />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
