import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import clienteReducer from "../Reducers/clienteReducers";
import corsiReducer from "../Reducers/corsiReducers";
import insegnantiReducer from "../Reducers/insegnanteReducers";
import abbonamentoReducer from "../Reducers/abbonamentoReducers";

const reducers = combineReducers({
  cliente: clienteReducer,
  corsi: corsiReducer,
  insegnante: insegnantiReducer,
  abbonamento: abbonamentoReducer,
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
