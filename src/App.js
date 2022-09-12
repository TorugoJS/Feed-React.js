// css
import './App.css';


// importando rotas
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// context
import { AuthProvider } from './context/AuthContext';

// pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


function App() {
  return (
    <div className="App">

      <AuthProvider>
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
              <Route path="/login" element={<Login />} />  {/* Para o usuário fazer o login */}
              <Route path="/register" element={<Register />} /> {/* Para o usuário fazer o registro */}


            </Routes>

          </div>

          {/* Abaixo do container */}
          <Footer />

        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
