import React from "react";
import CustomerIcon from "../assets/static/Icons/Testimonial_3.png";
import { Button } from "antd";

const CustomerButton = () => {
  return (
    <Button type="default">
      <img src={CustomerIcon} alt="CustomerIcon" />
      <div className="Button_letters">
        <span className="title">99% Customer</span>
        <span className="description">Feedbacks</span>
      </div>
    </Button>
  );
};

export default CustomerButton;
