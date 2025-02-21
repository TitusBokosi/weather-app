import { searchCity } from "./searchCity";

const globalCities = [
  "zomba",
  "nairobi",
  "london",
  "new york",
  "tokyo",
  "lusaka",
  "joheannesburg",
  "cairo",
  "dubai",
  "sydney",
];
export async function getGlobalCities() {
  const cityPromises = globalCities.map(async (city) => {
    await searchCity(city);
  });

  await Promise.all(cityPromises);
}
