import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculatorSlice';
import constructorReducer from './constructorSlice';

export const store = configureStore({
  reducer: {
    constructor: constructorReducer,
    calculator: calculatorReducer,
  },
})