import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

import { useAuthState } from 'hooks';

export const DashboardWeatherContainer = () => {
  const { user } = useAuthState();
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.REACT_APP_WEATHER_TOKEN,
    lat: '52.092876',
    lon: '5.104480',
    lang: user?.language,
    unit: 'metric', // values are (metric, standard, imperial)
  });

  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang={user?.language}
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};
