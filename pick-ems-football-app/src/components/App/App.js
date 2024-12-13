import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "../../pages/HomePage/HomePage"; // Import the HomePage component
import PlayerPage from "../../pages/PlayerPage/PlayerPage";

const App = () => {
  const [selectedUser, setSelectedUser] = useState(""); // Manage the selected user
  const [selectedWeek, setSelectedWeek] = useState(1); // Manage the selected week

  return (
    <Router>
      <Header
        setSelectedUser={setSelectedUser}
        setSelectedWeek={setSelectedWeek}
      />
      <Routes>
        {/* HomePage route with selectedWeek prop */}
        <Route path="/" element={<HomePage selectedWeek={selectedWeek} />} />

        {/* PlayerPage route with selectedUser and selectedWeek props */}
        <Route
          path="/player/:user"
          element={
            <PlayerPage
              selectedUser={selectedUser}
              selectedWeek={selectedWeek}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
