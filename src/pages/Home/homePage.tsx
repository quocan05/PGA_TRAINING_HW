import { Button, Flex } from "antd";
import { HomeLayout } from "../../layouts/Home/homeLayout";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import { getLocalStorage } from "../../services/localStorage";

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
      <>THIS IS HOME PAGE, CONTENT WILL DISPLAY BELOW</>
      <Outlet />
    </HomeLayout>
  );
};
