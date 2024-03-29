import { Button, Flex, Typography } from "antd";
import "./Header.scss";
import {
  clearAllLocalStorage,
  getLocalStorage,
} from "../../services/localStorage";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export const Header = () => {
  return (
    <div className="header-layout">
      <Typography.Title
        level={2}
        className="header-payroll"
        style={{
          color: "#2955DC",
          fontWeight: "bolder",
          width: "100%",
          textAlign: "center",
        }}
      >
        PGA TRAINING
      </Typography.Title>
    </div>
  );
};

export const HeaderHome = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-wrapper">
      <Flex vertical={false} justify="center" align="flex-start" gap={40}>
        <Button type="primary">Redux Control</Button>
        <Button
          type="primary"
          onClick={() => {
            navigate("payroll");
          }}
        >
          Payroll
        </Button>
        <Button type="primary" onClick={() => navigate("profile")}>
          Profile
        </Button>

        <Button
          type="primary"
          danger
          onClick={() => {
            clearAllLocalStorage();
            navigate("login");
          }}
        >
          Logout
        </Button>
      </Flex>
    </div>
  );
};
