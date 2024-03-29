import { Avatar, Button, Flex, Image, Layout, Space, Typography } from "antd";
import "./profilePage.scss";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchUserInfo } from "../../redux/reducer/userInfoReducer";
import { ModalUploadAvatar } from "../../containers/ModalUpload/modalUpload";
import UploadAvatar from "../../components/upload/upload";
import { updateAvatar } from "../../services/updateAvatar";
import { API_PGA } from "../../constants";
import { doneUpdateImage } from "../../utils/showMessage";

export const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const userInfo = useSelector((state: RootState) => state.userInfo);
  const [base64Image, setBase64Image] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const handleUpdate = async () => {
    await updateAvatar(base64Image, "img");
    doneUpdateImage();
    setTimeout(() => {
      dispatch(fetchUserInfo());
      setShowModal(false);
    }, 1000);
  };
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [userInfo]);
  return (
    <>
      <div className="wrapper-profile">
        <Typography.Title level={2} style={{ fontWeight: "bolder" }}>
          Hello {userInfo.name}
        </Typography.Title>
        <div className="detail-content">
          <Flex justify="center" align="flex-start" vertical={false} gap={60}>
            <Avatar
              size={128}
              src={API_PGA.DEFAULT + userInfo.avatar}

              //icon={userInfo.avatar ? <UserOutlined /> : <></>}
            />
            <Space direction="vertical">
              <Typography.Title level={3}>
                Name:{userInfo.name}
              </Typography.Title>
              <Typography.Title level={3}>
                Email:{userInfo.email}
              </Typography.Title>
              <Typography.Title level={3}>
                State:{userInfo.state}
              </Typography.Title>
              <Typography.Title level={3}>
                Region:{userInfo.region}
              </Typography.Title>
              <Button
                size="large"
                type="primary"
                style={{ background: "#AC7B25", color: "#FDFFFE" }}
                onClick={() => setShowModal(true)}
              >
                Update Image
              </Button>
            </Space>
          </Flex>
        </div>
      </div>
      <ModalUploadAvatar
        centered
        title="Upload Image"
        open={showModal}
        onCancel={() => setShowModal(false)}
        onOk={() => handleUpdate()}
        destroyOnClose
      >
        <UploadAvatar setBase64Image={setBase64Image} />
        {base64Image ? <Image width={200} src={base64Image} /> : <></>}
      </ModalUploadAvatar>
    </>
  );
};
