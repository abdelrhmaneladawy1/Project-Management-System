import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../Custom/Custom";
import { toast } from "react-toastify";

// Get all Tasks
export const getTasks = createAsyncThunk(
  "GetAllTasks/getTasks",
  async ({ onPress, filterName }: any, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await baseUrl.get(`/api/v1/Task/manager`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
        },
        params: {
          pageSize: 4,
          title: filterName,
          pageNumber: onPress,
        },
      });
      return data?.data;
    } catch (error) {
      toast.error(error);
      rejectWithValue(error.message);
    }
  }
);
// Add Tasks
export const addTask = createAsyncThunk("addTasks/addTask", async (data) => {
  try {
    const fetchData = await baseUrl.post(`/api/v1/Task`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
      },
    });
    return fetchData;
  } catch (error: any) {
    toast.error(error);
  }
});
// Update Tasks
export const updateTask = createAsyncThunk(
  "updateTasks/updateTask",
  async ({ data, id }: any) => {
    try {
      const fetchData = await baseUrl.put(`/api/v1/Task/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
        },
      });
      return fetchData;
    } catch (error: any) {
      toast.error(error);
    }
  }
);

// Delete Task
export const deleteTask = createAsyncThunk(
  "deleteTasks/deleteTask",
  async (id) => {
    try {
      const fetchData = await baseUrl.delete(`/api/v1/Task/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
        },
      });
      return fetchData;
    } catch (error: any) {
      toast.error(error);
    }
  }
);
