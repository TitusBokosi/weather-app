import { displayWeatherCards } from "./displayWeatherCards.js";

export function loadHero(app) {
  const hero = document.createElement("div");
  hero.classList.add("hero");
  app.appendChild(hero);

  const header = document.createElement("h2");
  hero.appendChild(header);
  header.innerText = "Todays Weather Content";
  header.classList.add("hero-title");

  const WeatherCardContainer = document.createElement("div");
  WeatherCardContainer.classList.add("weather-card-container");
  hero.appendChild(WeatherCardContainer);
  displayWeatherCards(WeatherCardContainer);
}
