import { createSlice } from "@reduxjs/toolkit";
import { getTasks } from "../../../Api/Tasks/Tasks";

const initialState: Props = {
  tasksData: [],
  loading: false,
  error: null,
};
export const GetAllTasksSlice = createSlice({
  name: "getTasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTasks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.tasksData = action.payload;
    });
    builder.addCase(getTasks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});
export default GetAllTasksSlice.reducer;
