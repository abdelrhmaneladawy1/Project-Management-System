import { createSlice } from "@reduxjs/toolkit";
import { fetchResetPassword } from "../../../Api/Auth/Auth";
import { IState } from "../../../Interfaces/Auth/Auth";

const initialState: IState = {
  data: [],
  loading: false,
};
const ResetPasswordSlice = createSlice({
  name: "ResetPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchResetPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchResetPassword.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchResetPassword.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default ResetPasswordSlice.reducer;
