export async function getWeatherData(location, date) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?unitGroup=metric&key=QY84MU6N7EPWZ63UHQDW9Y788`);
        const weatherData = await response.json();
        console.log(weatherData.days[0]);
        return weatherData

    } catch (error) {
        console.log(error);
    }
}