import { createSlice } from '@reduxjs/toolkit';

// Константи для конвертації (уникаємо магічних чисел)
const TEMP_RATIO = 9 / 5;
const TEMP_OFFSET = 32;
const SPEED_CONVERSION_FACTOR = 3.6;

const initialState = {
  temperature: 10,
  windSpeed: 36, // Для зручності розрахунку візьмемо 36 км/год
  tempUnit: 'celsius',
  speedUnit: 'kmh',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    toggleTempUnit: (state) => {
      if (state.tempUnit === 'celsius') {
        state.temperature = Math.round(state.temperature * TEMP_RATIO + TEMP_OFFSET);
        state.tempUnit = 'fahrenheit';
      } else {
        state.temperature = Math.round((state.temperature - TEMP_OFFSET) / TEMP_RATIO);
        state.tempUnit = 'celsius';
      }
    },
    toggleSpeedUnit: (state) => {
      if (state.speedUnit === 'kmh') {
        state.windSpeed = Number((state.windSpeed / SPEED_CONVERSION_FACTOR).toFixed(1));
        state.speedUnit = 'ms';
      } else {
        state.windSpeed = Number((state.windSpeed * SPEED_CONVERSION_FACTOR).toFixed(1));
        state.speedUnit = 'kmh';
      }
    },
  },
});

export const { toggleTempUnit, toggleSpeedUnit } = weatherSlice.actions;
export default weatherSlice.reducer;