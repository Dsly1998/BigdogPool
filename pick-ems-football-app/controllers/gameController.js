// controllers/gameController.js
const { pool } = require("../config/PoolDB"); // Assuming you are using pool to interact with PostgreSQL

const storeSchedule = async (scheduleData) => {
  try {
    // Example logic to insert the schedule data into a database
    const query = "INSERT INTO schedule (column1, column2) VALUES ($1, $2)";
    await pool.query(query, [scheduleData.column1, scheduleData.column2]); // Adjust based on data structure
  } catch (error) {
    console.error("Error storing schedule data:", error);
    throw error; // Re-throw to be caught in the route handler
  }
};

const storeScores = async (scoresData) => {
  try {
    // Example logic to insert the scores data into a database
    const query = "INSERT INTO scores (column1, column2) VALUES ($1, $2)";
    await pool.query(query, [scoresData.column1, scoresData.column2]); // Adjust based on data structure
  } catch (error) {
    console.error("Error storing scores data:", error);
    throw error; // Re-throw to be caught in the route handler
  }
};

module.exports = { storeSchedule, storeScores };
