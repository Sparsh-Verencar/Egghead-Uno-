import { useNavigate } from 'react-router-dom';  // To navigate programmatically
import React, { useState } from 'react';
import './booking.css';

const BookingPage = () => {
    const navigate = useNavigate();
  const service = {
    name: "Haircut Service",
    description: "A professional haircut service provided by skilled barbers.",
    prices: { basic: 15, premium: 30 },
    ratings: 4.5,
    comments: [
      "Great service, highly recommend!",
      "Very professional, loved the haircut!",
      "Amazing experience, will come again."
    ],
    duration: "45 minutes",
    timings: "Mon-Sat: 10:00 AM - 6:00 PM",
    paymentMethods: ["Online", "Cash on Delivery"],
    images: [
      "https://via.placeholder.com/200x150.png?text=Haircut1",
      "https://via.placeholder.com/200x150.png?text=Haircut2",
      "https://via.placeholder.com/200x150.png?text=Haircut3"
    ]
  };

  const [selectedPrice, setSelectedPrice] = useState('basic');
  
  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  const handleBooking = () => {
    alert("Your booking has been placed!");
    navigate('/home');
  };

  return (
    <div className="booking-page">
      <h1>{service.name}</h1>
      <p>{service.description}</p>
      
      <div className="service-images">
        {service.images.map((image, index) => (
          <img key={index} src={image} alt={`Service ${index + 1}`} />
        ))}
      </div>

      <div className="service-details">
        <h2>Service Details</h2>
        <p><strong>Price:</strong> ${service.prices[selectedPrice]}</p>
        <p><strong>Duration:</strong> {service.duration}</p>
        <p><strong>Timings:</strong> {service.timings}</p>
        <p><strong>Payment Methods:</strong> {service.paymentMethods.join(", ")}</p>
      </div>

      <div className="service-rating">
        <h3>Ratings: {service.ratings} ★</h3>
        <ul>
          {service.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>

      <div className="price-selection">
        <h3>Select Price</h3>
        <label>
          <input
            type="radio"
            name="price"
            value="basic"
            checked={selectedPrice === 'basic'}
            onChange={handlePriceChange}
          />
          Basic (${service.prices.basic})
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="price"
            value="premium"
            checked={selectedPrice === 'premium'}
            onChange={handlePriceChange}
          />
          Premium (${service.prices.premium})
        </label>
      </div>

      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default BookingPage;
