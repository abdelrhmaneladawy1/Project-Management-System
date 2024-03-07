import { createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import baseUrl from "../../Custom/Custom";

export const saveAuthData = () => {
  if (localStorage.getItem("AuthToken")) {
    const encodedToken: any = localStorage.getItem("AuthToken");
    const decodedToken: any = jwtDecode(encodedToken);
    const role = decodedToken.userGroup;
    console.log({ role });
    localStorage.setItem("role", role);
  }
};
export const fetchDataLogin = createAsyncThunk(
  "login/fetchData",
  async ({ data, navigate }) => {
    const response = await baseUrl
      .post(`/api/v1/Users/Login`, data)
      .then((res) => {
        console.log(res);
        toast.success("successfully loggedIn");
        navigate("/dashboard");
        saveAuthData();
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
export const fetchRegister = createAsyncThunk(
  "Register/fetchRegister",
  async ({ addFormData, navigate }) => {
    const response = await baseUrl
      .post(`/api/v1/Users/Register`, addFormData)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/verify-user");
      })
      .catch((err) => toast.error(err.response.data.message));
    return response;
  }
);
export const fetchVerify = createAsyncThunk(
  "Register/fetchRegister",
  async ({ data, navigate }) => {
    const response = await baseUrl
      .put(`/api/v1/Users/verify`, data)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/login");
      })
      .catch((err) => toast.error(err.response.data.message));
    return response;
  }
);
