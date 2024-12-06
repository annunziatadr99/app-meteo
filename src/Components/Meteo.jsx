import { useState, useEffect } from "react";
import "../App.css";

const Meteo = ({ city }) => {
  const api_key = "e91e174f86af7944227a73e7faca0d09";
  const [cityCoordinates, setCityCoordinates] = useState({});
  const [cityWeather, setCityWeather] = useState({
    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    weather: [{ description: "", icon: "" }],
    wind: { speed: 0, deg: 0 },
  });
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const coordinates = await fetchCityCoordinates();
        if (coordinates) {
          await fetchCityWeather(coordinates);
          await fetchWeatherForecast(coordinates);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [city]);

  const fetchCityCoordinates = async () => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api_key}`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        if (data[0]) {
          setCityCoordinates(data[0]);
          return data[0];
        } else {
          setError("Città non trovata");
          return null;
        }
      } else {
        throw new Error("Errore fetch coordinate città");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchCityWeather = async (coordinates) => {
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${api_key}`;
    try {
      const response = await fetch(urlWeather);
      if (response.ok) {
        const data = await response.json();
        setCityWeather(data);
      } else {
        throw new Error("Errore fetch meteo city");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchWeatherForecast = async (coordinates) => {
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${api_key}`;
    try {
      const response = await fetch(urlForecast);
      if (response.ok) {
        const data = await response.json();
        setForecast(data.list);
      } else {
        throw new Error("Errore nella fetch forecast");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="weather-info">
      <h2>{`${cityCoordinates.name}, ${cityCoordinates.country}`}</h2>
      <img
        src={`http://openweathermap.org/img/w/${cityWeather.weather[0].icon}.png`}
        alt="meteo img"
      />
      <p>Temperatura: {parseInt(cityWeather.main.temp - 273.15)}° C</p>
      <p>
        Vento: {cityWeather.wind.speed} km/h, {cityWeather.wind.deg}°
      </p>
      <p>Tasso di Umidità: {cityWeather.main.humidity}%</p>
      <p>
        Temperatura percepita: {parseInt(cityWeather.main.feels_like - 273.15)}°
        C
      </p>
      <h3>Previsioni dei prossimi 5 Giorni</h3>
      <div className="forecast">
        {forecast.slice(0, 5).map((day, index) => (
          <div key={index}>
            <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
            <img
              src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
              alt="Weather icon"
            />
            <p>Temperatura: {parseInt(day.main.temp - 273.15)}° C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meteo;
