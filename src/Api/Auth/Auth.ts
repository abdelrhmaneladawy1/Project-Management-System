import { jwtDecode } from "jwt-decode";
import baseUrl from "../../Custom/Custom";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const saveAuthData = () => {
  if (localStorage.getItem("AuthToken")) {
    const encodedToken: any = localStorage.getItem("AuthToken");
    const decodedToken: any = jwtDecode(encodedToken);
    const role = decodedToken.roles[0];
    localStorage.setItem("role", role);
  }
};
export const fetchDataLogin = createAsyncThunk(
  "login/fetchData",
  async ({ data, navigate }) => {
    const response = await baseUrl
      .post(`/api/v1/Users/Login`, data)
      .then((res) => {
        toast.success("successfully loggedIn");
        navigate("/dashboard");
        localStorage.setItem("AuthToken", res.data.token);
      })
      .catch((err) => toast.error(err.response.data.message));
    return response;
  }
);
export const fetchDataForgetPass = createAsyncThunk(
  "forgetPassword/fetchDataForgetPass",
  async ({ userData, navigate }) => {
    const response = await baseUrl
      .post(`/api/v1/Users/Reset/Request`, userData)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/reset-password");
      })
      .catch((err) => toast.error(err.response.data.message));
    return response;
  }
);

export const fetchResetPassword = createAsyncThunk(
  "ResetPassword/fetchResetPassword",
  async ({ data, navigate }) => {
    const response = await baseUrl
      .post(`/api/v1/Users/Reset`, data)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/login");
      })
      .catch((err) => toast.error(err.response.data.message));
    return response;
  }
);
