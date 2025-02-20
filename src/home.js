import background from "./images/waterDroplets.jpg";

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
  heroHeading.textContent = "The Odin Weather, your reliable weather app";
  heroContainer.appendChild(heroHeading);
  heroHeading.classList.add("hero-heading");

  const heroText = document.createElement("p");
  heroText.textContent =
    "Get the most accurate weather information for your city and many other cities around the world.";
  heroContainer.appendChild(heroText);
  heroText.classList.add("hero-text");

  const currentCity = document.createElement("div");
  currentCity.classList.add("current-city");
  container.appendChild(currentCity);
}
