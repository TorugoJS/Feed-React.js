import styles from './CreatePost.module.css'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';

const CreatePost = () => {

  // States responsáveis pelo corpo do post
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");


  //função de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <div className={styles.create_post}>

      <h2>Criar post</h2>
      <p>Compartilhe o que quiser com a rede!</p>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input type="text"
            name="title"
            required
            placeholder='Qual será o título do seu post?'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <label>
          <span>URL da imagem:</span>
          <input type="text"
            name="image"
            required
            placeholder='Insira uma imagem ao seu post'
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>

        <label>
          <span>Conteúdo</span>
          <textarea name="body"
            placeholder='Conteúdo do post'
            required
            onChange={(e) => setBody(e.target.value)}
            value={body}>
          </textarea>
        </label>

        <label>
          <span>Tags:</span>
          <input type="text"
            name="tags"
            required
            placeholder='Insira as tags separadas por vírgula'
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>


          <button className='btn'>Cadastrar meu post</button>
         {/* Botão para enviar formulário. */}
        {/* se estiver em loading, exiba o botão */}
        {/* {!loading && <button className='btn'>Cadastrar</button> } */}

        {/* tambem exibirá o botão, só que com disabled */}
        {/* {loading && <button className='btn' disabled>Aguarde...</button> } */}
    


        {/* se houve alguem erro no formulário exibirá o erro */}
        {/* condição que será executada sendo true */}
        {/* {error && <p className="error">{error}</p>} */}


      </form>

    </div>
  )
}

export default CreatePost;