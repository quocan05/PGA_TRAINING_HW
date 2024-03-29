import { ReactNode } from "react";

export interface IOptions {
  value: string;
  label: string;
}
export interface IDataSoucre {
  id?: number;
  status?: string;
  currency?: string;
  fundingMethod?: string;
  total?: number;
  order?: string;
  client?: string;
  invoice?: string;
  createdBy?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IDataFetched {
  listData: IDataSoucre[];
  isError: boolean;
  isLoading: boolean;
}

export interface ILoginParams {
  email: string;
  password: string;
}

export interface ISignUpParams {
  email: string;
  password: string;
  repeatPassword: string;
  name: string;
  gender: string;
  region: string;
  state: string;
}

export interface IInfoUser {
  id: number;
  email: string;
  name: string;
  gender: string;
  avatar: string;
  region: number;
  state: number;
  description: null | string;
}

export interface ILocationParams {
  id: string | number;
  name: string;
  pid: number | null;
}
export interface IStateParams {
  id: string;
  name: string;
  pid: number | null;
}
export type PropsSignUp = {
  onSignUp(values: ISignUpParams): void;
  loading: boolean;
  errMsg: string;
};

export type NotificationType = "success" | "info" | "warning" | "error";


export interface UploadAvatarProps {
  setBase64Image: (base64Image: string) => void;
}