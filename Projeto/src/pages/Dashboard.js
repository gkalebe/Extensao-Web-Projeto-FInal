import React from "react";

const Dashboard = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Painel do Usuário</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-purple-100 rounded shadow">Check-in de Hábitos</div>
        <div className="p-4 bg-purple-100 rounded shadow">Gráfico de Progresso</div>
      </div>
    </div>
  );
};

export default Dashboard;
