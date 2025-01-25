import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ProviderRegistrationForm from './Components/ProviderRegistrationForm';
import ProviderDashboard from './Components/ProviderDashboard'; // Other components as needed

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/provider-registration" element={<ProviderRegistrationForm />} />
                <Route path="/provider-dashboard" element={<ProviderDashboard />} />
                {/* Include other routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;