import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import CollectionPage from "../pages/collection";
import ProductPage from "../pages/product";

const RoutePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/collections/:collection-title" element={<CollectionPage />} />
        <Route path="/:collections/:collection-title/products/:product-title" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;
