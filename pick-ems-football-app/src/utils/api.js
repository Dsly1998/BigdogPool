const API_KEY = "941aa8e017544ac8ac97d94fbf8db3e2";
const BASE_URL = "https://api.sportsdata.io/v3/nfl/scores/json";

// Fetch the full schedule for a given season
const fetchSchedule = async (season) => {
  try {
    const response = await fetch(
      `${BASE_URL}/Schedules/${season}?key=${API_KEY}`
    );
    const data = await response.json();
    return data.map((game) => ({
      gameKey: game.GameKey, // Unique game identifier
      awayTeam: game.AwayTeam, // Away team
      homeTeam: game.HomeTeam, // Home team
      week: game.Week, // Week of the season
      date: game.Date, // Game date
      isOver: game.IsOver, // Has the game ended?
      hasStarted: game.HasStarted, // Has the game started?
      lastPlay: game.LastPlay, // Last play description/status
    }));
  } catch (error) {
    console.error("Error fetching schedule:", error);
    throw error;
  }
};

// Fetch scores for a given season and week
const fetchScoresByWeek = async (season, week) => {
  try {
    const response = await fetch(
      `${BASE_URL}/ScoresByWeek/${season}/${week}?key=${API_KEY}`
    );
    const data = await response.json();

    return data
      .filter((game) => game.Week === week) // Filter by week
      .slice(0, 14) // Only take the first 14 games
      .map((game) => ({
        gameKey: game.GameKey, // Unique game identifier
        homeTeam: game.HomeTeam, // Home team
        awayTeam: game.AwayTeam, // Away team
        homeScore: game.HomeScore, // Home team score
        awayScore: game.AwayScore, // Away team score
        week: game.Week, // Week of the season
        isOver: game.IsOver, // Game status: Over or not
        hasStarted: game.HasStarted, // Whether the game has started
      }));
  } catch (error) {
    console.error("Error fetching scores by week:", error);
    throw error;
  }
};
