import React from "react";
import Layout from "../components/layout";
import HeaderBanner from "../components/headerBanner";
import PopularStores from "../components/popularStores";
import CouponOffers from "../components/couponOffers";
import TrendCategories from "../components/trendCategories";
import NewsLetter from "../components/newsLetter";
import OurCustomers from "../components/ourCustomers";

const HomePage = () => {
  return (
    <Layout>
      <HeaderBanner />
      <PopularStores />
      <CouponOffers />
      <TrendCategories />
      <NewsLetter />
      <OurCustomers />
    </Layout>
  );
};

export default HomePage;
