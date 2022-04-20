import React from "react";
import LikeButton from "./LikeButton";
import { Divider, Typography } from "antd";
import AddToCartButton from "./AddToCartButton";
import "../styles/Card.css";

const Card = (props) => {
  const { Text } = Typography;

  return (
    <div className="card">
      <div className="card_title_container">
        <h2>{props.title}</h2>
      </div>
      <div className="card_img_container">
        <img src={props.img} alt="" />
      </div>

      {props.aditionalInfo && (
        <div className="AditionalInfo">
          <Text type="secondary">{props.description}</Text>
          <div className="price_info">
            <Text type="success">US$ {props.price} </Text>
            <Text> %{props.discountPercentage} </Text>
          </div>
          <Divider />
          <div className="footer_container">
            <LikeButton />
            <AddToCartButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
