export const AuthHeader = { Authorization: localStorage.getItem("token") };

export const UpLoadWithAuthHeader = {
  Authorization: localStorage.getItem("token"),
  "Content-Type": "multipart/form-data",
};
