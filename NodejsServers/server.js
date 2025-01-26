import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/providerRegistration")
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

const providerSchema = new mongoose.Schema({
  BusinessName: String,
  Email: String,
  password: String,
});

const Provider = mongoose.model("Provider", providerSchema);

// Route to handle registration
app.post("/register", async (req, res) => {
  const { BusinessName, Email, password } = req.body;

  const newProvider = new Provider({ BusinessName, Email, password });
  try {
    await newProvider.save();
    res.status(200).json({ message: "Registration Successful!" });
  } catch (error) {
    console.error(error); // Log any errors
    res.status(400).json({ error: "Registration Failed!" });
  }
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});