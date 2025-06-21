import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Painel de Hábitos 🚀</h1>
      <p className="dashboard-subtitle">Acompanhe seu progresso e alcance seus objetivos.</p>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <span className="card-icon">✅</span>
          <h3>Check-in de Hábitos</h3>
          <p>Marque hábitos concluídos e fortaleça sua disciplina diária.</p>
        </div>

        <div className="dashboard-card">
          <span className="card-icon">📈</span>
          <h3>Progresso Semanal</h3>
          <p>Acompanhe sua evolução e visualize seus resultados ao longo da semana.</p>
        </div>

        <div className="dashboard-card">
          <span className="card-icon">🧘‍♀️</span>
          <h3>Dicas de Bem-Estar</h3>
          <p>Encontre conteúdos para cuidar da mente, do corpo e das suas emoções.</p>
        </div>

        <div className="dashboard-card">
          <span className="card-icon">🎯</span>
          <h3>Minhas Metas</h3>
          <p>Defina objetivos, organize prioridades e acompanhe seu desenvolvimento pessoal.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
