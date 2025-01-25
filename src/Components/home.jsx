import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // To navigate programmatically
import Panel from './panel';  // Import the Panel component
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
    // alert('You have been logged out.');
  };

  const preferences_redirect = () =>{
    navigate('/preferences')
  }

  // Sample panel data
  const panelsData = [
    {
      imgSrc: "https://via.placeholder.com/150",
      serviceName: "Hair Cutting",
      businessName: "John's Salon",
      price: "20.00",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      serviceName: "Massage",
      businessName: "Relax Spa",
      price: "50.00",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      serviceName: "Massage",
      businessName: "Relax Spa",
      price: "50.00",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      serviceName: "Massage",
      businessName: "Relax Spa",
      price: "50.00",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      serviceName: "Massage",
      businessName: "Relax Spa",
      price: "50.00",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      serviceName: "Massage",
      businessName: "Relax Spa",
      price: "50.00",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      serviceName: "Massage",
      businessName: "Relax Spa",
      price: "50.00",
    }
    // Add more data objects for more panels
  ];

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
            {panelsData.map((data, index) => (
              <Panel 
                key={index}
                imgSrc={data.imgSrc}
                serviceName={data.serviceName}
                businessName={data.businessName}
                price={data.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
