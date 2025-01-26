import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // To navigate programmatically
import Panel from './panel';  // Import the Panel component
import './home.css';
import servicesData from './serviceProviders';
import { useLocation } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();  // Hook to navigate programmatically
  const currentLocation = useLocation();
  const { location: city, priceRange = [0, 0] } = currentLocation.state || {};

  useEffect(() => {
      // Redirect to login if not authenticated
      if (!sessionStorage.getItem('isLoggedIn')) {
          navigate('/login');
      }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    navigate('/');
    // alert('You have been logged out.');
  };

  const preferences_redirect = () => {
      navigate('/preferences');
  };

  const handlePanelClick = () => {
      // console.log('Panel clicked:', serviceName);
      // You can use the navigate() function to redirect to a specific service details page if needed
      navigate(`/booking`);
  };

  // Sample panel data
  const panelsData = servicesData;

  // Preferences: Exclude timings
  const preferences = {
      city: { value: city, weight: 5 },
      priceRange: { min: priceRange[0], max: priceRange[1], weight: 2 }, // Price range preference
  };

  // Function to calculate relevance score for each data point
  function calculateRelevanceScore(dataPoint, preferences) {
      let score = 0;

      // Check city match
      if (dataPoint.city === preferences.city.value) {
          score += preferences.city.weight;
      }

      // Check if price falls within the preferred range
      const price = parseFloat(dataPoint.price);
      if (price >= preferences.priceRange.min && price <= preferences.priceRange.max) {
          score += preferences.priceRange.weight;
      }

      return score;
  }

  // Sort data points based on relevance
  const sortedData = panelsData
      .map((panel) => ({
          ...panel,
          relevanceScore: calculateRelevanceScore(panel, preferences),
      }))
      .sort((a, b) => b.relevanceScore - a.relevanceScore);
// console.log(sortedData);


  return (
    <div className='home-page'>
      {/* Navigation Bar */}
      <nav id="nav">
        <h1>My Website</h1>
        <button id="logout" onClick={handleLogout}>Logout</button>
      </nav>

      {/* Main Container */}
      <div id="container">
        {/* Left Box */}
        <div id="left-box">
          <p>Left Box Content</p>
          <button id='preferences' onClick={preferences_redirect} > set preferences</button>
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

          {/* Recommendations Section */}
          <div id="recommendations">
            {/* Render Panel components dynamically */}
            {/* loadPanels(); */}
            {sortedData.map((data, index) => (
              <Panel 
                key={index}
                imgSrc={data.imgSrc}
                serviceName={data.serviceName}
                businessName={data.businessName}
                price={data.price}
                city={data.city}
                onClick={() => handlePanelClick(data.serviceName)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export {Home};
