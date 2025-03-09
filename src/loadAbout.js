import { displayDefaultCity } from "./displayDefaultCity";
export function loadAbout(display) {
  const about = document.createElement("div");
  display.appendChild(about);
  about.classList.add("about");

  const headingContainer = document.createElement("div");
  headingContainer.classList.add("heading-container");
  about.appendChild(headingContainer);

  const heading = document.createElement("h1");
  heading.classList.add("about-heading");
  heading.textContent = `Get the most accurate weather content `;
  headingContainer.appendChild(heading);

  const aboutText = document.createElement("p");
  aboutText.textContent = ` At the odin weather, we provide you with the most accurate weather content.
 Regulary updated data ensures accurate information to our entrusted number of customers.`;
  headingContainer.appendChild(aboutText);

  displayDefaultCity(about);
}
