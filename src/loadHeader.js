export function loadHeader(app) {
  const header = document.createElement("div");
  header.classList.add("header");
  const headerTittle = document.createElement("h1");
  headerTittle.innerText = "The Odin Weather App";
  header.appendChild(headerTittle);

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

  const toggleButton = document.createElement("button");
  toggleButton.innerText = "Toggle";
  actionsContainer.appendChild(toggleButton);
  toggleButton.classList.add("toggle-button");
  toggleButton.setAttribute("id", "toggle-button");
  toggleButton.setAttribute("type", "button");

  app.appendChild(header);
}
