import worldmap from "./images/internationalMap.jpg";
export function displayGlobalWeather(display) {
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
  worldMap.classList.add("word-map");
  wordMapContainer.appendChild(worldMap);
}
