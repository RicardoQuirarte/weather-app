/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
            conditionImg.src = "/dist/assets/hot-icon.svg"
            document.body.style.backgroundImage = "url('/dist/assets/hot.jpg')";
        } else if (locationData.current.temp_c < 20) {
            conditionImg.src = "/dist/assets/cold-icon.svg"
            document.body.style.backgroundImage = "url('/dist/assets/cold.jpg')";
        } else {
            conditionImg.src = "/dist/assets/mid-icon.svg"
            document.body.style.backgroundImage = "url('/dist/assets/mid.jpg')";
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdIQUF3SCxVQUFVLElBQUksYUFBYTtBQUNuSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24nKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5jb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpO1xuY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmRpdGlvbicpO1xuY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XG5jb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJyk7XG5jb25zdCBmZWVsaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UtZGF0YScpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHktZGF0YScpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLWRhdGEnKTtcbmNvbnN0IGNvbmRpdGlvbkltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25kaXRpb24taWNvbicpO1xuY29uc3QgdG9nZ2xlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N3aXRjaCcpO1xuY29uc3QgY2Vsc2l1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZWxzaXVzJyk7XG5jb25zdCBmYWhyZW5oZWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhaHJlbmhlaXQnKTtcblxubGV0IHRvZ2dsZSA9IHRydWU7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvY2F0aW9uV2VhdGhlcih1c2VyVmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgICBkaXNwbGF5TG9hZGluZygpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTNmZGRlN2E5YjE1NzQxYmM5MDc2MzYxODIzMTEwNyZxPSR7dXNlclZhbHVlfWAsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgY29uc3QgbG9jYXRpb25EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25kaXRpb24udGV4dENvbnRlbnQgPSBsb2NhdGlvbkRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICAgICAgd2VhdGhlci50ZXh0Q29udGVudCA9IGxvY2F0aW9uRGF0YS5jdXJyZW50LnRlbXBfYyArICcgwrBDJztcbiAgICAgICAgY2l0eS50ZXh0Q29udGVudCA9IGxvY2F0aW9uRGF0YS5sb2NhdGlvbi5uYW1lO1xuICAgICAgICBmZWVsaW5nLnRleHRDb250ZW50ID0gbG9jYXRpb25EYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MgKyAnIMKwQyc7XG4gICAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gbG9jYXRpb25EYXRhLmN1cnJlbnQuaHVtaWRpdHkgKyAnICUnO1xuICAgICAgICB3aW5kLnRleHRDb250ZW50ID0gbG9jYXRpb25EYXRhLmN1cnJlbnQud2luZF9rcGggKyAnIGttL2gnO1xuICAgICAgICBpZihsb2NhdGlvbkRhdGEuY3VycmVudC50ZW1wX2MgPiAzMCkge1xuICAgICAgICAgICAgY29uZGl0aW9uSW1nLnNyYyA9IFwiL2Rpc3QvYXNzZXRzL2hvdC1pY29uLnN2Z1wiXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcvZGlzdC9hc3NldHMvaG90LmpwZycpXCI7XG4gICAgICAgIH0gZWxzZSBpZiAobG9jYXRpb25EYXRhLmN1cnJlbnQudGVtcF9jIDwgMjApIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbkltZy5zcmMgPSBcIi9kaXN0L2Fzc2V0cy9jb2xkLWljb24uc3ZnXCJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy9kaXN0L2Fzc2V0cy9jb2xkLmpwZycpXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25kaXRpb25JbWcuc3JjID0gXCIvZGlzdC9hc3NldHMvbWlkLWljb24uc3ZnXCJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy9kaXN0L2Fzc2V0cy9taWQuanBnJylcIjtcbiAgICAgICAgfVxuICAgICAgICB0b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYodG9nZ2xlKSB7XG4gICAgICAgICAgICAgICAgd2VhdGhlci50ZXh0Q29udGVudCA9IGxvY2F0aW9uRGF0YS5jdXJyZW50LnRlbXBfZiArICcgwrBGJztcbiAgICAgICAgICAgICAgICBmZWVsaW5nLnRleHRDb250ZW50ID0gbG9jYXRpb25EYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YgKyAnIMKwRic7XG4gICAgICAgICAgICAgICAgY2Vsc2l1cy5zdHlsZS5jb2xvciA9ICdibGFjayc7XG4gICAgICAgICAgICAgICAgZmFocmVuaGVpdC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgdG9nZ2xlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlYXRoZXIudGV4dENvbnRlbnQgPSBsb2NhdGlvbkRhdGEuY3VycmVudC50ZW1wX2MgKyAnIMKwQyc7XG4gICAgICAgICAgICAgICAgZmVlbGluZy50ZXh0Q29udGVudCA9IGxvY2F0aW9uRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jICsgJyDCsEMnO1xuICAgICAgICAgICAgICAgIGNlbHNpdXMuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgIGZhaHJlbmhlaXQuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgICAgIHRvZ2dsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBoaWRlTG9hZGluZygpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbkRhdGEpO1xuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICAgIGFsZXJ0KCdXZSBjYW5ub3QgZmluZCB0aGF0IGxvY2F0aW9uJyk7XG4gICAgICAgIGhpZGVMb2FkaW5nKCk7XG4gICAgfVxufVxuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxvY2F0aW9uV2VhdGhlcihpbnB1dC52YWx1ZSk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgbG9jYXRpb25XZWF0aGVyKCd0b2tpbycpXG59KTtcblxuZnVuY3Rpb24gZGlzcGxheUxvYWRpbmcoKSB7XG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbn1cblxuZnVuY3Rpb24gaGlkZUxvYWRpbmcoKSB7XG4gICAgbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXknKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=