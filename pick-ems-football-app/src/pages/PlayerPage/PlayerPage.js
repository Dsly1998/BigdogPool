import React, { useEffect, useState } from "react";
import { fetchScoresByWeek } from "../../utils/api";
import PickSection from "../../components/PickSection/PickSection";
import ScoreInput from "../../components/ScoreInput/ScoreInput";

const PlayerPage = ({ selectedUser, selectedWeek }) => {
  const [games, setGames] = useState([]);
  const [userPicks, setUserPicks] = useState({});
  const [tieBreakingScores, setTieBreakingScores] = useState({
    Brad: 0,
    Lauren: 0,
    Dad: 0,
    Mom: 0,
    Danielle: 0,
    Dallin: 0,
  });

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

  // Updated handlePick function to track each user's picks
  const handlePick = (user, gameId, team) => {
    setUserPicks((prevUserPicks) => ({
      ...prevUserPicks,
      [user]: {
        ...prevUserPicks[user],
        [gameId]: team, // Update only the specific game's pick for this user
      },
    }));
  };

  const handleScoreInput = (score) => {
    setTieBreakingScores((prevScores) => ({
      ...prevScores,
      [selectedUser]: score,
    }));
  };

  return (
    <div className="PlayerPage">
      <h1>{selectedUser}'s Pick-Ems</h1>
      <PickSection
        games={games.slice(0, 14)} // Limit to first 14 games
        onPick={handlePick}
        user={selectedUser}
        userPicks={userPicks}
      />
      <ScoreInput
        onScoreInput={handleScoreInput}
        tieBreakingScores={tieBreakingScores}
        selectedUser={selectedUser}
      />
    </div>
  );
};

export default PlayerPage;
