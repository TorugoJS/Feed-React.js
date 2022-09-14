import styles from './Login.module.css';

// importando useState e useEffect.
import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

const Login = () => {

 // useState
 const [email, setEmail] = useState("") // para manipular o email
 const [password, setPassword] = useState("") // para manipular a senha
 const [error, setError] = useState("") // para manipular o erros

 const { login, error: authError, loading } = useAuthentication(); // importando hooks criados

 // reunir todos os dados e enviar no formulário.
 const handleSubmit = async (e) => {
   e.preventDefault(); // para enviar o formulário sem fazer a recarregamento da página.


   setError(""); // zerando os erros ao envio do formulário - não exibirá nenhum erro


   // formando um usuário baseado nos inputs
   // criando um objeto com informações do usuário
   const user = {
     email,
     password,
   };
   
   // resposta await da criação do usuário
   const res = await login(user)

   //imprimindo objeto com informações do usuário
   console.log(res);
 };

 // vai ficar monitorando se o erro vai mudar
 useEffect(() => {

   if(authError) {
     setError(authError);
   }

 }, [authError]);



  return (
    <div className={styles.login}>
        <h1>Entre com a sua conta!</h1>
      <p>Compartilhe</p>

      {/* Formulário */}
      {/* Chamando função de envio de formulário */}
      <form onSubmit={handleSubmit}>

        {/* Form usuário */}
        

        {/* Form e-mail */}
        <label>
          <span>E-mail:</span>
          <input type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            value={email} // linkando ao useState e controlando valor
            onChange={(e) => setEmail(e.target.value)} // preenchendo valores dos states com onChange
          />
        </label>

        {/* Form senha */}
        <label>
          <span>Senha:</span>
          <input type="password"
            name="password"
            required
            placeholder="Senha do usuário"
            value={password} // linkando ao useState e controlando valor
            onChange={(e) => setPassword(e.target.value)} // preenchendo valores dos states com onChange
          />
        </label>

       

        {/* Botão para enviar formulário. */}
        {/* se estiver em loading, exiba o botão */}
        {!loading && <button className='btn'>Entrar</button> }

        {/* tambem exibirá o botão, só que com disabled */}
        {loading && <button className='btn' disabled>Aguarde...</button> }
    


        {/* se houve alguem erro no formulário exibirá o erro */}
        {/* condição que será executada sendo true */}
        {error && <p className="error">{error}</p>}


      </form>
    </div>
  )
}

export default Login;