let now = new Date();
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let dates = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];

let h2 = document.querySelector("h2");
h2.innerHTML = `${day}`;

let h5 = document.querySelector("h5#full-date");
h5.innerHTML = `${month} ${dates}`;
let h6 = document.querySelector("h6#time");
h6.innerHTML = `${hours}:${minute}`;

function search(event) {
  event.preventDefault();
  let searchLocation = document.querySelector("#location");
  let h4 = document.querySelector("h4");
  h4.innerHTML = `${searchLocation.value}`;
  let apiKey = "99b8f9330a1bfba3a85e523fd3c2e528";
  let city = `${searchLocation.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function showTemp(response) {
    console.log(response);

    let temp = Math.round(response.data.main.temp);
    let tempElement = document.querySelector("#temperature");
    tempElement.innerHTML = `${temp}°C`;

    let conditions = response.data.weather[0].description;
    let conditionsElement = document.querySelector("#condition");
    conditionsElement.innerHTML = `${conditions}`;

    let feels = response.data.main.feels_like;
    let feelsElement = document.querySelector("#feels-like");
    feelsElement.innerHTML = `${feels}°C`;

    let humidities = response.data.main.humidity;
    let humiditiesElement = document.querySelector("#humidity");
    humiditiesElement.innerHTML = `${humidities}%`;

    let speed = response.data.wind.speed;
    let speedElement = document.querySelector("#wind-speed");
    speedElement.innerHTML = `${speed}Km/h`;
  }
  axios.get(apiUrl).then(showTemp);
}
let form = document.querySelector("form");
form.addEventListener("submit", search);

function myPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "894a2e7aa7f46eeca5d8778f6faa5a5b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  function showTemperature(response) {
    console.log(response);

    let myLocation = response.data.name;
    let h4 = document.querySelector("h4");
    h4.innerHTML = `${myLocation}`;

    let temp = Math.round(response.data.main.temp);
    let tempElement = document.querySelector("#temperature");
    tempElement.innerHTML = `${temp}°C`;

    let conditions = response.data.weather[0].description;
    let conditionsElement = document.querySelector("#condition");
    conditionsElement.innerHTML = `${conditions}`;

    let feels = response.data.main.feels_like;
    let feelsElement = document.querySelector("#feels-like");
    feelsElement.innerHTML = `${feels}°C`;

    let humidities = response.data.main.humidity;
    let humiditiesElement = document.querySelector("#humidity");
    humiditiesElement.innerHTML = `${humidities}%`;

    let speed = response.data.wind.speed;
    let speedElement = document.querySelector("#wind-speed");
    speedElement.innerHTML = `${speed}Km/h`;
  }
  axios.get(apiUrl).then(showTemperature);
}
function getPosition() {
  navigator.geolocation.getCurrentPosition(myPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", getPosition);
