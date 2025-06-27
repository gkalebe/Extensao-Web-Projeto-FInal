import React from "react";

const Login = () => {
  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-2xl mb-4 font-semibold">Login</h2>
      <form>
        <input type="email" placeholder="Email" className="border w-full p-2 mb-4" />
        <input type="password" placeholder="Senha" className="border w-full p-2 mb-4" />
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
