import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Ventas from './components/Ventas';
import Contacto from './components/Contacto';
import SobreNosotros from './components/SobreNosotros';
import NoEncontrado from './components/NoEncontrado';

import './styles.css';


function App() {
  return (
    <div className='container-fluid'>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Navbar />}>
          <Route index element={<Inicio />} />
          <Route path="ventas" element={<Ventas />} />
          <Route path="sobreNosotros" element={<SobreNosotros />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NoEncontrado />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
