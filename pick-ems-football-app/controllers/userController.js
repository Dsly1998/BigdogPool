// controllers/userController.js
const { pool } = require("../config/PoolDB");

// Fetch all users (example)
const getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// Update user picks (example)
const updateUserPick = async (req, res) => {
  const { userId, teamId, points } = req.body;
  try {
    const query =
      "INSERT INTO user_picks (user_id, team_id, points) VALUES ($1, $2, $3)";
    await pool.query(query, [userId, teamId, points]);
    res.status(201).send("Pick Saved");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// Fetch user stats (example)
const getUserStats = async (req, res) => {
  const userId = req.params.id;
  try {
    const query = "SELECT * FROM user_stats WHERE user_id = $1";
    const result = await pool.query(query, [userId]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = { getUsers, updateUserPick, getUserStats };
