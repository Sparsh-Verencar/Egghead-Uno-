import React, { useState } from 'react';
import BusinessHeader from './BusinessHeader';
import JobRequestList from './JobRequestList';
import { Container, Modal, Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

// Styles for the Modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ProviderDashboard = () => {
    const businessName = "Awesome Business LLC";
    const contactInfo = "Contact: info@awesomebusiness.com | Phone: (123) 456-7890";
    const imageUrl = "https://via.placeholder.com/100";

    const [jobRequests, setJobRequests] = useState([
        { id: 1, jobTitle: "Web Development", clientName: "John Doe", contact: "john@example.com", duration: "3 weeks", status: "Pending" },
        { id: 2, jobTitle: "Graphic Design", clientName: "Jane Smith", contact: "jane@example.com", duration: "2 weeks", status: "Pending" },
        { id: 3, jobTitle: "Project Management", clientName: "Alice Johnson", contact: "alice@example.com", duration: "1 month", status: "Pending" }
    ]);

    const [open, setOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    const handleOpen = (job) => {
        setSelectedJob(job);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedJob(null);
    };

    const acceptJobRequest = (id) => {
        setJobRequests(jobRequests.map(request =>
            request.id === id ? { ...request, status: "In Progress" } : request
        ));
    };

    const rejectJobRequest = (id) => {
        setJobRequests(jobRequests.filter(request => request.id !== id));
    };

    const completeJobRequest = (id) => {
        setJobRequests(jobRequests.map(request =>
            request.id === id ? { ...request, status: "Complete" } : request
        ));
    };
    
    return (
        <Container style={{ padding: '20px' }}>
            <BusinessHeader name={businessName} contact={contactInfo} imageUrl={imageUrl} />
            <h2>Job Requests</h2>
            <List>
                {jobRequests.map((request) => (
                    <ListItem 
                        key={request.id} 
                        style={{ backgroundColor: 'white', marginBottom: '10px' }} 
                        button 
                        onClick={() => handleOpen(request)}
                    >
                        <ListItemText 
                            primary={request.jobTitle} 
                            secondary={`Client: ${request.clientName} | Status: ${request.status}`} 
                        />
                    </ListItem>
                ))}
            </List>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {selectedJob && (
                        <>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Job Details
                            </Typography>
                            <Typography sx={{ mt: 2 }}>
                                <strong>Job Title:</strong> {selectedJob.jobTitle}
                            </Typography>
                            <Typography>
                                <strong>Client Name:</strong> {selectedJob.clientName}
                            </Typography>
                            <Typography>
                                <strong>Contact:</strong> {selectedJob.contact}
                            </Typography>
                            <Typography>
                                <strong>Duration:</strong> {selectedJob.duration}
                            </Typography>
                            <Typography>
                                <strong>Status:</strong>
                                <span style={{ color: selectedJob.status === 'Complete' ? 'green' : selectedJob.status === 'In Progress' ? 'blue' : 'red' }}>
                                    {selectedJob.status}
                                </span>
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                                {selectedJob.status === 'Complete' ? (
                                    <Button variant="contained" disabled>
                                        Complete
                                    </Button>
                                ) : selectedJob.status === 'In Progress' ? (
                                    <Button variant="contained" onClick={() => completeJobRequest(selectedJob.id)}>
                                        Mark as Complete
                                    </Button>
                                ) : (
                                    <>
                                        <Button variant="contained" color="primary" onClick={() => { acceptJobRequest(selectedJob.id); handleClose(); }}>
                                            Accept
                                        </Button>
                                        <Button variant="contained" color="secondary" onClick={() => { rejectJobRequest(selectedJob.id); handleClose(); }}>
                                            Reject
                                        </Button>
                                    </>
                                )}
                            </div>
                        </>
                    )}
                </Box>
            </Modal>
        </Container>
    );
};

export default ProviderDashboard;