
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faWind,
  // faTint,
  // faThermometerHalf,
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
    
  };

  const icon = iconMap[weatherDescription] || faCloudSun; 

  return (
    <FontAwesomeIcon
      icon={icon}
      size="3x" 
      style={{ color: '#f0c929' }} 
    />
  );
};

export default WeatherIcon;
