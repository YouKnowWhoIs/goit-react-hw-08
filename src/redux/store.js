import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/contactsSlice.js";
import { filterReducer } from "./filters/filtersSlice.js";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  contacts: contactReducer,
  filters: filterReducer,
});

const persisteReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persisteReducer,
});

export const persistor = persistStore(store);

export default store;
