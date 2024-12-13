import axios from "axios";

const API_KEY = "941aa8e017544ac8ac97d94fbf8db3e2"; // Replace with your actual key
const BASE_URL = "https://api.sportsdata.io/v3/nfl/scores/json";

const getGameScores = async (season, week) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/ScoresByWeek/${season}/${week}`,
      {
        params: {
          key: API_KEY,
          format: "json",
        },
      }
    );
    return response.data; // Returns the list of game scores
  } catch (error) {
    console.error("Error fetching game scores:", error);
    throw error;
  }
};

export default getGameScores;
