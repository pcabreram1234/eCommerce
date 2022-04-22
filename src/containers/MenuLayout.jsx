import React from "react";
import { Typography } from "antd";
import { useMediaQuery } from "react-responsive";
import MenuResponsive from "../components/MenuResponsive";
import Menu from "../components/Menu";
import PochosLogo from "../assets/static/logos/PochosLogo.png";
import {
  SearchOutlined,
  HeartOutlined,
  UserOutlined,
  ShopOutlined,
} from "@ant-design/icons";
const query = "(max-width: 850px)";

const MenuLayout = () => {
  const { Link } = Typography;
  const isResponsive = useMediaQuery({ query: query });
  return (
    <div className="Menu_container">
      <div className="Menu_brand_container">
        <img className="brandLogo" src={PochosLogo} alt="" />
      </div>
      {isResponsive ? <MenuResponsive /> : <Menu />}
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

export default MenuLayout;
