import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function EventEditForm() {
  let { id } = useParams();
  const [event, setEvent] = useState({
    name: "",
    description: "",
    start_time: "",
    end_time: "",
    date: "",
    price: 0,
    image: "",
  });
  const navigate = useNavigate();

  const handleText = (e) => {
    setEvent({ ...event, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/events/${id}`)
      .then((response) => setEvent(response.data.payload))
      .catch((error) => console.warn(error));
  }, [id]);

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put(`${API}/events/${id}`, event)
      .then((response) => navigate("/events"))
      .catch((err) => console.warn(err));
  };

  const {
    name,
    description,
    start_time,
    end_time,
    date,
    price,
    image,
    featured,
  } = event;

  return (
    <div id="edit-form">
      <form onSubmit={handleEdit}>
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
          <Link to={`/events/${id}`}>Back</Link>
        </button>
      </form>
    </div>
  );
}

export default EventEditForm;
