const express = require("express");
const router = express.Router();
const { getHabits, createHabit } = require("../controllers/habitController");

router.get("/:userId", getHabits);
router.post("/", createHabit);

module.exports = router;
