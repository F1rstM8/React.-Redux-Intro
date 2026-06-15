import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTempUnit, toggleSpeedUnit } from '../store/weatherSlice';

const WeatherCard = () => {
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '300px' }}>
      <h2>🌤 Поточна погода</h2>
      
      <div style={{ marginBottom: '1rem' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          Температура: {weather.temperature}° 
          {weather.tempUnit === 'celsius' ? 'C' : 'F'}
        </p>
        <button onClick={() => dispatch(toggleTempUnit())}>
          Змінити на {weather.tempUnit === 'celsius' ? 'Фаренгейти' : 'Цельсії'}
        </button>
      </div>

      <div>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          Швидкість вітру: {weather.windSpeed} 
          {weather.speedUnit === 'kmh' ? ' км/год' : ' м/с'}
        </p>
        <button onClick={() => dispatch(toggleSpeedUnit())}>
          Змінити на {weather.speedUnit === 'kmh' ? 'м/с' : 'км/год'}
        </button>
      </div>
    </div>
  );
};

export default WeatherCard;