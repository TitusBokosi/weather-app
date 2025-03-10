import { makeCityObject } from "./cityObject";

export async function displayDefaultCity(display) {
  const defaultCity = document.createElement("div");
  defaultCity.classList.add("default-city");
  display.appendChild(defaultCity);

  const city = await makeCityObject("lilongwe");
  console.log(city);

  const defaultCityHeading = document.createElement("h2");
  defaultCityHeading.classList.add("default-city-heading");
  defaultCityHeading.textContent = `Weather for ${city.name}`;
  defaultCity.appendChild(defaultCityHeading);

  const defaultCityWeatherContent = document.createElement("div");
  defaultCityWeatherContent.classList.add("default-city-weather-content");
  defaultCity.appendChild(defaultCityWeatherContent);

  const quickCardsArray = ["temp", "humidity", "conditions"];
  quickCardsArray.forEach((element, index) => {
    const quickCards = document.createElement("div");
    quickCards.classList.add("quick-cards");
    const heading = document.createElement("h3");
    heading.textContent = quickCardsArray[index];
    quickCards.appendChild(heading);

    const value = document.createElement("p");
    value.textContent = city.days[0][element];
    quickCards.appendChild(value);

    defaultCityWeatherContent.appendChild(quickCards);
  });
}
