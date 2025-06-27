import express from "express";
const router = express.Router();
import { registerUser, loginUser } from "../controllers/authController.js"; // Adicionei .js

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router; // Exporta o router como default
