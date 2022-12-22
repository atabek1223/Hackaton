import React from "react";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../components/Crud/AddProduct/AddProduct";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="add/" element={<AddProduct />} />
    </Routes>
  );
};

export default MyRoutes;
