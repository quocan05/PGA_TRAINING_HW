import axios from "axios";

export const base64ToBlob = (base64Data: string, fileName: string): Blob => {
  const splitBase64 = base64Data.split(",");
  const byteCharacters = atob(splitBase64[1]);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  console.log("byteArr>>>", byteArray);
  const blob = new Blob([byteArray], { type: "image/jpg" });
  return new File([blob], fileName, { type: 'image/jpeg', lastModified: Date.now() });
};
