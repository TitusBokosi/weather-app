const internationalCities = new Array();
import { makeCityObject } from "./cityObject";

export function loadInternationalCities() {
  const cities = ["lilongwe", "new york", "durben", "london", "tokyo"];
  cities.forEach(async (item) => {
    const city = await makeCityObject(item);
    internationalCities.push(city);
    // console.log(internationalCities[0]);
  });
}

export { internationalCities };
