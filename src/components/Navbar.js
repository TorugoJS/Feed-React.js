// CSS
import styles from './Navbar.module.css'


//import NavLink para alterar urls
import { NavLink } from "react-router-dom";


const Navbar = () => {

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

                {/* Link para About */}
                <li>
                    <NavLink to="about" className={({ isActive }) => (isActive ? styles.active : '')}>Sobre</NavLink>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar