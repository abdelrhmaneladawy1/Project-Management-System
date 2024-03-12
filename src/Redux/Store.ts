/** @format */
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Features/Auth/LoginSlice";
import projectsReducer from "./Features/Projects/GetAllProjectsSclie";
import tasksReducer from "./Features/Tasks/GetAllTasksSlice";
import usersReducer from "./Features/Users/GetAllUsersSlice";
const Store = configureStore({
  reducer: {
    login: loginReducer,
    projectsReducer: projectsReducer,
    TasksReducer: tasksReducer,
    usersReducer: usersReducer,
  },
});

export default Store;
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
