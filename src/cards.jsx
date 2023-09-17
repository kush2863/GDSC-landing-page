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
const Events = () => {
  return (
    <section class="Events event-bg">
    <div class="Page-Header center-content">
      <h2>Upcoming and Ongoing Events</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus ea accusamus vitae nulla, ex itaque error nobis ut qui velit. Vero iusto voluptate quis temporibus quas inventore odit nam enim!</p>
    </div>
    <div class="Events_Warpper">

      <div class="center-div">
        <div class="Session_Cards">

          {
            eventList.map((item,index)=>{
              return(
                
                <div class="Session_Card" key={index}>
                <img src={image1} alt="session1" />
                <div className='card-front'> 
                  <p class="Title">{item.title}</p>
                  <p class="Date-Time">{item.date}</p>
                  <p class="Date-Time">{item.time}</p>
                  </div>
                  <div className='card-back'>
                  <p class="Card-text">
                    {item.text}
                  </p>
                  
                  <button class="btn-1 Session_btn"><a href='{item.link}'></a>Register Now</button>
                  </div>
              </div> 
             
              )
            })
          }
               
        </div>
      </div>
      </div>
      
  </section>
  )
}

export default Events;

