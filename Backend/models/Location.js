const mongoose = require('mongoose');
const moment = require('moment-timezone'); // Optional, for handling timezones

const locationSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  city: {
    type: String,  // Add city field
    required: false
  },
  country: {
    type: String,  // Add country field
    required: false
  },
  region: {
    type: String,  // Add region field (state or province)
    required: false
  },
  utcTimestamp: {
    type: Date,    // Store UTC timestamp
    default: Date.now
  },
  istTimestamp: {
    type: String,  // Store IST (Indian Standard Time)
    default: () => moment().tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss')  // Format IST time
  }
});

// Export model
const Location = mongoose.model('Location', locationSchema);
module.exports = Location;
