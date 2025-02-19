import { cityObject } from "./cityObject";
import { storeCities } from "./storeCities";

function loadHomeDefaultCity(city) {
  const data = [];
  async function loadHomeDefault() {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=5BQ3U8GTHRK5D69GZCLNSTYC8`,
        { mode: "cors" }
      );
      const dataa = await response.json();
      data.push(dataa);
      const cityy = cityObject(city, data[0].tempereture, data[0].timezone);
      storeCities(cityy);
    } catch (error) {
      alert("couldnt display data for your current city");
    }
  }
  loadHomeDefault();
}

export { loadHomeDefaultCity };
