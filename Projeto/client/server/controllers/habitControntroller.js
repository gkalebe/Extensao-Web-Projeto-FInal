const Habit = require("../models/Habit");

exports.getHabits = async (req, res) => {
  const { userId } = req.params;
  const habits = await Habit.find({ userId });
  res.json(habits);
};

exports.createHabit = async (req, res) => {
  const { userId, title } = req.body;
  const habit = new Habit({ userId, title, completed: false });
  await habit.save();
  res.status(201).json(habit);
};
