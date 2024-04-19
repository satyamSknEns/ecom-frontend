import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import CollectionPage from "../pages/collection";

const RoutePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;
