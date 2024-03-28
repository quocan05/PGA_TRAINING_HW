import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/Auth/LoginPage/loginPage";
import { PayrollPage } from "../pages/Payroll/payrollPage";
import { HomePage } from "../pages/Home/homePage";
import SignUpPage from "../pages/Auth/SignUpPage/signUpPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "payroll",
        element: <PayrollPage />,
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
