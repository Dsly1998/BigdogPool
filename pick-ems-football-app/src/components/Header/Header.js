import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ setSelectedUser, setSelectedWeek }) => {
  const navigate = useNavigate();

  // Handle user selection
  const handleUserChange = (event) => {
    const selectedUser = event.target.value;
    setSelectedUser(selectedUser); // Set the user in parent state
    if (selectedUser) {
      navigate(`/player/${selectedUser}`); // Navigate to the PlayerPage for selected user
    } else {
      navigate("/"); // Go back to the HomePage if no user is selected
    }
  };

  // Handle week selection
  const handleWeekChange = (event) => {
    const selectedWeek = Number(event.target.value);
    setSelectedWeek(selectedWeek); // Set the selected week in parent state
  };

  return (
    <header>
      <h1 className="header__title">Big Dog Pool</h1>
      <div className="header__container-right">
        <div>
          <label>Select User: </label>
          <select onChange={handleUserChange}>
            <option value="">Select a user</option>
            <option value="Brad">Brad</option>
            <option value="Lauren">Lauren</option>
            <option value="Dad">Dad</option>
            <option value="Mom">Mom</option>
            <option value="Danielle">Danielle</option>
            <option value="Dallin">Dallin</option>
          </select>
        </div>

        <div>
          <label>Select Week: </label>
          <select onChange={handleWeekChange}>
            {Array.from({ length: 17 }, (_, i) => i + 1).map((week) => (
              <option key={week} value={week}>
                Week {week}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
