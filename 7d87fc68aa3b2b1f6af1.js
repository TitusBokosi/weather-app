import "./styles.css";
import { loadHomePage } from "./home";
// import { searchCity } from "./searchCity";
// // import { loadHomeDefaultCity } from "./homeDeafaultCity";
// // import { createCityObject } from "./cityObjects";
// import { cityList } from "./storeCities";

const app = document.querySelector(".app");
loadHomePage(app);

const footer = document.createElement("div");
footer.classList.add("footer");
app.appendChild(footer);

const footerText = document.createElement("p");
footerText.textContent = "© 2021 The Odin Project";
footer.appendChild(footerText);

// async function loadCity(city) {
//   await searchCity(city);
//   console.log(cityList[0].country);
// }

// loadCity("Nairobi");
// createCityObject("Nairobi", "Kenya", "GMT+3", "12:00", "25°C", "50%");
// console.log(cityList[0].temperature);

// // loadHomeDefaultCity("Nairobi");
