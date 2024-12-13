// routes/pickRoutes.js
const express = require("express");
const { savePick, getPicksByUser } = require("../controllers/pickController");
const router = express.Router();

router.post("/", savePick); // Save picks made by users
router.get("/:userId", getPicksByUser); // Get picks made by a specific user

module.exports = router;
