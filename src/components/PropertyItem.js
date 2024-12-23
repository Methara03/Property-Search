import React from 'react';
import './PropertyItem.css';

export default function PropertyItem({ property }) {
  // Import images dynamically
  const firstImage = `${property.pictures[0]}`;
  const secondImage = `${property.pictures[1]}`;
  const thirdImage = `${property.pictures[2]}`;

  return (
    <div className="property-item-main">
      <div className="property-item-left">
        <div className="images">
          <img src={firstImage} alt="Large" className="large-image" />
          <div className="small-images">
            <img src={secondImage} alt="Small 1" />
            <img src={thirdImage} alt="Small 2" />
          </div>
        </div>
        <div className="price">${property.price.toLocaleString()}</div>
      </div>
      <div className="property-item-right">
        <h2>{property.location}</h2>
        <p>Bedrooms: {property.bedrooms}</p>
        <p>{property.description}</p>
        <p>Contact: (123) 456-7890</p>
      </div>
    </div>
  );
}
