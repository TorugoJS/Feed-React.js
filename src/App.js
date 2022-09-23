// css
import './App.css';

// mapear se a autenticaçaõ foi feita com sucesso.
import { onAuthStateChanged } from 'firebase/auth';

// hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';


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
import Dashboard from './pages/Dashboard/Dashboard';
import CreatePost from './pages/CreatePost/CreatePost';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';
import EditPost from './pages/EditPost/EditPost';


function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  // comparando usuário com undefined
  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }


  return (
    <div className="App">

      {/* passando usuário para Provider, podendo acessar em varios locais e fazer loguin */}
      <AuthProvider value={{ user }}>

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
              <Route path="/search" element={<Search />} /> {/* Para navegar em search*/}

              <Route path="/posts/:id" element={<Post />} /> {/* Para navegar em post*/}

              {/* condição para bloquear páginas, se não estiver logado vai para loguin. se tiver vai para home */}
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />  {/* Para o usuário fazer o login */}

              {/* se não estiver registrado vai para register, se tiver vai para home */}
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} /> {/* Para o usuário fazer o registro */}


              {/* SE ESTIVER AUTENTICADO SERÁ ACESSO A ESSAS PÁGINAS! */}

              {/* se estiver registrado e logado vai para editpost */}
              <Route path="/post/edit:id" element={user ? <EditPost/> : <Navigate to="/aa" />} /> 

              {/* se estiver registrado e logado vai para createpost */}
              <Route path="/post/create" element={user ? <CreatePost /> : <Navigate to="/" />} /> {/* Para o usuário criar um post,
               trabalhando com hierarquia de rotas */}

              {/* encaminhando usuário para fazer autenticação */}
              <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} /> {/* Para o usuário navegar no dashboard */}

               
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
