import "./styles.css";
import { loadHomePage } from "./home";
import { loadHomeDefaultCity } from "./homeDeafaultCity";
const app = document.querySelector(".app");

loadHomePage(app);

loadHomeDefaultCity("Nairobi");
