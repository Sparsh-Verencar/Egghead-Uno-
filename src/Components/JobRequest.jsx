import React from 'react';
import { Paper, Typography, Button, Box } from '@mui/material';

const JobRequest = ({ request, onAccept, onReject }) => {
    return (
        <Paper style={{ padding: '16px', margin: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <Typography variant="body1">
                    <strong>Job:</strong> {request.jobTitle}
                </Typography>
                <Typography variant="body1">
                    <strong>Client:</strong> {request.clientName}
                </Typography>
                <Typography variant="body1" color={request.status === "In Progress" ? "primary" : "text.secondary"}>
                    <strong>Status:</strong> {request.status}
                </Typography>
            </div>
            {request.status === "Pending" && (
                <Box>
                    <Button variant="outlined" size="small" color="primary" onClick={() => onAccept(request.id)}>
                        Accept
                    </Button>
                    <Button variant="outlined" size="small" color="secondary" onClick={() => onReject(request.id)} style={{ marginLeft: '5px' }}>
                        Reject
                    </Button>
                </Box>
            )}
        </Paper>
    );
};

export default JobRequest;