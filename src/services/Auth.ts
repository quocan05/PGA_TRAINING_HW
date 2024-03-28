import axios from "axios";
import { ILoginParams, ISignUpParams } from "../interfaces/values";

export const getAuthToken = async (param: ILoginParams) => {
  try {
    const res = await axios.post(
      "http://api.training.div3.pgtest.co/api/v1/auth/login", // Sử dụng URL tuyệt đối ở đây
      param
    );
    console.log("fetch ok, res>>>", res.data);
    localStorage.setItem("token", res.data.data.token);
  } catch (error) {
    console.error("Error while fetching token:", error);
  }
};

export const SignUpAPI = async (params: ISignUpParams) => {
  try {
    const res = await axios.post(
      "http://api.training.div3.pgtest.co/api/v1/auth/register",
      params
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

//Login

export const LoginAPI = async (param: ILoginParams) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const res = await axios.post(
      "http://api.training.div3.pgtest.co/api/v1/auth/login",
      param
    );
    return res.data;
  } catch (error: any) {
    console.log(error);
  }
};
