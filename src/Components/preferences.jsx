import React, { useState } from 'react';
import './preferences.css';
import { useNavigate } from 'react-router-dom';  // To navigate programmatically

const ServicePreferences = () => {
    const navigate = useNavigate();  // Hook to navigate programmatically
    const [preferences, setPreferences] = useState({
        serviceType: "",
        location: "",
        priceRange: [0, 5000],
        minRating: 0,
        date: "",
        time: "",
        paymentMethod: "",
        recurring: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPreferences({ ...preferences, [name]: value });
    };

    const handlePriceChange = (e) => {
        const value = Number(e.target.value);
        const name = e.target.name;
        setPreferences({
            ...preferences,
            priceRange: name === "minPrice" ? [value, preferences.priceRange[1]] : [preferences.priceRange[0], value],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(preferences);
        alert("Preferences saved!");

    };
    const home_redirect = () => {

        navigate('/home');
    };

    return (
        <div className="preference-form">
            <h2>Set Your Service Preferences</h2>
            <form onSubmit={handleSubmit}>
                {/* Service Type */}
                <label>Service Type:</label>
                <select name="serviceType" value={preferences.serviceType} onChange={handleInputChange}>
                    <option value="">Select Service</option>
                    <option value="haircut">Haircut</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrical">Electrical Work</option>
                    <option value="mechanical">Mechanical Repairs</option>
                </select>

                {/* Location */}
                <label>Location:</label>
                <input
                    type="text"
                    name="location"
                    value={preferences.location}
                    placeholder="Enter city or PIN code"
                    onChange={handleInputChange}
                />

                {/* Price Range */}
                <label>Price Range (₹):</label>
                <div className="price-range">
                    <input
                        type="number"
                        name="minPrice"
                        value={preferences.priceRange[0]}
                        min="0"
                        onChange={handlePriceChange}
                    />
                    <span>to</span>
                    <input
                        type="number"
                        name="maxPrice"
                        value={preferences.priceRange[1]}
                        min="0"
                        onChange={handlePriceChange}
                    />
                </div>

                {/* Minimum Rating */}
                <label>Minimum Rating:</label>
                <input
                    type="range"
                    name="minRating"
                    min="0"
                    max="5"
                    step="0.5"
                    value={preferences.minRating}
                    onChange={handleInputChange}
                />
                <span>{preferences.minRating} Stars</span>

                {/* Date and Time */}
                <label>Preferred Date:</label>
                <input type="date" name="date" value={preferences.date} onChange={handleInputChange} />

                <label>Preferred Time:</label>
                <input type="time" name="time" value={preferences.time} onChange={handleInputChange} />

                {/* Payment Method */}
                <label>Payment Method:</label>
                <select name="paymentMethod" value={preferences.paymentMethod} onChange={handleInputChange}>
                    <option value="">Select Payment Method</option>
                    <option value="online">Online</option>
                    <option value="cod">Cash on Delivery</option>
                </select>

                {/* Recurring Service */}
                <label>
                    <input
                        type="checkbox"
                        name="recurring"
                        checked={preferences.recurring}
                        onChange={(e) => setPreferences({ ...preferences, recurring: e.target.checked })}
                    />
                    Repeat Service Weekly
                </label>

                {/* Submit Button */}
                <button type="submit" onClick={home_redirect}>Save Preferences</button>
            </form>
        </div>
    );
};

export default ServicePreferences;
