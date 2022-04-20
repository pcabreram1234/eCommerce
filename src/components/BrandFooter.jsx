import React from "react";
import { Typography } from "antd";
import {
  AppleFilled,
  AmazonSquareFilled,
  FacebookOutlined,
  TwitterOutlined,
  InstagramFilled,
} from "@ant-design/icons";
import "../styles/BrandFooter.css";
const BrandFooter = () => {
  const { Text } = Typography;
  return (
    <div className="BrandFooter_container">
      <Text type="secondary" strong>
        Best Brands
      </Text>
      <div className="Brands_icon_container">
        <AppleFilled />
        <AmazonSquareFilled />
        <FacebookOutlined />
        <TwitterOutlined />
        <InstagramFilled />
      </div>
    </div>
  );
};

export default BrandFooter;
