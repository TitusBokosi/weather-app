import { useContext } from "react";
import GlobalContext from "../services/globalContext";
import { City } from "../components/City";
import { WorldWeather } from "../components/WorldWeather";
import { GlobalNews } from "../components/Globalnews";

export const Home = () => {
  const { currentCity, fetchCityData } = useContext(GlobalContext);

  return (
    <div className="home">
      <div className="hero-section p-5 lg:p-10 lg:flex items-center justify-center gap-10     ">
        <h1 className="text-center break-words">
          <span className="text-blue-600">The Odin Weather.</span> Accurate,
          Real Time Weather Content
        </h1>
        {currentCity && <City city={currentCity}></City>}
      </div>

      <WorldWeather></WorldWeather>
      <GlobalNews></GlobalNews>
    </div>
  );
};
