// css
import './App.css';


// importando rotas
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">

      {/* Configurando rotas */}
      <BrowserRouter>

        {/* Navbar a cima do container */}
        <Navbar />

        <div className="container">

          <Routes>

            {/* Rotas  */}
            {/* Element - destino da rota */}
            <Route path="/" element={<Home />} />  {/* Para navegar em Home */}
            <Route path="/about" element={<About />} /> {/* Para navegar em About */}


          </Routes>

        </div>
        
        {/* Abaixo do container */}
        <Footer />

      </BrowserRouter>


    </div>
  );
}

export default App;
