require('dotenv').config();
 
const express = require('express');
const axios = require('axios');
require('dotenv').config();
const path = require('path');  // Add this line

const app = express();
const PORT = process.env.PORT || 3000;
const WEATHERSTACK_API_KEY = process.env.WEATHERSTACK_API_KEY;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).send('Please provide a city name');
    }

    try {
        const response = await axios.get(`http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_KEY}&query=${city}`);
        const data = response.data;

        if (data.error) {
            return res.status(404).send(data.error.info);
        }

        res.json({
            location: data.location.name,
            temperature: data.current.temperature,
            weather_descriptions: data.current.weather_descriptions,
            humidity: data.current.humidity,
            wind_speed: data.current.wind_speed,
            observation_time: data.current.observation_time
        });
    } catch (error) {
        res.status(500).send('An error occurred while fetching weather data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

