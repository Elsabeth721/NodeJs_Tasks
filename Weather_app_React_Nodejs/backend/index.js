const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/weather', async (req, res) => {
    const apiKey = "2a94250d261c4dc3cc6903ac95ebba6e";
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({ error: "City is required" });
    }

    const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    try {
        const response = await axios.get(APIUrl);
        const weather = response.data;

        res.json({
            city: weather.name,
            temperature: weather.main.temp,
            description: weather.weather[0].description,
            feels_like: weather.main.feels_like,
            humidity: weather.main.humidity,
            wind_speed: weather.wind.speed,
        });
        console.log("Weather data:", response.data);
    } catch (error) {
        console.error(`Error fetching weather data: ${error.message}`);
        res.status(500).json({ error: "Error fetching weather data" });
    }
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
