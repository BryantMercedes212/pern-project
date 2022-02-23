import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllEvents from "./components/AllEvents";
import EventDetails from "./components/EventDetails";
import NewEvent from "./components/NewEvent";
import EventEdit from "./components/EventEdit";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/events/new" element={<NewEvent />} />
        <Route path="/events/:id/edit" element={<EventEdit />} />
      </Routes>
    </div>
  );
}

export default App;
