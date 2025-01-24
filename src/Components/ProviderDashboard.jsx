import React, { useState } from 'react';
import BusinessHeader from './BusinessHeader';
import JobRequestList from './JobRequestList';
import { Container } from '@mui/material';

const ProviderDashboard = () => {
    // Example business details
    const businessName = "Awesome Business LLC";
    const contactInfo = "Contact: info@awesomebusiness.com | Phone: (123) 456-7890";
    const imageUrl = "https://via.placeholder.com/100"; // Use your own business image URL

    // Example job requests with a status property
    const [jobRequests, setJobRequests] = useState([
        { id: 1, jobTitle: "Web Development", clientName: "John Doe", status: "Pending" },
        { id: 2, jobTitle: "Graphic Design", clientName: "Jane Smith", status: "Pending" },
        { id: 3, jobTitle: "Project Management", clientName: "Alice Johnson", status: "Pending" }
    ]);

    const acceptJobRequest = (id) => {
        // Update the status of the accepted job request
        setJobRequests(jobRequests.map(request =>
            request.id === id ? { ...request, status: "In Progress" } : request
        ));
    };

    const rejectJobRequest = (id) => {
        // Logic to reject job request (e.g., update state, call an API, etc.)
        console.log("Rejected job request with ID:", id);
        setJobRequests(jobRequests.filter(request => request.id !== id)); // Example: Remove on reject
    };

    return (
        <Container style={{ padding: '20px' }}>
            <BusinessHeader name={businessName} contact={contactInfo} imageUrl={imageUrl} />
            <h2>Job Requests</h2>
            <JobRequestList requests={jobRequests} onAccept={acceptJobRequest} onReject={rejectJobRequest} />
        </Container>
    );
};

export default ProviderDashboard;