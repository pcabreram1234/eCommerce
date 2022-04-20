import React from "react";
import PaymentIcon from "../assets/static/Icons/Check.png";
import { Button } from "antd";

const PaymentButton = () => {
  return (
    <Button type="default">
      <img src={PaymentIcon} alt="PaymentIcon" />
      <div className="Button_letters">
        <span className="title">Payment</span>
        <span className="description">Secured system</span>
      </div>
    </Button>
  );
};

export default PaymentButton;
