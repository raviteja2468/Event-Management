const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const sessionRoutes = require('./routes/sessions');
const weatherRoutes = require("./routes/weather");
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Ensure this is included

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/weather', weatherRoutes);
app.use(cors());
// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
