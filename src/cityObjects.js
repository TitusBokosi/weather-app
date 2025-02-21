import { storeCity } from "./storeCities";

export function createCityObject(
  name,
  country,
  timezone,
  time,
  temperature,
  humidity
) {
  function makeCity() {
    return {
      name: name,
      country: country,
      timezone: timezone,
      time: time,
      temperature: `${((temperature - 32) * (5 / 9)).toFixed(2)} \u00B0C`,
      humidity: humidity,
    };
  }
  const city = makeCity();
  storeCity(city);
}
