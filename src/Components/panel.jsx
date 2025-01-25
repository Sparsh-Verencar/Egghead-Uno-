// src/Components/Panel.jsx
import React from 'react';

const Panel = ({ imgSrc, serviceName, businessName, price }) => {
  return (
    <div className="panel">
      <img src={imgSrc} alt={`${serviceName} image`} />
      <div className="serviceName">{serviceName}</div>
      <div className="businessName">{businessName}</div>
      <div className="price">${price}</div>
    </div>
  );
};

export default Panel;
