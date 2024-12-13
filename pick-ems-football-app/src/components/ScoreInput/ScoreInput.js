// components/ScoreInput.js
const ScoreInput = ({ onScoreInput, tieBreakingScores, selectedUser }) => {
  return (
    <div>
      {selectedUser && (
        <div>
          <label>{selectedUser}'s Tie-breaking Score: </label>
          <input
            type="number"
            value={tieBreakingScores[selectedUser] || ""}
            onChange={(e) => onScoreInput(selectedUser, e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default ScoreInput;
