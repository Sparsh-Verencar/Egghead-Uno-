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
        // Save the email in local storage to retrieve it later for dashboard
        localStorage.setItem('email', formData.Email);

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
        {Object.entries(formData).map(([key, value]) => (
          <div className="form-group" key={key}>
            <label>{key.replace(/([A-Z])/g, ' $1')}</label>
            {key === "ServicesDescription" ? (
              <textarea
                name={key}
                value={value}
                onChange={handleChange}
                placeholder={`Describe the services you offer`}
                required
              />
            ) : (
              <input
                type={key === "password" ? "password" : key === "Email" ? "email" : "text"}
                name={key}
                value={value}
                onChange={handleChange}
                placeholder={`Enter your ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                required
              />
            )}
          </div>
        ))}
        {success && <div style={{ color: success.includes("Error") ? "red" : "green" }}>{success}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ProviderRegistrationForm;