import { useEffect, useState } from "react";
import { getWeather } from "./helper";

function App() {
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    navigator.geolocation.watchPosition(
      (pos) => {
        getWeather(pos.coords?.latitude, pos.coords?.longitude, setWeatherData);
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 100,
        timeout: 60000,
      }
    );
  }, []);

  return (
    <div className="App">
      <h1>
        Current Temperature: {weatherData?.main?.temp}
         <span>&#8451;</span>
      </h1>
      <h2>{weatherData.name}</h2>
    </div>
  );
}

export default App;
