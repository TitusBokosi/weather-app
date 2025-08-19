export const WeatherCard = ({ cityData }) => {
  return (
    <div className="city-details flex flex-col items-center justify-center">
      <h2>{cityData.address}</h2>
      <div className="div p-2">
        <img
          src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${cityData.currentConditions.icon}.png`}
          alt=""
        />
      </div>
      <p>{cityData.currentConditions.temp}</p>
      <p>{cityData.currentConditions.conditions}</p>
    </div>
  );
};
