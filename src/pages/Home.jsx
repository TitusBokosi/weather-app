import { useContext, useEffect, useState } from "react";
import GlobalContext from "../services/globalContext";
import { City } from "../components/City";
import { WorldWeather } from "../components/WorldWeather";
import { GlobalNews } from "../components/Globalnews";
import { SearchCity } from "../components/SearchCity";
import { Footer } from "../components/Footer";

export const Home = () => {
  const { currentCity, fetchCityData, geoLocationMessage } =
    useContext(GlobalContext);
  const [city, setCity] = useState(null);
  const [cityInput, setCityInput] = useState(null);

  useEffect(() => {
    setCity(currentCity);
  }, [currentCity]);

  const handleCityChange = (e) => {
    e.preventDefault();
    setCityInput(e.target.value);
  };
  const handleSearchCity = (e) => {
    e.preventDefault();
    setCity(cityInput);
  };

  return (
    <div className="home text-center flex flex-col gap-10">
      <div className="hero-section bg-blue-600 text-white p-2 pt-10 pb-10 rounded-t-none rounded-b-4xl md:rounded-b-none min-h-100 flex items-center justify-center">
        {city ? (
          <div className="container flex flex-col gap-5">
            <SearchCity
              data={{ handleCityChange, handleSearchCity, city }}
            ></SearchCity>
            <City city={city}></City>
          </div>
        ) : (
          <div className="search-city flex flex-col items-center justify-center gap-5">
            <p>
              {geoLocationMessage ||
                "Cant find your current city. Please search it below"}
            </p>
            <SearchCity
              data={{ handleCityChange, handleSearchCity, city }}
            ></SearchCity>
          </div>
        )}
      </div>
      <div className="world-weather  pt-5 flex items-center justify-center bg-white">
        <WorldWeather></WorldWeather>
      </div>
      <div className="global-news flex items-center justify-center bg-white">
        <GlobalNews></GlobalNews>
      </div>
      <Footer></Footer>
    </div>
  );
};
