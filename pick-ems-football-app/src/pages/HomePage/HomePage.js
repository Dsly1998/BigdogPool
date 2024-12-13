import React, { useEffect, useState } from "react";
import { fetchScoresByWeek } from "../../utils/api"; // Assuming the API is set up to fetch matchups.
import LeaderBoard from "../../components/LeaderBoard/LeaderBoard"; // Assuming you will create the Leaderboard component.
import "./HomePage.css";

const HomePage = ({ selectedWeek }) => {
  const [games, setGames] = useState([]);
  const [userPicks, setUserPicks] = useState({
    Brad: {},
    Dad: {},
    Mom: {},
    Danielle: {},
    Lauren: {},
    Dallin: {},
  });

  // Fetch scores when selectedWeek changes
  useEffect(() => {
    async function fetchData() {
      try {
        const scores = await fetchScoresByWeek("2024", selectedWeek);
        setGames(scores);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [selectedWeek]);

  return (
    <div className="home-page">
      <h1>Big Dog Pool</h1>
      <table className="chart">
        <thead>
          <tr>
            <th>Week {selectedWeek}</th>
            <th>Brad</th>
            <th>Dad</th>
            <th>Mom</th>
            <th>Danielle</th>
            <th>Lauren</th>
            <th>Dallin</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>
                {game.awayTeam} @ {game.homeTeam}
              </td>
              <td>{userPicks["Brad"][game.id] || "Waiting for pick"}</td>
              <td>{userPicks["Dad"][game.id] || "Waiting for pick"}</td>
              <td>{userPicks["Mom"][game.id] || "Waiting for pick"}</td>
              <td>{userPicks["Danielle"][game.id] || "Waiting for pick"}</td>
              <td>{userPicks["Lauren"][game.id] || "Waiting for pick"}</td>
              <td>{userPicks["Dallin"][game.id] || "Waiting for pick"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Leaderboard Section */}
      <LeaderBoard userPicks={userPicks} games={games} />
    </div>
  );
};

export default HomePage;
