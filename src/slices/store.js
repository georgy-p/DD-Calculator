import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculatorSlice';
import uiReducer from './uiSlice';

export default configureStore({
  reducer: {
    calculator: calculatorReducer,
    ui: uiReducer,
  },
})