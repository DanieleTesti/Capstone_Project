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
  key: "new-project",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
