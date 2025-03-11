import { internationalCities } from "./internationalWeather";
import { loadInternationalCities } from "./internationalWeather";
export async function displayWeatherCards(display) {
  loadInternationalCities();
  setTimeout(logDta, 4000);
  function logDta() {
    internationalCities.forEach((city, index) => {
      const citiesContainer = document.createElement("div");
      display.appendChild(citiesContainer);
      const heading = document.createElement("h3");
      heading.classList.add("city-heading");
      heading.textContent = `Weather forcast for ${city.name}`;
      citiesContainer.appendChild(heading);
      citiesContainer.classList.add("city-card");

      const weatherDetails = document.createElement("div");
      weatherDetails.classList.add("weather-details");
      citiesContainer.appendChild(weatherDetails);

      const todayWeather = document.createElement("div");
      weatherDetails.appendChild(todayWeather);
      todayWeather.classList.add("today-weather");

      const temperature = document.createElement("p");
      temperature.textContent = "Temp: " + city.days[0].temp;
      todayWeather.append(temperature);

      const image = document.createElement("img");
      image.src = city.getTempImage();
      todayWeather.appendChild(image);

      const description = document.createElement("p");
      description.classList.add("description");
      todayWeather.appendChild(description);
      description.textContent = city.description;

      const weekDaysWeather = document.createElement("div");
      weekDaysWeather.classList.add("week-days-weather");
      weatherDetails.appendChild(weekDaysWeather);
      city.days.forEach((day) => {
        const dayContainer = document.createElement("div");
        dayContainer.classList.add("day-container");
        weekDaysWeather.appendChild(dayContainer);
        const dayName = document.createElement("h3");
        dayName.classList.add("day");
        dayContainer.appendChild(dayName);
        const dayss = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const date = new Date(day.datetime);
        dayName.textContent = dayss[date.getDay()];

        // const generalImage = document.createElement("img");
        // generalImage.src = city.getGeneralImage();
        // dayName.appendChild(generalImage);

        const dayTem = document.createElement("p");
        dayTem.textContent = "temp: " + day.temp;
        dayContainer.appendChild(dayTem);

        const dayHumididty = document.createElement("p");
        dayHumididty.textContent = "humidity: " + day.humidity;
        dayContainer.appendChild(dayHumididty);

        const dayDescription = document.createElement("p");
        dayDescription.textContent = day.description;
        dayContainer.appendChild(dayDescription);
      });
    });
  }
}
