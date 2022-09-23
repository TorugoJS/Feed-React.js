import styles from './EditPost.module.css'

//hooks
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
// import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';

const EditPost = () => {

  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id)


  // States responsáveis pelo corpo do post
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {

    if (post) {
      setTitle(post.title)
      setBody(post.body)
      setImage(post.image)


      //transformando array em strings
      const textTags = post.tagsArray.join(", ");

      setTags(textTags);
    }


  }, [post])


  const { user } = useAuthValue();

  const { updateDocument, response } = useUpdateDocument("posts")

  const navigate = useNavigate();


  //função de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError("")// zerando erros


    // validando se o usuario realmente colocou uma URL
    //validar URL da imagem
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.")
    }

    // criando array de tags baseado nas strings
    // tirando espaços em branco com trim
    // tudo minusculo com lowercase
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());



    //checando valores
    //validando se valores vinheram
    if (!title || !image || !tags || !body) {
      setFormError("Preencha todos os campos");
    }


    // se tiver um formError vai retornar para não prosseguir.
    if (formError) return;

    const data ={
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    }

   updateDocument(id, data);

    // redirect home page
    // após o envio da criação de post, vai diretamente para página home
    navigate("/dashboard")

  };


  return (
    <div className={styles.edit_post}>

      {post && (
        <>
          <h2>Editando post: {post.title}</h2>
          <p>Alterando os dados</p>

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
            <p className={styles.preview_title}>Preview</p>
            <img className={styles.image_preview} src={post.image} alt={post.title} />

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


            {/* <button className='btn'>Cadastrar meu post</button> */}
            {/* Botão para enviar formulário. */}
            {/* se estiver em loading, exiba o botão */}
            {!response.loading && <button className='btn'>Concluir</button>}

            {/* tambem exibirá o botão, só que com disabled */}
            {response.loading && (
              <button className='btn' disabled>
                Aguarde...</button>
            )}



            {/* se houve alguem erro no formulário exibirá o erro */}
            {/* condição que será executada sendo true */}
            {response.error && <p className="error">{response.error}</p>}

            {/* Verificando formError */}
            {formError && <p className="error">{formError}</p>}



          </form>

        </>
      )}

    </div>
  )
}

export default EditPost;