const apiKey = "YOUR_API_KEY"; 

function getWeather() {
    const city = document.getElementById("city").value;

    if (!city) {
        alert("Please select a city!");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},LK&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {

        if (data.cod != 200) {
            alert("City not found!");
            return;
        }

        const weatherDiv = document.getElementById("weather");
        weatherDiv.innerHTML = `
            <h2>${data.name}, Sri Lanka</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
        `;
    })
    .catch(error => {
        console.error(error);
        alert("Error fetching weather data!");
    });
}


