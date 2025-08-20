import { useContext, useEffect, useState } from "react";
import { ErrorContainer } from "./Error";
import GlobalContext from "../services/globalContext";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { DaysConditions } from "./DaysConditions";

export const City = ({ city }) => {
  const [cityData, setCityData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMore, setShoreMore] = useState(false);
  const { fetchCityData } = useContext(GlobalContext);

  useEffect(() => {
    setErr(null);
    fetchCityData(city)
      .then((data) => {
        setCityData(data);
      })
      .catch((err) => {
        setErr(`Failed to fetch data for ${city}`);
      })
      .finally(() => setLoading(false));
  }, [city]);

  return (
    <div className="citytext-center ">
      {loading ? (
        <p>Loading...</p>
      ) : err ? (
        <ErrorContainer message={err}></ErrorContainer>
      ) : (
        <div className="container lg:flex lg:items-center lg:justify-center gap-10">
          <div className="left-content ">
            <div className="city-details flex flex-col items-center justify-center gap-5">
              <div className="header flex">
                <MapPinIcon className="h-10 fill-white"></MapPinIcon>
                <h2>{cityData.resolvedAddress}</h2>
              </div>
              <div className="div">
                <img
                  src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${cityData.currentConditions.icon}.png`}
                  alt=""
                  className="h-30"
                />
              </div>
              <p className="text-9xl font-bold">
                {cityData.currentConditions.temp}
                <sup className="font-semibold text-gray-200">o</sup>
              </p>
              <p className="text-3xl font-semibold">
                {cityData.currentConditions.conditions}
              </p>
              <div className="more-conditions flex items-center justify-center gap-5">
                <div className="wind flex-col gap-2 flex">
                  <p>wind speed</p>
                  <p className="text-gray-300">
                    {cityData.currentConditions.windspeed}
                  </p>
                </div>
                <div className="humidity flex-col gap-2 flex">
                  <p>humidity</p>
                  <p className="text-gray-300">
                    {cityData.currentConditions.humidity}
                  </p>
                </div>
                <div className="visibility flex-col gap-2 flex">
                  <p>visibility</p>
                  <p className="text-gray-300">
                    {cityData.currentConditions.visibility}
                  </p>
                </div>
                <div className="snow flex-col gap-2 flex">
                  <p>snow depth</p>
                  <p className="text-gray-300">
                    {cityData.currentConditions.snowdepth}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="righ-content flex flex-col items-center justify-center">
            {" "}
            <button
              onClick={() => setShoreMore(!showMore)}
              className="lg:hidden"
            >
              {!showMore ? (
                <ChevronDoubleDownIcon className="fill-white h-5 stroke-2"></ChevronDoubleDownIcon>
              ) : (
                <ChevronDoubleUpIcon className=" fill-white h-5 stroke-2"></ChevronDoubleUpIcon>
              )}
            </button>
            <div className={`${showMore ? "block" : "hidden"} lg:block`}>
              <DaysConditions days={cityData.days}></DaysConditions>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
