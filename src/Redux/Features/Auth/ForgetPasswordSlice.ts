import { createSlice } from "@reduxjs/toolkit";
import { fetchDataForgetPass } from "../../../Api/Auth/Auth";
import { IState } from "../../../Interfaces/Auth/Auth";

const initialState: IState = {
  data: [],
  loading: false,
};
const forgetPasswordSlice = createSlice({
  name: "forgetPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataForgetPass.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDataForgetPass.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchDataForgetPass.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default forgetPasswordSlice.reducer;
