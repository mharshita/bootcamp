import React from "react";
import { Outlet } from "react-router-dom";

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <h2>Our Namaste React Team Members</h2>
        <Outlet />
      </div>
    );
  }
}

export default AboutUs;
