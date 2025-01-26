import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';  // Import Link from react-router-dom

import './signup.css';

const SignUp = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Inform the user about the limitation
    alert("This is a demo. You can't sign up in this implementation.");
  };

  return (
    <div className="auth-container">
      <h1>Sign Up</h1>
      <form id="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="new-username"
          placeholder="Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          required
        />
        <input
          type="password"
          id="new-password"
          placeholder="Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/">Log in</Link></p>
    </div>
  );
};

export default SignUp;
