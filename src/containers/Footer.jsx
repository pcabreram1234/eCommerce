import React from "react";
import AppLogo from "../assets/static/logos/PochosLogo.png";
import {
  PhoneFilled,
  MessageFilled,
  EnvironmentFilled,
} from "@ant-design/icons";
import SuscribeInput from "../components/SuscribeInput";
import Contacts from "../components/Contacts";
import { Typography } from "antd";
import "../styles/Footer.css";

const Footer = () => {
  const { Text, Title } = Typography;
  return (
    <div className="Footer_container">
      <div className="other_informations_container">
        <div className="Footer_col">
          <div className="footer_row">
            <img src={AppLogo} alt={AppLogo} />
          </div>
          <div className="footer_row">
            <PhoneFilled />
            <Text type="secondary">+994 51 234 56 78</Text>
          </div>
          <div className="footer_row">
            <MessageFilled />
            <Text type="secondary">info@pochostore.com</Text>
          </div>
          <div className="footer_row">
            <EnvironmentFilled />
            <Text type="secondary">One wao Ave 31, NYC, USA</Text>
          </div>
        </div>

        <div className="Footer_col">
          <div className="footer_row">
            <Title type="secondary">How to Buy</Title>
          </div>
          <div className="footer_row">
            <Text type="secondary">Making Payment</Text>
          </div>
          <div className="footer_row">
            <Text type="secondary">Delivery Options</Text>
          </div>
          <div className="footer_row">
            <Text type="secondary">Buyer Protection</Text>
          </div>
        </div>

        <div className="Footer_col">
          <div className="footer_row">
            <Title type="secondary">Customer Service</Title>
          </div>
          <div className="footer_row">
            <Text type="secondary">Making Payment</Text>
          </div>
          <div className="footer_row">
            <Text type="secondary">Delivery Options</Text>
          </div>
          <div className="footer_row">
            <Text type="secondary">Buyer Protection</Text>
          </div>
        </div>

        <div className="Footer_col">
          <div className="footer_row">
            <Title type="secondary">Quick links</Title>
          </div>
          <div className="footer_row">
            <Text type="secondary">Campaigns</Text>
          </div>
          <div className="footer_row">
            <Text type="secondary">Blog</Text>
          </div>
          <div className="footer_row">
            <Text type="secondary">FAQ</Text>
          </div>
        </div>
      </div>

      <SuscribeInput />
      <Contacts />
    </div>
  );
};

export default Footer;
