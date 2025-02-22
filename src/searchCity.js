import { createCityObject } from "./cityObjects";

export async function searchCity(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=5BQ3U8GTHRK5D69GZCLNSTYC8`
    );
    const data = await response.json();
    createCityObject(
      city,
      data.resolvedAddress,
      data.timezone,
      data.days[0].datetime,
      data.days[0].temp,
      data.days[0].humidity,
      data.description
    );
  } catch (error) {
    alert("Unable to fetch data for " + city);
  }
}
