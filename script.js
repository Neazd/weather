

const apiKey = "YOUR API KEY";

async function getWeather() {
    const city = document.getElementById('city-input').value;
    if (city === "") {
        displayError("Please enter a city");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        
        const data = await response.json();
        updateWeather(data);
        clearError();
    } catch (error) {
        displayError(error.message);
    }
}

function updateWeather(data) {
    const weatherIconMap = {
        '01d': 'fa-sun',
        '01n': 'fa-moon',
        '02d': 'fa-cloud-sun',
        '02n': 'fa-cloud-moon',
        '03d': 'fa-cloud',
        '03n': 'fa-cloud',
        '04d': 'fa-cloud-meatball',
        '04n': 'fa-cloud-meatball',
        '09d': 'fa-cloud-showers-heavy',
        '09n': 'fa-cloud-showers-heavy',
        '10d': 'fa-cloud-sun-rain',
        '10n': 'fa-cloud-moon-rain',
        '11d': 'fa-poo-storm',
        '11n': 'fa-poo-storm',
        '13d': 'fa-snowflake',
        '13n': 'fa-snowflake',
        '50d': 'fa-smog',
        '50n': 'fa-smog'
    };

    document.getElementById('temperature').innerHTML = `${Math.round(data.main.temp)}<sup>°C</sup>`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = `${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `${data.wind.speed} Km/h`;

    const weatherIconCode = data.weather[0].icon;
    const weatherIconClass = weatherIconMap[weatherIconCode] || 'fa-cloud';
    document.getElementById('weather-icon').className = `fas ${weatherIconClass} weather-icon`;
}

function displayError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function clearError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
}

document.querySelector('.search-icon').addEventListener('click', getWeather);
document.getElementById('city-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        getWeather();
    }
});
