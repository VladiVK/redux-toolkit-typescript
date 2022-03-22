import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postAPI } from '../services/PostService';

import userReducer from './reducers/userSlice';

const rootReducer = combineReducers({
  userReducer,
  [postAPI.reducerPath]: postAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // RTK Query
    middleware: (getDefaultMiddleWare) => {
      return getDefaultMiddleWare().concat(postAPI.middleware);
    },
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
