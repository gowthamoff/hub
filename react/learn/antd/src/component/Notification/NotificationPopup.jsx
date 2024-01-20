import React, { useEffect } from "react"; 
import { Space, Button,notification } from "antd";
import {
  CheckCircleOutlined,
  SmileOutlined,
  WarningOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const NotificationPopup = ({ type, msg, msgDes }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = () => {
    let message, description, backgroundColor, icon;

    switch (type) {
      case "success":
        message = msg;
        description = msgDes;
        backgroundColor = "#04844B";
        icon = <CheckCircleOutlined style={{ color: "white" }} />;
        break;
      case "info":
        message = msg;
        description = msgDes;
        backgroundColor = "blue";
        icon = <SmileOutlined style={{ color: "white" }} />;
        break;
      case "warning":
        message = msg;
        description = msgDes;
        backgroundColor = "yellow";
        icon = <WarningOutlined style={{ color: "white" }} />;
        break;
      case "Failure":
        message = msg;
        description = msgDes;
        backgroundColor = "red";
        icon = <CloseCircleOutlined style={{ color: "white" }} />;
        break;
      // default:
      //   message = msg;
      //   description = msgDes;
      //   backgroundColor = "gray";
      //   icon = <InfoCircleOutlined style={{ color: "white" }} />;
      //   break;
    }

    api.open({
      message: { message },
      key: "message",
      description: description,
      icon,
      style: {
        backgroundColor,
      },
    });
  };

  useEffect(() => {
    openNotificationWithIcon();
  }, []);

  return (
    <>
      {contextHolder}
      {/* <Space>
      <Button onClick={() => openNotificationWithIcon("success")}>
        Success
      </Button>
      <Button onClick={() => openNotificationWithIcon("info")}>Info</Button>
      <Button onClick={() => openNotificationWithIcon("warning")}>
        Warning
      </Button>
      <Button onClick={() => openNotificationWithIcon("error")}>Error</Button>
      </Space> */}
    </>
  );
};

export default NotificationPopup;
