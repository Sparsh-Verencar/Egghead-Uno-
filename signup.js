import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // If you're accessing this from a different origin

const app = express();
app.use(express.json());
app.use(cors());  // Enable cross-origin resource sharing if necessary

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Customer')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// User Schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },  // Storing plain text for testing purposes; ideally, hash passwords.
});

const Usermodel = mongoose.model('User', UserSchema);

// User Registration Route
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await Usermodel.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    // Create a new user
    const user = new Usermodel({ username, password }); // Store the password directly for now (not recommended for production)
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await Usermodel.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare provided password with stored password
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // If login is successful
    res.status(200).json({ message: 'Login successful.' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start your Express app
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});