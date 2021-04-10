import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./auth/reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const config = {
  key: "user",
  storage,
  whitelist: ["token"]
};

const store = configureStore({
  reducer: { users: persistReducer(config, authReducer) },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

const persiststore = persistStore(store);

export default { store, persiststore };
