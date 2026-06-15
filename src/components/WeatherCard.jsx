import { useSelector, useDispatch } from 'react-redux';
import { toggleTempUnit, toggleSpeedUnit } from '../store/weatherSlice';

const WeatherCard = () => {
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  return (
    <article className="card">
      <header>
        <h2>Поточна погода</h2>
      </header>
      
      <section className="weather-section">
        <p className="metric-text">
          Температура: {Math.round(weather.temperature)}° 
          {weather.tempUnit === 'celsius' ? 'C' : 'F'}
        </p>
        <button className="action-btn" onClick={() => dispatch(toggleTempUnit())}>
          Змінити на {weather.tempUnit === 'celsius' ? 'Фаренгейти' : 'Цельсії'}
        </button>
      </section>

      <section className="weather-section">
        <p className="metric-text">
          Швидкість вітру: {Math.round(weather.windSpeed)} 
          {weather.speedUnit === 'kmh' ? ' км/год' : ' м/с'}
        </p>
        <button className="action-btn" onClick={() => dispatch(toggleSpeedUnit())}>
          Змінити на {weather.speedUnit === 'kmh' ? 'м/с' : 'км/год'}
        </button>
      </section>
    </article>
  );
};

export default WeatherCard;