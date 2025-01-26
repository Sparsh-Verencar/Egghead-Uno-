import React, { useState } from "react";
import "./ProviderRegistration.css";
import { useNavigate } from 'react-router-dom';

const ProviderRegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    BusinessName: "",
    Email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error);
      } else {
        setSubmitted(true);
        setTimeout(() => {
          navigate('/provider-dashboard');
        }, 2000); // Optional delay for user feedback
      }
    } catch (err) {
      setError("Something went wrong!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form className="glass-form" onSubmit={handleSubmit}>
        <h2>Provider Registration Form</h2>
        {submitted ? (
          <div className="success-message">Registration Successful!</div>
        ) : (
          <>
            {error && <div className="error-message">{error}</div>}
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
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Register"}
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ProviderRegistrationForm;