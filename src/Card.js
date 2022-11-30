import React from "react";
import { FaUser } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="img">
          <FaUser size="5em" className="user-icon-card" />
        </div>
        <div className="card-info">
          <h2 className="name">{props.member.name}</h2>
          <p className="work">{props.member.company}</p>
          <p className="place">{props.member.place}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
