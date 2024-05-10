import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer, // Notera att 'reducer' är en nyckel här
});

export default store;
