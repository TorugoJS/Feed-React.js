// CSS
import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Network of <span>React</span></h2>
      <p>Esse projeto foi criado com React.js e firebase no back-end.</p>

      {/* link para criar post */}
      <Link to="/posts/create" className="btn">Criar post</Link>
    </div>
  )
}

export default About;