import axios from "axios";
import { AuthHeader } from "../configs/Auth";
import { IDataSoucre } from "../interfaces/values";

export const getAllProducts = async () => {
  const url = "http://api.training.div3.pgtest.co/api/v1/product";
  try {
    const res = await axios.get(url, { headers: AuthHeader });
    return res.data;
  } catch (err) {
    console.log("err get all product ?>>>>>", err);
  }
};

export const getProductByID = async (id?: number) => {
  const url = `http://api.training.div3.pgtest.co/api/v1/product/${id}`;
  try {
    const res = await axios.get(url, { headers: AuthHeader });
    const data = res.data;
    return data;
  } catch (err) {
    console.log("err get by ID ?>>>>>>>>>>>>>>>>", err);
  }
};

export const DeleteProductByID = async (id?: number) => {
  const url = `http://api.training.div3.pgtest.co/api/v1/product/${id}`;
  try {
    const res = await axios.delete(url, { headers: AuthHeader });
    return res;
  } catch (err) {
    console.log("err delete by ID ?>>>>>>>>>>>>>>>>", err);
  }
};

export const AddProduct = async (product: IDataSoucre) => {
  const url = `http://api.training.div3.pgtest.co/api/v1/product`;
  try {
    return await axios.post(url, product, { headers: AuthHeader });
  } catch (err) {
    console.log("err create product >>>>>", err);
  }
};

export const UpdateProduct = async (product: IDataSoucre) => {
  const url = `http://api.training.div3.pgtest.co/api/v1/product`;
  try {
    return await axios.put(url, product, { headers: AuthHeader });
  } catch (err) {
    console.log("err update ??????", err);
  }
};
