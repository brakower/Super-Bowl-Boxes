import { configureStore } from "@reduxjs/toolkit";
import boxesReducer from "./boxesSlice";

export const store = configureStore({
  reducer: {
    boxes: boxesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
