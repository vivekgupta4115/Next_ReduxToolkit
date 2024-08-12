// redux/slice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      state.push({ name: action.payload });
    },

    removeUser: (state, action) => {
      return state.filter((item) => item.name !== action.payload);
    }
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
