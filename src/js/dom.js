import { getWeatherData } from "./weather";

const contentDiv = document.getElementById("content");
const searchBtn = document.getElementById("searchbtn");
const locationInput = document.getElementById("location");
const dateInput = document.getElementById("date");

const sendRequest = function () {
    const weatherData = getWeatherData(locationInput.ariaValueMax, dateInput.value)
};

const weatherDom = (weatherData) => {
    const dayWeather = weatherData.days[0];
    const day1Container = getElementById("day1");
    day1Container.firstElementChild.firstElementChild.textContent = dayWeather.datetime;
};
