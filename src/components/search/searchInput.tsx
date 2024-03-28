import Search from "antd/es/input/Search";
import "./searchInput.scss";
import { Input } from "antd";
import { CustomInputProps } from "../../interfaces/input/input";

export const SearchInvoice: React.FC<CustomInputProps> = (props) => {
  return <Input {...props} placeholder="# invoice" />;
};
