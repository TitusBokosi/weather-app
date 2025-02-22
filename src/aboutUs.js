export function displayAboutUs(container) {
  container.innerHTML = "";
  const aboutUsContainer = document.createElement("div");
  aboutUsContainer.classList.add("about-us-container");
  container.appendChild(aboutUsContainer);

  const aboutUsHeading = document.createElement("h2");
  aboutUsHeading.textContent = "About Us";
  aboutUsContainer.appendChild(aboutUsHeading);
  aboutUsHeading.classList.add("about-us-heading");

  const firstContainer = document.createElement("div");
  firstContainer.classList.add("container");
  aboutUsContainer.appendChild(firstContainer);

  const definition = document.createElement("div");
  definition.classList.add("definition");
  firstContainer.appendChild(definition);

  const definitionHeading = document.createElement("h3");
  definitionHeading.textContent = "What is The Odin Weather?";
  definition.appendChild(definitionHeading);
  definitionHeading.classList.add("heading");

  const definitionText = document.createElement("p");
  const odinLink = document.createElement("a");
  odinLink.textContent = "Odin Project";
  odinLink.href = "https://www.theodinproject.com/";
  odinLink.target = "_blank";

  definitionText.textContent = `The Odin Weather is a weather site that provides weather data for cities around the world. It is a project for the ${odinLink}.`;
  definition.appendChild(definitionText);
  definitionText.classList.add("text");

  const firstContainerImage = document.createElement("div");
  firstContainerImage.classList.add("image");
  firstContainer.appendChild(firstContainerImage);

  const secondContainer = document.createElement("div");
  secondContainer.classList.add("container");
  aboutUsContainer.appendChild(secondContainer);

  const accuracy = document.createElement("div");
  accuracy.classList.add("definition");
  secondContainer.appendChild(accuracy);

  const accuracyHeading = document.createElement("h3");
  accuracyHeading.textContent = "Accuracy";
  accuracy.appendChild(accuracyHeading);
  accuracyHeading.classList.add("heading");

  const accuracyText = document.createElement("p");
  accuracyText.textContent = `The Odin Weather uses the OpenWeather API to fetch weather data. The OpenWeather API provides accurate weather data for cities around the world.`;
  accuracy.appendChild(accuracyText);
  accuracy.classList.add("text");

  const secondContainerImage = document.createElement("div");
  secondContainerImage.classList.add("second-image");
  secondContainer.appendChild(secondContainerImage);
}
