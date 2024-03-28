import { HomeLayoutProps } from "../../interfaces/layouts";
import { Header, HeaderHome } from "../Header/Header";
import { MainLayout } from "../Main/mainLayout";

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <MainLayout>
      <HeaderHome />
      {children}
    </MainLayout>
  );
};
