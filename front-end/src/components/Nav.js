import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        <div className="nav-links">
          <div className="pages">
            {" "}
            <Link to="/">🅷🅾🅼🅴</Link> <Link to="/events">Events</Link>
          </div>
          <Link to="events/new" id="new">
            New event
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
