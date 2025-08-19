import { useContext, useEffect, useState } from "react";
import { ErrorContainer } from "./Error";
import GlobalContext from "../services/globalContext";

export const City = ({ city }) => {
  const [cityData, setCityData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const { fetchCityData } = useContext(GlobalContext);

  useEffect(() => {
    console.log(city);
    if (city) {
      fetchCityData(city)
        .then((data) => {
          setCityData(data);
        })
        .catch((err) => {
          setErr(`Failed to fetch data for ${city}`);
        })
        .finally(() => setLoading(false));
    }
  }, [city]);

  return (
    <div className="city bg-blue-600 text-white p-10 rounded-4xl">
      {loading ? (
        <p>loading</p>
      ) : (
        <div className="city-details flex flex-col items-center justify-center">
          <h2>{cityData.address}</h2>
          <div className="div">
            <img
              src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${cityData.currentConditions.icon}.png`}
              alt=""
            />
          </div>
          <p>{cityData.currentConditions.temp}</p>
          <p>{cityData.currentConditions.conditions}</p>
        </div>
      )}
    </div>
  );
};
