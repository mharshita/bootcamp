import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TeamName } from "../utils/constants";

const Header = () => {
  return (
    <>
      <div className="nav">
        {/* logo */}
        <Link to="/">
          <img
            src="https://lwfiles.mycourse.app/635a5db526fa77c557bab00d-public/c4377b05799f40987f16cacd43da014d.png"
            alt="logo"
            width={250}
          />
        </Link>
        {/* user icon */}
        <div className="user-icon">
          <FaUserCircle size={50} color="white" />
        </div>
      </div>
      <div className="sub-nav">{TeamName}</div>
    </>
  );
};

export default Header;
