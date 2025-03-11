// import { app } from "./app";
import { loadHeader } from "./loadHeader";

export async function displaySearchCity(container, cityObject) {
  container.innerHTML = "";
  loadHeader(container);
  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search-result");
  container.appendChild(searchContainer);

  const header = document.createElement("h3");
  header.textContent = `Results for ${cityObject.name}`;
  header.classList.add("search-header");
  searchContainer.appendChild(header);

  const todayWeather = document.createElement("div");
  todayWeather.classList.add("search-today-weather");
  searchContainer.appendChild(todayWeather);

  const displayData = ["temp", "preciptype", "description"];
  const objectKeys = Object.keys(cityObject);
  const image = document.createElement("img");
  image.src = cityObject.getTempImage();
  todayWeather.appendChild(image);

  displayData.forEach((element) => {
    const propertyContainer = document.createElement("div");
    todayWeather.appendChild(propertyContainer);

    const temp = document.createElement("h3");
    temp.textContent = element;
    propertyContainer.appendChild(temp);

    const value = document.createElement("p");
    value.textContent = cityObject.days[0][element];
    propertyContainer.appendChild(value);
  });
}
