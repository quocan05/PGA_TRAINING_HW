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

export enum UPDATE_PRODUCT {
  UPDATE_1_PRODUCT = 'one_product'
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
