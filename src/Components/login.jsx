import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';  // Import Link from react-router-dom
import { useNavigate } from 'react-router-dom';  // Use useNavigate hook for programmatic navigation
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Hardcoded credentials
    if (username === "a" && password === "1") {
      sessionStorage.setItem("isLoggedIn", "true");
      navigate('/home');
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form id="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>  {/* Updated with Link */}
    </div>
  );
};

export default Login;
