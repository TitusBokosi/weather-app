import { storeCity } from "./storeCities";

export function createCityObject(
  name,
  country,
  timezone,
  time,
  temperature,
  humidity,
  description
) {
  function makeCity() {
    return {
      name: name,
      country: country,
      timezone: timezone,
      time: time,
      temperature: `${((temperature - 32) * (5 / 9)).toFixed(2)} \u00B0C`,
      humidity: humidity,
      description: description,
    };
  }
  const city = makeCity();
  storeCity(city);
}
