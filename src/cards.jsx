import React, { useState } from "react";
import Avatar from "./avatar"; // Make sure the correct path to the Avatar component is provided
import Detail from "./detail";


const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container">
      <div
        className={`flip-card ${isFlipped ? "flipped" : ""}`}
        onClick={handleCardClick}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Avatar  imgURL={props.imgURL} />
            <h2 className="name">{props.Facilitator}</h2>
            <p className="session" >{props.Session}</p>
            <p className="date">{props.Date}</p>
            <p className="time">{props.Time}</p>
          </div>
          <div className="flip-card-back">
          <Avatar className="img-back" imgURL={props.imgURL} />
            <Detail className="info" detailInfo={props.Info} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
