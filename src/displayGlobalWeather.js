import worldmap from "./images/worldmap.jpg";
import { getGlobalCities } from "./globalWeather";
import { cityList } from "./storeCities";

export async function displayGlobalWeather(display) {
  const globalWeatherContainer = document.createElement("div");
  globalWeatherContainer.classList.add("global-weather-container");
  display.appendChild(globalWeatherContainer);

  const heading = document.createElement("h2");
  heading.textContent = "Global Weather";
  globalWeatherContainer.appendChild(heading);
  heading.classList.add("global-weather-heading");

  const wordMapContainer = document.createElement("div");
  wordMapContainer.classList.add("world-map-container");
  globalWeatherContainer.appendChild(wordMapContainer);

  const worldMap = document.createElement("img");
  worldMap.src = worldmap;
  worldMap.alt = "World Map";
  worldMap.classList.add("world-map");
  wordMapContainer.appendChild(worldMap);

  const cityContainer = document.createElement("div");
  cityContainer.classList.add("city-container");
  globalWeatherContainer.appendChild(cityContainer);

  async function loadGlobalCities() {
    await getGlobalCities();
    console.log(cityList); // This should now log the populated cityList

    cityList.forEach((city) => {
      const cityCard = document.createElement("div");
      cityCard.classList.add("city-card");
      cityContainer.appendChild(cityCard);

      const cityName = document.createElement("h3");
      cityName.textContent = city.name;
      cityCard.appendChild(cityName);
      cityName.classList.add("city-name");

      const cityTemperature = document.createElement("p");
      cityTemperature.textContent = city.temperature;
      cityCard.appendChild(cityTemperature);

      const cityHumidity = document.createElement("p");
      cityHumidity.textContent = city.humidity;
      cityCard.appendChild(cityHumidity);
    });
  }

  await loadGlobalCities();
}
