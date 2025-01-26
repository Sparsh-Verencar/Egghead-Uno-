import React from 'react';
import { Button, List, ListItem, ListItemText } from '@mui/material';

const JobRequestList = ({ requests, onAccept, onReject, onClickJob }) => {
    return (
        <List>
            {requests.map((request) => (
                <ListItem key={request.id} secondaryAction={<Button onClick={() => onClickJob(request)}>View Details</Button>}>
                    <ListItemText 
                        primary={request.jobTitle} 
                        secondary={`Client: ${request.clientName} | Status: ${request.status}`} 
                    />
                    {request.status === 'Pending' && (
                        <>
                            <Button variant="contained" color="primary" onClick={() => onAccept(request.id)}>
                                Accept
                            </Button>
                            <Button variant="contained" color="secondary" sx={{ ml: 1 }} onClick={() => onReject(request.id)}>
                                Reject
                            </Button>
                        </>
                    )}
                </ListItem>
            ))}
        </List>
    );
};

export default JobRequestList;