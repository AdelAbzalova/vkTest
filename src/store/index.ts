import { configureStore } from "@reduxjs/toolkit";
import groupSlice from "./groupSlice";

const store = configureStore({
  reducer: {
    groups: groupSlice,
  },
});

export default store;

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;