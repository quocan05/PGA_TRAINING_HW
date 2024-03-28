import { FormProps } from "antd";
import { Rule } from "antd/es/form";

export interface CustomFormProps extends FormProps {
    
}
export interface CustomFormValidateProps extends FormProps {
    emailRules: Rule[];
}
