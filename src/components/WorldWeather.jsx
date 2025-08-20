import { useContext, useEffect, useState } from "react";
import GlobalContext from "../services/globalContext";
import { WeatherCard } from "./WeatherCard";
import { ErrorContainer } from "./Error";

export const WorldWeather = () => {
  const [citiesData, setCitiesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { fetchCityData } = useContext(GlobalContext);
  const [err, setErr] = useState(null);
  const cities = [
    "Capetown",
    "London",
    "Tokyo",
    "Nairobi",
    "Madrid",
    "Paris",
    "Dubai",
    "Favela",
  ];

  useEffect(() => {
    const allData = [];
    async function getCityData(locations) {
      for (const city of locations) {
        try {
          const data = await fetchCityData(city);
          allData.push(data);
        } catch (err) {
          throw err;
        }
      }
    }

    getCityData(cities)
      .then(() => {
        setCitiesData(allData);
      })
      .catch((err) => setErr("Failed to get weather data"))
      .finally(() => setLoading(false));
  }, [fetchCityData]);

  return (
    <div className="city-data world-data text-center shadow-2xs p-2 pt-5 pb-5 bg-white mb-10 flex flex-col items-center justify-center gap-5 lg:w-5xl">
      <div className="header">
        {" "}
        <h2>Word Weather</h2>
        <p>Weather forecast around the world</p>
      </div>
      {loading ? (
        <p>Loading world data</p>
      ) : err ? (
        <ErrorContainer message={err}></ErrorContainer>
      ) : (
        <div className="city-dat flex items-center justify-center gap-5 flex-wrap w-full">
          {citiesData.map((city) => (
            <WeatherCard cityData={city}></WeatherCard>
          ))}
        </div>
      )}
    </div>
  );
};
