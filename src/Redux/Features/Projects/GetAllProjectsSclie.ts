import { createSlice } from "@reduxjs/toolkit";
import { getProjects } from "../../../Api/Projects/Projects";

const initialState: Props = {
  projectsData: [],
  loading: false,
  error: null,
};
export const GetAllProjectsSlice = createSlice({
  name: "getProjects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProjects.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.loading = false;
      state.projectsData = action.payload;
    });
    builder.addCase(getProjects.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});
export default GetAllProjectsSlice.reducer;
