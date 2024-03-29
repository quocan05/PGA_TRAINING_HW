import React, { useState } from "react";
import { Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";
import { UploadAvatarProps } from "../../interfaces/values";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const UploadAvatar: React.FC<UploadAvatarProps> = (props) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [base64, setBase64] = useState("");
  const { setBase64Image } = props;
  const onChange: UploadProps["onChange"] = ({
    file,
    fileList: newFileList,
  }) => {
    if (newFileList.length === 1) {
      setFileList([file]);
      let src = file.thumbUrl as string;
      setBase64(src);
    } else {
      setFileList([]);
    }
  };
  const onRemove = () => {
    setFileList([]);
    setBase64Image("");
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.thumbUrl as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
    //console.log("base>>>>", src);
  };
  const handleOkCrop = () => {
    console.log("base>>>", base64);
  };

  return (
    <ImgCrop rotationSlider onModalOk={() => handleOkCrop()}>
      <Upload
        action="http://api.training.div3.pgtest.co/api/v1/user"
        listType="picture-card"
        fileList={fileList}
        beforeUpload={(file) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            console.log("check >>>>", e.target?.result + "");
            const base64 = e.target?.result as string;
            setBase64(base64);
            setBase64Image(base64);
          };
          reader.readAsDataURL(file);
          return false;
        }}
        onChange={onChange}
        onPreview={onPreview}
        onRemove={onRemove}
        multiple={false}
      >
        {fileList.length < 2 && "+ Upload"}
      </Upload>
    </ImgCrop>
  );
};

export default UploadAvatar;
