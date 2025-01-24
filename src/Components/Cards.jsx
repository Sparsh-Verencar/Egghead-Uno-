import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const StatsCard = ({ title, value, color }) => {
    return (
        <Card style={{ backgroundColor: color, margin: '10px' }}>
            <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="h6">{value}</Typography>
            </CardContent>
        </Card>
    );
};

export default StatsCard;