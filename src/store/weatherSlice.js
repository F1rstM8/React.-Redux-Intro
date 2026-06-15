import { createSlice } from '@reduxjs/toolkit';
import { TEMP_RATIO, TEMP_OFFSET, SPEED_CONVERSION_FACTOR } from '../utils/constants';

const initialState = {
  temperature: 10,
  windSpeed: 36,
  tempUnit: 'celsius',
  speedUnit: 'kmh',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    toggleTempUnit: (state) => {
      if (state.tempUnit === 'celsius') {
        state.temperature = state.temperature * TEMP_RATIO + TEMP_OFFSET;
        state.tempUnit = 'fahrenheit';
      } else if (state.tempUnit === 'fahrenheit') {
        state.temperature = (state.temperature - TEMP_OFFSET) / TEMP_RATIO;
        state.tempUnit = 'celsius';
      }
    },
    toggleSpeedUnit: (state) => {
      if (state.speedUnit === 'kmh') {
        state.windSpeed = state.windSpeed / SPEED_CONVERSION_FACTOR;
        state.speedUnit = 'ms';
      } else if (state.speedUnit === 'ms') {
        state.windSpeed = state.windSpeed * SPEED_CONVERSION_FACTOR;
        state.speedUnit = 'kmh';
      }
    },
  },
});

export const { toggleTempUnit, toggleSpeedUnit } = weatherSlice.actions;
export default weatherSlice.reducer;