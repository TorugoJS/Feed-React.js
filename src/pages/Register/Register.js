// import css
import styles from './Register.module.css'

// importando useState e useEffect.
import { useState, useEffect } from 'react';

const Register = () => {


  // useState
  const [displayName, setDisplayName] = useState("")  // para manipular o name 
  const [email, setEmail] = useState("") // para manipular o email
  const [password, setPassword] = useState("") // para manipular a senha
  const [confirmPassword, setConfirmPassword] = useState("") // para confirmar a senha
  const [error, setError] = useState("") // para manipular o erros

  // reunir todos os dados e enviar no formulário.
  const handleSubmit = (e) => {
    e.preventDefault(); // para enviar o formulário sem fazer a recarregamento da página.


    setError(""); // zerando os erros ao envio do formulário - não exibirá nenhum erro


    // formando um usuário baseado nos inputs
    // criando um objeto com informações do usuário
    const user = {
      displayName,
      email,
      password,
    };


    // 1º VALIDAÇÃO - SENHA
    // Validação - se a senha for diferente da confirmação da senha =>
    // Exiba erro ("As senhas precisam ser iguais")
    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais")
      return;
    }

    //imprimindo objeto com informações do usuário
    console.log(user);
  };





  return (
      //container com form
    <div className={styles.register}>

      {/* Título da pagina de registrar */}
      <h1>Cadastra-se em nossa rede!</h1>
      <p>Compartilhe suas histórias e ganhe seguidores!</p>

      {/* Formulário */}
      {/* Chamando função de envio de formulário */}
      <form onSubmit={handleSubmit}>

        {/* Form usário */}
        <label>
          <span>Nome:</span>
          <input type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            value={displayName} // linkando ao useState e controlando valor
            onChange={(e) => setDisplayName(e.target.value)} // preenchendo valores dos states com onChange
          />
        </label>

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

        {/* Form confirmar a senha */}
        <label>
          <span>Confirmar senha:</span>
          <input type="password"
            name="confirmPassword"
            required placeholder="Confirme a sua senha"
            value={confirmPassword} // linkando ao useState e controlando valor
            onChange={(e) => setConfirmPassword(e.target.value)} // preenchendo valores dos states com onChange
          />
        </label>

        {/* Botão para enviar formulário. */}
        <button className='btn'>Cadastrar</button>


        {/* se houve alguem erro no formulário exibirá o erro */}
        {/* condição que será executada sendo true */}
        {error && <p className="error">{error}</p>}


      </form>

    </div>
  )
}

export default Register;