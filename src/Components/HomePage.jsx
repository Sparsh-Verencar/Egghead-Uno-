import React from 'react';
import { Container, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleProviderClick = () => {
        navigate('/provider-registration');
    };

    const handleUserClick = () => {
        // You can add functionality for the User button here
        // For now, let's just log to the console
        console.log('User button clicked');
    };

    return (
        <Container >
            <Box 
                style={{ 
                    padding: '20px', 
                    paddingRight:'35px',
                    border: '1px solid #ccc', 
                    borderRadius: '8px', 
                    textAlign: 'center',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography color="white" variant="h5" gutterBottom>
                    Welcome! Please choose an option:
                </Typography>
                <Button variant="contained" color="primary" onClick={handleUserClick} style={{ margin: '10px' }}>
                    User
                </Button>
                <Button variant="contained" color="secondary" onClick={handleProviderClick} style={{ margin: '10px' }}>
                    Provider
                </Button>
            </Box>
        </Container>
    );
};

export default HomePage;