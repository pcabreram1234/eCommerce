import React from "react";
import { Button } from "antd";
import ShippedIcon from "../assets/static/Icons/Shipped.png";
import "../styles/ActionsButtons.css";

const ShopButton = () => {
  return (
    <Button type="default">
      <img src={ShippedIcon} alt="ShippedIcon" />
      <div className="Button_letters">
        <span className="title">World</span>
        <span className="description">Shopping</span>
      </div>
    </Button>
  );
};

export default ShopButton;
