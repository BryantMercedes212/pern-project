import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
    const { id, name, description, start_time, end_time, date, image } = event;
    if (image === "") {
      image = "https://i.ibb.co/QbMWhqx/pexels-andrea-piacquadio-787961.jpg";
    }
    return (
      <article>
        <div className="eachEvent">
          <img src={image} alt="event image"></img>
          <React.Fragment>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {date}
              </Typography>
              <Typography variant="h5" component="div">
                {name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {`${start_time} - ${end_time}`}
              </Typography>
              <Typography variant="body2">{description}</Typography>
              <Link to={`/events/${id}`}>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Link>
            </CardContent>
          </React.Fragment>
        </div>
        <div className="eventLine"> </div>
      </article>
    );
  });
}

export default AllEvents;
