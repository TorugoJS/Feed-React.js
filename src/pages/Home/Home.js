// CSS
import styles from "./Home.module.css";

// hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {

  //fazendo a busca da barra de pesquisa
  const [query, setQuery] = useState("");

  //sem posts
  const [posts] = useState([]);

  // função de envio
  // parando o carregamento da página com preventDefault
  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className={styles.home}>
      <h1>Veja os posts recentes!</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input type="text"
          placeholder="Busque por tags"  // alterando state quando for digitado algo.
          onChange={(e) => setQuery(e.target.value)} />
        <button className="btn">Pequisar</button>
      </form>


      {/* Lista de post */}
      <div>
        <h1>Posts...</h1>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não há post</p>
            <Link to="/post/create" className="btn">Criar post</Link>
          </div>
        )}
      </div>

    </div>
  )
}

export default Home;