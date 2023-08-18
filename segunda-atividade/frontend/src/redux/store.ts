import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countReducer from "./slices/count.slice";
import carrinhoReducer from "./slices/carrinho.slice";

import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { produtoReducer } from "./slices/produto.slice";

const rootReducer = combineReducers({
  count: countReducer,
  produto: produtoReducer,
  carrinho: carrinhoReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["apiProduto"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
