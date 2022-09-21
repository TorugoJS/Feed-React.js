// CSS
import styles from "./Home.module.css";

// hooks
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

//components
import PostDetail from "../../components/PostDetail";

const Home = () => {

  //fazendo a busca da barra de pesquisa
  const [query, setQuery] = useState("");

  const { documents: posts, loading } = useFetchDocuments("posts");

  // usando navigate
  const navigate = useNavigate();

  // função de envio
  // parando o carregamento da página com preventDefault
  const handleSubmit = (e) => {
    e.preventDefault();


    if (query) {
      return navigate(`/search?q=${query}`)
    }
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
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não há post</p>
            <Link to="/post/create" className="btn">
              Criar post
            </Link>
          </div>
        )}
      </div>

    </div>
  )
}

export default Home;