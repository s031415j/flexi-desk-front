import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <img className="logo" src={`/images/white-bt-logo.png`} alt="logo" />
      <h2 className="system-title" id="title">
        FlexiDesk
      </h2>
      <div className="nav-items">
        <ul>
          <li>
            <a href="/myBookings" className="nav-items">
              <img
                src={`/images/calender-icon.png`}
                alt="Calender with a small tick in the centre"
              />
            </a>
          </li>
          <li>
            <a href="/booking/create" className="nav-items">
              <img
                src={`/images/add-white-icon.png`}
                alt="A circle with a plus symbol in it"
              />
            </a>
          </li>
          <li>
            <a href="/help" className="nav-items">
              <img
                src={`/images/help-icon.png`}
                className="nav-icon"
                alt="Circle with a question mark in the centre"
              />
            </a>
          </li>
          <li>
            <a href="/login" className="nav-items">
              <img
                src={`/images/logout-icon.png`}
                alt="A square with an arrow pointing to the right side of the box"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
