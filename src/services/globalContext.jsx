import { useState, createContext, useEffect, useCallback } from "react";

const GlobalContext = createContext();

export function ContextProvider({ children }) {
  const [currentCity, setCurrentCity] = useState(null);
  const [geoLocationMessage, setGeolocationMessage] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setGeolocationMessage(
        "Your browser does not support geolocation. Enter the name of your city manually"
      );
    } else {
      navigator.geolocation.getCurrentPosition(
        async (location) => {
          const { latitude, longitude } = location.coords;
          try {
            const res = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = await res.json();
            const cityName = data.city;
            if (cityName) {
              setCurrentCity(cityName);
            } else {
              setGeolocationMessage(
                "Failed to get your location. Please enter it manually"
              );
            }
          } catch (err) {
            setGeolocationMessage(
              "Failed to get your current location. Enter the name of your city manually"
            );
          }
        },
        (err) => {
          setGeolocationMessage(
            "Failed to get your current location. Please enter it manually"
          );
        }
      );
    }
  }, []);

  const fetchCityData = useCallback(async (name) => {
    try {
      const key = import.meta.env.VITE_WEATHER_KEY;
      const res = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?key=${key}&unitGroup=metric`
      );
      const data = await res.json();

      if (data) {
        return data;
      }
    } catch (err) {
      throw err;
    }
  }, []);
  return (
    <GlobalContext.Provider
      value={{ currentCity, geoLocationMessage, setCurrentCity, fetchCityData }}
    >
      {" "}
      {children}
    </GlobalContext.Provider>
  );
}
export default GlobalContext;
