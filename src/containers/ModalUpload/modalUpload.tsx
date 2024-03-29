import { Modal } from "antd";
import { CustomModalProps } from "../../interfaces/modal/modal";
import "./modalUpload.scss";
import UploadAvatar from "../../components/upload/upload";

export const ModalUploadAvatar: React.FC<CustomModalProps> = (props) => {
  return (
    <Modal {...props} title="Upload Avatar">
      
    </Modal>
  );
};
