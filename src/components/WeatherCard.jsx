import { useSelector, useDispatch } from "react-redux";
import { toggleTempUnit, toggleSpeedUnit } from "../store/weatherSlice";
import { UNITS } from "../utils/constants";

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
          {weather.tempUnit === UNITS.CELSIUS ? "C" : "F"}
        </p>
        <button
          className="action-btn"
          onClick={() => dispatch(toggleTempUnit())}
        >
          Змінити на{" "}
          {weather.tempUnit === UNITS.CELSIUS ? "Фаренгейти" : "Цельсії"}
        </button>
      </section>

      <section className="weather-section">
        <p className="metric-text">
          Швидкість вітру: {Math.round(weather.windSpeed)}
          {weather.speedUnit === UNITS.KMH ? " км/год" : " м/с"}
        </p>
        <button
          className="action-btn"
          onClick={() => dispatch(toggleSpeedUnit())}
        >
          Змінити на {weather.speedUnit === UNITS.KMH ? "м/с" : "км/год"}
        </button>
      </section>
    </article>
  );
};

export default WeatherCard;
