import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import clienteReducer from "../Reducers/clienteReducers";
import corsiReducer from "../Reducers/corsiReducers";

const reducers = combineReducers({
  cliente: clienteReducer,
  corsi: corsiReducer,
});

// export default reducers;

const persistConfig = {
  key: "capstone",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
