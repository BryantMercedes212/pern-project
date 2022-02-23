import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllEvents from "./components/AllEvents";
import EventDetails from "./components/EventDetails";
import NewEvent from "./components/NewEvent";
import EventEdit from "./components/EventEdit";
import Nav from "./components/Nav";
import AllEventsPage from "./pages/AllEventsPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/events" element={<AllEventsPage />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/events/new" element={<NewEvent />} />
        <Route path="/events/:id/edit" element={<EventEdit />} />
      </Routes>
    </div>
  );
}

export default App;
