export async function makeCityObject(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=5BQ3U8GTHRK5D69GZCLNSTYC8`
    );
    const data = await response.json();
    function makeCity(name, temperature, time, description, days) {
      return { name, temperature, time, description, days };
    }
    const location = makeCity(
      data.resolvedAddress,
      data.temp,
      data.time,
      data.description,
      data.days
    );
    return location;
  } catch (err) {
    alert("unable to load data for" + " " + city);
  }
}
