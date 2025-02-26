import { makeCityObject } from "./cityObject";
import { displaySearchCity } from "./displaySearchCity";

export async function searchCity(city, display) {
  try {
    const cityName = await makeCityObject(city);
    displaySearchCity(display, cityName);
  } catch (err) {
    alert("unable to fetch data for " + city);
  }
}
