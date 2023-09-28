import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherIcon from "./Weather-icons";
import wind from "../images/wind.svg";
import humidity from "../images/humidity.svg";
import termo from "../images/termo.svg";
import Line2 from "../images/Line 2.svg";
import Line3 from "../images/Line 3.svg";
//  import Note from "./Notes";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});

  const [loading, setLoading] = useState(true);

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const apiKey = "d7f9ea8fb50339313845602552d39520";
    const city = "Coimbatore";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });

    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const formattedDateTime = currentDateTime.toLocaleString();

  return (
    <div>
      <div>
        <span className="weather-box1"></span>
        <span className="weat-sym">
          <WeatherIcon
            weatherDescription={weatherData.weather[0].description}
          />
        </span>
      </div>
      <div className="time-date">
        {/* Display the formatted date and time */}
        <span className="weather-time">{formattedDateTime}</span>
      </div>
      <p className="temp">{weatherData.main.temp}°C</p>
      <p className="reading">{weatherData.weather[0].description}</p>
      <p className="wind-speed">{weatherData.wind.speed} m/s</p>
      <div className="wind">
        <img src={wind} alt="" style={{ width: "15px", height: "15px" }} />
      </div>
      <p className="humid-value">Humid: {weatherData.main.humidity}%</p>
      <div className="humidity">
        <img src={humidity} alt="" style={{ width: "15px", height: "15px" }} />
      </div>
      <p className="pressure">{weatherData.main.pressure} mbar</p>
      <div className="termo">
        <img src={termo} alt="" style={{ width: "12px", height: "12px" }} />
      </div>
      <div className="line2">
        <img src={Line2} alt="" style={{ width: "30px", height: "30px" }} />
      </div>
      <div className="line3">
        <img src={Line3} alt="" style={{ width: "30px", height: "30px" }} />
      </div>

      {/* <div>
          <Note />
        </div> */}
    </div>
  );
};

export default Weather;
