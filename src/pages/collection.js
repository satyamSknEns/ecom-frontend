import React from "react";
import Layout from "../components/layout";
import HeaderBanner from "../components/headerBanner";
import PopularStores from "../components/popularStores";
import CouponOffers from "../components/couponOffers";
import NewsLetter from "../components/newsLetter";
import Collection from "../components/collection";

const CollectionPage = () => {
  return (
    <Layout>
      <HeaderBanner />
      <PopularStores />
      <CouponOffers />
      <NewsLetter />
      <Collection />
    </Layout>
  );
};

export default CollectionPage;
