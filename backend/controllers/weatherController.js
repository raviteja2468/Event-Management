const axios = require('axios');

const getWeather = async (req, res) => {
    const { location } = req.params;
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
};

module.exports = { getWeather };
