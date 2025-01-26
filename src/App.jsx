import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/login"; // Import the Login component
import Signup from "./Components/signup"; // Import the Signup component
import Home from "./Components/home"; // Import the Home component
import Preferences from "./Components/preferences";
import Booking from "./Components/booking";
import HomePage from './Components/HomePage';
import ProviderRegistrationForm from './Components/ProviderRegistrationForm';
import ProviderDashboard from './Components/ProviderDashboard'; // Other components as needed
import "./Components/login.css"; // Your CSS file for styling

const App = () => {
  return (
    <Router>
      {/* <div className="App"> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/provider-registration" element={<ProviderRegistrationForm />} />
          <Route path="/provider-dashboard" element={<ProviderDashboard />} />  
        </Routes>
    </Router>
    );
}


 

export default App;
