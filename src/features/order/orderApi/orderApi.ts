import instance from "@/api/instanse";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface orderProduct {
    fullName: string;
    productName: string;
    phone: string;
    message: string;
}

export const postOrder = createAsyncThunk<orderProduct, orderProduct>(
    'order/postOrder',
    async (body, thunkAPI) => {
        console.log(body);
        
      try {
        const config = {
          method: 'POST',
          url: '/send-email',
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
