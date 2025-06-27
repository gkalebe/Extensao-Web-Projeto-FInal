import User from "../models/User.js"; // Alterado require para import e adicionado .js
import bcrypt from "bcryptjs"; // Alterado require para import
import jwt from "jsonwebtoken"; // Alterado require para import

export const registerUser = async (req, res) => { // Alterado exports.registerUser para export const registerUser
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "Usuário cadastrado com sucesso" });
  } catch (err) {
    console.error("Erro no cadastro do usuário:", err.message); // Melhor log de erro
    res.status(400).json({ error: "Erro no cadastro" });
  }
};

export const loginUser = async (req, res) => { // Alterado exports.loginUser para export const loginUser
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Usuário não encontrado" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Senha incorreta" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Adicionado expiresIn
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } }); // Retorna um objeto user mais limpo
  } catch (error) {
    console.error("Erro no login do usuário:", error.message); // Melhor log de erro
    res.status(500).json({ error: "Erro do servidor" });
  }
};
