import { searchCity } from "./searchCity";
import { cityList } from "./storeCities";
import { displayGlobalWeather } from "./displayGlobalWeather";
// import { cityList } from "./storeCities";
import { displaySearchResults } from "./displaySearchResults";
import { displayAboutUs } from "./aboutUs";

export function loadHomePage(container) {
  const header = document.createElement("div");
  header.classList.add("header");
  container.appendChild(header);

  const title = document.createElement("h1");
  title.textContent = "The Odin Weather";
  header.appendChild(title);
  title.classList.add("title");

  const nav = document.createElement("div");
  nav.classList.add("nav");
  header.appendChild(nav);

  const home = document.createElement("button");
  home.textContent = "Home";
  nav.appendChild(home);

  const about = document.createElement("button");
  about.textContent = "About us";
  nav.appendChild(about);

  const contact = document.createElement("button");
  contact.textContent = "Contact";
  nav.appendChild(contact);

  const searchBox = document.createElement("div");
  searchBox.classList.add("search-box");
  nav.appendChild(searchBox);

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search City";
  searchInput.classList.add("search-input");
  searchBox.appendChild(searchInput);

  const hero = document.createElement("div");
  hero.classList.add("hero");
  container.appendChild(hero);

  // const heroImageContainer = document.createElement("div");
  // heroImageContainer.classList.add("hero-image-container");
  // hero.appendChild(heroImageContainer);

  const heroContainer = document.createElement("div");
  heroContainer.classList.add("hero-container");
  hero.appendChild(heroContainer);

  const heroHeading = document.createElement("h2");
  heroHeading.textContent = "The Odin Weather, your reliable weather site";
  heroContainer.appendChild(heroHeading);
  heroHeading.classList.add("hero-heading");

  const heroText = document.createElement("p");
  heroText.textContent =
    "Get the most accurate weather information for your city and many other cities around the world.";
  heroContainer.appendChild(heroText);
  heroText.classList.add("hero-text");

  const localWeatherButton = document.createElement("button");
  localWeatherButton.textContent = " Your Local Weather";
  heroContainer.appendChild(localWeatherButton);
  localWeatherButton.classList.add("local-weather-button");

  const currentCity = document.createElement("div");
  currentCity.classList.add("current-city");
  hero.appendChild(currentCity);

  async function getDefaultCity(city) {
    await searchCity(city);

    const defaultCityHeading = document.createElement("h2");
    defaultCityHeading.textContent = cityList[0].country;
    currentCity.appendChild(defaultCityHeading);
    defaultCityHeading.classList.add("default-city-heading");

    const defaultCityWeatherContainer = document.createElement("div");
    defaultCityWeatherContainer.classList.add("default-city-weather-container");
    currentCity.appendChild(defaultCityWeatherContainer);

    const defaultCityTimeContainer = document.createElement("div");
    defaultCityTimeContainer.classList.add("default-city-container");
    defaultCityWeatherContainer.appendChild(defaultCityTimeContainer);

    const defaultCityTimeZone = document.createElement("h3");
    defaultCityTimeZone.textContent = cityList[0].timezone;
    defaultCityTimeContainer.appendChild(defaultCityTimeZone);

    const defaultCityTime = document.createElement("p");
    defaultCityTime.textContent = cityList[0].time;
    defaultCityTimeContainer.appendChild(defaultCityTime);

    const defaultCityTemperatureCOntainer = document.createElement("div");
    defaultCityTemperatureCOntainer.classList.add("default-city-container");
    defaultCityWeatherContainer.appendChild(defaultCityTemperatureCOntainer);

    const temperature = document.createElement("h2");
    temperature.textContent = "temperature";
    defaultCityTemperatureCOntainer.appendChild(temperature);

    const temperatureValue = document.createElement("p");
    temperatureValue.textContent = `${cityList[0].temperature} `;
    defaultCityTemperatureCOntainer.appendChild(temperatureValue);

    const defaultCityHumidityContainer = document.createElement("div");
    defaultCityHumidityContainer.classList.add("default-city-container");
    defaultCityWeatherContainer.appendChild(defaultCityHumidityContainer);

    const humidity = document.createElement("h2");
    humidity.textContent = "humidity";
    defaultCityHumidityContainer.appendChild(humidity);

    const humidityValue = document.createElement("p");
    humidityValue.textContent = cityList[0].humidity;
    defaultCityHumidityContainer.appendChild(humidityValue);

    const descriptions = document.createElement("p");
    descriptions.textContent = `${cityList[0].description}`;
    currentCity.appendChild(descriptions);
    descriptions.classList.add("description");
  }
  getDefaultCity("lilongwe");

  const globalWeatherContainer = document.createElement("div");
  globalWeatherContainer.classList.add("global-weather-container");
  container.appendChild(globalWeatherContainer);

  displayGlobalWeather(globalWeatherContainer);

  about.addEventListener("click", () => {
    displayAboutUs(globalWeatherContainer);
  });

  searchInput.addEventListener("keyup", async (e) => {
    cityList.length = 0;
    try {
      if (e.key === "Enter") {
        await searchCity(searchInput.value);
        displaySearchResults(currentCity, hero);
      }
    } catch (error) {
      alert("Unable to fetch data for " + searchInput.value);
    }
  });
  home.addEventListener("click", () => {
    globalWeatherContainer.innerHTML = "";
    displayGlobalWeather(globalWeatherContainer);
  });
}
