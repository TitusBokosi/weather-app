import { useContext, useEffect, useState } from "react";
import GlobalContext from "../services/globalContext";
import { WeatherCard } from "./WeatherCard";

export const WorldWeather = () => {
  const [citiesData, setCitiesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { fetchCityData } = useContext(GlobalContext);
  const cities = [
    "capetown",
    "london",
    "tokyo",
    "nairobi",
    "madrid",
    "paris",
    "dubai",
    "favela",
  ];

  useEffect(() => {
    const allData = [];
    async function getCityData(locations) {
      for (const city of locations) {
        try {
          const data = await fetchCityData(city);
          allData.push(data);
        } catch (err) {
          console.log(err);
        }
      }
    }
    if (fetchCityData) {
      getCityData(cities)
        .then(() => {
          console.log(allData);
          setCitiesData(allData);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [fetchCityData]);
  return (
    <div className="city-data">
      {loading ? (
        <p>Loading world data</p>
      ) : (
        <div className="world-data text-center shadow-2xs pt-5 pb-5">
          <h2>Word Weather</h2>
          <p>Weather forecast around the world</p>
          <div className="city-dat grid grid-flow-col auto-cols-max gap-5 overflow-scroll">
            {citiesData.map((city) => (
              <WeatherCard cityData={city}></WeatherCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
