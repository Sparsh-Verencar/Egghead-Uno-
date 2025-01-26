import React from 'react';
import { AppBar, Toolbar, Typography, Button, TextField } from '@mui/material';

const BusinessHeader = ({ name, contact, imageUrl, onEdit, isEditing, setBusinessName, setContactInfo }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                {imageUrl && <img src={imageUrl} alt="Business Logo" style={{ marginRight: '10px', height: '40px' }} />}
                {isEditing ? (
                    <>
                        <TextField
                            label="Business Name"
                            value={name}
                            onChange={(e) => setBusinessName(e.target.value)}
                            size="small"
                            style={{ marginRight: '10px', flexBasis: '150px' }} // Adjust flex basis for width
                        />
                        <TextField
                            label="Contact Info"
                            value={contact}
                            onChange={(e) => setContactInfo(e.target.value)}
                            size="small"
                            style={{ marginRight: '10px', flexBasis: '200px' }} // Adjust flex basis for width
                        />
                    </>
                ) : (
                    <>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            {name}
                        </Typography>
                        <Typography variant="body1" style={{ marginRight: '10px' }}>
                            {contact}
                        </Typography>
                        <Button onClick={onEdit} color="inherit" size="small">Edit</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default BusinessHeader;