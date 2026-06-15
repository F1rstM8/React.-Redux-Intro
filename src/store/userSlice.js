import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: 'Test',
  lastName: 'User',
  email: 'test.user@example.com',
  isFavourite: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleFavourite: (state) => {
      state.isFavourite = !state.isFavourite;
    },
  },
});

export const { toggleFavourite } = userSlice.actions;
export default userSlice.reducer;