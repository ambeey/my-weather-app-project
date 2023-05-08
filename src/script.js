 let now = new Date();
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
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


let weekday = document.querySelector("#date");
weekday.innerHTML = `${day}`;

let  fullTime= document.querySelector("#time");
fullTime.innerHTML = `${hours}:${minute}`;

function search(event) {
  event.preventDefault();
  let searchLocation = document.querySelector("#location");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchLocation.value}`;
  let apiKey = "99b8f9330a1bfba3a85e523fd3c2e528";
  let city = `${searchLocation.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function showTemp(response) {
    console.log(response);

    let temp = Math.round(response.data.main.temp);
    let tempElement = document.querySelector("#temperature");
    tempElement.innerHTML = `${temp}`;

    let conditions = response.data.weather[0].description;
    let conditionsElement = document.querySelector("#condition");
    conditionsElement.innerHTML = `${conditions}`;

    let precipitations = response.data.weather[0].description;
    let precipitationsElement = document.querySelector("#precepitation");
    precipitationsElement.innerHTML = `${precipitations}%`;

    let humidities = response.data.main.humidity;
    let humiditiesElement = document.querySelector("#humidity");
    humiditiesElement.innerHTML = `${humidities}%`;

    let speed = response.data.wind.speed;
    let speedElement = document.querySelector("#speed");
    speedElement.innerHTML = `${speed}Km/h`;
  }
  axios.get(apiUrl).then(showTemp);
}
let form = document.querySelector("form");
form.addEventListener("submit", search);
