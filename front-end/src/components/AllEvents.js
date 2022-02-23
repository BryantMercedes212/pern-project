import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllEvents() {
  const URL = process.env.REACT_APP_API_URL;
  const [events, setEvent] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/events`)
      .then((response) => {
        setEvent(response.data.payload);
      })
      .catch((err) => console.warn(err));
  }, [URL]);

  console.log(events);

  return (
    <div className="AllEvents">
      {events.map((event) => {
        const { id, name, description, time, date } = event;
        return (
          <article className="event" key={id}>
            <Link to={`/events/${id}`}>
              <div className="event-card">
                <h4>image here</h4>
                <h4>{name}</h4>
                <h4>{description}</h4>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}

export default AllEvents;
