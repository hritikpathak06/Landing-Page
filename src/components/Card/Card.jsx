import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div className="card__container">
      <div className="cards">
        <div className="card__box">
          <div className="img__section">
            <img src="./first.png" alt="" />
          </div>
          <div className="info__section">
            <div className="offer">
              <span>20% Off</span>
              <span>Limited time </span>
            </div>
            <h3>Webbuilder 1</h3>
            <p>Computer Modern clasic with wix support</p>
            <div className="price__section">
              <p>$39.96</p>
              <p>
                $49.96 <span>(20% Off)</span>
              </p>
            </div>
            <button>View Deal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
