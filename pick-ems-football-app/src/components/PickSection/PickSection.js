import React from "react";
import "./PickSection.css";

const PickSection = ({ games, onPick, user, userPicks }) => {
  if (!Array.isArray(games)) {
    return <p>Loading games...</p>;
  }

  // Retrieve current user's picks for easier access
  const userPicksForUser = userPicks[user] || {};

  return (
    <div className="pick-section">
      <h3 className="pick-section__title">{user}'s Game Picks</h3>
      <div className="pick-section__games">
        {games.map((game) => {
          // Check if the current team is selected for this game
          const isHomeSelected = userPicksForUser[game.id] === game.homeTeam;
          const isAwaySelected = userPicksForUser[game.id] === game.awayTeam;

          return (
            <div key={game.id} className="pick-section__game">
              <button
                className={`pick-section__team ${
                  isHomeSelected
                    ? "pick-section__team--selected"
                    : isAwaySelected
                    ? "pick-section__team--unselected"
                    : ""
                }`}
                onClick={() => onPick(user, game.id, game.homeTeam)}
              >
                {game.homeTeam}
              </button>
              <button
                className={`pick-section__team ${
                  isAwaySelected
                    ? "pick-section__team--selected"
                    : isHomeSelected
                    ? "pick-section__team--unselected"
                    : ""
                }`}
                onClick={() => onPick(user, game.id, game.awayTeam)}
              >
                {game.awayTeam}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PickSection;
