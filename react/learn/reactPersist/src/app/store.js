import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit"; 
import { encryptTransform } from "redux-persist-transform-encrypt";

const encryptor = encryptTransform({
  secretKey: "wekjnfwef6wdjwefdwdwejf53", 
  onError: function (error) { 
    console.error("Encryption Error:", error);
  },
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  transforms: [encryptor],
}; 

const rootReducer = combineReducers({
  counter: counterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
