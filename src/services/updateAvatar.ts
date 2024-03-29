import axios from "axios";
import { base64ToBlob } from "../utils/base64ToBlob";
import { API_PGA } from "../constants";
import { getLocalStorage } from "./localStorage";
import { UpLoadWithAuthHeader } from "../configs/Auth";

export const updateAvatar = async (base64Data: string, fileName: string) => {
  try {
    const blobData = base64ToBlob(base64Data, "avatar.jpeg");
    const formData = new FormData();
    formData.append("file", blobData);
    const response = await axios.put(API_PGA.USER, formData, {
      headers: UpLoadWithAuthHeader,
    });
    console.log("Upload successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Upload failed:", error);
  }
};
