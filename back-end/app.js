// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const eventsController = require("./controllers/eventsControllers");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/events", eventsController);

//Star(*) matches anything we haven't matched yet.
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

// EXPORT
module.exports = app;
