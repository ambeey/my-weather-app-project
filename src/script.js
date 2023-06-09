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

    metricTemp = response.data.main.temp;

    let temp = Math.round(metricTemp);
    let tempElement = document.querySelector("#temperature");
    tempElement.innerHTML = `${temp}`;

    let conditions = response.data.weather[0].description;
    let conditionsElement = document.querySelector("#condition");
    conditionsElement.innerHTML = `${conditions}`;


    let humidities = response.data.main.humidity;
    let humiditiesElement = document.querySelector("#humidity");
    humiditiesElement.innerHTML = `${humidities}%`;

    let speed = response.data.wind.speed;
    let speedElement = document.querySelector("#wind-speed");
    speedElement.innerHTML = `${speed}km/h`;

    
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute
    ("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    
    iconElement.setAttribute("alt", response.data.weather[0],description);
 
  }
  
  axios.get(apiUrl).then(showTemp);
}



function displayImperialTemp(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#temperature");
  let imperialTemp = (metricTemp * 9) /5 + 32;
  tempElement.innerHTML = Math.round(imperialTemp);
}
let metricTemp = null;

function displayMectricTemp(event){
  event.preventDefault();
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(metricTemp);
}

let form = document.querySelector("form");
form.addEventListener("submit", search);

let imperialLink = document.querySelector("#imperial");
imperialLink.addEventListener("click",displayImperialTemp);

let metricLink = document.querySelector("#metric");
metricLink.addEventListener("click",displayMectricTemp);