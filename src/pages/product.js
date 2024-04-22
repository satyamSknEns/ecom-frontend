import React from "react";
import Layout from "../components/layout";
import CouponOffers from "../components/couponOffers";
import NewsLetter from "../components/newsLetter";
import Breadcrumb from "../components/breadCrumb";
import Product from "../components/product";

const CollectionPage = () => {
  return (
    <Layout>
      <Breadcrumb />
      <Product />
      <CouponOffers />
      <NewsLetter />
    </Layout>
  );
};

export default CollectionPage;
