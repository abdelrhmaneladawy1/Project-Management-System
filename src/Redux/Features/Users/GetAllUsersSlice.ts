import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../../Api/Users/Users";

const initialState: Props = {
  usersData: [],
  loading: false,
  error: null,
};
export const GetAllProjectsSlice = createSlice({
  name: "getProjects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.usersData = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});
export default GetAllProjectsSlice.reducer;
