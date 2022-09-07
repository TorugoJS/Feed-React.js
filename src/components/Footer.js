import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div>

        {/* Tag semnância de rodapé */}
        <footer className={styles.footer}>

            <h3>O que você deseja compartilhar?!</h3>

            {/* Simbolo coyrigth */}
            <p>Network of React &copy; 2022</p>

        </footer>
        
    </div>
  )
}

export default Footer;