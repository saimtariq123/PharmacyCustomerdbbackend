import React from 'react';
import './card.css'; // Import the CSS file

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-image">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="card-img"
          />
          {/* Hover overlay with button */}
          <div className="card-hover-overlay">
            <button className="btn">Buy Now</button>
          </div>
        </div>
        {/* Information below the image */}
        <div className="card-info">
          <div className="card-price">$49.99</div>
          <p className="card-description">Comfortable and stylish shoes.</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
