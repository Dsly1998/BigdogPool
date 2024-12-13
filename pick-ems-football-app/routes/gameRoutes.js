// routes/gameRoutes.js
const express = require("express");
const { fetchSchedule, fetchScoresByWeek } = require("../src/utils/api"); // CommonJS
const { storeSchedule, storeScores } = require("../controllers/gameController");
const router = express.Router();

// Route to fetch and store schedule
router.post("/schedule/:season", async (req, res) => {
  const { season } = req.params;
  try {
    const scheduleData = await fetchSchedule(season); // Fetch schedule data
    await storeSchedule(scheduleData); // Store in database
    res.status(200).send("Schedule data saved successfully");
  } catch (error) {
    console.error("Error storing schedule:", error);
    res.status(500).send("Error storing schedule");
  }
});

// Route to fetch and store scores by week
router.post("/scores/:season/:week", async (req, res) => {
  const { season, week } = req.params;
  try {
    const scoresData = await fetchScoresByWeek(season, week); // Fetch scores data
    await storeScores(scoresData); // Store in database
    res.status(200).send("Scores data saved successfully");
  } catch (error) {
    console.error("Error storing scores:", error);
    res.status(500).send("Error storing scores");
  }
});

module.exports = router;
