import React from "react";

const Card = ({ member }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="img">
          <img src={member.avatar_url} alt="user" className="card-img" />
        </div>
        <div className="card-info">
          <h2 className="name">{member.name}</h2>
          <p className="work">{member.company}</p>
          <p className="place">{member.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
