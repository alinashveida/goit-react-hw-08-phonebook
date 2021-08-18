import reducer from "./reducer";
//import authSlice from './auth/auth-slice'
import { authReducer } from "./auth";

import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import logger from "redux-logger";

const middleware = [...getDefaultMiddleware(), logger];

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default { store };
