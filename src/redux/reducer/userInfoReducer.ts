import {
  createAsyncThunk,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IInfoUser, ILoginParams } from "../../interfaces/values";
import { FETCH_USER_INFORMATION } from "../../constants";
import axios from "axios";
import { AuthHeader } from "../../configs/Auth";

const initialState: IInfoUser = {
  id: -1,
  name: "",
  email: "",
  gender: "",
  avatar: "",
  region: -1,
  state: -1,
  description: null,
};

export const fetchUserInfo = createAsyncThunk(
  FETCH_USER_INFORMATION.BY_TOKEN,
  async () => {
    try {
      const url = "http://api.training.div3.pgtest.co/api/v1/user";
      const response = await axios.get(url, {
        headers: AuthHeader,
      });
      const data = response.data.data;

      return data;
    } catch (err) {
      console.log("error fetch user");
    }
  }
);

export const UserInfoReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    fetchUserInfo.fulfilled,
    (state, action: PayloadAction<IInfoUser>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.gender = action.payload.gender;
      state.name = action.payload.name;
      state.region = action.payload.region;
      state.state = action.payload.state;
      state.description = action.payload.description;
      state.avatar = action.payload.avatar;
    }
  );
});
