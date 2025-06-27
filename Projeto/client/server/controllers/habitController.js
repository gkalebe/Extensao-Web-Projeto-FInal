import Habit from "../models/Habit.js"; // Adicionado .js e alterado require para import

export const getHabits = async (req, res) => { // Alterado exports.getHabits para export const getHabits
  const { userId } = req.params;
  try {
    const habits = await Habit.find({ userId });
    res.json(habits);
  } catch (error) {
    console.error("Erro ao buscar hábitos:", error.message);
    res.status(500).json({ message: "Erro do servidor" });
  }
};

export const createHabit = async (req, res) => { // Alterado exports.createHabit para export const createHabit
  const { userId, title } = req.body;
  try {
    const habit = new Habit({ userId, title, completed: false });
    await habit.save();
    res.status(201).json(habit);
  } catch (error) {
    console.error("Erro ao criar hábito:", error.message);
    res.status(500).json({ message: "Erro do servidor" });
  }
};
