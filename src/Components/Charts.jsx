import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartComponent = ({ data }) => {
    return (
        <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
    );
};

export default ChartComponent;