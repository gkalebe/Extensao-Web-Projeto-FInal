import express from "express";
const router = express.Router();
import { getHabits, createHabit } from "../controllers/habitController.js"; // Adicionado .js

router.get("/:userId", getHabits);
router.post("/", createHabit);

export default router; // Exporta o router como default
