import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./ProviderRegistration.css";

const ProviderRegistrationForm = () => {
  const [formData, setFormData] = useState({
    BusinessName: "",
    Email: "",
    password: "",
    PhoneNumber: "",
    Address: "",
    City: "",
    State: "",
    ServicesDescription: "",
  });

  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Registration successful!");

        // Redirect to provider dashboard after a brief delay
        setTimeout(() => {
          navigate("/provider-dashboard", { replace: true });
        }, 1000);
      } else {
        const errorData = await response.json();
        setSuccess(`Error: ${errorData.error}`);
      }
    } catch (error) {
      setSuccess(`Error: ${error.message}`);
    }
  };

  return (
    <div className="form-container">
      <form className="glass-form" onSubmit={handleSubmit}>
        <h2>Provider Registration Form</h2>
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
            name="Email"
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
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="PhoneNumber"
            value={formData.PhoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="City"
            value={formData.City}
            onChange={handleChange}
            placeholder="Enter your city"
            required
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="State"
            value={formData.State}
            onChange={handleChange}
            placeholder="Enter your state"
            required
          />
        </div>
        <div className="form-group">
          <label>Services Description</label>
          <textarea
            name="ServicesDescription"
            value={formData.ServicesDescription}
            onChange={handleChange}
            placeholder="Describe the services you offer"
            required
          />
        </div>
        {success && <div style={{ color: success.includes("Error") ? "red" : "green" }}>{success}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ProviderRegistrationForm;