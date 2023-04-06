import { configureStore } from '@reduxjs/toolkit';
import purchaseReducer from './purchaseSlice/purchaseSlice'

const store = configureStore({
  reducer: {
    subscriptionData: purchaseReducer,
  },
});
export default  store;