
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWind,
  faTint,
  faThermometerHalf,
  faCloudSun,
  faCloudRain,
  faSnowflake,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';

const WeatherIcon = ({ weatherDescription }) => {
  const iconMap = {
    Clear: faCloudSun,
    Clouds: faCloudSun,
    'Few clouds': faCloudSun,
    'Scattered clouds': faCloudSun,
    'Broken clouds': faCloudSun,
    Rain: faCloudRain,
    Snow: faSnowflake,
    Mist: faSmog,
    // Add more mappings as needed for other weather conditions
  };

  const icon = iconMap[weatherDescription] || faCloudSun; // Default to a sun icon if the condition is not recognized

  return (
    <FontAwesomeIcon
      icon={icon}
      size="3x" // You can adjust the size as needed
      style={{ color: '#f0c929' }} // Customize the color of the icon
    />
  );
};

export default WeatherIcon;
