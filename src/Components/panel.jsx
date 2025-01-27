import React from 'react';

const Panel = ({ imgSrc, serviceName, businessName, price, city, onClick }) => {
  return (
    <div className="panel" onClick={onClick}>
      <img src={imgSrc} alt={serviceName} />
      <div className="panel-details">
        <h3>{serviceName}</h3>
        <p>{businessName}</p>
        <p>Price: ${price}</p>
        <p>City: {city}</p>
      </div>
    </div>
  );
};

export default Panel;
