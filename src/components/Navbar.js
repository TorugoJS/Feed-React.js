// CSS
import styles from './Navbar.module.css'

//importando contexto
import { useAuthentication } from '../hooks/useAuthentication';

import { useAuthValue } from '../context/AuthContext';


//import NavLink para alterar urls
import { NavLink } from "react-router-dom";


const Navbar = () => {
    //usando context em navbar
    const { user } = useAuthValue();


    return (

        // Tag semântica de navegação
        <nav className={styles.navbar}>

            {/* Alterar urls */}
            {/* "/" Refência para Home */}
            <NavLink to="/" className={styles.brand}>
                {/* Logo */}
                Network of <span>React</span>
            </NavLink>

            {/* Links para navegação de outras páginas */}
            <ul className={styles.links_list}>

                {/* Link para Home */}
                {/* isActive = foi feita um condição para o style de active ativar
                 só quando estiver navegando na rota, se for true irá ativar,
                  se for false não ativará nada. */}
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>Home</NavLink>
                </li>


                {/* só será exibido quando o usuário estiver autenticado, baseado na condição abaixo.  */}
                {!user && (
                    <>
                        {/* Link para login */}
                        <li>
                            <NavLink to="login" className={({ isActive }) => (isActive ? styles.active : '')}>Entrar</NavLink>
                        </li>

                        {/* Link para registrar */}
                        <li>
                            <NavLink to="register" className={({ isActive }) => (isActive ? styles.active : '')}>Registrar</NavLink>
                        </li>
                    </>
                )}

                    {/* será exibido caso o usuário esteja autenticado, imprimirá na navbar. */}
                {user && (
                    <>
                        {/* Link para login */}
                        <li>
                            <NavLink to="/post/create" className={({ isActive }) => (isActive ? styles.active : '')}>Criar Post</NavLink>
                        </li>

                        {/* Link para registrar */}
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : '')}>Dashboard</NavLink>
                        </li>
                    </>
                )}

                {/* Link para About */}
                <li>
                    <NavLink to="about" className={({ isActive }) => (isActive ? styles.active : '')}>Sobre</NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar