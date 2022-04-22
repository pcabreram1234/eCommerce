import React from "react";
import eCommerceJson from "../json/e-Commerce.json";
import { Carousel } from "antd";
import BuyButton from "./BuyButton";
import ShopButton from "./ShopButton";
import CustomerButton from "./CustomerButton";
import PaymentButton from "../components/PaymentButton";
import SupportButton from "./SupportButton";
import "../styles/MainPicture.css";

const MainPicture = () => {
  return (
    <div className="MainPicture_container">
      <div className="Carousel_container">
        <Carousel arrows={true} /* autoplay */ dots dotPosition="bottom">
          {eCommerceJson.Products.map((Product) => {
            return (
              <div className="Product_container" key={Math.random() * 0.3}>
                <div className="Product_Image_container">
                  <img src={Product.image} />
                </div>
                <div className="Product_info">
                  <h3>{Product.title}</h3>
                  <p>{Product.description}</p>
                  <BuyButton />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className="ActionsButtons_container">
        <ShopButton />
        <CustomerButton />
        <PaymentButton />
        <SupportButton />
      </div>
    </div>
  );
};

export default MainPicture;
