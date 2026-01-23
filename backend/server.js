const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const API_KEY = "YOUR_OPENWEATHER_API_KEY";

app.get("/weather", async (req, res) => {
  const city = req.query.city;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    res.json({
      temp: response.data.main.temp,
      description: response.data.weather[0].description
    });
  } catch (error) {
    res.status(500).json({ error: "City not found" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
