import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { saveAuthData } from "../../../Api/Auth/Auth";
import baseUrl from "../../../Custom/Custom";

interface LoginState {
  role: string;
  data: [];
  loading: boolean;
}
const initialState: LoginState = {
  role: "",
  data: [],
  loading: false,
};

const fetchData: any = createAsyncThunk("login/fetchData", async (userData) => {
  const response = await baseUrl
    .post(`/api/v1/Users/Login`, userData)
    .then((res) => {
      toast.success("successfully loggedIn");
      localStorage.setItem("AuthToken", res.data.token);
    })
    .catch((err) => toast.error(err.response.data.message));
  return response;
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state: any, action) => {
      state.role = action.payload;
      state.loading = false;
      saveAuthData();
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.loading = false;
    });
  },
});

export { fetchData, saveAuthData };
export default loginSlice.reducer;
