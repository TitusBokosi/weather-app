import { makeCityObject } from "./cityObject";
// import lowSun from "./images/low-sun.svg";
// import cloudSun from "./images/cloud-sun.svg";
// import highSun from "./images/medium-sun.svg";
// import rain from "./images/rain.svg";
// import showers from "./images/showers./svg";
// import snow from "./images/snow.svg";

export async function displayDefaultCity(display) {
  const defaultCity = document.createElement("div");
  defaultCity.classList.add("default-city");
  display.appendChild(defaultCity);

  const city = await makeCityObject("zomba");

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

    const imagesArray = [
      city.getTempImage(),
      city.getHumImage(),
      city.getGeneralImage(),
    ];

    const image = document.createElement("img");
    image.src = imagesArray[index];
    image.alt = "image";
    quickCards.appendChild(image);

    const value = document.createElement("p");
    value.textContent = city.days[0][element];
    quickCards.appendChild(value);

    defaultCityWeatherContent.appendChild(quickCards);
  });
}
