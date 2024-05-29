
import React from "react";
const Card = (props) => {
  return (
    <div className="mb-5 p-5" >
      <img src={props.cardImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardText}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  )
}

export default Card