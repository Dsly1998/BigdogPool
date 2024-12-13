import React from "react";
import "./LeaderBoard.css";

const Leaderboard = ({ userPicks, games }) => {
  // Calculate the leaderboard rankings based on user picks
  const calculateScores = () => {
    const scores = {};
    // Iterate through each user and calculate their score
    Object.keys(userPicks).forEach((user) => {
      let score = 0;
      games.forEach((game) => {
        if (
          userPicks[user][game.id] === game.homeTeam ||
          userPicks[user][game.id] === game.awayTeam
        ) {
          score++;
        }
      });
      scores[user] = score;
    });
    return scores;
  };

  const scores = calculateScores();

  // Sort users by score
  const sortedUsers = Object.keys(userPicks); // Just use the users from userPicks instead of sorting by score, as it's not necessary for your request.

  return (
    <div className="leaderboard">
      <h3>Leaderboard</h3>
      <table className="leaderboard__table">
        <thead>
          <tr>
            <th>Points</th>
            {sortedUsers.map((user) => (
              <th key={user}>{user}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Row for "Points" */}
          <tr>
            <td>Points</td>
            {sortedUsers.map((user) => (
              <td key={user}>{scores[user] || "Coming soon"}</td>
            ))}
          </tr>

          {/* Row for "Last Week" */}
          <tr>
            <td>Last Week</td>
            {sortedUsers.map((user) => (
              <td key={user}>Coming soon</td>
            ))}
          </tr>

          {/* Row for "Record to date" */}
          <tr>
            <td>Record to date</td>
            {sortedUsers.map((user) => (
              <td key={user}>Coming soon</td>
            ))}
          </tr>

          {/* Row for "Total Wins" */}
          <tr>
            <td>Total Wins</td>
            {sortedUsers.map((user) => (
              <td key={user}>Coming soon</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
