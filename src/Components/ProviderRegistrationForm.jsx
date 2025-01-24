import React, { useState } from "react";
import "./ProviderRegistration.css"; // Fixed import

const ProviderRegistrationForm = () => {
  const [formData, setFormData] = useState({
    BusinessName: "",
    Email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Add API call or backend connection logic here
  };

  return (
    <div className="form-container">
      <form className="glass-form" onSubmit={handleSubmit}>
        <h2>Provider Registration Form</h2>
        {submitted ? (
          <div className="success-message">Registration Successful!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Business Name</label>
              <input
                type="text"
                name="BusinessName"
                value={formData.BusinessName}
                onChange={handleChange}
                placeholder="Enter your Business name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="Email" // Fixed the name attribute
                value={formData.Email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
        )}
      </form>
    </div>
  );
};

export default ProviderRegistrationForm;
