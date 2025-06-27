import mongoose from "mongoose"; // Alterado require para import

const habitSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  completed: Boolean,
});

export default mongoose.model("Habit", habitSchema); // Alterado module.exports para export default
