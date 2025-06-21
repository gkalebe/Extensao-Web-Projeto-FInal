import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">VidaU</h1>
        <nav className="home-nav">
          <Link to="/login" className="nav-link">Entrar</Link>
          <Link to="/register" className="nav-link">Cadastrar</Link>
        </nav>
      </header>

      <main className="home-main">
        <h2 className="main-title">Organize sua vida, cuide do seu bem-estar</h2>
        <p className="main-subtitle">
          Planeje hábitos, metas e cuide da sua saúde física e mental.
        </p>
        <Link to="/register" className="main-button">Comece Agora</Link>
      </main>

      <footer className="home-footer">
        <p>&copy; 2025 VidaU. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
