// config/PoolDB.js
const { Pool } = require("pg");
require("dotenv").config(); // Ensure environment variables are loaded

// Create a new pool using environment variables
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// Function to connect to the database
const connectDB = () => {
  pool.connect((err) => {
    if (err) {
      console.error("Database connection error:", err.stack);
    } else {
      console.log("Connected to the database");
    }
  });
};

// Export the pool and connectDB function for use in other parts of the app
module.exports = { pool, connectDB };
