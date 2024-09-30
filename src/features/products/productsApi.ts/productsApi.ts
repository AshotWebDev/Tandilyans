import instance from "@/api/instanse";
import { createAsyncThunk } from "@reduxjs/toolkit";
interface Product {
    id: number;
    name: string;
  }

export const getProducts = createAsyncThunk<Product[], number | undefined>(
  'products/getProducts',
  async (id, thunkAPI) => {
    try {
      const prodId = id ? `/${id}` : '';
      const config = {
        method: 'get',
        url: `products${prodId}`,
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


export const postProducts = createAsyncThunk<Product[], any | undefined>(
    'products/postProducts',
    async (body, thunkAPI) => {
        console.log(body);
        
      try {
        const config = {
          method: 'POST',
          url: '/add',
          data: body
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



  export const deleteProducts = createAsyncThunk<Product[], number | undefined>(
    'products/postProducts',
    async (id, thunkAPI) => {
        
      try {
        const config = {
          method: 'DELETE',
          url: `del/${id}`
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