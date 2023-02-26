import React from "react";
import shop from "../icons/shop.png";

function Card(props) {
  return (
    <div className="items">
      <div className="col">
        <div class="card">
          <img class="card-img-top" src={props.onImg} />
          <div class="card-body">
            <h5 class="card-title">{props.onName}</h5>
            <p class="card-text">{props.onPrice}</p>
          </div>
          <button className="btn btn-success">
            <img className="shop-icon" src={shop} />
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
