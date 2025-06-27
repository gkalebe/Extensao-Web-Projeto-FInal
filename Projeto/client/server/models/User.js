import mongoose from "mongoose"; // Alterado require para import

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

export default mongoose.model("User", userSchema); // Alterado module.exports para export default
