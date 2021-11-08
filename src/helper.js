import axios from "axios";

export const getWeather = async (lat, long, setter) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=020ace50dcfbdbdcd4539ccabe102304`
    );

    setter(res?.data);
  } catch (error) {
    setter({});
  }
};
