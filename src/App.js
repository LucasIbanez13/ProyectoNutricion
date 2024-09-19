import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AnimalDetails from './components/body/card/vistaCard/DetailCard';
import LostAnimals from './components/body/Perdidos/LostAnimals';
import Publicar from './components/cruds/Publicar';
import CreatePublic from './components/cruds/forms/CreatePublic';
import CreatePerdidos from './components/cruds/forms/CreatePerdidos'; // Asegúrate de que está bien importado

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/details" element={<AnimalDetails />} />
        <Route path="/perdidos" element={<LostAnimals />} />
        <Route path="/publicar" element={<Publicar />} />
        <Route path="/createPublic" element={<CreatePublic />} />
        <Route path="/createPerdidos" element={<CreatePerdidos />} /> {/* Ruta para crear Perdidos */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
