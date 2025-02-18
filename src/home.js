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
  searchBox.appendChild(searchInput);
}
