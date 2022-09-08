// import css
import styles from './Register.module.css'

// importando useState e useEffect.
import { useState, useEffect } from 'react';

const Register = () => {

  return (

    <div className={styles.register}>

      {/* Título da pagina de registrar */}
      <h1>Cadastra-se em nossa rede!</h1>
      <p>Compartilhe suas histórias e ganhe seguidores!</p>

      {/* Formulário */}
      <form>

        {/* Form usário */}
        <label>
          <span>Nome:</span>
          <input type="text"
            name="displayName"
            required placeholder="Nome do usuário" />
        </label>

        {/* Form e-mail */}
        <label>
          <span>E-mail:</span>
          <input type="email"
            name="email"
            required placeholder="E-mail do usuário" />
        </label>

        {/* Form senha */}
        <label>
          <span>Senha:</span>
          <input type="password"
            name="password"
            required placeholder="Senha do usuário" />
        </label>

        {/* Form confirmar a senha */}
        <label>
          <span>Confirmar senha:</span>
          <input type="password"
            name="confirmPassword"
            required placeholder="Confirme a sua senha" />
        </label>

        {/* Botão para enviar formulário. */}
        <button className='btn'>Cadastrar</button>

      </form>

    </div>
  )
}

export default Register;