import React from "react";
import { Link } from "react-router-dom";
import eCommerceJson from "../json/e-Commerce.json";
import { Menu } from "antd";
import "../styles/Categories.css"

const Categories = () => {
  return (
    <div className="Categories_container">
      <Menu mode="horizontal">
        {eCommerceJson.Categories.map((category) => {
          return (
            <Menu.Item key={Math.random() * 0.5}>
              <Link key={Math.random() * 0.2} to={`/${category}`}>
                {category}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
};
export default Categories;
