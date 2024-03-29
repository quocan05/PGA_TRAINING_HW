import { SelectProps } from "antd";
import { IOptions } from "../interfaces/values";

export const optionsStatus: IOptions[] = [
  { value: "processing", label: "Processing" },
  { value: "fulfilled", label: "Fulfilled" },
  { value: "pending", label: "Pending" },
  { value: "received", label: "Received" },
];

export const optionsStatusDefault: IOptions = {
  value: "status",
  label: "Status",
};

export const optionsClientDefault: IOptions = {
  value: "client",
  label: "Client",
};

export const FormatDateDDMMYYY = "DD/MM/YYYY";

export enum FETCH_PRODUCT {
  ALL = "all",
  BY_ID = "byID",
}

export enum FETCH_USER_INFORMATION {
  BY_TOKEN = "byToken",
}

export enum UPDATE_PRODUCT {
  UPDATE_1_PRODUCT = "one_product",
}

export enum API_PGA {
  DEFAULT = "http://api.training.div3.pgtest.co/",
 AUTH_LOGIN = "http://api.training.div3.pgtest.co/api/v1/auth/login",
  AUTH_REGISTER = "http://api.training.div3.pgtest.co/api/v1/auth/register",
  USER = "http://api.training.div3.pgtest.co/api/v1/user",
  LOCATION = "http://api.training.div3.pgtest.co/api/v1/location",
  PRODUCT = "http://api.training.div3.pgtest.co/api/v1/product/",
}

export const RoutesPath = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  REDUX_CONTROL: "/redux",
  PAYROLL_TRANSACTION: "/payroll",
  NOT_INCLUDE: "*",
};

export const optionsSelect = [
  { value: "FULFILLED", label: "FULFILLED" },
  { value: "PENDING", label: "PENDING" },
  { value: "PROCESSING", label: "PROCESSING" },
  { value: "RECEIVED", label: "RECEIVED" },
];
