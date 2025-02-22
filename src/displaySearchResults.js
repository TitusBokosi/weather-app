import { cityList } from "./storeCities";
export function displaySearchResults(currentCity, hero) {
  const value = cityList[0];
  currentCity.remove();

  const searchResults = document.createElement("div");
  searchResults.classList.add("search-results");
  hero.appendChild(searchResults);

  const searchResultsHeading = document.createElement("h2");
  searchResultsHeading.textContent = ` Results for ${value.country} city`;
  searchResults.appendChild(searchResultsHeading);
  searchResultsHeading.classList.add("search-results-heading");

  const searchResultsContainer = document.createElement("div");
  searchResultsContainer.classList.add("search-results-containe");
  searchResults.appendChild(searchResultsContainer);

  const searchResultsTimeContainer = document.createElement("div");
  searchResultsTimeContainer.classList.add("search-results-container");
  searchResultsContainer.appendChild(searchResultsTimeContainer);

  const searchResultsTimeZone = document.createElement("h3");
  searchResultsTimeZone.textContent = value.timezone;
  searchResultsTimeContainer.appendChild(searchResultsTimeZone);

  const searchResultsTime = document.createElement("p");
  searchResultsTime.textContent = value.time;
  searchResultsTimeContainer.appendChild(searchResultsTime);

  const searchResultsTemperatureContainer = document.createElement("div");
  searchResultsTemperatureContainer.classList.add("search-results-container");
  searchResultsContainer.appendChild(searchResultsTemperatureContainer);

  const searchResultsTemperature = document.createElement("h2");
  searchResultsTemperature.textContent = "temperature";
  searchResultsTemperatureContainer.appendChild(searchResultsTemperature);

  const searchResultsTemperatureValue = document.createElement("p");
  searchResultsTemperatureValue.textContent = `${value.temperature} `;
  searchResultsTemperatureContainer.appendChild(searchResultsTemperatureValue);

  const searchResultsHumidityContainer = document.createElement("div");
  searchResultsHumidityContainer.classList.add("search-results-container");
  searchResultsContainer.appendChild(searchResultsHumidityContainer);

  const searchResultsHumidity = document.createElement("h2");
  searchResultsHumidity.textContent = "humidity";
  searchResultsHumidityContainer.appendChild(searchResultsHumidity);

  const searchResultsHumidityValue = document.createElement("p");
  searchResultsHumidityValue.textContent = value.humidity;
  searchResultsHumidityContainer.appendChild(searchResultsHumidityValue);

  const searchResultsDescription = document.createElement("p");
  searchResultsDescription.textContent = `${value.description}`;
  searchResults.appendChild(searchResultsDescription);
  searchResultsDescription.classList.add("description");

  return searchResults;
}
