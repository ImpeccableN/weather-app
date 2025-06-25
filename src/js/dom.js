import { getWeatherData } from "./weather";
import { format } from "date-fns";


let icons = {};

function importAll(r) {
  r.keys().forEach((key) => (icons[key] = r(key)));
}

const contentDiv = document.getElementById("content");
const searchBtn = document.getElementById("searchbtn");
const locationInput = document.getElementById("location");
const dateInput = document.getElementById("date");

const sendRequest = async function () {
  const weatherData = await getWeatherData(
    locationInput.ariaValueMax,
    dateInput.value
  );
  weatherDom(weatherData);
};

const weatherDom = (weatherData) => {
  const dayWeather = weatherData.days[0];
  const day1Container = document.getElementById("dayOne");
  //chooses div for date
  day1Container.firstElementChild.firstElementChild.textContent =
    formatDate(dayWeather.datetime);
  //chooses div for weather icon
  day1Container.firstElementChild.lastElementChild.src =
    icons[`./${dayWeather.icon}.png`];

  day1Container.lastElementChild.firstElementChild.textContent = "Max.: " +
    dayWeather.tempmax + "°C";
  day1Container.lastElementChild.lastElementChild.textContent =
    dayWeather.conditions;
};

export const init = () => {
  importAll(require.context("../icons", false, /\.png$/));
  searchBtn.addEventListener("click", sendRequest);
};


const formatDate = (date) => {
  return format(new Date(date), 'eee, dd.MM.');
}
