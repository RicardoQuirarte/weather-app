const input = document.querySelector('#location');
const form = document.querySelector('form');
const loader = document.querySelector('.loading');
const condition = document.querySelector('.condition');
const city = document.querySelector('.city');
const weather = document.querySelector('.temperature');
const feeling = document.querySelector('.feels-like-data');
const humidity = document.querySelector('.humidity-data');
const wind = document.querySelector('.wind-data');
const conditionImg = document.querySelector('.condition-icon');
const toggleBtn = document.querySelector('#switch');
const celsius = document.querySelector('.celsius');
const fahrenheit = document.querySelector('.fahrenheit');

let toggle = true;

async function locationWeather(userValue) {
    try {
        displayLoading();
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=3fdde7a9b15741bc90763618231107&q=${userValue}`, {mode: 'cors'});
        const locationData = await response.json();
        condition.textContent = locationData.current.condition.text;
        weather.textContent = Math.round(locationData.current.temp_c) + ' °C';
        if(!toggle) {
            weather.textContent = Math.round(locationData.current.temp_f) + ' °F';
        }
        city.textContent = locationData.location.name;
        feeling.textContent = Math.round(locationData.current.feelslike_c) + ' °C';
        if(!toggle) {
            feeling.textContent = Math.round(locationData.current.feelslike_f) + ' °F';
        }
        humidity.textContent = locationData.current.humidity + ' %';
        wind.textContent = locationData.current.wind_kph + ' km/h';
        if(locationData.current.temp_c > 30) {
            conditionImg.src = './hot-icon.svg';
            document.body.style.backgroundImage = "url('./hot.jpg')";
        } else if (locationData.current.temp_c < 20) {
            conditionImg.src = './cold-icon.svg';
            document.body.style.backgroundImage = "url('./cold.jpg')";
        } else {
            conditionImg.src = './mid-icon.svg';
            document.body.style.backgroundImage = "url('./mid.jpg')";
        }
        hideLoading();
    }
    catch {
        alert('We cannot find that location');
        hideLoading();
    }
}

toggleBtn.addEventListener('change', () => {
    if(toggle) {
        weather.textContent = Math.round(parseInt(weather.textContent) * 1.8 + 32) + ' °F';
        feeling.textContent = Math.round(parseInt(feeling.textContent) * 1.8 + 32) + ' °F';
        celsius.style.color = 'black';
        fahrenheit.style.color = 'white';
        toggle = false;
    } else {
        weather.textContent = Math.round((parseInt(weather.textContent) - 32) / 1.8) + ' °C';
        feeling.textContent = Math.round((parseInt(feeling.textContent) - 32) / 1.8) + ' °C';
        celsius.style.color = 'white';
        fahrenheit.style.color = 'black';
        toggle = true;
    }
    console.log('hello');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    locationWeather(input.value);
});

window.addEventListener('load', () => {
    locationWeather('tokio')
});

function displayLoading() {
    loader.classList.add('display');
}

function hideLoading() {
    loader.classList.remove('display');
}