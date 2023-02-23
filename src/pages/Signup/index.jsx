import React, { useState } from 'react';
import LogoBlue from '../../assets/logo_blue.svg'
import './Signup.css';

function Signup() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar sua lógica para enviar os dados de cadastro ao servidor
  };

  return (
    <div className= "wallpaper-signup-container" >
      
      <form className="signup-container"  onSubmit={handleSubmit}>
        <div className="campo">
        <img src={LogoBlue} alt="" />
          <label htmlFor="nome">Nome Completo</label>
          <input type="text" id="nome" value={nome} onChange={(event) => setNome(event.target.value)} />
        </div>
        <div className="campo">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="campo">
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" value={senha} onChange={(event) => setSenha(event.target.value)} />
        </div>
        <div className="campo">
          <label htmlFor="confirmarSenha">Confirmar senha</label>
          <input type="password" id="confirmarSenha" value={confirmarSenha} onChange={(event) => setConfirmarSenha(event.target.value)} />
        </div>
        <button className='signup-button ' type="submit">Cadastrar</button>
      </form>
      <div className="signup-info-container">
        <h2>O ATSaúde está à disposição para ajudar.</h2>
        <p>Acesse ferramentas fundamentais para gerenciar seu negócio e proporcione a melhor experiência para seus pacientes.</p>
      </div>
      <footer>
        Desenvolvido por Alrion Tech
      </footer>
    </div>
  );
}

export default Signup;