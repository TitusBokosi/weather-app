import { MapPinIcon } from "@heroicons/react/24/solid";
export const WeatherCard = ({ cityData }) => {
  return (
    <div
      className="city-details flex flex-col items-center justify-center bg-white p-2 shadow-lg min-w-40
    "
    >
      <div className="header flex items-center gap-2">
        <h3 className="text-blue-600">{cityData.address}</h3>
        <MapPinIcon className="h-6 fill-blue-300"></MapPinIcon>
      </div>

      <div className="div p-2">
        <img
          src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${cityData.currentConditions.icon}.png`}
          alt=""
        />
      </div>
      <p className="text-2xl font-semibold">
        {cityData.currentConditions.temp} <sup className="gray-300">o</sup>
      </p>
      <p className="gray-400">{cityData.currentConditions.conditions}</p>
    </div>
  );
};
