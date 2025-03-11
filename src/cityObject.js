import lowSun from "./images/low-sun.svg";
import cloudSun from "./images/cloud-sun.svg";
import highSun from "./images/medium-sun.svg";
import rain from "./images/rain.svg";
import showers from "./images/showers.svg";
import snow from "./images/snow.svg";
import cloud from "./images/cloud-solid.svg";

export async function makeCityObject(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=5BQ3U8GTHRK5D69GZCLNSTYC8&unitGroup=metric`
    );
    const data = await response.json();
    function makeCity(name, temperature, time, description, days) {
      let tem;

      days.forEach((element) => {
        tem = element.temp;
        element.temp = `${element.temp} \xB0C`;
      });

      let generalImage;
      let tempImage;
      let humImage;

      function getTempImage() {
        console.log(tem);
        if (tem <= 20) {
          tempImage = lowSun;
          return tempImage;
        } else if (tem > 20 && tem <= 30) {
          tempImage = cloudSun;
          return tempImage;
        } else {
          tempImage = highSun;
          return tempImage;
        }
      }

      function getGeneralImage() {
        generalImage = tempImage;
        return generalImage;
      }

      function getHumImage() {
        humImage = rain;
        return humImage;
      }

      return {
        name,
        temperature,
        time,
        description,
        days,
        getGeneralImage,
        getTempImage,
        getHumImage,
      };
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
