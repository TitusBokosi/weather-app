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
      temperature: temperature,
      humidity: humidity,
    };
  }
  const city = makeCity();
  storeCity(city);
}
