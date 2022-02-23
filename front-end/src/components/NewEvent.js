import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

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

  // function handleTextChange(event) {
  //   if (event.target.id === "is_healthy") {
  //     setSnack({ ...snack, [event.target.id]: !snack.is_healthy });
  //   } else {
  //     setSnack({ ...snack, [event.target.id]: event.target.value });
  //   }
  // }
  const handleText = (event) => {
    setEvent({ ...newEvent, [event.target.id]: event.target.value });
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
        <div className="editForm"></div>

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
