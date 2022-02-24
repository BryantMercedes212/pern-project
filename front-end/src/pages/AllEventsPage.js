import AllEvents from "../components/AllEvents";
import { Container, Row, Col } from "react-bootstrap";
import "./events.css";

const AllEventsPage = () => {
  return (
    <Container fluid id="container">
      <Row>
        <AllEvents />
      </Row>
    </Container>
  );
};

export default AllEventsPage;
