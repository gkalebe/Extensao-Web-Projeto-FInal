import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 to-white text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao VidaU</h1>
      <p className="mb-6">Planeje sua melhor versão com hábitos saudáveis e metas diárias.</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-purple-600 text-white px-4 py-2 rounded">Entrar</Link>
        <Link to="/register" className="bg-white border border-purple-600 text-purple-600 px-4 py-2 rounded">Cadastrar</Link>
      </div>
    </div>
  );
};

export default Home;
