import React from 'react';
import { Container, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleProviderClick = () => {
        navigate('/provider-registration');
    };

    const handleUserClick = () => {
        navigate('/login');
    };

    return (
        <Container 
            sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh',  // Ensures full window height
            }}
        >
            <Box 
                sx={{ 
                    padding: '20px 35px 20px 20px', 
                    border: '1px solid #ccc', 
                    borderRadius: '8px', 
                    textAlign: 'center',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                }}
            >
                <Typography sx={{ color: 'white' }} variant="h5" gutterBottom>
                    Welcome! Please choose an option:
                </Typography>
                <Button variant="contained" color="primary" onClick={handleUserClick} sx={{ margin: '10px' }}>
                    User
                </Button>
                <Button variant="contained" color="secondary" onClick={handleProviderClick} sx={{ margin: '10px' }}>
                    Provider
                </Button>
            </Box>
        </Container>
    );
};

export default HomePage;
