// import { app } from "./app";
export function displaySearchCity(container, cityObject) {
  container.innerHTML = "hi";
  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search-result");
  container.appendChild(searchContainer);
  searchContainer.textContent(cityObject.name);

  const header = document.createElement("h3");
  header.textContent = `results for ${cityObject.name}`;
  header.classList.add("search-header");
  searchContainer.appendChild(header);

  const todayWeather = document.createElement("div");
  todayWeather.classList.add("search-today-weather");
  searchContainer.appendChild(todayWeather);

  const displayData = [cityObject.temp, cityObject.humidity, cityObject.wind];
  const objectKeys = Object.keys(cityObject);

  displayData.forEach((element) => {
    const propertyContainer = document.createElement("div");
    todayWeather.appendChild(propertyContainer);

    const temp = document.createElement("p");
    temp.textContent = objectKeys[0];
    propertyContainer.appendChild(temp);

    const value = document.createElement("p");
    value.textContent = element;
    propertyContainer.appendChild(value);
  });
}
