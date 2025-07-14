import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./images/brand_logo.png" alt="Nike-LOGO" />
      </div>
      <ul className="list">
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className="login">Login</button>
    </nav>
  );
}

export default Navbar;
