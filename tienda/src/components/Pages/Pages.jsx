import React from "react";
import { Routes, Route } from "react-router-dom";
import Init from "../Init/Init";
import Products from "../Products/Products";
import ProdcutDetails from "../Products/ProdcutDetails";

const Pages = () => {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Init></Init>} />
        <Route path='/Products' element={<Products></Products>} />
        <Route
          path='/Product/:id'
          element={<ProdcutDetails></ProdcutDetails>}
        />
      </Routes>
    </section>
  );
};

export default Pages;
