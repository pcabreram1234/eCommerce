import React, { useState } from "react";
import { Menu, Typography } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  UserOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import PochosLogo from "../assets/static/logos/PochosLogo.png";
import "../styles/Menu.css";
const MainMenu = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    setCurrent({ current: e.key });
  };

  const { Link } = Typography;

  return (
    <div className="Menu_container">
      <div className="Menu_brand_container">
        <img className="brandLogo" src={PochosLogo} alt="" />
      </div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="Home">Home</Menu.Item>

        <Menu.Item key="About">About</Menu.Item>

        <Menu.Item key="products">Products</Menu.Item>

        <Menu.Item key="Campaigns">Campaigns</Menu.Item>
      </Menu>

      <div className="Menu_left_icons_container">
        <Link href="/">
          <SearchOutlined />
        </Link>

        <Link href="/">
          <HeartOutlined />
        </Link>

        <Link href="/">
          <UserOutlined />
        </Link>
        <Link href="/">
          <ShopOutlined />
        </Link>
      </div>
    </div>
  );
};

export default MainMenu;
