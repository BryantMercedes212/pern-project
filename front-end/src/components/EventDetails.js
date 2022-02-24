import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function EventDetails() {
  const [event, setEvent] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/events/${id}`)
      .then((res) => setEvent(res.data.payload))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/events/${id}`)
      .then((res) => navigate("/events"))
      .catch((err) => console.log(err));
  };

  const { name, description, time, date, price, image } = event;

  return (
    <div className="events">
      <aside>
        <img src={image} alt="event image"></img>
      </aside>
      <div className="event">
        <h5>{name}</h5>
        <p>{description}</p>
        <br />
        <h6>{price}</h6>
        <h6>{date}</h6>
        <h6>{time}</h6>
      </div>
      <div className="showNavigation">
        <div>
          <Link to={"/events"}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/events/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
