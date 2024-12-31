const form = document.querySelector('form'); 
const weatherContainer = document.querySelector('#weather-container');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const cityInput = document.querySelector('#city');
    const city = cityInput.value;

    try {
        const response = await fetch(`/weather?city=${city}`);
        const weatherData = await response.json();

        if (weatherData.error) {
            weatherContainer.innerHTML = `<p>${weatherData.error}</p>`;
        } else {
            weatherContainer.innerHTML = `
                <h2>${weatherData.city}</h2>
                <p>Temperature: ${weatherData.temperature} °C</p>
                <p>Description: ${weatherData.description}</p>`;
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        weatherContainer.innerHTML = '<p>Error fetching weather data.</p>';
    }
});
