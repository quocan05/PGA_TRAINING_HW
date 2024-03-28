import { Children } from "react";
import { AuthLayoutProps } from "../../interfaces/layouts";
import { Header } from "../Header/Header";
import "./authLayout.scss";
export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth-layout">
      <Header />
      <div className="auth-content">{children}</div>
    </div>
  );
};
