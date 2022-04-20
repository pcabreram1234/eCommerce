import React from "react";
import { Button } from "antd";
import SupportButtonIcon from "../assets/static/Icons/Online service.png";

const SupportButton = () => {
  return (
    <Button type="default">
      <img src={SupportButtonIcon} alt="SupportButtonIcon" />
      <div className="Button_letters">
        <span className="title">99% Customer</span>
        <span className="description">Feedbacks</span>
      </div>
    </Button>
  );
};

export default SupportButton;
