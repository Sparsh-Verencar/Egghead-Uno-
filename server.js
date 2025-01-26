// index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/providerDB')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err));

// Define a Schema for the Provider
const providerSchema = new mongoose.Schema({
    BusinessName: String,
    Email: String,
    password: String,
    PhoneNumber: String,
    Address: String,
    City: String,
    State: String,
    ServicesDescription: String,
});

const Provider = mongoose.model('Provider', providerSchema);

// API endpoint to register a provider
app.post('/api/register', async (req, res) => {
    const provider = new Provider(req.body);

    try {
        await provider.save();
        res.status(201).json({ message: 'Provider registered successfully!' });
    } catch (error) {
        res.status(400).json({ error: 'Error registering provider!', details: error });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});