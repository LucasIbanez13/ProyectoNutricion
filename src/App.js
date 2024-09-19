import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AnimalDetails from './components/body/card/vistaCard/DetailCard';
import LostAnimals from './components/body/Perdidos/LostAnimals'
import Publicar from './components/cruds/Publicar';
import CreatePublic from './components/cruds/forms/CreatePublic';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/details" element={<AnimalDetails />} />
        <Route path="/perdidos" element={<LostAnimals />} /> {/* Nueva ruta para animales perdidos */}
        <Route path="/publicar" element={<Publicar />} /> {/* Nueva ruta para animales perdidos */}
        <Route path="/createPublic" element={<CreatePublic />} /> {/* Nueva ruta para animales perdidos */}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
