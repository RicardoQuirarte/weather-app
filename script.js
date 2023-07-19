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
        weather.textContent = locationData.current.temp_c + ' °C';
        city.textContent = locationData.location.name;
        feeling.textContent = locationData.current.feelslike_c + ' °C';
        humidity.textContent = locationData.current.humidity + ' %';
        wind.textContent = locationData.current.wind_kph + ' km/h';
        if(locationData.current.temp_c > 30) {
            conditionImg.src = '/assets/hot-icon.svg';
            document.body.style.backgroundImage = "url('/assets/hot.jpg')";
        } else if (locationData.current.temp_c < 20) {
            conditionImg.src = '/assets/cold-icon.jpg';
            document.body.style.backgroundImage = "url('/assets/cold.jpg')";
        } else {
            conditionImg.src = '/assets/mid-icon.jpg';
            document.body.style.backgroundImage = "url('/assets/mid.jpg')";
        }
        toggleBtn.addEventListener('change', () => {
            if(toggle) {
                weather.textContent = locationData.current.temp_f + ' °F';
                feeling.textContent = locationData.current.feelslike_f + ' °F';
                celsius.style.color = 'black';
                fahrenheit.style.color = 'white';
                toggle = false;
            } else {
                weather.textContent = locationData.current.temp_c + ' °C';
                feeling.textContent = locationData.current.feelslike_c + ' °C';
                celsius.style.color = 'white';
                fahrenheit.style.color = 'black';
                toggle = true;
            }
        });
        hideLoading();
        console.log(locationData);
    }
    catch {
        alert('We cannot find that location');
        hideLoading();
    }
}

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