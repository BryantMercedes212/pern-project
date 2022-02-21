const express = require("express");

const {
  getAllEvents,
  getOneEvent,
  addNewEvent,
  deleteEvent,
  updateEvent,
} = require("../queries/events");

const events = express.Router();

// All events
events.get("/", async (_, res) => {
  console.log("GET req to /events");
  const allEvents = await getAllEvents();
  if (!allEvents) {
    res.status(500).json({ error: "server error" });

    return;
  }
  console.log(allEvents);
  res.status(200).json({ success: true, payload: allEvents });
});

// Show event
events.get("/:id", async (req, res) => {
  console.log("GET req to /events/:id");
  const event = await getOneEvent(req.params.id);
  if (event.id) {
    res.status(200).json({ success: true, payload: event });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

// Create event
events.post("/", async (req, res) => {
  const newEvent = await addNewEvent(req.body);
  res.status(200).json({ success: true, payload: newEvent });
});

// Delete event
events.delete("/:id", async (req, res) => {
  console.log("DELETE req to /events/:id");
  const deletedEvent = await deleteEvent(req.params.id);
  if (deletedEvent.id) {
    console.log("im the res");
    res.status(200).json({ success: true, payload: deletedEvent });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

// Update event
events.put("/:id", async (req, res) => {
  console.log("UPDATE req to /events/:id");
  const updatedEvent = await updateEvent(req.params.id, req.body);
  if (updatedEvent.id) {
    res.status(200).json({ success: true, payload: updatedEvent });
  } else {
    res.status(404).json("not found");
  }
});

module.exports = events;
