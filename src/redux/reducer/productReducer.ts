import {
  createAction,
  createAsyncThunk,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IDataFetched, IDataSoucre } from "../../interfaces/values";
import { FETCH_PRODUCT, UPDATE_PRODUCT } from "../../constants";
import axios from "axios";
import { AuthHeader } from "../../configs/Auth";
import { UpdateProduct } from "../../services/Products";

export const fetchAllProduct = createAsyncThunk(FETCH_PRODUCT.ALL, async () => {
  try {
    const url = "http://api.training.div3.pgtest.co/api/v1/product";
    const response = await axios.get(url, {
      headers: AuthHeader,
    });
    const data = response.data.data;

    data.forEach((item: IDataSoucre) => {
      const { createdBy, ...rest } = item;
      return rest;
    });
    console.log("data", data);
    return data;
  } catch (err) {
    console.log("errr>>>>>>>>", err);
  }
});
export const updateProduct = createAsyncThunk(
  UPDATE_PRODUCT.UPDATE_1_PRODUCT,
  async (product: IDataSoucre) => {
    try {
      // return await UpdateProduct(product.id);
    } catch (err) {
      console.log("update err>>>>>>>>>", err);
    }
  }
);
const initialState: IDataFetched = {
  listData: [],
  isError: false,
  isLoading: false,
};
export const ProductReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(
      fetchAllProduct.fulfilled,
      (state, action: PayloadAction<IDataSoucre[]>) => {
        state.listData = action.payload;
        state.isLoading = false;
        state.isError = false;
      }
    )
    .addCase(fetchAllProduct.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    })
    .addCase(fetchAllProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    })
    .addCase(updateProduct.pending, (state, action)=> {
      state.listData
    })
});
