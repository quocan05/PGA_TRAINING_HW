import { message } from "antd";

export const confirmDeleteMsg = () => {
  return message.success("Được, quân tử đấy");
};

export const cancelDeleteMsg = () => {
  return message.error("Không phải quân tử rồi");
};

export const doneUpdateMessage = () => {
  return message.success("Thay đổi giá trị thành công !");
};


export const doneUpdateImage = () => {
  return message.success("Update avatar thanh cong !");
};