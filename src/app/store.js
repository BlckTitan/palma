import { configureStore } from '@reduxjs/toolkit';
import purchaseReducer from './purchaseSlice/purchaseSlice'

const store = configureStore({
  reducer: {
    formStep: purchaseReducer,
  },
});
export default  store;