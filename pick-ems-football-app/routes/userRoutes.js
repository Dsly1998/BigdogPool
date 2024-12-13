// routes/userRoutes.js
const express = require("express");
const {
  getUsers,
  updateUserPick,
  getUserStats,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", getUsers); // Fetch all users
router.post("/pick", updateUserPick); // Update picks for a user
router.get("/:id/stats", getUserStats); // Get user stats for the week

module.exports = router;
