const db = require("../db/dbConfig");

const getAllEvents = async () => {
  try {
    const events = await db.any("SELECT * FROM events");
    return events;
  } catch (err) {
    return err;
  }
};

const getOneEvent = async (id) => {
  try {
    const event = await db.one("SELECT * FROM events WHERE id=$1", id);

    return event;
  } catch (error) {
    return error;
  }
};

const addNewEvent = async (newEvent) => {
  try {
    const {
      name,
      description,
      date,
      start_time,
      end_time,
      price,
      rating,
      featured,
      image,
    } = newEvent;
    const event = await db.one(
      "INSERT INTO events (name, description, date, start_time, end_time, price, rating, featured, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [name, description, date, start_time, end_time, price, 1, featured, image]
    );
    return event;
  } catch (error) {
    return error;
  }
};

const deleteEvent = async (id) => {
  try {
    const event = await db.one(
      "DELETE FROM events WHERE id=$1 RETURNING *",
      id
    );

    return event;
  } catch (error) {
    return error;
  }
};

const updateEvent = async (id, event) => {
  const {
    name,
    description,
    date,
    start_time,
    end_time,
    price,
    rating,
    featured,
    image,
  } = event;

  const updated = await db.one(
    "UPDATE events SET name=$1, description=$2, date=$3, start_time=$4, end_time=$5, price=$6, rating=$7, featured=$8, image=$9 WHERE id=$10 RETURNING *",
    [
      name,
      description,
      date,
      start_time,
      end_time,
      price,
      rating,
      featured,
      image,
      id,
    ]
  );

  return updated;
};

// here we are exporting our functions to use in our controllers
module.exports = {
  getAllEvents,
  addNewEvent,
  getOneEvent,
  deleteEvent,
  updateEvent,
};
