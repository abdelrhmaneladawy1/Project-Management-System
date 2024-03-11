/** @format */
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Features/Auth/LoginSlice";
import projectsReducer from "./Features/Projects/GetAllProjectsSclie";
const Store = configureStore({
  reducer: {
    login: loginReducer,
    projectsReducer: projectsReducer,
  },
});

export default Store;
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
