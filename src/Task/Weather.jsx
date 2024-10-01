import React, { useState } from 'react';
import axios from 'axios';

function Weather() {
  const [city, setCity] = useState(''); // For storing user input
  const [weatherData, setWeatherData] = useState(null); // For storing fetched weather data
  const [error, setError] = useState(null); // For handling errors

  const API_KEY = '2085d4991bda44352c100bcf785b0c71'; // Replace with your OpenWeatherMap API key

  // Function to fetch weather data
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError('City not found. Please try again.');
      setWeatherData(null); // Clear previous weather data
    }
  };

  // Handle user input
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  // Handle form submission
  const handleSearchClick = () => {
    if (city !== '') {
      fetchWeather();
    } else {
      setError('Please enter a city name.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Check Weather</h2>
      <div>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
          style={{ padding: '10px', width: '200px' }}
        />
        <button
          onClick={handleSearchClick}
          style={{ padding: '10px', marginLeft: '10px' }}
        >
          Search
        </button>
      </div>

      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}

      {weatherData && (
        <div style={{ marginTop: '30px' }}>
          <h3>{weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
