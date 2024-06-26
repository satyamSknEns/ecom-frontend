import React from "react";
import Layout from "../components/layout";
import CouponOffers from "../components/couponOffers";
import NewsLetter from "../components/newsLetter";
import Collection from "../components/collection";

const CollectionPage = () => {
  return (
    <Layout>
      <Collection />
      <CouponOffers />
      <NewsLetter />
    </Layout>
  );
};

export default CollectionPage;
