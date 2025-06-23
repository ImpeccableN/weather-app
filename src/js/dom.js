import { getWeatherData } from "./weather";

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
    dayWeather.datetime;
  //chooses div for weather icon. function for implementing right still to add
  day1Container.firstElementChild.lastElementChild.textContent =
    dayWeather.icon;
    day1Container.lastElementChild.firstElementChild.textContent = dayWeather.tempmax + "°C";
    day1Container.lastElementChild.lastElementChild.textContent = dayWeather.conditions;
};

export const init = () => {
  searchBtn.addEventListener("click", sendRequest);
};
