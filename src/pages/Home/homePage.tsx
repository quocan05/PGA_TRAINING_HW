import { Button, Flex } from "antd";
import { HomeLayout } from "../../layouts/Home/homeLayout";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import { getLocalStorage } from "../../services/localStorage";
import "./homePage.scss";
export const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getLocalStorage("token")) {
      navigate("/login");
      return;
    }
  }, []);
  return (
    <HomeLayout>
      <div className="home-title">THIS IS HOME PAGE, CONTENT WILL DISPLAY BELOW</div>
      <Outlet />
    </HomeLayout>
  );
};
