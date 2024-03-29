import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./reducer/productReducer";
import { UserInfoReducer } from "./reducer/userInfoReducer";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    userInfo: UserInfoReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
