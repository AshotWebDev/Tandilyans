import instance from "@/api/instanse";
import { createAsyncThunk } from "@reduxjs/toolkit";
interface Admin {
    id: number;
    name: string;
  }

export const getAdmin = createAsyncThunk<Admin[], number | undefined>(
  'admin/getAdmin',
  async (_, thunkAPI) => {
    try {
      const config = {
        method: 'get',
        url: `admins`,
      };

      const response = await instance(config);

      console.log(response.data, 'resp.data');
      return response.data;
    } catch (error: any) {
      console.log(error, 'error');
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);