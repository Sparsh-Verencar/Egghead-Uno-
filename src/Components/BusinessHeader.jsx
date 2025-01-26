import React from 'react';
import { Paper, Typography } from '@mui/material';

const BusinessHeader = ({ name, contact, imageUrl }) => {
    return (
        <Paper style={{ padding: '16px', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <img src={imageUrl} alt="Business" style={{ width: '100px', height: '100px', marginRight: '20px' }} />
            <div>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="body1">{contact}</Typography>
            </div>
        </Paper>
    );
};

export default BusinessHeader;