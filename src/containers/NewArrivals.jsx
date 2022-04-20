import React from "react";
import Card from "../components/Card";
import { Typography } from "antd";
import newArrivalsJson from "../json/e-Commerce.json";
import "../styles/NewArrivals.css";

const NewArrivals = () => {
  const { Text, Link } = Typography;
  return (
    <div className="NewArrivals__container">
      <div className="NewArrivals__text">
        <Text type="secondary" strong>
          New Arrivals
        </Text>
        <Link>Show More</Link>
      </div>

      <div className="NewArrivasl_Products">
        {newArrivalsJson["New Arrivals"].products.map((product, index) => {
          if (index < 3) {
            return (
              <Card
                title={product.title}
                img={product.images[0]}
                aditionalInfo={true}
                description={product.description}
                price={product.price}
                discountPercentage={product.discountPercentage}
                key={Math.random() * 0.3}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default NewArrivals;
