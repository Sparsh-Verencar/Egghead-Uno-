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
    Email: { type: String, unique: true, required: true },
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

// API endpoint to get provider info based on email
app.post('/api/business-info', async (req, res) => {
    const { Email } = req.body;

    try {
        if (!Email) {
            return res.status(400).json({ error: 'Email is required!' });
        }

        const provider = await Provider.findOne({ Email });
        if (provider) {
            res.status(200).json(provider);
        } else {
            res.status(404).json({ error: 'Provider not found!' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching provider info!', details: error });
    }
});

// API endpoint to get the latest provider's BusinessName, email, and phone number
app.get('/api/latest-email', async (req, res) => {
    try {
        // Fetch the latest provider based on the most recent entry in the database
        const latestProvider = await Provider.findOne().sort({ _id: -1 });  // Sort by _id in descending order to get the latest entry
        if (latestProvider) {
            const { BusinessName, Email, PhoneNumber } = latestProvider; // Destructure BusinessName, Email, and PhoneNumber
            res.status(200).json({ businessName: BusinessName, email: Email, phoneNumber: PhoneNumber });
        } else {
            res.status(404).json({ error: 'No provider found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching latest provider data', details: error });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
