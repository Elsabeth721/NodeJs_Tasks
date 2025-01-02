import React from "react";
import axios from "axios";
import { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.get(
        `http://localhost:5000/weather?city=${city}`
      );
      setWeather(response.data);
    } catch (error) {
      setError("Error fetching weather data");
      setWeather(null);
    }
  };
  return (
    <div
      className="text-center"
      style={{
        backgroundImage: `url('/assets/bg.jpg')`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 className="mt-8 text-4xl font-bold">Weather App</h1>
      <form action="" onSubmit={fetchWeather} className="mt-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded"
        />
        <button
          type="submit"
          className="ml-3 p-2 bg-green-600 rounded-lg text-white"
        >
          Get Weather
        </button>
      </form>

      {error && <p className="mt-5 text-red-500 ">{error}</p>}

      {weather && (
        <div className="mt-5">
          <h1 className="text-xl font-bold">{weather.city}</h1>
          <h2>Temperature: {weather.temperature}°F</h2>
          <h2>Description: {weather.description}</h2>
          <h2>Feels Like: {weather.feels_like}°F</h2>
          <h2>Humidity: {weather.humidity}%</h2>
          <h2>Wind Speed: {weather.wind_speed} mph</h2>
        </div>
      )}
    </div>
  );
};

export default Weather;
