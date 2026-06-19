import { createSlice } from "@reduxjs/toolkit";
import {
  TEMP_RATIO,
  TEMP_OFFSET,
  SPEED_CONVERSION_FACTOR,
  UNITS,
} from "../utils/constants";

const initialState = {
  temperature: 10,
  windSpeed: 36,
  tempUnit: UNITS.CELSIUS,
  speedUnit: UNITS.KMH,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    toggleTempUnit: (state) => {
      if (state.tempUnit === UNITS.CELSIUS) {
        state.temperature = state.temperature * TEMP_RATIO + TEMP_OFFSET;
        state.tempUnit = UNITS.FAHRENHEIT;
      } else if (state.tempUnit === UNITS.FAHRENHEIT) {
        state.temperature = (state.temperature - TEMP_OFFSET) / TEMP_RATIO;
        state.tempUnit = UNITS.CELSIUS;
      } else {
        console.warn(`Невідома одиниця температури: ${state.tempUnit}`);
      }
    },
    toggleSpeedUnit: (state) => {
      if (state.speedUnit === UNITS.KMH) {
        state.windSpeed = state.windSpeed / SPEED_CONVERSION_FACTOR;
        state.speedUnit = UNITS.MS;
      } else if (state.speedUnit === UNITS.MS) {
        state.windSpeed = state.windSpeed * SPEED_CONVERSION_FACTOR;
        state.speedUnit = UNITS.KMH;
      } else {
        console.warn(`Невідома одиниця швидкості: ${state.speedUnit}`);
      }
    },
  },
});

export const { toggleTempUnit, toggleSpeedUnit } = weatherSlice.actions;
export default weatherSlice.reducer;
