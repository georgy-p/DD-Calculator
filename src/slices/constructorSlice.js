import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  isRuntime: false,
  elements: [],
};

export const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    onRuntime: (state) => {
      state.isRuntime = true;
    },
    offRuntime: (state) => {
      state.isRuntime = false;
    },
    addElement: (state, { payload }) => {
      state.elements.push(payload);
    },
    deleteElement: (state, { payload }) => {
      state.elements.filter((el, index) => index !== payload);
    }
  }
});

export const { onRuntime, offRuntime, addElement } = constructorSlice.actions;
export default constructorSlice.reducer;
