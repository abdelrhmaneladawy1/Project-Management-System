import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import baseUrl from "../../Custom/Custom";

// Get all Users
export const getUsers = createAsyncThunk(
  "GetAllUsers/getUsers",
  async ({ onPress, filterName, filterEmail, pageSize }: any, thunkAPI) => {
    console.log(filterEmail);
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await baseUrl.get(`/api/v1/Users/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
        },
        params: {
          pageSize: pageSize,
          userName: filterName,
          email: filterEmail,
          pageNumber: onPress,
        },
      });
      return data?.data;
    } catch (error: any) {
      toast.error(error);
      rejectWithValue(error.message);
    }
  }
);

export const blockUser = createAsyncThunk(
  "blockUsers/blockUser",
  async ({ user }) => {
    try {
      const fetchData = await baseUrl.put(`/api/v1/Users/${user?.id}`, user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
        },
      });
    } catch (error: any) {
      toast.error(error);
    }
  }
);
