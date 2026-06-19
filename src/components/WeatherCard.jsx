import { useSelector, useDispatch } from "react-redux";
import { toggleTempUnit, toggleSpeedUnit } from "../store/weatherSlice";
import { UNITS } from "../utils/constants";


const TEMP_UNIT_LABELS = {
  [UNITS.CELSIUS]: "C",
  [UNITS.FAHRENHEIT]: "F",
};

const SPEED_UNIT_LABELS = {
  [UNITS.KMH]: " км/год",
  [UNITS.MS]: " м/с",
};

const TEMP_BTN_LABELS = {
  [UNITS.CELSIUS]: "Фаренгейти",
  [UNITS.FAHRENHEIT]: "Цельсії",
};

const SPEED_BTN_LABELS = {
  [UNITS.KMH]: "м/с",
  [UNITS.MS]: "км/год",
};

const WeatherCard = () => {
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();


  const tempLabel = TEMP_UNIT_LABELS[weather.tempUnit] || "";
  const tempBtnText = TEMP_BTN_LABELS[weather.tempUnit] || "іншу одиницю";
  
  const speedLabel = SPEED_UNIT_LABELS[weather.speedUnit] || "";
  const speedBtnText = SPEED_BTN_LABELS[weather.speedUnit] || "іншу одиницю";

  return (
    <article className="card">
      <header>
        <h2>Поточна погода</h2>
      </header>

      <section className="weather-section">
        <p className="metric-text">
          Температура: {Math.round(weather.temperature)}°{tempLabel}
        </p>
        <button
          className="action-btn"
          onClick={() => dispatch(toggleTempUnit())}
        >
          Змінити на {tempBtnText}
        </button>
      </section>

      <section className="weather-section">
        <p className="metric-text">
          Швидкість вітру: {Math.round(weather.windSpeed)}{speedLabel}
        </p>
        <button
          className="action-btn"
          onClick={() => dispatch(toggleSpeedUnit())}
        >
          Змінити на {speedBtnText}
        </button>
      </section>
    </article>
  );
};

export default WeatherCard;