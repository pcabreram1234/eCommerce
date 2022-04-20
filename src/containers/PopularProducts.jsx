import React from "react";
import eCommerceJson from "../json/e-Commerce.json";
import { Button } from "antd";
import "../styles/PopularProducts.css";
import { ShoppingFilled } from "@ant-design/icons";
const PopularProducts = () => {
  return (
    <div className="PopularProducts_container">
      {eCommerceJson.Products.map((Product, index) => {
        if (index < 3) {
          return (
            <div className="PopularProduct_container" key={Math.random() * 0.7}>
              <div className="Aside">
                <span>{Product.title}</span>
                <Button type="primary" shape="round" icon={<ShoppingFilled />}>
                  Buy now
                </Button>
              </div>
              <div className="Aside-right">
                <img src={Product.image} alt="" />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default PopularProducts;
