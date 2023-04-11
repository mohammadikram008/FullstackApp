import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <div className="nav-bar">
        <ul className="nav-item">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">ContactUs</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
        <ul className="nav-item">
          <li>Logout</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;
