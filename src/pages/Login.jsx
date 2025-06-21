import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tentativa de login com: ${email}`);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Bem-vindo de volta</h2>
        <p className="login-subtitle">Planeje sua melhor versão 🌿</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              id="senha"
              placeholder="Senha"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="input-field"
            />
          </div>

          <button type="submit" className="login-button">Acessar</button>
        </form>

        <p className="register-text">
          Não tem uma conta? <Link to="/register" className="register-link">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;