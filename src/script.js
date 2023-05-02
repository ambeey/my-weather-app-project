let now = new Date();
let minutes = now.getMinutes();
let hours = now.getHours();
let dates = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
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
  "Dec",
];
let month = months[now.getMonth()];

let h2 = document.querySelector("h2");
h2.innerHTML = `${day}`;

let h5 = document.querySelector("h5#full-date");
h5.innerHTML = `${month} ${dates}`;
let h6 = document.querySelector("h6#time");
h6.innerHTML = `${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchLocation = document.querySelector("#location");
  let h4 = document.querySelector("h4");
  h4.innerHTML = `${searchLocation.value}`;
}
let form = document.querySelector("form");
form.addEventListener("submit", search);

function celsius(event) {
  event.preventDefault();
  let h6 = document.querySelector("h6#temperature");
  h6.innerHTML = `${(26 * 9) / 5 + 32}°F`;
}
let link = document.querySelector("a");
link.addEventListener("click", celsius);
