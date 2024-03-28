import { Button, Flex, Form, Input } from "antd";
import { CustomFormProps } from "../../interfaces/form/form";

import {
  ILocationParams,
  ILoginParams,
  ISignUpParams,
  IStateParams,
  PropsSignUp,
} from "../../interfaces/values";
import "./form.scss";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";

import { SignUpAPI } from "../../services/Auth";
import { useEffect, useState } from "react";
import { getCountryAPI, getStateByCountryAPI } from "../../services/Countries";
import { SelectStatusInModal } from "../selects/selects";
export const FormAddNew: React.FC<CustomFormProps> = (props) => {
  return (
    <Form {...props} layout="vertical">
      <Form.Item name="status" label="Status">
        <SelectStatusInModal />
      </Form.Item>
      <Form.Item name="client" label="Client">
        <Input />
      </Form.Item>
      <Form.Item name="order" label="Order">
        <Input />
      </Form.Item>
      <Form.Item name="currency" label="Currency">
        <Input />
      </Form.Item>
      <Form.Item name="fundingMethod" label="Funding Method">
        <Input />
      </Form.Item>
      <Form.Item name="total" label="Total">
        <Input type="number" />
      </Form.Item>
      <Form.Item name="invoice" label="Invoice#">
        <Input />
      </Form.Item>
    </Form>
  );
};

export const FormShowDetail: React.FC<CustomFormProps> = (props) => {
  return (
    <Form {...props} layout="vertical">
      <Form.Item name="status" label="Status">
        <SelectStatusInModal />
      </Form.Item>
      <Form.Item name="client" label="Client">
        <Input />
      </Form.Item>
      <Form.Item name="order" label="Order">
        <Input />
      </Form.Item>
      <Form.Item name="currency" label="Currency">
        <Input />
      </Form.Item>
      <Form.Item name="fundingMethod" label="Funding Method">
        <Input />
      </Form.Item>
      <Form.Item name="total" label="Total">
        <Input type="number" />
      </Form.Item>
      <Form.Item name="invoice" label="Invoice#">
        <Input />
      </Form.Item>
    </Form>
  );
};

export const FormLogin: React.FC<CustomFormProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div className="form-auth-wrapper">
      <Form
        {...props}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        autoComplete="off"
      >
        <Form.Item<ILoginParams>
          label="Email"
          name={"email"}
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<ILoginParams>
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Flex gap={20}>
            <Button type="primary" htmlType="submit">
              Login now
            </Button>
            <Button onClick={() => navigate("/signup")}>Sign up</Button>
          </Flex>
        </Form.Item>
      </Form>
    </div>
  );
};

export const SignUpForm = (props: PropsSignUp) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
      name: "",
      gender: "",
      region: "",
      state: "",
    },
    onSubmit: (initialValues: ISignUpParams) => {
      const signUpAction = async () => {
        try {
          const res = await SignUpAPI(initialValues);
          if (res && res.data.token) {
            localStorage.setItem("token", res.data.token);
            alert("Chénggōng");

            navigate("/login");
          }
        } catch (error: any) {}
      };
      signUpAction();
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("Bạn chưa nhập trường này!")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          "Vui lòng nhập đúng định dạng email"
        ),
      password: yup
        .string()
        .required("Bạn chưa nhập trường này!")
        .min(6, "Mật khẩu phải có nhiều hơn 6 kí tự!")
        .max(12, "Mật khẩu chỉ được tối đã 12 kí tự!"),
      repeatPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Password không trùng khớp")
        .required("Bạn chưa nhập trường này!"),
      name: yup
        .string()
        .required("Bạn chưa nhập trường này!")
        .min(6, "Tên phải có nhiều hơn 6 kí tự!")
        .max(50, "Tên chỉ được tối đã 50 kí tự!"),
      gender: yup.string().required("Bạn chưa chọn giới tính!"),
      region: yup.string().required("Bạn chưa chọn quốc gia"),
      state: yup.string().required("Bạn chưa chọn thành phố!"),
    }),
  });

  const [locations, setLocations] = useState<ILocationParams[]>([]);
  const [states, setStates] = useState<IStateParams[]>([]);
  const navigate = useNavigate();

  const handleChangeRegion = async (e: any) => {
    formik.handleChange(e);
    const listStatebyRegion = await getStateByCountryAPI(e.target.value);
    setStates(listStatebyRegion.data);
  };
  useEffect(() => {
    const fetchLocations = async () => {
      const res = await getCountryAPI();
      setLocations(res.data);
    };
    fetchLocations();
  }, []);

  return (
    <>
      <div className="wrapper">
        <h1>Register Form</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-item">
            <label>Email: </label>
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <span className="err-span">{formik.errors.email}</span>
            )}
          </div>
          <div className="form-item">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password && (
              <span>{formik.errors.password}</span>
            )}
          </div>
          <div className="form-item">
            <label>Re-Password: </label>
            <input
              type="password"
              name="repeatPassword"
              value={formik.values.repeatPassword}
              onChange={formik.handleChange}
            />
            {formik.errors.repeatPassword && formik.touched.repeatPassword && (
              <span>{formik.errors.repeatPassword}</span>
            )}
          </div>
          <div className="form-item">
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name && (
              <span className="err-span">{formik.errors.name}</span>
            )}
          </div>
          <div className="form-item">
            <label>Gender: </label>
            <select
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <option>--Select an option--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {formik.errors.gender && formik.touched.gender && (
              <span className="err-span">{formik.errors.gender}</span>
            )}
          </div>
          <div className="form-item">
            <label>Region: </label>
            <select
              name="region"
              value={formik.values.region}
              onChange={handleChangeRegion}
            >
              <option>--Select an option--</option>
              {locations.length > 0 &&
                locations.map((location) => {
                  return (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  );
                })}
            </select>
            {formik.errors.region && formik.touched.region && (
              <span className="err-span">{formik.errors.region}</span>
            )}
          </div>
          <div className="form-item">
            <label>State: </label>
            <select
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              disabled={!formik.values.region}
            >
              <option>--Select an option--</option>
              {states.length > 0 &&
                states.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
            </select>
            {formik.errors.state && formik.touched.state && (
              <span className="err-span">{formik.errors.state}</span>
            )}
          </div>
          <div className="form-item button">
            <button type="submit">Sign up now</button>
            <button
              style={{ background: "black" }}
              onClick={() => navigate("/login")}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
