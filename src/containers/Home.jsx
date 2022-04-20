import React from "react";
import Categories from "../components/Categories";
import MainPicture from "../components/MainPicture";
import NewArrivals from "../containers/NewArrivals";
import PopularProducts from "./PopularProducts";
import TrendingProducts from "./TrendingProducts";
import PublicitySlider from "../components/PublicitySlider";
import BrandFooter from "../components/BrandFooter";
import Footer from "../containers/Footer";
import { Divider } from "antd";

const Home = () => {
  return (
    <div className="Home">
      <Categories />
      <MainPicture />
      <Divider />
      <NewArrivals />
      <Divider />
      <PopularProducts />
      <Divider />
      <TrendingProducts />
      <PublicitySlider />
      <BrandFooter />
      <Footer />
    </div>
  );
};

export default Home;
