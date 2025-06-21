import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Cadastro realizado para: ${nome} - ${email}`);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Criar nova conta</h2>
        <p className="register-subtitle">Junte-se ao VidaU 🌱</p>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input
              type="text"
              id="nome"
              placeholder="Nome completo"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <span className="input-icon">📧</span>
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

          <button type="submit" className="register-button">Cadastrar</button>
        </form>

        <p className="login-text">
          Já tem uma conta? <Link to="/login" className="login-link">Entrar</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;