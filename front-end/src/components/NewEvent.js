import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import "./NewEvent.css";

const NewEvent = () => {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  const [newEvent, setEvent] = useState({
    name: "",
    description: "",
    start_time: "",
    end_time: "",
    date: "",
    price: 0,
    image: "",
  });

  const handleText = (e) => {
    if (e.target.id === "featured") {
      setEvent({ ...newEvent, [e.target.id]: !newEvent.featured });
    }
    setEvent({ ...newEvent, [e.target.id]: e.target.value });
  };

  const addEvent = (newSnack) => {
    console.log(newSnack);
    axios
      .post(`${URL}/events`, newSnack)
      .then((res) => navigate(`/events`))
      .catch((error) => console.warn(error));
  };

  function handleSubmit(e) {
    e.preventDefault();
    addEvent(newEvent);
  }
  const {
    name,
    description,
    start_time,
    end_time,
    date,
    price,
    image,
    featured,
  } = newEvent;

  return (
    <div id="edit-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          type="text"
          onChange={handleText}
          required
        />

        <label htmlFor="">Description</label>
        <input
          id="description"
          value={description}
          type="text"
          onChange={handleText}
        />

        <label htmlFor="start_time">Start Time</label>
        <input
          id="start_time"
          value={start_time}
          type="time"
          onChange={handleText}
          required
        />

        <label htmlFor="end_time">End Time</label>
        <input
          id="end_time"
          value={end_time}
          type="time"
          onChange={handleText}
        />

        <label htmlFor="date">date</label>
        <input id="date" value={date} type="date" onChange={handleText} />
        <label htmlFor="Price">Price</label>
        <input id="price" value={price} type="number" onChange={handleText} />
        <label htmlFor="date">featured</label>
        <input
          id="featured"
          value={featured}
          type="checkbox"
          onChange={handleText}
        />

        <label htmlFor="image">Image</label>
        <input id="image" value={image} type="text" onChange={handleText} />

        <button type="submit">Submit</button>
        <button>
          <Link to={`/events`}>Back</Link>
        </button>
      </form>
    </div>
  );
};

export default NewEvent;
