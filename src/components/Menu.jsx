import React, { useState } from "react";
import { Menu } from "antd";

import "../styles/Menu.css";
const MainMenu = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    setCurrent({ current: e.key });
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      inlineCollapsed={false}
    >
      <Menu.Item key="Home">Home</Menu.Item>

      <Menu.Item key="About">About</Menu.Item>

      <Menu.Item key="products">Products</Menu.Item>

      <Menu.Item key="Campaigns">Campaigns</Menu.Item>
    </Menu>
  );
};

export default MainMenu;
