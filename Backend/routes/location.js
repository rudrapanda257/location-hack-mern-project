const express = require('express');
const router = express.Router();
const Location = require('../models/Location');




// POST route to save location data
router.post('/save-location', async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const newLocation = new Location({ latitude, longitude });
    await newLocation.save();
    res.status(201).json({ message: 'Location saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving location' });
  }
});

module.exports = router;
