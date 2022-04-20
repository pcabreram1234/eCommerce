import React from "react";
import {
  FacebookFilled,
  InstagramOutlined,
  TwitterSquareFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { Typography } from "antd";
import "../styles/Contacts.css"
const Contacts = () => {
  const { Text } = Typography;

  return (
    <div className="Contacts_container">
      <div className="left">
        <FacebookFilled />
        <InstagramOutlined />
        <TwitterSquareFilled />
        <YoutubeFilled />
      </div>

      <div className="right">
        <Text type="secondary">English</Text>
        <Text type="secondary">Ⓒ 2022 Pocho Store All Rights Reserved</Text>
      </div>
    </div>
  );
};

export default Contacts;
