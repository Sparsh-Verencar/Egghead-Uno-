import React from 'react';
import StatsCard from './Card';
import ChartComponent from './Chart';
import { Grid } from '@mui/material';

const Dashboard = () => {
    // Example Data
    const data = [
        { name: 'Page A', uv: 4000, pv: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398 },
        { name: 'Page C', uv: 2000, pv: 9800 },
        { name: 'Page D', uv: 2780, pv: 3908 },
        { name: 'Page E', uv: 1890, pv: 4800 },
        { name: 'Page F', uv: 2390, pv: 3800 },
        { name: 'Page G', uv: 3490, pv: 4300 },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h1>Dashboard</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <StatsCard title="Users" value="1,200" color="#f0f8ff" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <StatsCard title="Sales" value="$50,000" color="#e6e6fa" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <StatsCard title="Revenue" value="$20,000" color="#fff0f5" />
                </Grid>
            </Grid>
            <h2>Sales Data</h2>
            <ChartComponent data={data} />
        </div>
    );
};

export default Dashboard;