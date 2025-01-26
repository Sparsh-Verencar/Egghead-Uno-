import React, { useState } from 'react';
import BusinessHeader from './BusinessHeader';
import { Container, Modal, Box, Typography, Button, List, ListItem, ListItemText, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
    const [businessName, setBusinessName] = useState("Racnerev Dev");
    const [contactInfo, setContactInfo] = useState("Contact: RacDev@gmail.com | Phone: (123) 456-7890");
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

    const [services, setServices] = useState([
        { id: 1, jobType: "Web Development", description: "Development of web applications", duration: "3 weeks", pricing: "$1000", paymentMethods: "PayPal, Credit Card" },
        // ... other services ...
    ]);

    const [open, setOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [editingOpen, setEditingOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [openServiceModal, setOpenServiceModal] = useState(false);
    const [selectedService, setSelectedService] = useState({
        jobType: '',
        description: '',
        duration: '',
        pricing: '',
        paymentMethods: ''
    });
    const [openServicesList, setOpenServicesList] = useState(false);

    const navigate = useNavigate();

    const handleOpen = (job) => {
        setSelectedJob(job);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedJob(null);
    };

    const handleEditOpen = () => {
        setEditingOpen(true);
        setIsEditing(true);
    };

    const handleEditClose = () => {
        setEditingOpen(false);
        setIsEditing(false);
    };

    const handleServiceOpen = () => {
        setOpenServiceModal(true);
    };

    const handleServiceClose = () => {
        setOpenServiceModal(false);
        setSelectedService({
            jobType: '',
            description: '',
            duration: '',
            pricing: '',
            paymentMethods: ''
        });
    };

    const handleServicesListOpen = () => {
        setOpenServicesList(true);
    };

    const handleServicesListClose = () => {
        setOpenServicesList(false);
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

    const saveService = () => {
        setServices([...services, { 
            id: services.length + 1, 
            jobType: selectedService.jobType, 
            description: selectedService.description, 
            duration: selectedService.duration, 
            pricing: selectedService.pricing, 
            paymentMethods: selectedService.paymentMethods 
        }]);
        handleServiceClose();
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <Container style={{ padding: '20px' }}>
            <BusinessHeader 
                name={businessName} 
                contact={contactInfo} 
                imageUrl={imageUrl} 
                onEdit={handleEditOpen} 
                isEditing={isEditing} 
                setBusinessName={setBusinessName} 
                setContactInfo={setContactInfo}
            />
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

            {/* Job Details Modal */}
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

            {/* Edit Business Details Modal */}
            <Modal
                open={editingOpen}
                onClose={handleEditClose}
                aria-labelledby="edit-modal-title"
                aria-describedby="edit-modal-description"
            >
                <Box sx={style}>
                    <Typography id="edit-modal-title" variant="h6" component="h2">
                        Edit Business Details
                    </Typography>
                    <TextField
                        label="Business Name"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        size="small"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Contact Info"
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        size="small"
                        fullWidth
                        margin="normal"
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                        <Button variant="contained" onClick={handleEditClose}>
                            Save
                        </Button>
                        <Button variant="outlined" onClick={handleEditClose}>
                            Cancel
                        </Button>
                    </div>
                </Box>
            </Modal>

            {/* Add Service Modal */}
            <Button variant="contained" onClick={handleServiceOpen} style={{ marginBottom: '20px' }}>
                Add Service
            </Button>
            <Modal
                open={openServiceModal}
                onClose={handleServiceClose}
                aria-labelledby="service-modal-title"
                aria-describedby="service-modal-description"
            >
                <Box sx={style}>
                    <Typography id="service-modal-title" variant="h6" component="h2">
                        Add Service
                    </Typography>
                    <TextField
                        label="Job Type"
                        value={selectedService.jobType}
                        onChange={(e) => setSelectedService({ ...selectedService, jobType: e.target.value })}
                        size="small"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Description"
                        value={selectedService.description}
                        onChange={(e) => setSelectedService({ ...selectedService, description: e.target.value })}
                        size="small"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                    />
                    <TextField
                        label="Duration"
                        value={selectedService.duration}
                        onChange={(e) => setSelectedService({ ...selectedService, duration: e.target.value })}
                        size="small"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Pricing (dollars)"
                        value={selectedService.pricing}
                        onChange={(e) => setSelectedService({ ...selectedService, pricing: e.target.value })}
                        size="small"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Payment Methods (separated by comma)"
                        value={selectedService.paymentMethods}
                        onChange={(e) => setSelectedService({ ...selectedService, paymentMethods: e.target.value })}
                        size="small"
                        fullWidth
                        margin="normal"
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                        <Button variant="contained" onClick={saveService}>Save</Button>
                        <Button variant="outlined" onClick={handleServiceClose}>Cancel</Button>
                    </div>
                </Box>
            </Modal>

            {/* Services List Modal */}
            <Button variant="contained" onClick={handleServicesListOpen} style={{ marginBottom: '20px' }}>
                View Services
            </Button>
            <Modal
                open={openServicesList}
                onClose={handleServicesListClose}
                aria-labelledby="services-list-modal-title"
                aria-describedby="services-list-modal-description"
            >
                <Box sx={style}>
                    <Typography id="services-list-modal-title" variant="h6" component="h2">
                        Services List
                    </Typography>
                    <List>
                        {services.map((service) => (
                            <ListItem key={service.id} style={{ backgroundColor: 'white', marginBottom: '10px' }} button>
                                <ListItemText
                                    primary={service.jobType}
                                    secondary={`Duration: ${service.duration} | Pricing: ${service.pricing} | Payment Methods: ${service.paymentMethods}`}
                                />
                                <Typography>
                                    Description: {service.description}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Modal>

            <Button variant="contained" onClick={handleLogout} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>Logout</Button>
        </Container>
    );
};

export default ProviderDashboard;