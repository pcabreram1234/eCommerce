import React from "react";
import eCommerceJson from "../json/e-Commerce.json";
import { Layout, Typography, Carousel } from "antd";
import "../styles/PublicitySlider.css";

const PublicitySlider = () => {
  const { Footer } = Layout;
  const { Text } = Typography;

  const children = eCommerceJson.Publicity.map((item) => {
    return (
      <div className="footerItem" key={Math.random() * 0.451}>
        <Text>{item.text}</Text>
        <img src={item.image} alt={item.image} />
      </div>
    );
  });

  return (
    <div className="PublicitySLider_container">
      <Layout>
        <Footer>
          <Carousel autoplay dotPosition="top">
            {children}
          </Carousel>
        </Footer>
      </Layout>
    </div>
  );
};

export default PublicitySlider;
