/** @format */
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Features/Auth/LoginSlice";
import projectsReducer from "./Features/Projects/GetAllProjectsSclie";
import tasksReducer from "./Features/Tasks/GetAllTasksSlice";
const Store = configureStore({
  reducer: {
    login: loginReducer,
    projectsReducer: projectsReducer,
    TasksReducer: tasksReducer,
  },
});

export default Store;
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
