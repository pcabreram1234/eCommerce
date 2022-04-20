import React from "react";
import newArrivalsJson from "../json/e-Commerce.json";
import Card from "../components/Card";
import "../styles/TrendingProducts.css";
import { Typography } from "antd";

const TrendingProducts = () => {
  const { Text, Link } = Typography;
  return (
    <div className="Trending_products_container">
      <div className="Trending_products__text">
        <Text type="secondary" strong>
          Trending Products
        </Text>
        <Link>Show More</Link>
      </div>

      <div className="Trending_products">
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

export default TrendingProducts;
