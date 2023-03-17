import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nums: {
    num1: [0],
    num2: [],
  },
  operator: null,
  result: {
    isResult: false,
    
  }
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addNum1: (state, { payload }) => {
      state.nums.num1.push(payload);
    },
    addNum2: (state, { payload }) => {
      state.nums.num2.push(payload);
    },
    addOperator: (state, { payload }) => {
      state.operator = payload;
    },

  }
});

export const { addNum1, addNum2, addOperator } = calculatorSlice.actions;
export default calculatorSlice.reducer;

