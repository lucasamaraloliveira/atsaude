import React, { useState } from "react";
import { Link } from "react-router-dom";

import LogoBlue from '../../assets/logo_blue.svg'

import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username: ", username);
    console.log("Password: ", password);
    console.log("Remember Me: ", rememberMe);
    // aqui você pode adicionar a lógica de autenticação com o backend
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={LogoBlue} alt="" />
        <div>

          <input
            type="text"
            id="username"
            placeholder="Email"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
            />
            Lembrar-se
          </label>
          <div className="links">
            <a href="#">Precisa de ajuda?</a>
            <a href="#">Esqueci minha senha</a>
            </div>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <p className="redirect">
  Ainda não possui um cadastro?{" "}
  <Link to="/signup">Clique aqui</Link> e cadastre-se.
</p>
      </form>
      <footer>
        desenvolvido por Alrion Tech
      </footer>
    </div>
  );
}

export default Login;
