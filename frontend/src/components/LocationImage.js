import React, { useEffect } from 'react';
import axios from 'axios';
import './LocationImage.css'; // Optional: your CSS for styling the image

const LocationImage = () => {
  useEffect(() => {
    // Fetch IP-based location from the backend proxy
    axios.get('http://localhost:5000/api/ip-location')
    .then(response => {
    const { loc } = response.data;
    const [latitude, longitude] = loc.split(',');

        // Send location data to the backend to save
        axios.post('http://localhost:5000/api/save-location', { latitude, longitude })
          .then(() => {
            console.log('Location saved successfully');
          })
          .catch((error) => {
            console.log('Error saving location:', error);
          });
      })
      .catch((error) => {
        console.log('Error fetching IP-based location:', error);
      });
  }, []);

  return (
    <div className="image-container">
      <img src="/path/to/your/image.jpg" alt="Background" className="background-image" />
      <h1 className="location-text">.</h1>
    </div>
  );
};

export default LocationImage;
