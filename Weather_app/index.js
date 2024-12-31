const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const apiKey = "2a94250d261c4dc3cc6903ac95ebba6e";

  const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  let weather;
  let error = null;
  try {
    const response = await axios.get(APIUrl);
    weather = response.data;
  } catch (err) {
    weather = null;
    error = "Error, Please try again";
  }
  
  res.json({ weather, error });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});