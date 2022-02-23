import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./AllEvents.css";

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

  return events.map((event) => {
    const { id, name, description, time, date } = event;
    return (
      <Col lg={3} md={5} sm={12} className="mt-5 ms-5" key={id}>
        <article className="event">
          <Link to={`/events/${id}`}>
            <div className="event-card">
              <h4>image here</h4>
              <h4>{name}</h4>
              <h4>{description}</h4>
            </div>
          </Link>
        </article>
      </Col>
    );
  });
}

export default AllEvents;
