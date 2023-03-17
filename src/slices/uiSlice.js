import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  isRuntime: false,
  elements: {
    mainContainer: {
      display: false,
      operators: false,
      numbers: false,
      equal: false,
    },
    board: [],
  }
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    onRuntime: (state) => {
      state.isRuntime = true;
    },
    offRuntime: (state) => {
      state.isRuntime = false;
    },
    addElement: (state, { payload }) => {
      if (payload === 'display') {
        state.elements.board.unshift(payload);
      } else {
        state.elements.board.push(payload);
      }
      state.elements.mainContainer[payload] = true;
    },
    deleteElement: (state, { payload }) => {
      state.elements.board.filter((el, index) => index !== payload);
      state.elements.mainContainer[payload] = false;
    }
  }
});

export const { onRuntime, offRuntime, addElement, deleteElement } = uiSlice.actions;
export default uiSlice.reducer;