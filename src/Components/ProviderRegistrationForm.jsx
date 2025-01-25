import React, { useState } from "react";
import "./ProviderRegistration.css";
import { useNavigate } from 'react-router-dom';

const ProviderRegistrationForm = () => {
  const [formData, setFormData] = useState({
    BusinessName: "",
    Email: "",
    password: "",
  });

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
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform any API call/interactions here
    console.log("Form submitted:", formData);
    
    // Redirect after a brief delay, so the success message can be seen briefly (optional)
    setTimeout(() => {
        navigate("/provider-dashboard", { replace: true });
    }, 1000); // Adjust the time as needed
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
            <button type="submit">Register</button>
        </form>
    </div>
  );
};

export default ProviderRegistrationForm;