import React, { useState, useEffect } from 'react';
import BusinessHeader from './BusinessHeader';
import { Container, Modal, Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
    const [businessName, setBusinessName] = useState('');  // State to store the business name
    const [contactInfo, setContactInfo] = useState('');  // State to store the contact info
    const imageUrl = "https://images-platform.99static.com/Z57az437UZ4_vTbrU_Hn7xELyGc=/500x500/top/smart/99designs-contests-attachments/58/58102/attachment_58102325";

    const [jobRequests, setJobRequests] = useState([
        { id: 1, jobTitle: "Web Development", clientName: "John Doe", contact: "john@example.com", duration: "3 weeks", status: "Pending" },
        { id: 2, jobTitle: "Graphic Design", clientName: "Jane Smith", contact: "jane@example.com", duration: "2 weeks", status: "Pending" },
        { id: 3, jobTitle: "Project Management", clientName: "Alice Johnson", contact: "alice@example.com", duration: "1 month", status: "Pending" },
        { id: 4, jobTitle: "SEO Optimization", clientName: "Mark Brown", contact: "mark@example.com", duration: "1 month", status: "Pending" },
        { id: 5, jobTitle: "Content Writing", clientName: "Sarah Wilson", contact: "sarah@example.com", duration: "2 weeks", status: "Pending" },
        { id: 6, jobTitle: "Mobile App Development", clientName: "Tom Clark", contact: "tom@example.com", duration: "4 weeks", status: "Pending" },
        { id: 7, jobTitle: "Digital Marketing Strategy", clientName: "Emily Stone", contact: "emily@example.com", duration: "3 weeks", status: "Pending" },
        { id: 8, jobTitle: "UI/UX Design", clientName: "Mike Green", contact: "mike@example.com", duration: "2 weeks", status: "Pending" },
        { id: 9, jobTitle: "Database Management", clientName: "Rachel Adams", contact: "rachel@example.com", duration: "1 month", status: "Pending" },
        { id: 10, jobTitle: "Network Architecture", clientName: "David King", contact: "david@example.com", duration: "3 weeks", status: "Pending" }
    ]);

    const [open, setOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    const navigate = useNavigate();

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

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    // Fetch the latest email, phone number, and business name when the component mounts
    useEffect(() => {
        const fetchContactInfo = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/latest-email');
                const data = await response.json();
                if (data.businessName && data.email && data.phoneNumber) {
                    // Set business name, email, and phone number in state
                    setBusinessName(data.businessName);
                    setContactInfo(`${data.email} | ${data.phoneNumber}`);
                }
            } catch (error) {
                console.log('Error fetching contact info:', error);
            }
        };
        fetchContactInfo();
    }, []);

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

            <Button variant="contained" onClick={handleLogout} style={{ position:'fixed', bottom:'20px', right:'20px' }}>Logout</Button>

        </Container>
    );
};

export default ProviderDashboard;
