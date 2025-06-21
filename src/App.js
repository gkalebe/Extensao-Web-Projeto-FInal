import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import './App.css';
import VidaULogo from './assets/VidaU_logo.png';

function App() {
  return (
    <Router>
      <header className="app-header">
        <div className="logo-container">
          <Link to="/">
            <img src={VidaULogo} alt="Logo VidaU" className="logo" />
          </Link>
        </div>
        <nav className="main-nav">
          <Link to="/" className="nav-link">Início</Link>
          <Link to="/login" className="nav-link">Entrar</Link>
          <Link to="/register" className="nav-link">Cadastrar</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} VidaU. Todos os direitos reservados.</p>
      </footer>
    </Router>
  );
}

export default App;