import { useCallback, useState } from "react";
import "./sigUpPage.scss";
import { ISignUpParams } from "../../../interfaces/values";
import SignUpForm from "../../../components/form/form";
import { AuthLayout } from "../../../layouts/Auth/authLayout";
const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const onSignUp = useCallback(async (values: ISignUpParams) => {
    async (values: ISignUpParams) => {
      setErrMsg("");
      setLoading(false);
    };
    console.log("check values >>>>>>", values);
    setErrMsg("");
    setLoading(true);
  }, []);
  return (
    <div className="wrapper-signupform">
      <AuthLayout>
        <SignUpForm onSignUp={onSignUp} loading={false} errMsg={""} />
      </AuthLayout>
    </div>
  );
};

export default SignUpPage;
