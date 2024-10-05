import React, { useEffect } from 'react';
import axios from 'axios';
import './LocationImage.css'; // You can create a CSS file for styling

const LocationImage = () => {
  useEffect(() => {
    // Automatically fetch location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Send location data to the backend
        axios.post('http://localhost:5000/api/save-location', { latitude, longitude })
          .then(response => {
            console.log('Location saved successfully');
          })
          .catch(error => {
            console.log('Error saving location:', error);
          });
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="image-container">
      <img src="https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background" className="background-image" />
      <div className="video-container">
        <video 
          width="100%" 
          height="auto" 
          controls 
          src="" 
          alt="Background Video"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <h1 className="location-text">Your Location has been recorded!</h1>
    </div>
  );
};

export default LocationImage;
