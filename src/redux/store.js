import reducer from "./reducer";

import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import logger from "redux-logger";

const middleware = [...getDefaultMiddleware(), logger];

const rootReducer = combineReducers({
  contacts: reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default { store };
