import { FormLogin } from "../../../components/form/form";
import { ILoginParams, NotificationType } from "../../../interfaces/values";
import { AuthLayout } from "../../../layouts/Auth/authLayout";
import { Form, notification, NotificationArgsProps } from "antd";
import { LoginAPI } from "../../../services/Auth";
import { useNavigate } from "react-router";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../../services/localStorage";
import React, { useEffect, useState } from "react";
import { Rule } from "antd/es/form";
import { useDispatch } from "react-redux";
import { fetchUserInfo } from "../../../redux/reducer/userInfoReducer";
import { AppDispatch } from "../../../redux/store";
type NotificationPlacement = NotificationArgsProps["placement"];

export const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const [api, contextHolder] = notification.useNotification();

  const navigate = useNavigate();
  const [form] = Form.useForm();
  const handleLogin = async () => {
    const formValues = await form.getFieldsValue();
    const value: ILoginParams = {
      email: formValues.email,
      password: formValues.password,
    };

    const res = await LoginAPI(value);
    if (res && res.data.token) {
      setLocalStorage("token", res.data.token);
      openNotification(
        "Login sucsess",
        "Wait a second to go home !",
        "bottomLeft"
      );
      await dispatch(fetchUserInfo());
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      openNotification(
        "Login Failed",
        "Check the email and password field are correct!",
        "bottomLeft"
      );
    }
  };

  useEffect(() => {
    if (getLocalStorage("token")) {
      navigate("/");
      return;
    }
  }, []);
  const openNotification = (
    message: string,
    description: string,
    placement: NotificationPlacement
  ) => {
    api.info({
      message,
      description,
      placement,
    });
  };
  return (
    <AuthLayout>
      {contextHolder}
      <FormLogin
        form={form}
        onFinish={() => handleLogin()}
        onFinishFailed={() => {
          console.log("failed");
        }}
      />
    </AuthLayout>
  );
};
