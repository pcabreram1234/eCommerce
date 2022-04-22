import React from "react";
import { Menu } from "antd";

import {
  HomeFilled,
  InfoCircleFilled,
  ShopFilled,
  AccountBookFilled,
} from "@ant-design/icons";
import "../styles/MenuResponsive.css";
const MenuResponsive = () => {
  return (
    <div className="MenuResponsive_container">
      <Menu mode="inline">
        <Menu.Item key="Home">
          <HomeFilled />
        </Menu.Item>
        <Menu.Item key="About">
          <InfoCircleFilled />
        </Menu.Item>
        <Menu.Item key="products">
          <ShopFilled />
        </Menu.Item>
        <Menu.Item key="Campaigns">
          <AccountBookFilled />
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuResponsive;
