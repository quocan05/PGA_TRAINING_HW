import { MainLayoutProps } from "../../interfaces/layouts";
import { Header } from "../Header/Header";
import "./mainLayout.scss";

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      {children}
    </div>
  );
};
