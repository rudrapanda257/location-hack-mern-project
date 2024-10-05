const express = require('express');
const router = express.Router();
const axios = require('axios');

// GET route to fetch IP-based location data
router.get('/ip-location', async (req, res) => {
  try {
    const response = await axios.get('https://ipinfo.io/json?token=b79c4c4596dc88');
    res.status(200).json(response.data); // Send back the data received from ipinfo.io
  } catch (error) {
    console.error('Error fetching IP-based location:', error);
    res.status(500).json({ message: 'Error fetching IP-based location' });
  }
});

module.exports = router;
