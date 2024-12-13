require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { pool, connectDB } = require("./config/PoolDB"); // PostgreSQL connection
const gameRoutes = require("./routes/gameRoutes"); // Game-related routes

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Database Connection
connectDB(); // Call to connect to the database

// API Routes
app.use("/api", gameRoutes); // Prefix all game-related routes with /api

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the Pick-Em's Football App API!");
});

// Error handling (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
