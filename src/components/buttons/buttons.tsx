import { Button } from "antd";
import "./buttons.scss";
import { CustomButtonProps } from "../../interfaces/button/button";
import { DeleteOutlined } from "@ant-design/icons";
export const ButtonApply: React.FC<CustomButtonProps> = (props) => {
  return (
    <Button type="primary" className="buttons-custom" {...props}>
      Apply
    </Button>
  );
};
export const ButtonClear: React.FC<CustomButtonProps> = (props) => {
  return (
    <Button danger className="buttons-custom" {...props}>
      Clear
    </Button>
  );
};

export const ButtonDelete: React.FC<CustomButtonProps> = (props) => {
  return <Button {...props} shape="circle" icon={<DeleteOutlined />} danger />;
};

export const ButtonShowDetail: React.FC<CustomButtonProps> = (props) => {
  return <Button {...props}>Show Detail</Button>;
};
