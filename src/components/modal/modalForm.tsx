import { Modal } from "antd";
import { CustomModalProps } from "../../interfaces/modal/modal";
import { FormShowDetail } from "../form/form";

export const ModalShowDetail: React.FC<CustomModalProps> = (props) => {
  return <Modal {...props}></Modal>;
};

export const ModalAddNew: React.FC<CustomModalProps> = (props) => {
  return <Modal {...props}></Modal>;
};
