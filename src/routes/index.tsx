import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/Auth/LoginPage/loginPage";
import { PayrollPage } from "../pages/Payroll/payrollPage";
import { HomePage } from "../pages/Home/homePage";
import SignUpPage from "../pages/Auth/SignUpPage/signUpPage";
import { ProfilePage } from "../pages/ProfilePage/profilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "payroll",
        element: <PayrollPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);
