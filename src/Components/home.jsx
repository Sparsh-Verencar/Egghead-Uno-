import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // To navigate programmatically
import './home.css';

const Home = () => {
  const navigate = useNavigate();  // Hook to navigate programmatically

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!sessionStorage.getItem('isLoggedIn')) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    navigate('/');
    alert('You have been logged out.');
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav id="nav">
        <h1>My Website</h1>
        <button id="logout" style={{ float: 'right' }} onClick={handleLogout}>Logout</button>
      </nav>

      {/* Main Container */}
      <div id="container">
        {/* Left Box */}
        <div id="left-box">
          <p>Left Box Content</p>
        </div>

        {/* Right Box */}
        <div id="right-box">
          <div id="searchBar">
            <div id="location">
              <input type="text" placeholder="location..." />
              <button>search</button>
            </div>
            <div id="service">
              <input type="text" placeholder="service..." />
              <button>search</button>
            </div>
            <button>Filter</button>
          </div>
          <div id="recommendations"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
