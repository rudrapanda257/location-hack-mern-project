const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const locationRoutes = require('./routes/location');
const logger = require('./middlewares/logger');
const ipLocationRoute = require('./routes/ipLocation');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(logger);

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api', locationRoutes);
// Use the route for IP location
app.use('/api', ipLocationRoute);


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
