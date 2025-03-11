import { searchCity } from "./searchCity";
import logo from "./images/logo-blue.svg";
export function loadHeader(app) {
  const header = document.createElement("div");
  header.classList.add("header");
  const headerLogo = document.createElement("img");
  headerLogo.src = logo;
  header.appendChild(headerLogo);

  const actionsContainer = document.createElement("div");
  header.appendChild(actionsContainer);
  actionsContainer.classList.add("actions-container");

  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Search for a city");
  actionsContainer.appendChild(searchInput);
  searchInput.classList.add("search-input");

  const searchButton = document.createElement("button");
  searchButton.innerText = "Search";
  searchInput.appendChild(searchButton);

  // const toggleButton = document.createElement("button");
  // toggleButton.innerText = "Toggle";
  // actionsContainer.appendChild(toggleButton);
  // toggleButton.classList.add("toggle-button");
  // toggleButton.setAttribute("id", "toggle-button");
  // toggleButton.setAttribute("type", "button");

  app.appendChild(header);

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const searchName = searchInput.value;
      searchInput.value = "";
      searchCity(searchName, app);
    }
  });
}
