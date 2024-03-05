import { createSlice } from "@reduxjs/toolkit";
import { fetchDataLogin, saveAuthData } from "../../../Api/Auth/Auth";
import { IState } from "../../../Interfaces/Auth/Auth";

const initialState: IState = {
  role: "",
  data: [],
  loading: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDataLogin.fulfilled, (state, action) => {
      state.role = action.payload;
      state.loading = false;
      saveAuthData();
    });
    builder.addCase(fetchDataLogin.rejected, (state) => {
      state.loading = false;
    });
  },
});

export { saveAuthData };
export default loginSlice.reducer;
