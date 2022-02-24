import { Link } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";
import bamboo from "../img/bamboo(3).png";
import panda from "../img/panda.png";

const Nav = () => {
  const [isToggle, setToggle] = useState(false);
  const [signedIn, setSignIn] = useState(true);

  const handleToggle = () => {
    setToggle(!isToggle);
  };

  return (
    <header>
      <nav>
        <div onClick={handleToggle} className="hamburger">
          <div className="line"> </div>
          <div className="line"> </div>
          <div className="line"> </div>
        </div>
        <ul className={isToggle ? "nav-links-open" : "nav-links"}>
          <li className="first">
            <Link to="/">
              <img src={panda} alt="bamboo" className="panda"></img>
            </Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          {signedIn && (
            <li>
              <Link to="/events/new" className="new">
                New Event
              </Link>
            </li>
          )}
        </ul>
      </nav>{" "}
      <div>
        <img src={bamboo} alt="bamboo" className="bamboo"></img>
        <img src={bamboo} alt="bamboo" className="bamboo"></img>
        <img src={bamboo} alt="bamboo" className="bamboo"></img>
        <img src={bamboo} alt="bamboo" className="bamboo"></img>
        <img src={bamboo} alt="bamboo" className="bamboo"></img>
        <img src={bamboo} alt="bamboo" className="bamboo"></img>
        <img src={bamboo} alt="bamboo" className="bamboo"></img>
        <img src={bamboo} alt="bamboo" className="bamboo"></img>
        <img src={bamboo} alt="bamboo" className="bamboo"></img>
        <img src={bamboo} alt="bamboo" className="bamboo"></img>
      </div>
    </header>
  );
};

export default Nav;
