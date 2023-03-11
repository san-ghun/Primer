// import { API_KEY_OPW } from "./key.js";

// const API_KEY = API_KEY_OPW;
const API_KEY = "8fca801914cc80dddf578ceaaed3e728";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 401) {
                const msg = data.message;
                alert(msg);
                console.log(msg);
            } else {
                const weather = document.querySelector("#weather span:first-child");
                const city = document.querySelector("#weather span:last-child");
                weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
                city.innerText = data.name;
            }
        });
}

function onGeoFailure(error) {
    alert("Error: " + JSON.stringify(error));
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailure);