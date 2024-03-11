import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import baseUrl from "../../Custom/Custom";

// Get all Projects
export const getProjects = createAsyncThunk(
  "GetAllProjects/getProjects",
  async ({ onPress, filterName }: any, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await baseUrl.get(`/api/v1/Project/manager`, {
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
// Add Projects
export const addProject = createAsyncThunk(
  "addProjects/addProject",
  async (data) => {
    try {
      const fetchData = await baseUrl.post(`/api/v1/Project`, data, {
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
// Update Projects
export const updateProject = createAsyncThunk(
  "updateProjects/updateProject",
  async ({ data, id }: any) => {
    try {
      const fetchData = await baseUrl.put(`/api/v1/Project/${id}`, data, {
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

// Delete Projects
export const deleteProject = createAsyncThunk(
  "deleteProjects/deleteProject",
  async (id) => {
    try {
      const fetchData = await baseUrl.delete(`/api/v1/Project/${id}`, {
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
