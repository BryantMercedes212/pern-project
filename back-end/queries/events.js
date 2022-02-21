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
    const { name, description, date, time, price, rating, featured, image } =
      newEvent;
    const event = await db.one(
      "INSERT INTO events (name, description, date, time, price, rating, featured, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [name, description, date, time, price, rating, featured, image]
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

const updateEvent = async (event, id) => {
  const { name, description, date, time, price, rating, featured, image } =
    event;
  const query =
    "UPDATE events SET name=$1, description=$2, date=$3, time=$4, price=$5, rating=$6, featured=$7, image=$8, WHERE id=$9 RETURNING *";
  const values = [
    name,
    description,
    date,
    time,
    price,
    rating,
    featured,
    image,
    id,
  ];
  const updated = await db.one(query, values);

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
